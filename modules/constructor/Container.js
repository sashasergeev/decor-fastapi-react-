import React, { useEffect, useRef, useState, Suspense } from "react";

import * as styled from "../../styles/constructor";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";

import {
  ReactReduxContext,
  Provider,
  useSelector,
  useDispatch,
} from "react-redux";
import { setApplies, fetchUsages, setUI } from "./store/actions";

import { Canvas as CanvasBox } from "@react-three/fiber";
import * as THREE from "three";

const Container = ({ elementOfDecor, defaultSize, Canvas }) => {
  // redux
  const dispatch = useDispatch();
  const [elements, hide] = useSelector(({ usage, ui }) => [
    usage,
    ui.hideSettings,
  ]);

  useEffect(() => {
    dispatch(setApplies(elementOfDecor));
    dispatch(fetchUsages(elementOfDecor));
    setTimeout(() => dispatch(setUI("hideSettings", false)), 2000);
  }, []);

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
      <styled.SettingBox $hide={hide ? true : false}>
        <Size
          curr={size}
          heightRef={heightInput}
          widthRef={widthInput}
          applySize={applySize}
        />
        <DecorSetting />
      </styled.SettingBox>
      <styled.SceneBox $hide={hide ? true : false}>
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
          <styled.SettingBoxHideBtn
            onClick={() => dispatch(setUI("hideSettings", !hide))}
          >
            {hide ? (
              <div>
                <styled.SettingIcon />
                <span>настройки</span>
              </div>
            ) : (
              <div>
                <styled.SettingIcon />
                <span>cкрыть</span>
              </div>
            )}
          </styled.SettingBoxHideBtn>
        </Suspense>
      </styled.SceneBox>
    </>
  );
};

export default Container;
