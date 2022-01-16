import React, { useEffect, useRef, useState, Suspense } from "react";

import * as styled from "../../styles/constructor";
import Size from "./settings/Size";
import DecorSetting from "./settings/DecorSetting";

import { gql } from "@apollo/client";
import client from "../../apollo-client";

const Container = ({ elementOfDecor, defaultSize, Canvas }) => {
  const [hide, setHide] = useState(false);

  // usages related
  const [elements, setElements] = useState([]);
  const fetchUsages = async () => {
    const { data } = await client.query({
      query: gql`
      query UsagesOf${elementOfDecor} {
        usages(where: {applied: {_eq: ${elementOfDecor}}}) {
          id
          name
        }
      }
      `,
    });

    setElements(data.usages.map((e) => ({ ...e, chosen: false })));
  };
  useEffect(() => {
    fetchUsages();
  }, []);

  // item related
  const changeItem = (item, usage) =>
    setElements(
      elements.map((e) => (e.name === usage ? { ...e, chosen: item } : e))
    );

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
          applies={elementOfDecor}
        />
        <DecorSetting
          changeElement={changeItem}
          elements={elements}
          applies={elementOfDecor}
        />
      </styled.SettingBox>
      <styled.SceneBox $hide={hide ? true : false}>
        <Suspense fallback={null}>
          <Canvas decor={elements} size={size} />
          <styled.SettingBoxHideBtn onClick={() => setHide(!hide)}>
            {hide ? "настройки" : "cкрыть"}
          </styled.SettingBoxHideBtn>
        </Suspense>
      </styled.SceneBox>
    </>
  );
};

export default Container;
