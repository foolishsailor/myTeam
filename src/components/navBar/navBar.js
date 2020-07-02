import React from "react";
import Nav from "../nav";
import {
  StyledButton,
  StyledLink,
  Hamburger,
  StyledInput,
  StyledSpan,
  Container,
} from "./navBarStyles";

const NavBar = () => {
  const handleChange = (props) => {
    const mainContainer = document.getElementById("content");
    const sideMenu = document.getElementById("sidemenu");

    props.target.checked
      ? (sideMenu.style.transform = "translateX(-255px)")
      : (sideMenu.style.transform = "translateX(0)");

    props.target.checked
      ? (mainContainer.style.height = "100vh")
      : (mainContainer.style.height = "inherit");
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
