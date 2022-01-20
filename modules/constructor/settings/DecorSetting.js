import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

import Catalog from "../catalog/Catalog";
import * as styled from "../../../styles/constructor";

const DecorSetting = () => {
  // redux
  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);
  const [usages, hide, chosenUsage] = useSelector(({ usage, ui, catalog }) => [
    usage,
    ui.hideDecSets,
    catalog.chosenUsage,
  ]);

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => ac.setUI("hideDecSets", !hide)}>
        Декор
      </styled.SettingTitle>
      {!hide && !chosenUsage ? (
        Object.entries(usages).map(([key, value], inx) => (
          <styled.DecorSetItem key={inx}>
            <div>
              <styled.DecorSetItemTitle>{key}</styled.DecorSetItemTitle>
              {value.chosen ? (
                <>Выбрано: {value.chosen.name}</>
              ) : (
                <>Не выбрано...</>
              )}
            </div>
            <styled.Button.Info
              onClick={() => ac.setCatalog("chosenUsage", value.name)}
            >
              {value.chosen ? "Поменять" : "Выбрать"}
            </styled.Button.Info>
          </styled.DecorSetItem>
        ))
      ) : !hide && chosenUsage ? (
        <>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>
                Выберите: {chosenUsage}
              </styled.DecorSetItemTitle>
            </div>
            <styled.Button.Warn onClick={ac.clearCatalog}>
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
