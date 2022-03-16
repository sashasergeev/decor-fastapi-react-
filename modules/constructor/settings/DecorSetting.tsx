import { setUI, clearCatalog } from "../store/actions";

import * as styled from "../../../styles/constructor";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Usages from "./catalog/Usages";

const DecorSetting = () => {
  // redux
  const dispatch = useAppDispatch();
  const { hide, category } = useAppSelector(({ ui, catalog }) => ({
    hide: ui.hideDecSets,
    category: catalog.chosenCategory,
  }));
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
      {!hide ? <Usages /> : <></>}
      {/* 
        - Usages
          - Categories1
            - Items
      */}
    </styled.SettingBoxList>
  );
};

export default DecorSetting;
