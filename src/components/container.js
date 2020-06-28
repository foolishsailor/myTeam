import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  max-width: ${(props) => props.theme.layout.maxWidth};
  margin: 0 auto;
  padding: 70px 165px;
  overflow: hidden;
`;

export default Container;
