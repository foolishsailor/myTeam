import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: solid 2px
    ${({ theme, variant }) =>
      variant ? theme.colors[variant] : theme.colors.white};
  border-radius: 50px;
  background-color: transparent;
  color: ${({ theme, variant }) =>
    variant ? theme.colors[variant] : theme.colors.white};
  padding: 15px 30px;
  min-width: 160px;
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme, variant }) =>
      variant ? theme.colors.sacStateGreen : theme.colors.white};

    color: ${({ theme, variant }) =>
      variant ? theme.colors.white : theme.colors.midnightGreen};
  }
`;

const Button = ({ active, outline, variant, children, theme, ...props }) => {
  return (
    <StyledButton active={active} variant={variant} outline={outline}>
      {children}
    </StyledButton>
  );
};

export default Button;
