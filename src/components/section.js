import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  padding-top: 110px;
  padding-bottom: 140px;
  padding-right: ${({ theme }) => theme.layout.paddingWidth.desktop};
  padding-left: ${({ theme }) => theme.layout.paddingWidth.desktop};

  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.midnightGreen};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    justify-content: space-around;
    padding-right: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.mobile};
  }
`;

export default Section;
