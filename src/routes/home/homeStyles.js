import styled from "styled-components";
import Section from "../../components/section";
import CardContainer from "../../components/containers/cardContainer";
import HeaderCard from "../../components/cards/headerCard";
import CardTitle from "../../components/cards/headerCard/cardTitle";
import BackgroundImage from "../../components/backgroundImage";

const StyledCardContainer = styled(CardContainer)`
  margin-top: 60px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-template-columns: 1fr;
    grid-gap-column: 24px;
  }
`;

const StyledCard = styled(HeaderCard)`
  margin-right: 140px;
`;

const StyledHeader = styled(Section)`
  padding-bottom: 250px !important;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-bottom: 200px !important;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 52px;
  margin-right: 50px;
  margin-bottom: 64px;
`;

const StyledBottomH2 = styled.h2`
  text-align: center;
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.raptureBlue};
`;

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.font.text___highlight};
`;

const TopSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.sacStateGreen};
`;

const BottomSection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.deepJungleGreen};
`;

const StyledCardTitle = styled(CardTitle)`
  @media (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: ${({ theme }) => theme.font.h1.large.fontSize};
    line-height: ${({ theme }) => theme.font.h1.large.lineHeight};
  }
`;

const TopSectionIcon = styled(BackgroundImage)`
  position: absolute;
  right: -100px;
  bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    right: -100px;
    top: 0;
  }
`;

const StyledBottomIcon = styled(BackgroundImage)`
  position: absolute;
  right: ${({ theme }) => theme.layout.paddingWidth.desktop};
  bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    right: calc(50% - 178px);
  }
`;

export {
  StyledCardContainer,
  StyledCard,
  StyledHeader,
  TopSection,
  BottomSection,
  StyledCardTitle,
  StyledBottomIcon,
  TopSectionIcon,
  StyledH2,
  StyledBottomH2,
  StyledSpan,
  HighlightSpan,
};
