import React from "react";
import { Link } from "react-router-dom";

import Nav from "../nav";
import Button from "../button";
import BackgroundImage from "../backgroundImage";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import {
  TopContainer,
  BottomContainer,
  AddressDiv,
  SocialDiv,
  SocialImageList,
} from "./footerStyles";

const imageList = [
  { link: "", url: facebookIcon },
  { link: "", url: twitterIcon },
  { link: "", url: pinterest },
];

const SocialImages = imageList.map((item, i) => {
  return (
    <Link to={item.link} style={{ marginRight: 16 }}>
      <BackgroundImage key={i} width={24} height={24} url={item.url} />
    </Link>
  );
});

const Footer = ({ theme, ...props }) => {
  console.log("trigger");
  return (
    <>
      <TopContainer>
        <h2>Ready to get started?</h2>
        <Button variant='sacStateGreen'>contact us</Button>
      </TopContainer>
      <BottomContainer>
        <Nav />
        <AddressDiv className='text---small'>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us: 949-833-7432
        </AddressDiv>
        <SocialDiv>
          <SocialImageList>{SocialImages}</SocialImageList>
          <span style={{ opacity: 0.6 }} className='text---small'>
            Copyright 2020, All Rights Reserved
          </span>
        </SocialDiv>
      </BottomContainer>
    </>
  );
};

export default Footer;
