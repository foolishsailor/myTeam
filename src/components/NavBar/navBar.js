import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import myTeamLogo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <Container>
      <Logo as={Link} to='/' />
      <Nav>
        <NavItems>
          <Link to='/home'>home</Link>
        </NavItems>
        <NavItems>
          <Link to='/about'>about</Link>
        </NavItems>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 165px;
  width: 100%;
`;

const Logo = styled.div`
  width: 160px;
  height: 40px;
  background-image: url(${myTeamLogo});
`;

const NavItems = styled.li`
  margin-left: 40px;
`;

const Nav = styled.ul`
  display: inline-flex;
  margin-left: 80px;
  ${NavItems}:nth-child(1) {
    margin-left: 0;
  }
`;

export default NavBar;
