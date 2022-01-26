import React, { useEffect, useRef, useState, Suspense } from "react";

import * as styled from "../../styles/constructor";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";
import Price from "./price/Price";
import { default as PriceButton } from "./price/Button";
import { default as SettingsButton } from "./settings/Button";

import {
  ReactReduxContext,
  Provider,
  useSelector,
  useDispatch,
  shallowEqual,
} from "react-redux";
import { initiateConstructor } from "./store/actions";

import { Canvas as CanvasBox } from "@react-three/fiber";
import * as THREE from "three";

const Container = ({ elementOfDecor, defaultSize, Canvas }) => {
  // redux
  const dispatch = useDispatch();
  const [elements, hideSettings, hidePrice] = useSelector(
    ({ usage, ui }) => [usage, ui.hideSettings, ui.hidePrice],
    shallowEqual
  );
  useEffect(() => dispatch(initiateConstructor(elementOfDecor)), []);

  // size related
  const [size, setSize] = useState(defaultSize);
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
      <styled.SettingBox $hide={hideSettings ? true : false}>
        <Size
          curr={size}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applySize}
        />
        <DecorSetting />
      </styled.SettingBox>
      <styled.SceneBox $size={hideSettings && hidePrice ? "full" : false}>
        <Suspense fallback={null}>
          {/* need to wrap content of canvas in context because it breaks it if outside */}
          <ReactReduxContext.Consumer>
            {({ store }) => (
              <CanvasBox
                onCreated={({ gl }) => {
                  gl.toneMapping = THREE.NoToneMapping;
                }}
              >
                <Provider store={store}>
                  <Canvas decor={elements} size={size} />
                </Provider>
              </CanvasBox>
            )}
          </ReactReduxContext.Consumer>
        </Suspense>
        <SettingsButton />
        <PriceButton />
      </styled.SceneBox>

      {/* Element where user can calculate price of chosen items */}
      <Price />
    </>
  );
};

export default Container;
