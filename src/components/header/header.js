import styled from "styled-components";
import Section from "../section";

const Header = styled(Section)`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 80px 110px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 80px 24px 110px 24px;
  }
`;

export default Header;
