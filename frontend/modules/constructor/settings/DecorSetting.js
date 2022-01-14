import React, { useState } from "react";
import Catalog from "../catalog/Catalog";
import * as styled from "../../../styles/constructor";

const DecorSetting = ({ elements, changeElement, applies }) => {
  const [hide, setHide] = useState(false);
  const [pick, setPick] = useState(false);

  const clear = (item, usage) => {
    changeElement(item, usage);
    setHide(false);
    setPick(false);
  };

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => setHide(!hide)}>
        Декор
      </styled.SettingTitle>
      {!hide && !pick ? (
        elements.map((e, inx) => (
          <styled.DecorSetItem key={inx}>
            <div>
              <styled.DecorSetItemTitle>{e.name}</styled.DecorSetItemTitle>
              {e.chosen ? <>Выбрано: {e.chosen.name}</> : <>Не выбрано...</>}
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
          <Catalog changeElement={clear} usage={pick} applies={applies} />
        </>
      ) : (
        <></>
      )}
    </styled.SettingBoxList>
  );
};

export default DecorSetting;
