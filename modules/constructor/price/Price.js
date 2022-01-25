import { useSelector } from "react-redux";

import { StyledPrice } from "../../../styles/constructor";

import Container from "./Container";
import Button from "./Button";

const Price = () => {
  const hide = useSelector(({ ui }) => ui.hidePrice);

  return (
    <>
      <StyledPrice.Box hide={hide ? 1 : 0}>
        <Button />
        <StyledPrice.Content>{!hide && <Container />}</StyledPrice.Content>
      </StyledPrice.Box>
    </>
  );
};

export default Price;
