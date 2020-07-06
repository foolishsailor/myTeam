import React from "react";
import styled from "styled-components";
import Section from "../components/section";
import HeaderCard from "../components/cards/headerCard";
import List from "../components/list";
import ContactForm from "../components/contactForm";

import talent from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";

const list = [
  { image: talent, title: "The quality of our talent network" },
  { image: cog, title: "Usage & implementation of our software" },
  { image: chart, title: "How we help drive innovation" },
];

const StyledH2 = styled.h2`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.font.h2.small.fontSize};
  line-height: ${({ theme }) => theme.font.h2.small.lineHeight};
  color: ${({ theme }) => theme.font.text___highlight};
`;

const Contact = () => {
  return (
    <Section inline>
      <HeaderCard inline>
        <h1>Contact</h1>
        <StyledH2>Ask us about</StyledH2>
        <List list={list} />
      </HeaderCard>

      <HeaderCard inline>
        <ContactForm />
      </HeaderCard>
    </Section>
  );
};

export default Contact;
