import React from "react";
import styled from "styled-components";

const ImageDiv = styled.div`
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: contain;
`;

const BackgroundImage = ({ width, height, url }) => {
  return <ImageDiv width={width} height={height} url={url}></ImageDiv>;
};

export default BackgroundImage;
