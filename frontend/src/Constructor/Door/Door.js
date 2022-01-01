import React from "react";

import ConstructorContainer from "../ConstructorContainer";
import DoorCanvas from "./DoorCanvas";

const Door = () => (
  <ConstructorContainer
    elementOfDecor={"Дверь"}
    defaultSize={{ height: 190, width: 90 }}
    Canvas={DoorCanvas}
  />
);

export default Door;
