import React, { useState } from "react";
import * as styled from "../../styles";

const CatalogList = ({ category }) => {
  const [item, setItem] = useState(false);

  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  return (
    <>
      <styled.Catalog.CategoryItem
        selected={item === `${category} 01`}
        onClick={handleItemSelect}
      >
        {category} 01
      </styled.Catalog.CategoryItem>

      <styled.Catalog.CategoryItem
        selected={item === `${category} 02`}
        onClick={handleItemSelect}
      >
        {category} 02
      </styled.Catalog.CategoryItem>
      <styled.Catalog.CategoryItem
        selected={item === `${category} 03`}
        onClick={handleItemSelect}
      >
        {category} 03
      </styled.Catalog.CategoryItem>
      <styled.Catalog.ButtonGroup>
        <styled.Button.Warn>Reset</styled.Button.Warn>
        {item && <styled.Button.Apply>Apply</styled.Button.Apply>}
      </styled.Catalog.ButtonGroup>
    </>
  );
};

export default CatalogList;
