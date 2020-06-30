import styled from "styled-components";

const Container = styled.div`
  display: flex;
  ${({ inline }) => (inline ? "flex-wrap: wrap;" : "flex-direction: row;")}
`;

export default Container;
