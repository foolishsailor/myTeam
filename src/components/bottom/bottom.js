import React from "react";
import styled from "styled-components";
import Button from "../button";
import Section from "../section";
import backgroundImage from "../../assets/bg-pattern-home-6-about-5.svg";

const TopContainer = styled(Section)`
  align-items: center;
  justify-content: space-between;
  padding: 76px 245px;
  background-color: ${({ theme }) => theme.colors.lightCoral};
  color: ${({ theme }) => theme.colors.sacStateGreen};

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 144px;
    background-image: url(${backgroundImage});
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 24px;
`;

const Bottom = () => {
  return (
    <TopContainer inline>
      <StyledH2>Ready to get started?</StyledH2>
      <Button variant='sacStateGreen'>contact us</Button>
    </TopContainer>
  );
};

export default Bottom;
