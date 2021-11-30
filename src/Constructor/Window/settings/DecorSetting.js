import React, { useState } from "react";
import Catalog from "./Catalog";

const DecorSetting = () => {
  const [hide, setHide] = useState(false);
  const [pick, setPick] = useState(false);

  const [top, setTop] = useState(false);
  const [side, setSide] = useState(false);
  const [bottom, setBottom] = useState(false);

  return (
    <div className="settingContainer" action="">
      <h3 onClick={() => setHide(!hide)}>Decor</h3>
      {!hide && !pick ? (
        <div className="decorSetList">
          <div className="decorSetContainer">
            <div>
              <div className="decorSetTitle">Set Top</div>
              {top ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <button className="btn" onClick={() => setPick("Top")}>
              {top ? "Change" : "Pick"}
            </button>
          </div>
          <div className="decorSetContainer">
            <div>
              <div className="decorSetTitle">Set Sides</div>
              {side ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <button className="btn" onClick={() => setPick("Side")}>
              {side ? "Change" : "Pick"}
            </button>
          </div>
          <div className="decorSetContainer">
            <div>
              <div className="decorSetTitle">Set Bottom</div>
              {bottom ? <>Chosen Decor:</> : <>Not picked...</>}
            </div>
            <button className="btn" onClick={() => setPick("Bottom")}>
              {bottom ? "Change" : "Pick"}
            </button>
          </div>
        </div>
      ) : !hide && pick ? (
        <>
          <div className="decorSetContainer">
            <div>
              <div className="decorSetTitle">Picking {pick}</div>
            </div>
            <button className="btn" onClick={() => setPick(false)}>
              Cancel
            </button>
          </div>
          <Catalog />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DecorSetting;
