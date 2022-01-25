import { useSelector } from "react-redux";

import SummaryBox from "./SummaryBox";
import UsageItem from "./UsageItem";

const Container = () => {
  const usages = useSelector(({ usage }) => usage);

  const chosenItems = Object.values(usages).filter((e) => e.chosen);

  // choose unique items and add size if there is dublicates...
  const uniqueItems = chosenItems.reduce((accum, item) => {
    let {
      name: usage,
      chosen: { name, size, price },
    } = item;

    if (usage === "Middle" || usage === "Base") {
      // items on these usages applies twice
      size = size * 2;
    }
    return {
      ...accum,
      [name]: !!accum[name]
        ? {
            ...accum[name],
            size: accum[name].size + size,
          }
        : {
            size,
            price,
          },
    };
  }, {});

  // total price per set
  const totalPrice = Object.values(uniqueItems).reduce(
    (price, e) => Math.ceil(e.size) * e.price + price,
    0
  );

  return (
    <>
      {Object.entries(usages).map(([key, value]) => (
        <UsageItem key={key} name={key} value={value} />
      ))}
      <SummaryBox totalPrice={totalPrice} />
    </>
  );
};

export default Container;
