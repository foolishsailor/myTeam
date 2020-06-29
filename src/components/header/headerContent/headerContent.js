import React from "react";
import styled from "styled-components";

const StyledHeaderContent = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
`;

const StyledBorderDiv = styled.div`
  position: relative;
  width: 0;
  height: 0;
  align-self: flex-start;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 50px;
    background-color: ${({ theme, highlight }) =>
      highlight
        ? highlight === "primary"
          ? theme.colors.secondary.raptureBlue
          : theme.colors.primary.lightCoral
        : "transparent"};
  }
`;

const StyledP = styled.p`
  margin: 0;
  margin-top: 40px;
`;

const Header__Content = ({ children, highlight, theme, ...props }) => {
  console.log("highlight", highlight, highlight ? "ture" : "false");
  return (
    <>
      <StyledBorderDiv highlight={highlight} />
      <StyledHeaderContent>
        <StyledP>{children}</StyledP>
      </StyledHeaderContent>
    </>
  );
};

export default Header__Content;
