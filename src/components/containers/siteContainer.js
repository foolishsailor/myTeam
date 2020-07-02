import styled from "styled-components";

const SiteContainer = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.midnightGreen};
`;

export default SiteContainer;
