import styled from "styled-components";
import Card from "../../components/cards/card";
import leftIcon from "../../assets/bg-pattern-home-1.svg";
import bottomIcon from "../../assets/bg-pattern-home-2.svg";

const StyledCard = styled(Card)`
  margin-right: 140px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 0;
  }
`;

const StyledH1 = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.font.h1.large.fontSize};
  line-height: ${({ theme }) => theme.font.h1.large.lineHeight};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: ${({ theme }) => theme.font.h1.fontSize};
    line-height: ${({ theme }) => theme.font.h1.lineHeight};
    text-align: center;
  }
`;

const StyledContent = styled.div`
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 24px;
    text-align: center;
    font-size: ${({ theme }) => theme.font.body.small.fontSize};
    line-height: ${({ theme }) => theme.font.body.small.lineHeight};
  }
`;

const StyledLeftIcon = styled.div`
  position: absolute;
  top: 0;
  left: -265px;
  width: 200px;
  height: 200px;
  background-image: url(${leftIcon});
  background-size: contain;
`;

const StyledBottomIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 358px;
  height: 100px;
  background-size: contain;
  background-image: url(${bottomIcon});
`;

export {
  StyledCard,
  StyledH1,
  StyledContent,
  StyledLeftIcon,
  StyledBottomIcon,
};
