import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
  padding: 0 165px;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.midnightGreen};
`;

export default Section;
