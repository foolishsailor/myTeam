import React from "react";
import {
  StyledCard,
  StyledHeader,
  StyledCardTitle,
  StyledLeftIcon,
  StyledBottomIcon,
} from "./homeStyles";
import Card from "../../components/cards/card";
import CardContent from "../../components/cards/card/cardContent";
import Bottom from "../../components/bottom";

const Home = () => {
  return (
    <>
      <StyledHeader inline>
        <StyledCard>
          <StyledCardTitle>
            Find the best <span className='text---highlight'>talent</span>
          </StyledCardTitle>
        </StyledCard>
        <Card highlight='primary'>
          <CardContent>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </CardContent>
        </Card>
        <StyledLeftIcon />
        <StyledBottomIcon />
      </StyledHeader>
      <Bottom />
    </>
  );
};

export default Home;
