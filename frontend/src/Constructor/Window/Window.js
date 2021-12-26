import React, { useRef, useState, useEffect, Suspense } from "react";
import * as styled from "../styles";
import DecorSetting from "../Settings/DecorSetting";
import Size from "../Settings/Size";
import WindowCanvas from "./WIndowCanvas";

import axios from "axios";

const Window = () => {
  // win size settings
  const [windowSize, setWindowSize] = useState({ height: 120, width: 80 });

  const [elements, setElements] = useState([]);

  // fetch usages
  useEffect(() => {
    const url = "http://127.0.0.1:8000/usage/all";

    axios
      .get(url)
      .then((res) =>
        setElements(
          res.data
            .filter((e) => e.applies === "Окно")
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

  const applyWindowSize = (e) => {
    setWindowSize({
      height: +heightInput.current.value,
      width: +widthInput.current.value,
    });
  };

  return (
    <>
      <styled.SceneBox>
        <Suspense fallback={null}>
          <WindowCanvas decor={elements} winSize={windowSize} />
        </Suspense>
      </styled.SceneBox>

      <styled.SettingBox>
        <Size
          curr={windowSize}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applyWindowSize}
          applies="Окно"
        />
        <DecorSetting
          changeElement={changeElement}
          elements={elements}
          applies="Окно"
        />
      </styled.SettingBox>
    </>
  );
};

export default Window;
