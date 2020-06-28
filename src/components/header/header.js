import React from "react";
import styled from "styled-components";
import Header__Title from "./header__title";
import Header__Content from "./header__content";

const StyledHeader = styled.div`
  padding: 40px;
  display: flex;
`;

const Header = ({ theme, title, content, children, ...props }) => {
  return (
    <StyledHeader>
      <Header__Title title={title} />
      <Header__Content content={content} />
      {children}
    </StyledHeader>
  );
};

export default Header;
