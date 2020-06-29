import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import leftIcon from "../assets/bg-pattern-home-1.svg";
import bottomIcon from "../assets/bg-pattern-home-2.svg";

const content =
  "Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.";

const StyledH1 = styled.h1`
  margin: 0;
`;
const Title = () => {
  return (
    <StyledH1 className='large'>
      Find the best <span className='text---highlight'>talent</span>
    </StyledH1>
  );
};

const StyledLeftIcon = styled.div`
  position: absolute;
  top: 0;
  left: -265px;
  width: 200px;
  height: 200px;
  background-image: url(${leftIcon});
  background-size: contain;
`;

const StyledBottomIcon = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 358px;
  height: 100px;
  background-size: contain;
  background-image: url(${bottomIcon});
`;

const Home = () => {
  return (
    <Header large title={<Title />} content={content} highlight='primary'>
      <StyledLeftIcon />
      <StyledBottomIcon />
    </Header>
  );
};

export default Home;
