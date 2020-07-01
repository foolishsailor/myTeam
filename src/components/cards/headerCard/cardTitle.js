import styled from "styled-components";

const CardTitle = styled.h1`
  margin: 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-top: 20px;
    text-align: left;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-bottom: 16px;
    font-size: ${({ theme }) => theme.font.h1.small.fontSize};
    line-height: ${({ theme }) => theme.font.h1.small.lineHeight};
  }
`;

export default CardTitle;
