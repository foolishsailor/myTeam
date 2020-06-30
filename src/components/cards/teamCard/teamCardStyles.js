import styled from "styled-components";
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

const SmallText = styled.p`
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

const Container = styled.div`
  margin: 40px 15px;
  flex: 1 1 calc(33% - 160px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 55px;
  text-align: center;
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
  Container,
};
