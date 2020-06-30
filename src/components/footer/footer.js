import React from "react";
import SocialImageList from "../socialImageList";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import {
  BottomContainer,
  StyledNav,
  AddressDiv,
  SocialDiv,
  SocialImageContainer,
  CopyrightDiv,
} from "./footerStyles";

const socialImages = [
  { link: "", url: facebookIcon, alt: "Facebook" },
  { link: "", url: twitterIcon, alt: "Twitter" },
  { link: "", url: pinterest, alt: "Pinterest" },
];

const Footer = ({ theme, ...props }) => {
  return (
    <>
      <BottomContainer inline>
        <StyledNav />
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
          <SocialImageContainer>
            <SocialImageList list={socialImages} />
          </SocialImageContainer>
        </SocialDiv>
        <CopyrightDiv className='text---small'>
          Copyright 2020, All Rights Reserved
        </CopyrightDiv>
      </BottomContainer>
    </>
  );
};

export default Footer;
