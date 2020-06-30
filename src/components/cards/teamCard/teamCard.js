import React from "react";
import SocialImageList from "../../socialImageList";
import twitterIcon from "../../../assets/icon-twitter.svg";
import linkedInIcon from "../../../assets/icon-linkedin.svg";

import {
  DirectorImage,
  DirectorName,
  SocialImageContainer,
  JobTitle,
  Quote,
  Button,
  Container,
} from "./teamCardStyles";

const socialImages = [
  { link: "", url: twitterIcon, alt: "Twitter" },
  { link: "", url: linkedInIcon, alt: "Linked In" },
];

const TeamCard = ({ director }) => {
  return (
    <Container>
      <Button></Button>
      <DirectorImage round width={96} height={96} url={director.image} />
      <DirectorName>{director.name}</DirectorName>
      <JobTitle>{director.title}</JobTitle>
      <Quote>
        {director.quote}
        <SocialImageContainer>
          <SocialImageList list={socialImages} />
        </SocialImageContainer>
      </Quote>
    </Container>
  );
};

export default TeamCard;
