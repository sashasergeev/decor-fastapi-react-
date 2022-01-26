import { useSelector, useDispatch } from "react-redux";
import { togglePrice } from "../store/actions";

import { HideBoxBtn } from "../../../styles/constructor";
import { Icon } from "../../../styles/catalog";

const Button = () => {
  const dispatch = useDispatch();
  const hide = useSelector(({ ui }) => ui.hidePrice);
  const toggle = () => dispatch(togglePrice());

  // btn custom styles
  const body = `
    bottom: -17px; 
    border-radius: 10px 10px 0px 0px;
    background: #e34860;
  `;
  const bgHover = `#df7c8b`;
  const mediaqBody = `left: auto;right: -17px;`;

  return (
    <HideBoxBtn
      body={body}
      bgHover={bgHover}
      mediaqBody={mediaqBody}
      onClick={toggle}
    >
      <Icon.Price />
      <span>{hide ? "cтоимость" : "скрыть"}</span>
    </HideBoxBtn>
  );
};

export default Button;
