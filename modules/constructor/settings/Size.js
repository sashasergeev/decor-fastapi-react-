import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

import * as styled from "../../../styles/constructor";

const Size = ({ curr, heightRef, widthRef, applySize }) => {
  // redux
  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);
  const [hide, applies] = useSelector(({ ui, catalog }) => [
    ui.hideSizeSets,
    catalog.applies,
  ]);

  const apply = () => {
    applySize();
    ac.setUI("hideSizeSets", true);
  };

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle onClick={() => ac.setUI("hideSizeSets", !hide)}>
        Размер {applies === "Window" ? "окна" : "двери"}
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
