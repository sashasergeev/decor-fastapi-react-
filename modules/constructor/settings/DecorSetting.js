import { useSelector, useDispatch } from "react-redux";
import { setUI, setCatalog, clearCatalog } from "../store/actions";

import Catalog from "../catalog/Catalog";
import * as styled from "../../../styles/constructor";

const DecorSetting = () => {
  // redux
  const dispatch = useDispatch();
  const [usages, hide, chosenUsage] = useSelector(({ usage, ui, catalog }) => [
    usage,
    ui.hideDecSets,
    catalog.chosenUsage,
  ]);

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle
        onClick={() => dispatch(setUI("hideDecSets", !hide))}
      >
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
              onClick={() => dispatch(setCatalog({ chosenUsage: value.name }))}
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
            <styled.Button.Warn onClick={() => dispatch(clearCatalog())}>
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
