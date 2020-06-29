import styled from "styled-components";

const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${({ large }) => (large ? "250px" : "120px")};
  margin: 0 165px;
`;

export default Section;
