import { setUI } from "../store/actions";

import * as styled from "../../../styles/constructor";
import { SizesType } from "../Container";
import { useAppSelector, useAppDispatch } from "../store/hooks";

interface SizePropsI {
  curr: SizesType;
  heightRef: any;
  widthRef: any;
  applySize: () => void;
}

const Size = ({ curr, heightRef, widthRef, applySize }: SizePropsI) => {
  // redux
  const dispatch = useAppDispatch();
  const { hide, applies } = useAppSelector(({ ui, catalog }) => ({
    hide: ui.hideSizeSets,
    applies: catalog.applies,
  }));

  const apply = () => {
    applySize();
    dispatch(setUI("hideSizeSets", true));
  };

  return (
    <styled.SettingBoxList>
      <styled.SettingTitle
        onClick={() => dispatch(setUI("hideSizeSets", !hide))}
      >
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
