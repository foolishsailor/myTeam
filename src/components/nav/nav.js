import React from "react";
import myTeamLogo from "../../assets/logo.svg";
import BackgroundImage from "../backgroundImage";
import {
  Container,
  LogoLink,
  NavList,
  NavItems,
  StyledNavLink,
} from "./navStyles";

const nav = ({ inline, header }) => {
  return (
    <Container inline={inline}>
      <LogoLink header={header} to='/'>
        <BackgroundImage width={160} height={40} url={myTeamLogo} />
      </LogoLink>

      <NavList header={header}>
        <NavItems>
          <StyledNavLink exact to='/'>
            home
          </StyledNavLink>
        </NavItems>
        <NavItems>
          <StyledNavLink to='/about'>about</StyledNavLink>
        </NavItems>
      </NavList>
    </Container>
  );
};

export default nav;
