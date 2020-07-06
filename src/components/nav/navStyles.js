import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  ${({ inline }) =>
    inline ? "flex-direction: row; flex: 1;" : "flex-direction: column; "};
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    align-items: ${({ header }) => (header ? "flex-start" : "center")};
  }
`;

export const NavItems = styled.li`
  margin-left: 40px;
`;

export const NavList = styled.ul`
  display: inline-flex;

  ${NavItems}:nth-child(1) {
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: ${({ header }) => (header ? "none" : "flex")};
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: 80px;
  margin-bottom: ${({ header }) => (header ? 0 : "25px")};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  a:active {
    color: ${({ theme }) => theme.colors.lightCoral};
  }
`;
