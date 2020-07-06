import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./button";
import Section from "./section";
import backgroundImage from "../assets/bg-pattern-home-6-about-5.svg";

const TopContainer = styled(Section)`
  align-items: center;
  padding: 76px 100px;
  background-color: ${({ theme }) => theme.colors.lightCoral};
  color: ${({ theme }) => theme.colors.sacStateGreen};
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    justify-content: center;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 144px;
    background-image: url(${backgroundImage});

    @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
      bottom: -20px;
    }
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 24px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    bottom: -20px;
    font-size: ${({ theme }) => theme.font.h2.small.fontSize};
    line-height: ${({ theme }) => theme.font.h2.small.lineHeight};
  }
`;

const Bottom = () => {
  return (
    <TopContainer inline>
      <StyledH2>Ready to get started?</StyledH2>
      <Link to='./contact'>
        <Button variant='sacStateGreen'>contact us</Button>
      </Link>
    </TopContainer>
  );
};

export default Bottom;
