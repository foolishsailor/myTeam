import React from "react";
import Header from "../components/header";
import List from "../components/list";

import talent from "../assets/icon-person.svg";
import cog from "../assets/icon-cog.svg";
import chart from "../assets/icon-chart.svg";

const list = [
  { image: talent, text: "The quality of our talent network" },
  { image: cog, text: "Usage & implementation of our software" },
  { image: chart, text: "How we help drive innovation" },
];

const Title = () => {
  return (
    <>
      <h1>Contact</h1>
      <h2 className='small text---highlight'>Ask us about</h2>
      <List list={list} />
    </>
  );
};

const Contact = () => {
  return <Header title={<Title />}></Header>;
};

export default Contact;
