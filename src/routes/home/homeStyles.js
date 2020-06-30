import styled from "styled-components";
import Card from "../../components/cards/card";
import Header from "../../components/header";
import CardTitle from "../../components/cards/card/cardTitle";
import leftIcon from "../../assets/bg-pattern-home-1.svg";
import bottomIcon from "../../assets/bg-pattern-home-2.svg";

const StyledCard = styled(Card)`
  margin-right: 140px;
`;

const StyledHeader = styled(Header)`
  padding-bottom: 250px !important;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-bottom: 200px !important;
  }
`;

const StyledCardTitle = styled(CardTitle)`
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: ${({ theme }) => theme.font.h1.large.fontSize};
    line-height: ${({ theme }) => theme.font.h1.large.lineHeight};
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
  right: ${({ theme }) => theme.layout.paddingWidth.desktop};
  bottom: 0;
  width: 358px;
  height: 100px;
  background-size: contain;
  background-image: url(${bottomIcon});

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    right: calc(50% - 178px);
  }
`;

export {
  StyledCard,
  StyledHeader,
  StyledCardTitle,
  StyledLeftIcon,
  StyledBottomIcon,
};
