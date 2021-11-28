import React, { useRef, useState } from "react";

import "./App.css";
// import * as THREE from "three";
import WindowCanvas from "./WindowScene/WIndowCanvas";

const App = () => {
  const [windowProps, setWindowProps] = useState({ height: "", width: "" });

  return (
    <div className="container">
      <div className="sceneContainer">
        <div className="scene">
          <WindowCanvas />
        </div>
        <div className="settings">
          <h3>Window Parameters</h3>
          <label htmlFor="height">Height</label>
          <input
            type="text"
            id="height"
            name="height"
            onChange={(e) =>
              setWindowProps({
                height: e.target.value,
                width: windowProps.width,
              })
            }
          />
          <label htmlFor="width">Width</label>
          <input
            type="text"
            id="width"
            name="width"
            onChange={(e) =>
              setWindowProps({
                height: windowProps.height,
                width: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default App;
