import React from "react";
import styled from "styled-components";
import BackgroundImage from "./backgroundImage";

const ListItem = styled.li`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.font.body.small.fontSize};
  line-height: ${({ theme }) => theme.font.body.small.lineHeight};
`;

const StyledH3 = styled.h3`
  color: ${({ theme, variant }) =>
    variant ? theme.colors[variant] : theme.colors.white};
`;

const List = ({ list, variant }) => {
  const ImageList = list.map((item, i) => {
    return (
      <ListItem key={i}>
        <div style={{ marginRight: 20 }}>
          <BackgroundImage width={72} height={72} url={item.image} />
        </div>
        <div>
          <StyledH3 variant={variant}>{item.title}</StyledH3>
          {item.text ? <StyledP>{item.text}</StyledP> : null}
        </div>
      </ListItem>
    );
  });

  return <ul>{ImageList}</ul>;
};

export default List;
