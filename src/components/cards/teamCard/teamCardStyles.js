import styled from "styled-components";
import Card from "../Card";
import BackgroundImage from "../../backgroundImage";
import PlusIcon from "../../../assets/icon-cross.svg";

const DirectorImage = styled(BackgroundImage)`
  margin-bottom: 16px;
  border: solid 2px ${({ theme }) => theme.colors.white};
`;

const DirectorName = styled.h3`
  color: ${({ theme }) => theme.colors.raptureBlue};
  margin: 0;
`;

const SmallText = styled.div`
  margin: 0;
  font-size: ${({ theme }) => theme.font.textSmall.fontSize};
  line-height: ${({ theme }) => theme.font.textSmall.lineHeight};
`;

const SocialImageContainer = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const JobTitle = styled(SmallText)`
  font-style: italic;
`;

const Quote = styled(SmallText)`
  margin-top: 10px;
  display: none;
`;

const Button = styled.div`
  position: absolute;
  bottom: -28px;
  width: 56px;
  height: 56px;
  border-radius: 56px;
  background-color: ${({ theme }) => theme.colors.lightCoral};
  background-image: url(${PlusIcon});
  background-repeat: no-repeat;
  background-position: center center;
  transition: all 200ms;
`;

const StyledCard = styled(Card)`
  height: 250px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.sacStateGreen};
  transition: all 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGreen};
  }

  &:hover > ${Quote} {
    display: block;
  }

  &:hover > ${JobTitle} {
    display: none;
  }

  &:hover > ${DirectorImage} {
    display: none;
  }

  &:hover > ${Button} {
    transform: rotate(45deg);
    background-color: ${({ theme }) => theme.colors.raptureBlue};
  }
`;

export {
  DirectorImage,
  DirectorName,
  SocialImageContainer,
  JobTitle,
  Quote,
  Button,
  StyledCard,
};
