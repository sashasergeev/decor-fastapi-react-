import { setUI, setCatalog, clearCatalog } from "../store/actions";

import Catalog from "../catalog/Catalog";
import * as styled from "../../../styles/constructor";
import SkeletonList from "../catalog/SkeletonList";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const DecorSetting = () => {
  // redux
  const dispatch = useAppDispatch();
  const { usages, hide, chosenUsage, category } = useAppSelector(
    ({ usage, ui, catalog }) => ({
      usages: usage,
      hide: ui.hideDecSets,
      chosenUsage: catalog.chosenUsage,
      category: catalog.chosenCategory,
    })
  );
  const onTitleClick = () => {
    dispatch(setUI("hideDecSets", !hide));
    dispatch(clearCatalog());
  };

  return (
    <styled.SettingBoxList
      id="decorSettings"
      style={category ? { height: "582px" } : {}}
    >
      <styled.SettingTitle onClick={onTitleClick}>Декор</styled.SettingTitle>
      {!hide && !chosenUsage ? (
        Object.keys(usages).length !== 0 ? (
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
                onClick={() =>
                  dispatch(setCatalog({ chosenUsage: value.name }))
                }
              >
                {value.chosen ? "Поменять" : "Выбрать"}
              </styled.Button.Info>
            </styled.DecorSetItem>
          ))
        ) : (
          <SkeletonList width={234} height={65} size={3} />
        )
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
