import styled from "styled-components";

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 48px 165px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
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

const SocialImage = styled.object`
  &:hover {
    filter: brightness(0) saturate(100%) invert(70%) sepia(25%) saturate(7485%)
      hue-rotate(317deg) brightness(114%) contrast(93%);
  }
`;

export { BottomContainer, AddressDiv, SocialDiv, SocialImageList, SocialImage };
