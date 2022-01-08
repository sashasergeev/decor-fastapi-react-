import React from "react";

import { Item, Icon } from "./styles";

const ItemParams = ({ elem }) => {
  return (
    <div style={{ width: "-webkit-fill-available" }}>
      <Item.Title>{elem.name}</Item.Title>
      <Item.DetailsBox>
        <Item.Detail>
          <Icon.Height /> {elem.height}
        </Item.Detail>
        <Item.Detail>
          <Icon.Width /> {elem.width}
        </Item.Detail>
        <Item.Detail>
          <Icon.Price /> {elem.price}
        </Item.Detail>
      </Item.DetailsBox>
    </div>
  );
};

export default ItemParams;
