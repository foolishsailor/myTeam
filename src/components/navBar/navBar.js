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
  margin: 70px 165px 0 165px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: ${({ theme }) => theme.layout.marginWidth.tablet};
    margin-left: ${({ theme }) => theme.layout.marginWidth.tablet};
    margin-top: 70px;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-right: ${({ theme }) => theme.layout.marginWidth.mobile};
    margin-left: ${({ theme }) => theme.layout.marginWidth.mobile};
    margin-top: 70px;
    margin-bottom: 0;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <Nav inline />
      <StyledLink to='/contact'>
        <StyledButton>contact us</StyledButton>
      </StyledLink>
    </Container>
  );
};

export default NavBar;
