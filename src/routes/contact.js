import React from "react";
import styled from "styled-components";
import Header from "../components/header";

const Title = () => {
  return (
    <>
      <h1>Contact</h1>
      <h2 className='text---highlight'>Ask us about</h2>
    </>
  );
};

const Contact = () => {
  return <Header title={<Title />}></Header>;
};

export default Contact;
