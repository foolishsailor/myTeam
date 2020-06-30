import React from "react";
import {
  StyledCard,
  StyledH1,
  StyledContent,
  StyledLeftIcon,
  StyledBottomIcon,
} from "./homeStyles";
import Section from "../../components/section";
import Card from "../../components/cards/card";
import Bottom from "../../components/bottom";

const Home = () => {
  return (
    <>
      <Section large inline>
        <StyledCard>
          <StyledH1>
            Find the best <span className='text---highlight'>talent</span>
          </StyledH1>
        </StyledCard>
        <Card highlight='primary'>
          <StyledContent>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </StyledContent>
        </Card>
        <StyledLeftIcon />
        <StyledBottomIcon />
      </Section>
      <Bottom />
    </>
  );
};

export default Home;
