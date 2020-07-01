import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../nav";
import Button from "../button";

const StyledButton = styled(Button)`
  align-self: "flex-end";
`;

const StyledLink = styled(Link)`
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 70px;
  padding-right: ${({ theme }) => theme.layout.paddingWidth.desktop};
  padding-left: ${({ theme }) => theme.layout.paddingWidth.desktop};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-top: 70px;
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-top: 70px;
    padding-bottom: 0;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Nav inline header={"true"} />
      <StyledLink to='/contact'>
        <StyledButton>contact us</StyledButton>
      </StyledLink>
    </Container>
  );
};

export default NavBar;
