import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SocialImage = styled.object`
  &:hover {
    filter: brightness(0) saturate(100%) invert(70%) sepia(25%) saturate(7485%)
      hue-rotate(317deg) brightness(114%) contrast(93%);
  }
`;

const StyledLink = styled(Link)`
  margin: 8px;
`;

const SocialImageList = ({ list }) => {
  return list.map((item, i) => {
    return (
      <StyledLink key={i} to={item.link}>
        <SocialImage
          type='image/svg+xml'
          width={24}
          height={24}
          data={item.url}
        >
          {item.alt}
        </SocialImage>
      </StyledLink>
    );
  });
};

export default SocialImageList;
