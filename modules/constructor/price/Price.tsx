import { StyledPrice } from "../../../styles/constructor";
import { useAppSelector } from "../store/hooks";

import Container from "./Container";

const Price = () => {
  const hide = useAppSelector(({ ui }) => ui.hidePrice);

  return (
    <>
      <StyledPrice.Box hide={hide ? 1 : 0}>
        <StyledPrice.Content>{!hide && <Container />}</StyledPrice.Content>
      </StyledPrice.Box>
    </>
  );
};

export default Price;
