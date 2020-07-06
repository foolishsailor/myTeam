import React, { useState } from "react";

const InputGroup = ({ name, type, placeholder, errorMessage, validation }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleFocus = () => {
    setError(false);
  };

  const handleBlur = () => {
    if (validation) {
      setError(validation(value));
    }
  };

  return (
    <>
      <input
        className={error ? "error" : ""}
        onFocus={handleFocus}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={(e) => setValue(e.target.value)}
      />
      {error ? <label htmlFor={name}>{errorMessage}</label> : null}
    </>
  );
};

export default InputGroup;
