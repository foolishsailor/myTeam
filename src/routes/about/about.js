import React from "react";
import Container from "../../components/containers/container";
import Header from "../../components/header";

import Card from "../../components/cards/card";
import CardTitle from "../../components/cards/card/cardTitle";
import CardContent from "../../components/cards/card/cardContent";
import Bottom from "../../components/bottom";
import Directors from "./directors";
import ClientList from "./clientList";
import rightIcon from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";
import directorsLeftIcon from "../../assets/bg-pattern-about-2-contact-1.svg";
import directorsRightIcon from "../../assets/bg-pattern-home-4-about-3.svg";
import clientsLeftIcon from "../../assets/bg-pattern-home-3.svg";
import {
  RightIcon,
  DirectorLeftIcon,
  DirectorsRightIcon,
  ClientsLeftIcon,
  Title,
  Main,
  ClientContainer,
  ClientSection,
} from "./aboutStyle";

const About = () => {
  return (
    <>
      <Header inline>
        <RightIcon width={200} height={200} url={rightIcon} />
        <Card style={{ flexGrow: 0.5 }}>
          <CardTitle>About</CardTitle>
        </Card>
        <Card highlight hideHighlight={"tablet"}>
          <CardContent>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </CardContent>
        </Card>
      </Header>
      <Main inline variant={"deepJungleGreen"}>
        <DirectorLeftIcon width={200} height={200} url={directorsLeftIcon} />
        <DirectorsRightIcon width={147} height={100} url={directorsRightIcon} />
        <Title>Meet the directors</Title>
        <Container inline>{Directors}</Container>
      </Main>

      <ClientSection variant={"sacStateGreen"}>
        <Title>Some of our clients</Title>
        <ClientContainer inline>
          <ClientsLeftIcon width={200} height={244} url={clientsLeftIcon} />
          {ClientList}
        </ClientContainer>
      </ClientSection>
      <Bottom />
    </>
  );
};

export default About;
