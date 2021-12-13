import React, { useState, useEffect } from "react";
import Catalog from "./Catalog";
import * as styled from "../../styles";
import axios from "axios";

const DecorSetting = () => {
  const [hide, setHide] = useState(false);
  const [pick, setPick] = useState(false);

  const [elements, setElements] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/usage/all")
      .then((res) =>
        setElements(
          res.data
            .filter((e) => e.applies === "Окно")
            .map((e) => ({ ...e, chosen: false }))
        )
      );
  }, []);

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => setHide(!hide)}>
        Decor
      </styled.SettingTitle>
      {!hide && !pick ? (
        elements.map((e, inx) => (
          <styled.DecorSetItem key={inx}>
            <div>
              <styled.DecorSetItemTitle>{e.name}</styled.DecorSetItemTitle>
              {e.chosen ? <>Выбранный декор:</> : <>Не выбрано...</>}
            </div>
            <styled.Button.Info onClick={() => setPick(e.name)}>
              {e.chosen ? "Поменять" : "Выбрать"}
            </styled.Button.Info>
          </styled.DecorSetItem>
        ))
      ) : !hide && pick ? (
        <>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>
                Выберите: {pick}
              </styled.DecorSetItemTitle>
            </div>
            <styled.Button.Warn onClick={() => setPick(false)}>
              Назад
            </styled.Button.Warn>
          </styled.DecorSetItem>
          <Catalog />
        </>
      ) : (
        <></>
      )}
    </styled.SettingBoxList>
  );
};

export default DecorSetting;
