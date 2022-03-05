import { toggleSettings } from "../store/actions";

import { HideBoxBtn, SettingIcon } from "../../../styles/constructor";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Button = () => {
  const dispatch = useAppDispatch();
  const hide = useAppSelector(({ ui }) => ui.hideSettings);
  const toggle = () => dispatch(toggleSettings());

  // btn custom styles
  const body = `
    top: 17px; 
    border-radius: 0px 0px 10px 10px;
    background: #254867;
  `;
  const bgHover = `#605688`;
  const mediaqBody = `left: 25px; right: 0;`;

  return (
    <HideBoxBtn
      body={body}
      bgHover={bgHover}
      mediaqBody={mediaqBody}
      onClick={toggle}
    >
      <SettingIcon />
      <span>{hide ? "настройки" : "cкрыть"}</span>
    </HideBoxBtn>
  );
};

export default Button;
