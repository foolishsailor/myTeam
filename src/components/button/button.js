import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 1px
    ${({ theme, variant }) =>
      variant ? theme.colors[variant] : theme.colors.white};
  border-radius: 50px;
  background-color: transparent;
  color: ${({ theme, variant }) =>
    variant ? theme.colors[variant] : theme.colors.white};
  padding: 15px 30px;
`;

const Button = ({ active, outline, variant, children, theme, ...props }) => {
  return (
    <StyledButton active={active} variant={variant} outline={outline}>
      {children}
    </StyledButton>
  );
};

export default Button;
