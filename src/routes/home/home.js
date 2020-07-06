import React from "react";
import {
  StyledCardContainer,
  StyledCard,
  StyledHeader,
  TopSection,
  BottomSection,
  StyledBottomIcon,
  StyledCardTitle,
  TopSectionIcon,
  StyledH2,
  StyledBottomH2,
  StyledSpan,
  HighlightSpan,
} from "./homeStyles";
import HeaderCard from "../../components/cards/headerCard";
import BackgroundIcon from "../../components/backgroundIcon";
import List from "../../components/list";
import CardContent from "../../components/cards/headerCard/cardContent";
import Bottom from "../../components/bottom";

import TestimonialCard from "../../components/cards/testimonialCard";
import talent from "../../assets/icon-person.svg";
import cog from "../../assets/icon-cog.svg";
import chart from "../../assets/icon-chart.svg";

import avatarKady from "../../assets/avatar-kady.jpg";
import avatarAiysha from "../../assets/avatar-aiysha.jpg";
import avatarArthur from "../../assets/avatar-arthur.jpg";
import topSectionIcon from "../../assets/bg-pattern-home-3.svg";
import testLeftIcon from "../../assets/bg-pattern-home-4-about-3.svg";
import testRightIcon from "../../assets/bg-pattern-home-5.svg";
import leftIcon from "../../assets/bg-pattern-home-1.svg";
import bottomIcon from "../../assets/bg-pattern-home-2.svg";

const list = [
  {
    image: talent,
    title: "Experienced Individuals",
    text:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    image: cog,
    title: "Easy to Implement",
    text:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    image: chart,
    title: "Enhanced Productivity",
    text:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const testimonialContent = [
  {
    quote:
      " “The team perfectly fit the specialized skill set required.   focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    title: "Product Manager at Bookmark",
    image: avatarKady,
  },
  {
    quote:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    title: "Founder of Manage",
    image: avatarAiysha,
  },
  {
    quote:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    title: "Co-founder of MyPhysio",
    image: avatarArthur,
  },
];

const testimonials = testimonialContent.map((item, i) => {
  return <TestimonialCard item={item} key={i} />;
});

const Home = () => {
  return (
    <>
      <StyledHeader inline>
        <StyledCard>
          <StyledCardTitle>
            Find the best <HighlightSpan>talent</HighlightSpan>
          </StyledCardTitle>
        </StyledCard>
        <HeaderCard highlight='primary' hideHighlight={"tablet"}>
          <CardContent>
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </CardContent>
        </HeaderCard>
        <BackgroundIcon
          top={0}
          left={-265}
          width={200}
          height={200}
          url={leftIcon}
        />
        <StyledBottomIcon width={358} height={100} url={bottomIcon} />
      </StyledHeader>
      <TopSection inline>
        <TopSectionIcon width={200} height={244} url={topSectionIcon} />
        <HeaderCard highlight>
          <StyledH2>
            Build & manage distributed teams like no one else.
          </StyledH2>
        </HeaderCard>
        <HeaderCard>
          <List list={list} variant={"lightCoral"} />
        </HeaderCard>
      </TopSection>
      <BottomSection>
        <BackgroundIcon
          top={0}
          left={0}
          width={147}
          height={100}
          url={testLeftIcon}
        />
        <BackgroundIcon
          bottom={0}
          right={0}
          width={200}
          height={100}
          url={testRightIcon}
        />
        <StyledBottomH2>
          Delivering real results for top companies. Some of our{" "}
          <StyledSpan>success stories.</StyledSpan>
          <StyledCardContainer>{testimonials}</StyledCardContainer>
        </StyledBottomH2>
      </BottomSection>
      <Bottom />
    </>
  );
};

export default Home;
