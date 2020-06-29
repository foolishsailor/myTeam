import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
  padding: 140px 165px;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.midnightGreen};
`;

export default Section;
