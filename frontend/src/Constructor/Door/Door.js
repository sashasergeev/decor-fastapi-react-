import React, { useRef, useState, useEffect, Suspense } from "react";
import * as styled from "../styles";
import DecorSetting from "../Settings/DecorSetting";
import Size from "../Settings/Size";
import DoorCanvas from "./DoorCanvas";
import axios from "axios";

const Door = () => {
  const [size, setSize] = useState({ height: 200, width: 110 });
  const [elements, setElements] = useState([]);

  // fetch usages
  useEffect(() => {
    const url = "http://127.0.0.1:8000/usage/all";

    axios
      .get(url)
      .then((res) =>
        setElements(
          res.data
            .filter((e) => e.applies === "Дверь")
            .map((e) => ({ ...e, chosen: false }))
        )
      );
  }, []);
  const changeElement = (item, usage) =>
    setElements(
      elements.map((e) => {
        if (e.name === usage) {
          e.chosen = item;
        }
        return e;
      })
    );

  const heightInput = useRef();
  const widthInput = useRef();
  const applySize = (e) => {
    setSize({
      height: +heightInput.current.value,
      width: +widthInput.current.value,
    });
  };

  return (
    <>
      <styled.SceneBox>
        <Suspense fallback={null}>
          <DoorCanvas decor={elements} size={size} />
        </Suspense>
      </styled.SceneBox>

      <styled.SettingBox>
        <Size
          curr={size}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applySize}
          applies="Дверь"
        />
        <DecorSetting
          changeElement={changeElement}
          elements={elements}
          applies="Дверь"
        />
      </styled.SettingBox>
    </>
  );
};

export default Door;
