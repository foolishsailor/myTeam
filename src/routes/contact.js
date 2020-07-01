import React from "react";
import Section from "../components/section";
import HeaderCard from "../components/cards/headerCard";
import List from "../components/list";

import talent from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";

const list = [
  { image: talent, title: "The quality of our talent network" },
  { image: cog, title: "Usage & implementation of our software" },
  { image: chart, title: "How we help drive innovation" },
];

const Contact = () => {
  return (
    <Section>
      <HeaderCard inline>
        <h1>Contact</h1>
        <h2 className='small text---highlight'>Ask us about</h2>
        <List list={list} />
      </HeaderCard>
      <HeaderCard>Form</HeaderCard>
    </Section>
  );
};

export default Contact;
