import React from "react";
import styled from "styled-components";

const StyledHeaderContent = styled.div`
  position: relative;
  display: flex;
  flex: 1 1;
  align-self: stretch;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    height: 4px;
    width: 50px;
    background-color: ${({ theme, highlight }) =>
      highlight
        ? highlight === "primary"
          ? theme.colors.raptureBlue
          : theme.colors.lightCoral
        : "transparent"};
  }
`;

const Card = ({ children, highlight, theme, style, ...props }) => {
  console.log("highlight", highlight, highlight ? "ture" : "false");
  return (
    <StyledHeaderContent style={style} highlight={highlight}>
      {children}
    </StyledHeaderContent>
  );
};

export default Card;
