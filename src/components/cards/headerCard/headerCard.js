import styled from "styled-components";

const HeaderCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "column" : "row")};
  flex: 1 1;
  align-self: stretch;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    justify-content: center;
    margin-right: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0;
    height: 4px;
    width: 50px;
    background-color: ${({ theme, highlight }) =>
      highlight
        ? highlight === "primary"
          ? theme.colors.raptureBlue
          : theme.colors.lightCoral
        : "transparent"};

    @media (max-width: ${({ theme, hideHighlight }) =>
        hideHighlight ? theme.breakPoints[hideHighlight] : 0}) {
      display: none;
    }
  }
`;

export default HeaderCard;
