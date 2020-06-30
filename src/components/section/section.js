import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  padding: 110px 165px 140px 165px;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.midnightGreen};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    padding-right: ${({ theme }) => theme.layout.paddingWidth.tablet};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding-right: ${({ theme }) => theme.layout.paddingWidth.mobile};
    padding-left: ${({ theme }) => theme.layout.paddingWidth.mobile};
  }
`;

export default Section;
