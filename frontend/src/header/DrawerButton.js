import React from "react";

import { DrawerBtnElem } from "./styles";

const DrawerButton = ({ trigger }) => {
  return (
    <>
      <DrawerBtnElem onClick={trigger} />
    </>
  );
};

export default DrawerButton;
