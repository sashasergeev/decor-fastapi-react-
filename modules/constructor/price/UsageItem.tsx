import React from "react";
import { DecorUsage } from "../../../api/ConstructorInterfaces";

import { StyledPrice } from "../../../styles/constructor";
import ItemDetails from "../../catalog/ItemDetails";

interface UsageItemProps {
  name: string;
  value: DecorUsage
}

const UsageItem = ({ name, value } : UsageItemProps) => {
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
