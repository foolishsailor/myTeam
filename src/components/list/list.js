import React from "react";
import styled from "styled-components";
import BackgroundImage from "../backgroundImage";

const ListItem = styled.li`
  display: flex;
  margin-bottom: 8px;
`;

const List = ({ list }) => {
  const ImageList = list.map((item, i) => {
    return (
      <ListItem key={i}>
        <div style={{ marginRight: 20 }}>
          <BackgroundImage width={72} height={72} url={item.image} />
        </div>
        <h3>{item.text}</h3>
      </ListItem>
    );
  });

  return <ul>{ImageList}</ul>;
};

export default List;
