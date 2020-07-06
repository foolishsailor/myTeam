import styled from "styled-components";
import BackgroundImage from "./backgroundImage";
const BackgroundIcon = styled(BackgroundImage)`
  position: absolute;
  ${({ left }) => (left || left === 0 ? `left:${left}px;` : null)}
  ${({ top }) => (top || top === 0 ? `top:${top}px;` : null)}
  ${({ bottom }) => (bottom || bottom === 0 ? `bottom:${bottom}px;` : null)}
  ${({ right }) => (right || right === 0 ? `right:${right}px;` : null)}
`;

export default BackgroundIcon;
