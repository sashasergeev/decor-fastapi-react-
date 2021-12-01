import React, { useState, useRef } from "react";
import WindowCanvas from "./WIndowCanvas";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";
import * as styled from "../styles";

const Window = ({}) => {
  // win size settings
  const [windowSize, setWindowSize] = useState({ height: 120, width: 80 });
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
        <WindowCanvas winSize={windowSize} />
      </styled.SceneBox>
      <styled.SettingBox>
        <Size
          curr={windowSize}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applyWindowSize}
        />
        <DecorSetting />
      </styled.SettingBox>
    </>
  );
};

export default Window;
