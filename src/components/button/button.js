import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 1px ${(props) => props.theme.colors.primary.white};
  border-radius: 50px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary.white};
  padding: 15px 30px;
`;

const Button = ({ active, outline, children, theme, ...props }) => {
  return (
    <StyledButton active={active} outline={outline}>
      {children}
    </StyledButton>
  );
};

export default Button;
