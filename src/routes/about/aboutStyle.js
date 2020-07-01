import styled from "styled-components";
import Section from "../../components/section";
import Container from "../../components/containers/container";
import BackgroundImage from "../../components/backgroundImage";

const RightIcon = styled(BackgroundImage)`
  position: absolute;
  right: -100px;
  bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    right: -100px;
    bottom: -100px;
  }
`;

const DirectorContainer = styled.div`
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

const DirectorLeftIcon = styled(BackgroundImage)`
  position: absolute;
  left: -100px;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    left: -100px;
    top: -100px;
  }
`;

const DirectorsRightIcon = styled(BackgroundImage)`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ClientsLeftIcon = styled(BackgroundImage)`
  position: absolute;
  left: 0;
  top: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    top: -145px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    left: -100px;
    top: -142px;
  }
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Main = styled(Section)`
  flex-wrap: wrap;
  overflow: hidden;
`;

const ClientSection = styled(Section)`
  overflow: hidden;
`;

const ClientContainer = styled(Container)`
  justify-content: space-around;
`;

export {
  RightIcon,
  DirectorLeftIcon,
  DirectorsRightIcon,
  ClientsLeftIcon,
  Title,
  Main,
  ClientContainer,
  ClientSection,
  DirectorContainer,
};
