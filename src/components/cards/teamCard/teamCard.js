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
  StyledCard,
} from "./teamCardStyles";

const socialImages = [
  { link: "", url: twitterIcon, alt: "Twitter" },
  { link: "", url: linkedInIcon, alt: "Linked In" },
];

const TeamCard = ({ director }) => {
  return (
    <StyledCard>
      <Button></Button>
      <DirectorImage round width={96} height={96} src={director.image} />
      <DirectorName>{director.name}</DirectorName>
      <JobTitle>{director.title}</JobTitle>
      <Quote>
        {director.quote}
        <SocialImageContainer>
          <SocialImageList list={socialImages} />
        </SocialImageContainer>
      </Quote>
    </StyledCard>
  );
};

export default TeamCard;
