import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import myTeamLogo from "../../assets/logo.svg";
import BackgroundImage from "../backgroundImage";

const Container = styled.div`
  display: flex;
  ${({ inline }) =>
    inline ? "flex-direction: row; flex: 1;" : "flex-direction: column; "};
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    align-items: ${({ header }) => (header ? "flex-start" : "center")};
  }
`;

const NavItems = styled.li`
  margin-left: 40px;
`;

const NavList = styled.ul`
  display: inline-flex;

  ${NavItems}:nth-child(1) {
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: ${({ header }) => (header ? "none" : "flex")};
  }
`;

const LogoLink = styled(Link)`
  margin-right: 80px;
  margin-bottom: ${({ header }) => (header ? 0 : "25px")};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-right: 0;
  }
`;

const nav = ({ inline, header }) => {
  return (
    <Container inline={inline}>
      <LogoLink header={header} to='/'>
        <BackgroundImage width={160} height={40} url={myTeamLogo} />
      </LogoLink>

      <NavList header={header}>
        <NavItems>
          <Link to='/'>home</Link>
        </NavItems>
        <NavItems>
          <Link to='/about'>about</Link>
        </NavItems>
      </NavList>
    </Container>
  );
};

export default nav;
