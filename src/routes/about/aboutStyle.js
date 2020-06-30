import styled from "styled-components";
import Section from "../../components/section";
import Container from "../../components/containers/container";
import BackgroundImage from "../../components/backgroundImage";

const RightIcon = styled(BackgroundImage)`
  position: absolute;
  right: -100px;
  bottom: 0;
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

const HeaderTitle = styled.h1`
  margin: 0;
  padding-top: 20px;
`;

const HeaderContent = styled.div`
  align-self: flex-end;
  margin-top: 40px;
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
  justify-content: center;
`;

export {
  RightIcon,
  DirectorLeftIcon,
  DirectorsRightIcon,
  ClientsLeftIcon,
  HeaderTitle,
  HeaderContent,
  Title,
  Main,
  ClientContainer,
};
