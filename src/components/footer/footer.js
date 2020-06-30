import React from "react";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import {
  BottomContainer,
  StyledNav,
  AddressDiv,
  SocialDiv,
  SocialImageList,
  SocialImage,
  CopyrightDiv,
} from "./footerStyles";

const imageList = [
  { link: "", url: facebookIcon, alt: "Facebook" },
  { link: "", url: twitterIcon, alt: "Twitter" },
  { link: "", url: pinterest, alt: "Pinterest" },
];

const SocialImages = imageList.map((item, i) => {
  return (
    <Link key={i} to={item.link} style={{ marginRight: 16 }}>
      <SocialImage type='image/svg+xml' width={24} height={24} data={item.url}>
        {item.alt}
      </SocialImage>
    </Link>
  );
});

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
          <SocialImageList>{SocialImages}</SocialImageList>
        </SocialDiv>
        <CopyrightDiv className='text---small'>
          Copyright 2020, All Rights Reserved
        </CopyrightDiv>
      </BottomContainer>
    </>
  );
};

export default Footer;
