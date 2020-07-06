import React, { useRef, useState } from "react";
import StyledForm from "../components/form";
import Button from "../components/button";
import InputGroup from "../components/InputGroup";

const ContactForm = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    inputItems.forEach((item, i) => {
      if (item.props.errorMessage) {
        console.log("name", item);
        const value = formRef.current[item.props.name].value;
      }
    });
  };

  const inputItems = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      errorMessage: "This field is required",
      validation: (value) => value.length < 1,
    },
    {
      name: "email",
      placeholder: "Email",
      type: "text",
      errorMessage: "This field is required",
      validation: (value) => value.length < 1,
    },
    {
      name: "company",
      placeholder: "Company",
      type: "text",
    },
    {
      name: "title",
      placeholder: "Title",
      type: "text",
    },
  ].map((item, i) => {
    return (
      <InputGroup
        key={i}
        name={item.name}
        type={item.type}
        placeholder={item.placeholder}
        errorMessage={item.errorMessage || null}
        validation={item.validation || null}
      />
    );
  });

  return (
    <>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        {inputItems}
        <textarea rows='4' type='text' name='message' placeholder='Message' />
        <Button type='submit'>Submit</Button>
      </StyledForm>
    </>
  );
};

export default ContactForm;
