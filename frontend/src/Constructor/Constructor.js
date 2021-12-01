import React from "react";
import Window from "./Window/Window";

import * as styled from "./styles";

const Constructor = () => {
  return (
    <>
      <styled.ConstructorContainer>
        <styled.SceneContainer>
          <Window />
        </styled.SceneContainer>
      </styled.ConstructorContainer>
    </>
  );
};

export default Constructor;
