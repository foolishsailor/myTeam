import React from "react";
import styled from "styled-components";
import Header from "../components/header";
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
`;

const content =
  "We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.";
const About = () => {
  return (
    <Header title={<StyledH1>About</StyledH1>} content={content} highlight>
      <RightIcon />
    </Header>
  );
};

export default About;
