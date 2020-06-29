import styled from "styled-components";

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 48px 165px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 76px 230px;
  background-color: ${({ theme }) => theme.colors.lightCoral};
  color: ${({ theme }) => theme.colors.sacStateGreen};
`;

const AddressDiv = styled.div`
  opacity: 0.6;
  flex: 1;
`;

const SocialDiv = styled.div`
  align-self: flex-end;
  text-align: right;
`;

const SocialImageList = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

export {
  TopContainer,
  BottomContainer,
  AddressDiv,
  SocialDiv,
  SocialImageList,
};
