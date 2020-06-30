import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
  padding: 140px 165px;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.midnightGreen};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    margin-right: ${({ theme }) => theme.layout.marginWidth.tablet};
    margin-left: ${({ theme }) => theme.layout.marginWidth.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-right: ${({ theme }) => theme.layout.marginWidth.mobile};
    margin-left: ${({ theme }) => theme.layout.marginWidth.mobile};
  }
`;

export default Section;
