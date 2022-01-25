import React from "react";

import { StyledPrice } from "../../../styles/constructor";
import ItemDetails from "../../catalog/ItemDetails";

const UsageItem = ({ name, value }) => {
  return (
    <div>
      <StyledPrice.Usage.Title>{name}</StyledPrice.Usage.Title>
      {value.chosen ? (
        <>
          <ItemDetails elem={value.chosen} />
        </>
      ) : (
        <>
          <StyledPrice.Usage.Item.EmptyIcon />
        </>
      )}
    </div>
  );
};

export default UsageItem;
