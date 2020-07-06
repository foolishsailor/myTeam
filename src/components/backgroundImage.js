import styled from "styled-components";

const BackgroundImage = styled.div`
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: ${({ round, width, height }) =>
    round ? `${Math.max(width, height)}px` : 0};
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default BackgroundImage;
