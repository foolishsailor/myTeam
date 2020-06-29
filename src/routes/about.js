import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import Card from "../components/cards/card";
import rightIcon from "../assets/bg-pattern-about-1-mobile-nav-1.svg";

const RightIcon = styled.div`
  position: absolute;
  right: -265px;
  bottom: 0;
  height: 200px;
  width: 200px;
  background-size: contain;
  background-image: url(${rightIcon});
`;

const StyledH1 = styled.h1`
  margin: 0;
  padding-top: 20px;
`;

const StyledHeaderContent = styled.div`
  align-self: flex-end;
  margin-top: 40px;
`;

const StyledMainTitle = styled.h2`
  width: 100%;
  text-align: center;
`;

const StyledMain = styled(Section)`
  padding: 140px 165px;
`;

const About = () => {
  return (
    <>
      <Section>
        <Card>
          <StyledH1>About</StyledH1>
        </Card>
        <Card highlight>
          <StyledHeaderContent>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </StyledHeaderContent>
        </Card>
        <RightIcon />
      </Section>
      <StyledMain variant={"deepJungleGreen"}>
        <StyledMainTitle>Meet the directors</StyledMainTitle>
      </StyledMain>
    </>
  );
};

export default About;
