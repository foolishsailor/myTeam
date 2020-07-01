import styled from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px 30px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 80px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
  }
`;

export default CardContainer;
