import { useState, useEffect, Suspense } from "react";

import { Canvas } from "@react-three/fiber";

import PreviewItem from "../../common/PreviewItem";
import * as styled from "../../../styles/constructor";

import { useSelector, useDispatch } from "react-redux";
import {
  fetchItems,
  applyItem,
  resetItem,
  clearCatalog,
} from "../store/actions";

const CatalogList = () => {
  // redux
  const dispatch = useDispatch();
  const { items, chosenUsage } = useSelector(({ catalog }) => catalog);

  useEffect(() => dispatch(fetchItems()), []);

  // chosen item
  const [item, setItem] = useState(false);
  const handleItemSelect = (e) =>
    setItem(e.target.innerHTML === item ? false : e.target.innerHTML);

  // chosen item object
  const decor = item
    ? { ...items.filter((e) => e.name === item)[0] } // copying object because source is unmutable apollo cache
    : undefined;

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
    dispatch(applyItem(decor, chosenUsage));
    dispatch(clearCatalog());
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
            <Canvas
              style={{ width: "220px" }}
              camera={{ position: [0.8, 0.2, 0.4], fov: 50, near: 0.01 }}
            >
              <PreviewItem item={decor} />
            </Canvas>
          </>
        )}
      </Suspense>

      {/* BUTTONS */}
      <styled.Catalog.ButtonGroup>
        <styled.Button.Warn onClick={() => dispatch(resetItem(chosenUsage))}>
          Reset
        </styled.Button.Warn>
        {item && (
          <styled.Button.Apply onClick={handleItem}>Apply</styled.Button.Apply>
        )}
      </styled.Catalog.ButtonGroup>
    </>
  );
};

export default CatalogList;
