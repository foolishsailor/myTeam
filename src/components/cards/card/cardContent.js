import styled from "styled-components";

const CardContent = styled.div`
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 24px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.body.small.fontSize};
    line-height: 28px;
  }
`;

export default CardContent;
