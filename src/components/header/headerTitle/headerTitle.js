import React from "react";
import styled from "styled-components";

const StyledHeaderTitle = styled.div`
  position: relative;
  ${({ large }) => (large ? "flex: 1;" : "")}
  padding-right: 100px;
  align-self: baseline;
`;

const HeaderTitle = ({ large, children, ...props }) => {
  return <StyledHeaderTitle large={large}>{children}</StyledHeaderTitle>;
};

export default HeaderTitle;
