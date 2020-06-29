import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import myTeamLogo from "../../assets/logo.svg";

const Container = styled.div`
  display: flex;
  ${({ inline }) =>
    inline ? "flex-direction: row; flex: 1;" : "flex-direction: column;"};
`;

const Logo = styled.div`
  width: 160px;
  height: 40px;
  background-image: url(${myTeamLogo});
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 80px;
`;

const NavItems = styled.li`
  margin-left: 40px;
`;

const NavList = styled.ul`
  display: inline-flex;

  ${NavItems}:nth-child(1) {
    margin-left: 0;
  }
`;

const nav = ({ inline }) => {
  return (
    <Container inline={inline}>
      <Logo as={Link} to='/' />
      <NavList>
        <NavItems>
          <Link to='/home'>home</Link>
        </NavItems>
        <NavItems>
          <Link to='/about'>about</Link>
        </NavItems>
      </NavList>
    </Container>
  );
};

export default nav;
