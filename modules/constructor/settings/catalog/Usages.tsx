import React from "react";
import { setCatalog, clearCatalog } from "../../store/actions";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import * as styled from "../../../../styles/constructor";
import SkeletonList from "./SkeletonList";
import Categories from "./Categories";

const Usages = () => {
  const dispatch = useAppDispatch();
  const { usages, chosenUsage } = useAppSelector(({ usage, ui, catalog }) => ({
    usages: usage,
    hide: ui.hideDecSets,
    chosenUsage: catalog.chosenUsage,
    category: catalog.chosenCategory,
  }));

  return (
    <>
      {!chosenUsage ? ( // settings are open and usage is not chosen
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
      ) : chosenUsage ? ( // settings are open and usage is choosen - categories list
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
          <Categories />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Usages;
