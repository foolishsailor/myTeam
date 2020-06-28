import React from "react";
import styled from "styled-components";
import HeaderTitle from "./headerTitle";
import HeaderContent from "./headerContent";

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
`;

const Header = ({
  theme,
  title,
  content,
  large,
  highlight,
  children,
  ...props
}) => {
  return (
    <StyledHeader large={large}>
      <HeaderTitle large={large}>{title}</HeaderTitle>
      <HeaderContent highlight={highlight}>{content}</HeaderContent>
      {children}
    </StyledHeader>
  );
};

export default Header;
