import React, { useState } from "react";
import Catalog from "./Catalog";
import * as styled from "../../styles";

const DecorSetting = () => {
  const [hide, setHide] = useState(false);
  const [pick, setPick] = useState(false);

  const [top, setTop] = useState(false);
  const [side, setSide] = useState(false);
  const [bottom, setBottom] = useState(false);

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => setHide(!hide)}>
        Decor
      </styled.SettingTitle>
      {!hide && !pick ? (
        <>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>Set Top</styled.DecorSetItemTitle>
              {top ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <styled.Button.Info onClick={() => setPick("Top")}>
              {top ? "Change" : "Pick"}
            </styled.Button.Info>
          </styled.DecorSetItem>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>Set Sides</styled.DecorSetItemTitle>
              {side ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <styled.Button.Info onClick={() => setPick("Side")}>
              {side ? "Change" : "Pick"}
            </styled.Button.Info>
          </styled.DecorSetItem>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>Set Bottom</styled.DecorSetItemTitle>
              {bottom ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <styled.Button.Info onClick={() => setPick("Bottom")}>
              {bottom ? "Change" : "Pick"}
            </styled.Button.Info>
          </styled.DecorSetItem>
        </>
      ) : !hide && pick ? (
        <>
          <styled.DecorSetItem>
            <div>
              <styled.DecorSetItemTitle>
                Picking {pick}
              </styled.DecorSetItemTitle>
            </div>
            <styled.Button.Warn onClick={() => setPick(false)}>
              Cancel
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
