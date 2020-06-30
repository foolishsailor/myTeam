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

const DirectorLeftIcon = styled(BackgroundImage)`
  position: absolute;
  left: -100px;
  top: 0;
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
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Main = styled(Section)`
  padding: 140px 165px;
  flex-wrap: wrap;
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
};
