import React from "react";
import styled from "styled-components";

const StyledHeaderTitle = styled.div``;

const Header__Title = ({ children, ...props }) => {
  return <StyledHeaderTitle>{children}</StyledHeaderTitle>;
};

export default Header__Title;
