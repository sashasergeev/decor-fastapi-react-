import React from "react";

import ConstructorContainer from "../ConstructorContainer";
import WindowCanvas from "./WIndowCanvas";

const Window = () => (
  <ConstructorContainer
    elementOfDecor={"Окно"}
    defaultSize={{ height: 120, width: 80 }}
    Canvas={WindowCanvas}
  />
);

export default Window;
