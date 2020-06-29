import React from "react";
import styled from "styled-components";
import HeaderTitle from "./headerTitle";
import Card from "../cards/card";

const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
  margin: 0 165px;
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
      <Card highlight={highlight}>{content}</Card>
      {children}
    </StyledHeader>
  );
};

export default Header;
