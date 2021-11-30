import React, { useState, useRef } from "react";
import WindowCanvas from "./WIndowCanvas";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";

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
    <div className="container">
      <div className="sceneContainer">
        <div className="scene">
          <WindowCanvas winSize={windowSize} />
        </div>
        <div className="settings">
          <Size
            curr={windowSize}
            heightRef={heightInput}
            widthRef={widthInput}
            applySize={applyWindowSize}
          />
          <DecorSetting />
        </div>
      </div>
    </div>
  );
};

export default Window;
