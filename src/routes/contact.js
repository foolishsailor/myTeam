import React from "react";
import Section from "../components/section";
import Card from "../components/cards/card";
import List from "../components/list";

import talent from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";

const list = [
  { image: talent, text: "The quality of our talent network" },
  { image: cog, text: "Usage & implementation of our software" },
  { image: chart, text: "How we help drive innovation" },
];

const Contact = () => {
  return (
    <Section>
      <Card inline>
        <h1>Contact</h1>
        <h2 className='small text---highlight'>Ask us about</h2>
        <List list={list} />
      </Card>
      <Card>Form</Card>
    </Section>
  );
};

export default Contact;
