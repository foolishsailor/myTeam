import React from "react";
import Nav from "../nav";
import {
  StyledButton,
  StyledLink,
  Hamburger,
  StyledInput,
  HamburgerIcon,
  CrossIcon,
  Container,
} from "./navBarStyles";

const NavBar = () => {
  const handleChange = (props) => {
    const mainContainer = document.getElementById("content");
    const sideMenu = document.getElementById("sidemenu");
    const sidemenu__overlay = document.getElementById("sideMenu__overlay");

    props.target.checked
      ? (sideMenu.style.transform = "translateX(-255px)")
      : (sideMenu.style.transform = "translateX(0)");

    props.target.checked
      ? (mainContainer.style.height = "100vh")
      : (mainContainer.style.height = "inherit");

    props.target.checked
      ? (sidemenu__overlay.style.backgroundColor = "rgba(0,0,0,0.5)")
      : (sidemenu__overlay.style.backgroundColor = "rgba(0,0,0,0)");
  };

  return (
    <Container>
      <Nav inline header={"true"} />
      <StyledLink to='/contact'>
        <StyledButton>contact us</StyledButton>
      </StyledLink>
      <Hamburger>
        <StyledInput onChange={handleChange} id='hamburger' type='checkbox' />
        <HamburgerIcon />
        <CrossIcon />
      </Hamburger>
    </Container>
  );
};

export default NavBar;
