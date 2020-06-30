import React from "react";
import {
  StyledCard,
  StyledHeader,
  TopSection,
  StyledCardTitle,
  StyledLeftIcon,
  StyledBottomIcon,
  StyledH2,
} from "./homeStyles";
import Card from "../../components/cards/card";
import List from "../../components/list";

import CardContent from "../../components/cards/card/cardContent";
import Bottom from "../../components/bottom";

import talent from "../../assets/icon-person.svg";
import cog from "../../assets/icon-cog.svg";
import chart from "../../assets/icon-chart.svg";

const list = [
  {
    image: talent,
    title: "Experienced Individuals",
    text:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    image: cog,
    title: "Easy to Implement",
    text:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    image: chart,
    title: "Enhanced Productivity",
    text:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const Home = () => {
  return (
    <>
      <StyledHeader inline>
        <StyledCard>
          <StyledCardTitle>
            Find the best <span className='text---highlight'>talent</span>
          </StyledCardTitle>
        </StyledCard>
        <Card highlight='primary' hideHighlight={"tablet"}>
          <CardContent>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </CardContent>
        </Card>
        <StyledLeftIcon />
        <StyledBottomIcon />
      </StyledHeader>
      <TopSection inline>
        <Card highlight>
          <StyledH2>
            Build & manage distributed teams like no one else.
          </StyledH2>
        </Card>
        <Card>
          <List list={list} variant={"lightCoral"} />
        </Card>
      </TopSection>
      <Bottom />
    </>
  );
};

export default Home;
