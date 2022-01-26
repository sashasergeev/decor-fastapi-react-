import { useSelector, useDispatch } from "react-redux";
import { toggleSettings } from "../store/actions";

import { HideBoxBtn, SettingIcon } from "../../../styles/constructor";

const Button = () => {
  const dispatch = useDispatch();
  const hide = useSelector(({ ui }) => ui.hideSettings);
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
