import React, { useRef, useState } from "react";

import "./App.css";
// import * as THREE from "three";
import WindowCanvas from "./WindowScene/WIndowCanvas";
import Size from "./WindowScene/settings/Size";

const App = () => {
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
        </div>
      </div>
    </div>
  );
};

export default App;
