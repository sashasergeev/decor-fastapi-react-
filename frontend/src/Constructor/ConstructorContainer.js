import React, { useRef, useState, useEffect, Suspense } from "react";
import * as styled from "./styles";
import DecorSetting from "./Settings/DecorSetting";
import Size from "./Settings/Size";

import axios from "axios";

const ConstructorContainer = ({ elementOfDecor, defaultSize, Canvas }) => {
  const [size, setSize] = useState(defaultSize);

  const [hide, setHide] = useState(false);

  const [elements, setElements] = useState([]);

  // fetch usages
  useEffect(() => {
    const url = "http://127.0.0.1:8000/usage/all";

    axios
      .get(url)
      .then((res) =>
        setElements(
          res.data
            .filter((e) => e.applies === elementOfDecor)
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
      <styled.SettingBox $hide={hide ? true : false}>
        <Size
          curr={size}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applySize}
          applies={elementOfDecor}
        />
        <DecorSetting
          changeElement={changeElement}
          elements={elements}
          applies={elementOfDecor}
        />
      </styled.SettingBox>
      <styled.SceneBox $hide={hide ? true : false}>
        <Suspense fallback={null}>
          <Canvas decor={elements} size={size} />
          <styled.SettingBoxHideBtn onClick={() => setHide(!hide)}>
            {hide ? "настройки" : "cкрыть"}
          </styled.SettingBoxHideBtn>
        </Suspense>
      </styled.SceneBox>
    </>
  );
};

export default ConstructorContainer;
