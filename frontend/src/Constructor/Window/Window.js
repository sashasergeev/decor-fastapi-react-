import React, { useRef, useState, useEffect } from "react";
import * as styled from "../styles";
import DecorSetting from "./settings/DecorSetting";
import Size from "./settings/Size";
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
        <WindowCanvas decor={elements} winSize={windowSize} />
      </styled.SceneBox>

      <styled.SettingBox>
        <Size
          curr={windowSize}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applyWindowSize}
        />
        <DecorSetting changeElement={changeElement} elements={elements} />
      </styled.SettingBox>
    </>
  );
};

export default Window;
