import React, { useState } from "react";
import * as styled from "../../styles";

const Size = ({ curr, heightRef, widthRef, applySize }) => {
  const [hide, setHide] = useState(false);

  const apply = () => {
    applySize();
    setHide(!hide);
  };

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => setHide(!hide)}>
        Window Size
      </styled.SettingTitle>
      {!hide && (
        <>
          <styled.Input.Container>
            <label htmlFor="height">Height</label>
            <input
              type="number"
              id="height"
              name="height"
              defaultValue={curr.height}
              ref={heightRef}
            />
          </styled.Input.Container>
          <styled.Input.Container>
            <label htmlFor="width">Width</label>
            <input
              type="number"
              id="width"
              name="width"
              defaultValue={curr.width}
              ref={widthRef}
            />
          </styled.Input.Container>
          <styled.Button.Apply onClick={apply}>Apply</styled.Button.Apply>
        </>
      )}
      {hide && (
        <styled.SizeInfo>
          h: {curr.height} cm, w: {curr.width} cm
        </styled.SizeInfo>
      )}
    </styled.SettingBoxList>
  );
};

export default Size;
