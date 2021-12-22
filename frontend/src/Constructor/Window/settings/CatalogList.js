import React, { useState, useEffect, Suspense, useRef } from "react";
import * as styled from "../../styles";

import PreviewItem from "../elements/PreviewItem";

import axios from "axios";

const CatalogList = ({ category, usage, changeElement }) => {
  const [item, setItem] = useState(false);
  const [items, setItems] = useState([]);

  const customHeightRef = useRef();
  const customWidthRef = useRef();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/category/${category.id}`;

    axios.get(url).then((res) => setItems(res.data.items));
  }, [category.id]);

  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  const decor = item ? items.filter((e) => e.name === item)[0] : undefined;

  const handleItem = () => {
    const height = customHeightRef.current.value;
    const width = customWidthRef.current.value;
    if (height !== decor.height || width !== decor.width) {
      decor.height = height;
      decor.width = width;
    }
    changeElement(decor, usage);
  };

  return (
    <>
      {/* ITEMS */}
      <styled.Catalog.Container>
        {items.map((e, inx) => (
          <styled.Catalog.CategoryItem
            selected={item === e.name}
            onClick={handleItemSelect}
            key={inx}
          >
            {e.name}
          </styled.Catalog.CategoryItem>
        ))}
      </styled.Catalog.Container>

      {/* PREVIEW OF ITEM */}
      <Suspense fallback={null}>
        {item && (
          <>
            <styled.Input.Container>
              <label htmlFor="height">Высота</label>
              <input
                type="text"
                id="height"
                name="height"
                defaultValue={decor.height}
                ref={customHeightRef}
              />
            </styled.Input.Container>
            <styled.Input.Container>
              <label htmlFor="width">Ширина</label>
              <input
                type="text"
                id="width"
                name="width"
                defaultValue={decor.width}
                ref={customWidthRef}
              />
            </styled.Input.Container>
            <PreviewItem item={decor} />
          </>
        )}
      </Suspense>

      {/* BUTTONS */}
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
