import React, { useEffect, useRef, useState, Suspense } from "react";

import * as styled from "../../styles/constructor";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../modules/constructor/store/index";

import { Canvas as CanvasBox } from "@react-three/fiber";

const Container = ({ elementOfDecor, defaultSize, Canvas }) => {
  // redux
  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);
  const [elements, hide] = useSelector(({ usage, ui }) => [
    usage,
    ui.hideSettings,
  ]);

  useEffect(() => {
    ac.setApplies(elementOfDecor);
    ac.fetchUsages(elementOfDecor);
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
          <CanvasBox>
            <Canvas decor={elements} size={size} />
          </CanvasBox>
          <styled.SettingBoxHideBtn
            onClick={() => ac.setUI("hideSettings", !hide)}
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
