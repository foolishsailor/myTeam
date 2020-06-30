import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import myTeamLogo from "../../assets/logo.svg";
import BackgroundImage from "../backgroundImage";

const Container = styled.div`
  display: flex;
  ${({ inline }) =>
    inline ? "flex-direction: row; flex: 1;" : "flex-direction: column; "};
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
    display: none;
  }
`;

const nav = ({ inline }) => {
  return (
    <Container inline={inline}>
      <Link
        style={{ marginRight: "80px", marginBottom: inline ? 0 : "25px" }}
        to='/'
      >
        <BackgroundImage width={160} height={40} url={myTeamLogo} />
      </Link>

      <NavList>
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
