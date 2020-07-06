import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "./button";
import BackgroundIcon from "./backgroundIcon";
import backgroundIcon from "../assets/bg-pattern-about-1-mobile-nav-1.svg";

const StyledMain = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0);
  z-index: 1;
  transition: background-color 300ms;
`;

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
    const sidemenu__overlay = document.getElementById("sideMenu__overlay");
    const content = document.getElementById("content");
    const checkbox = document.querySelector("input[type='checkbox']");

    sideMenu.style.transform = "translateX(0)";
    sidemenu__overlay.style.backgroundColor = "rgba(0,0,0,0)";
    content.style.height = "inherit";
    checkbox.checked = false;
  };

  return (
    <>
      <StyledMain id='sideMenu__overlay'></StyledMain>
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
          src={backgroundIcon}
        />
      </StyledAside>
    </>
  );
};

export default SideMenu;
