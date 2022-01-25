import { useSelector, useDispatch } from "react-redux";
import { togglePrice } from "../store/actions";

import { StyledPrice } from "../../../styles/constructor";

const Button = () => {
  const dispatch = useDispatch();
  const hide = useSelector(({ ui }) => ui.hidePrice);
  const toggle = () => dispatch(togglePrice());

  return (
    <StyledPrice.HideBoxButton hide={hide ? 1 : 0} onClick={toggle}>
      Стоимость
    </StyledPrice.HideBoxButton>
  );
};

export default Button;
