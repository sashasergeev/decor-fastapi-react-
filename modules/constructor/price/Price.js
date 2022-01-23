import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { togglePrice } from "../store/actions";

import { StyledPrice } from "../../../styles/constructor";

import ItemDetails from "../../catalog/ItemDetails";

const Price = () => {
  const [quanity, setQuanity] = useState(1);

  const [usages, hide] = useSelector(({ usage, ui }) => [usage, ui.hidePrice]);
  const dispatch = useDispatch();
  const toggle = () => dispatch(togglePrice());

  const items = Object.values(usages);
  const chosenItems = items.filter((e) => e.chosen);

  // calculating price of chosen elements
  const totalPrice =
    chosenItems.reduce((sum, e) => e.chosen.price + sum, 0) * quanity;

  return (
    <>
      <StyledPrice.Box hide={hide ? 1 : 0}>
        <StyledPrice.HideBoxButton hide={hide ? 1 : 0} onClick={toggle}>
          Стоимость
        </StyledPrice.HideBoxButton>
        <StyledPrice.Content>
          {!hide && (
            <>
              {Object.entries(usages).map(([key, value]) => (
                <div key={key}>
                  <StyledPrice.Usage.Title>{key}</StyledPrice.Usage.Title>
                  {value.chosen ? (
                    <>
                      <ItemDetails elem={value.chosen} />
                    </>
                  ) : (
                    <>
                      <StyledPrice.Usage.Item.EmptyIcon />
                    </>
                  )}
                </div>
              ))}
              <div style={{ backgroundColor: "#7a697c" }}>
                <StyledPrice.Usage.Title>Итог</StyledPrice.Usage.Title>
                <div>Количество : {quanity} </div>
                <div>
                  <StyledPrice.QuanityBtn
                    onClick={() => setQuanity(quanity === 0 ? 0 : quanity - 1)}
                  >
                    -
                  </StyledPrice.QuanityBtn>
                  <StyledPrice.QuanityBtn
                    onClick={() => setQuanity(quanity + 1)}
                  >
                    +
                  </StyledPrice.QuanityBtn>
                </div>
                <div>Стоимость : {totalPrice}</div>
              </div>
            </>
          )}
        </StyledPrice.Content>
      </StyledPrice.Box>
    </>
  );
};

export default Price;
