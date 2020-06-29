import React from "react";
import Nav from "../nav";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 48px 165px;
  background-color: ${({ theme }) => theme.colors.secondary.darkGreen};
`;

const AddressDiv = styled.div`
  opacity: 0.6;
  flex: 1;
`;

const SocialDiv = styled.div`
  align-self: flex-end;
  opacity: 0.6;
`;

const imageList = [{ link: "", image: "" }];

const SocialImages = imageList.map((item, i) => {
  return <div></div>;
});

const Footer = ({ theme, ...props }) => {
  return (
    <Container>
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
        <p className='text---small'>Copyright 2020, All Rights Reserved</p>
      </SocialDiv>
    </Container>
  );
};

export default Footer;
