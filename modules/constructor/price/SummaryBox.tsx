import { useState } from "react";

import { StyledPrice } from "../../../styles/constructor";

interface SummaryBoxProps {
  totalPrice: number
}

const SummaryBox = ({ totalPrice } : SummaryBoxProps) => {
  const [quanity, setQuanity] = useState(1);

  return (
    <div style={{ backgroundColor: "#7a697c" }}>
      <StyledPrice.Usage.Title>Итог</StyledPrice.Usage.Title>
      <div>Количество : {quanity} </div>
      <div>
        <StyledPrice.QuanityBtn
          onClick={() => setQuanity(quanity === 0 ? 0 : quanity - 1)}
        >
          -
        </StyledPrice.QuanityBtn>
        <StyledPrice.QuanityBtn onClick={() => setQuanity(quanity + 1)}>
          +
        </StyledPrice.QuanityBtn>
      </div>
      <div>Стоимость : {totalPrice * quanity}</div>
    </div>
  );
};

export default SummaryBox;
