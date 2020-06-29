import React from "react";
import styled from "styled-components";
import Button from "../button";
import backgroundImage from "../../assets/bg-pattern-home-6-about-5.svg";

const TopContainer = styled.div`
  position: relative;
  display: flex;
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

const Bottom = () => {
  return (
    <TopContainer>
      <h2>Ready to get started?</h2>
      <Button variant='sacStateGreen'>contact us</Button>
    </TopContainer>
  );
};

export default Bottom;
