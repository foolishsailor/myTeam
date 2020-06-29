import React from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import facebookIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import {
  BottomContainer,
  AddressDiv,
  SocialDiv,
  SocialImageList,
  SocialImage,
} from "./footerStyles";

const imageList = [
  { link: "", url: facebookIcon, alt: "Facebook" },
  { link: "", url: twitterIcon, alt: "Twitter" },
  { link: "", url: pinterest, alt: "Pinterest" },
];

const SocialImages = imageList.map((item, i) => {
  return (
    <Link to={item.link} style={{ marginRight: 16 }}>
      <SocialImage
        type='image/svg+xml'
        key={i}
        width={24}
        height={24}
        data={item.url}
      >
        {item.alt}
      </SocialImage>
    </Link>
  );
});

const Footer = ({ theme, ...props }) => {
  console.log("trigger");
  return (
    <>
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
