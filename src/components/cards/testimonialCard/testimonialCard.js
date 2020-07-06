import React from "react";
import styled from "styled-components";
import Card from "../card";
import BackgroundImage from "../../backgroundImage";
import QuoteImage from "../../../assets/icon-quotes.svg";

const StyledH3 = styled.h3`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.raptureBlue};
`;

const BodySmall = styled.p`
  margin-top: 35px;
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.font.body.small.fontSize};
  line-height: ${({ theme }) => theme.font.body.small.lineHeight};
  z-index: 1;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 32px;
  font-size: 13px;
  line-height: 18px;
  font-style: italic;
`;

const Avatar = styled(BackgroundImage)`
  border: solid 2px ${({ theme }) => theme.colors.white};
`;

const QuoteIcon = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  left: calc(50% - 33px);
`;

const TestimonialCard = ({ item }) => {
  console.log("item", item);
  return (
    <Card>
      <QuoteIcon width={67} height={56} src={QuoteImage} alt='' />
      <BodySmall>{item.quote}</BodySmall>
      <StyledH3>{item.name}</StyledH3>
      <Title>{item.title}</Title>
      <Avatar round src={item.image} width={62} height={62} alt={item.name} />
    </Card>
  );
};

export default TestimonialCard;
