import React from "react";
import TeamCard from "../../components/cards/teamCard";
import Nikita from "../../assets/avatar-nikita.jpg";
import Christian from "../../assets/avatar-christian.jpg";
import Cruz from "../../assets/avatar-cruz.jpg";
import Drake from "../../assets/avatar-drake.jpg";
import Griffin from "../../assets/avatar-griffin.jpg";
import Aden from "../../assets/avatar-aden.jpg";

const directorList = [
  {
    name: "Nikita Marks",
    title: "Founder & CEO",
    image: Nikita,
    quote:
      "It always amazes me how much talent there is in every corner of the globe.",
  },
  {
    name: "Cristian Duncan",
    title: "Co-founder & COO",
    image: Christian,
    quote:
      "Distributed teams required unique processes. You need to approach work in a new way.",
  },
  {
    name: "Cruz Hamer",
    title: "Co-founder & CTO",
    image: Cruz,
    quote:
      "Technology is at the forefront of enabling distributed teams. That's where we come in.",
  },
  {
    name: "Drake Heaton",
    title: "Business Development Lead",
    image: Drake,
    quote:
      "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
  },

  {
    name: "Griffin Wise",
    title: "Lead Marketing",
    image: Griffin,
    quote:
      "Unique perspectives shape unique products, which is what you need to survive these days.",
  },

  {
    name: "Aden Allan",
    title: "Head of Talent",
    image: Aden,
    quote:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.“",
  },
];

const Directors = directorList.map((item, i) => {
  return (
    <TeamCard director={item} key={i}>
      item.name
    </TeamCard>
  );
});

export default Directors;
