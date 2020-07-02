import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../button";
import BackgroundIcon from "../backgroundIcon";
import backgroundIcon from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";

const StyledAside = styled.aside`
  position: fixed;
  display: none;
  flex-direction: column;
  box-sizing: border-box;
  right: -255px;
  top: 0px;
  width: 255px;
  height: 100vh;
  padding: 110px 50px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.policeBlue};
  transition: transform 300ms ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
  }
`;

const StyledNavLink = styled(NavLink)`
  margin: 20px 0;
  a:active {
    color: ${({ theme }) => theme.colors.lightCoral};
  }
`;

const SideMenu = () => {
  const clickHandler = () => {
    const sideMenu = document.getElementById("sidemenu");
    const content = document.getElementById("content");
    const checkbox = document.querySelector("input[type='checkbox']");

    sideMenu.style.transform = "translateX(0)";
    content.style.position = "static";
    checkbox.checked = false;
  };

  return (
    <StyledAside onClick={clickHandler} id='sidemenu'>
      <StyledNavLink exact to='/'>
        home
      </StyledNavLink>
      <StyledNavLink to='/about'>about</StyledNavLink>
      <StyledNavLink to='/contact'>
        <Button>contact us</Button>
      </StyledNavLink>
      <BackgroundIcon
        bottom={0}
        right={-100}
        width={200}
        height={200}
        url={backgroundIcon}
      />
    </StyledAside>
  );
};

export default SideMenu;
