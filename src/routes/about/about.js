import React from "react";
import Section from "../../components/section";
import CardContainer from "../../components/containers/cardContainer";
import HeaderCard from "../../components/cards/headerCard";
import CardTitle from "../../components/cards/headerCard/cardTitle";
import CardContent from "../../components/cards/headerCard/cardContent";
import Bottom from "../../components/bottom";
import BackgroundIcon from "../../components/backgroundIcon";
import Directors from "./directors";
import ClientList from "./clientList";
import rightIcon from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";
import directorsLeftIcon from "../../assets/bg-pattern-about-2-contact-1.svg";
import directorsRightIcon from "../../assets/bg-pattern-home-4-about-3.svg";
import clientsLeftIcon from "../../assets/bg-pattern-home-3.svg";
import {
  RightIcon,
  DirectorLeftIcon,
  ClientsLeftIcon,
  Title,
  Main,
  ClientContainer,
  ClientSection,
} from "./aboutStyle";

const About = () => {
  return (
    <>
      <Section inline>
        <RightIcon width={200} height={200} src={rightIcon} />
        <HeaderCard style={{ flexGrow: 0.5 }}>
          <CardTitle>About</CardTitle>
        </HeaderCard>
        <HeaderCard highlight hideHighlight={"tablet"}>
          <CardContent>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </CardContent>
        </HeaderCard>
      </Section>
      <Main inline variant={"deepJungleGreen"}>
        <DirectorLeftIcon width={200} height={200} src={directorsLeftIcon} />
        <BackgroundIcon
          width={147}
          height={100}
          right={0}
          bottom={0}
          src={directorsRightIcon}
        />
        <Title>Meet the directors</Title>
        <CardContainer>{Directors}</CardContainer>
      </Main>

      <ClientSection variant={"sacStateGreen"}>
        <Title>Some of our clients</Title>
        <ClientContainer inline>
          <ClientsLeftIcon width={200} height={244} src={clientsLeftIcon} />
          {ClientList}
        </ClientContainer>
      </ClientSection>
      <Bottom />
    </>
  );
};

export default About;
