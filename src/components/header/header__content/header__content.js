import React from "react";
import styled from "styled-components";

const StyledHeaderContent = styled.div``;

const Header__Content = ({ children, ...props }) => {
  return <StyledHeaderContent>{children}</StyledHeaderContent>;
};

export default Header__Content;
