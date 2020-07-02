import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../nav";
import Button from "../button";
import hamburger from "../../assets/icon-hamburger.svg";
import cross from "../../assets/icon-cross.svg";

const StyledButton = styled(Button)`
  align-self: "flex-end";
`;

const StyledLink = styled(Link)`
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: none;
  }
`;

const Hamburger = styled.label`
  position: relative;
  display: none;
  width: 60px;
  height: 60px;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: block;
  }
`;

const StyledInput = styled.input`
  width: 0px;
  height: 0px;

  &:checked + span {
    filter: brightness(100000%);
    transform: rotate(135deg);
    background-image: url(${cross});
  }

  &:checked #main {
    transform: translateX(255px);
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${hamburger});
  background-repeat: no-repeat;
  background-position: center center;
  transition: transform 200ms, background-image 160ms 0ms;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  padding-right: ${({ theme }) => theme.layout.paddingWidth.desktop};
  padding-left: ${({ theme }) => theme.layout.paddingWidth.desktop};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-bottom: 0;
  }
`;

const NavBar = () => {
  const handleChange = (props) => {
    const mainContainer = document.getElementById("content");
    const sideMenu = document.getElementById("sidemenu");

    props.target.checked
      ? (sideMenu.style.transform = "translateX(-255px)")
      : (sideMenu.style.transform = "translateX(0)");

    props.target.checked
      ? (mainContainer.style.position = "fixed")
      : (mainContainer.style.position = "static");
  };

  return (
    <Container>
      <Nav inline header={"true"} />
      <StyledLink to='/contact'>
        <StyledButton>contact us</StyledButton>
      </StyledLink>
      <Hamburger>
        <StyledInput onChange={handleChange} id='hamburger' type='checkbox' />
        <StyledSpan />
      </Hamburger>
    </Container>
  );
};

export default NavBar;
