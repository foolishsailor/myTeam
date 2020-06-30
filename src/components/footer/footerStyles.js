import styled from "styled-components";
import Section from "../section";
import Nav from "../nav";

const BottomContainer = styled(Section)`
  display: grid;
  grid-template-areas:
    "nav address social"
    "nav address copyright";
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  padding: 48px 165px;
  background-color: ${({ theme }) => theme.colors.darkGreen};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    grid-gap: 32px;
    grid-template-areas:
      "nav . address"
      "social . copyright";
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
    grid-template-areas:
      "nav"
      "address"
      "social"
      "copyright";
    text-align: center;
  }
`;

const StyledNav = styled(Nav)`
  grid-area: nav;
`;

const AddressDiv = styled.div`
  grid-area: address;
  opacity: 0.6;
`;

const SocialDiv = styled.div`
  grid-area: social;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-top: 20px;
  }
`;

const CopyrightDiv = styled.div`
  grid-area: copyright;
  margin-top: -20px;
  opacity: 0.6;
  font-size: ${({ theme }) => theme.font.body.small.fontSize};
  line-height: ${({ theme }) => theme.font.body.small.lineHeight};
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    text-align: center;
  }
`;

const SocialImageList = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 0;
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    justify-content: center;
  }
`;

const SocialImage = styled.object`
  &:hover {
    filter: brightness(0) saturate(100%) invert(70%) sepia(25%) saturate(7485%)
      hue-rotate(317deg) brightness(114%) contrast(93%);
  }
`;

export {
  BottomContainer,
  StyledNav,
  AddressDiv,
  SocialDiv,
  SocialImageList,
  SocialImage,
  CopyrightDiv,
};
