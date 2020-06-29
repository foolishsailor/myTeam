import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  margin-bottom: 8px;
`;

const ListImage = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 20px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const List = ({ list, theme }) => {
  const ImageList = list.map((item, i) => {
    console.log("image", item.image);
    return (
      <ListItem key={i}>
        <ListImage imageUrl={item.image} />
        <h3>{item.text}</h3>
      </ListItem>
    );
  });

  return <ul>{ImageList}</ul>;
};

export default List;
