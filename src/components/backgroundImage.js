import styled from "styled-components";

const BackgroundImage = styled.img`
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: ${({ round, width, height }) =>
    round ? `${Math.max(width, height)}px` : 0};
`;

export default BackgroundImage;
