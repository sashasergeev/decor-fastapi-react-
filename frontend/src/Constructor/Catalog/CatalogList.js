import React, { useState, useEffect, Suspense } from "react";
import * as styled from "../styles";

import PreviewItem from "./PreviewItem";

import { useQuery } from "react-query";
import { fetchItems } from "../../api/constructor";

const LoadingPreview = () => (
  <>
    <div style={{ height: "200xp" }}></div>
  </>
);

const CatalogList = ({ category, usage, changeElement }) => {
  // fetch items
  const { data: items } = useQuery([category.id], fetchItems, {
    select: (data) => data.data.items,
    staleTime: Infinity,
  });

  // chosen item
  const [item, setItem] = useState(false);
  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  // chosen item object
  const decor = item ? items.filter((e) => e.name === item)[0] : undefined;

  // item size
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (item) {
      setHeight(decor.height);
      setWidth(decor.width);
    }
  }, [item]);

  // applying chosen item
  const handleItem = () => {
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
        {items &&
          items.map((e, inx) => (
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
                onChange={(e) => setHeight(e.target.value)}
                name="height"
                value={height}
              />
            </styled.Input.Container>
            <styled.Input.Container>
              <label htmlFor="width">Ширина</label>
              <input
                type="text"
                id="width"
                onChange={(e) => setWidth(e.target.value)}
                name="width"
                value={width}
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
