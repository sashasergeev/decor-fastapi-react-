import React, { useState, useEffect } from "react";
import * as styled from "../../styles";

import axios from "axios";

const CatalogList = ({ category, usage, changeElement }) => {
  const [item, setItem] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/category/${category.id}`;

    axios.get(url).then((res) => setItems(res.data.items));
  }, [category.id]);

  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  const handleItem = () =>
    changeElement(items.filter((e) => e.name === item)[0], usage);

  return (
    <>
      {items.map((e, inx) => (
        <styled.Catalog.CategoryItem
          selected={item === e.name}
          onClick={handleItemSelect}
          key={inx}
        >
          {e.name}
        </styled.Catalog.CategoryItem>
      ))}

      <styled.Catalog.ButtonGroup>
        <styled.Button.Warn>Reset</styled.Button.Warn>
        {item && (
          <styled.Button.Apply onClick={handleItem}>Apply</styled.Button.Apply>
        )}
      </styled.Catalog.ButtonGroup>
    </>
  );
};

export default CatalogList;
