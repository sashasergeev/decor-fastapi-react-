import { useState } from "react";
import * as styled from "../../../styles/constructor";
import { SizesType } from "../Container";
import { setUI } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface SizePropsI {
  curr: SizesType;
  applySize: (height: number, width: number) => void;
}

const Size = ({ curr, applySize }: SizePropsI) => {
  const [height, setHeight] = useState(curr.height);
  const [width, setWidth] = useState(curr.width);

  // redux
  const dispatch = useAppDispatch();
  const { hide, applies } = useAppSelector(({ ui, catalog }) => ({
    hide: ui.hideSizeSets,
    applies: catalog.applies,
  }));

  const apply = () => {
    applySize(height, width);
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
            <label htmlFor="height">Высота</label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={(e) => setHeight(+e.target.value)}
              value={height}
            />
          </styled.Input.Container>
          <styled.Input.Container>
            <label htmlFor="width">Ширина</label>
            <input
              type="number"
              id="width"
              name="width"
              onChange={(e) => setWidth(+e.target.value)}
              value={width}
            />
          </styled.Input.Container>
          <styled.Button.Apply onClick={apply}>Применить</styled.Button.Apply>
        </>
      )}
      {hide && (
        <styled.SizeInfo>
          в: {curr.height} см, ш: {curr.width} см
        </styled.SizeInfo>
      )}
    </styled.SettingBoxList>
  );
};

export default Size;
