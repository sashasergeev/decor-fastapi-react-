import { DecorUsage } from "../../../api/ConstructorInterfaces";
import DecorItemInterface from "../../../api/DecorItemInterface";
import { useAppSelector } from "../store/hooks";

import SummaryBox from "./SummaryBox";
import UsageItem from "./UsageItem";

const Container = () => {
  const usages = useAppSelector(({ usage }) => usage);

  // choose unique items and add size if there is dublicates...
  const uniqueItems = Object.values(usages).reduce(
    (accum: DecorItemInterface[], item: DecorUsage) => {
      if (!item.chosen) return accum;
      const usage = item.name;
      let { size } = item.chosen;
      if (usage === "Middle" || usage === "Base") {
        // items on these usages applies twice
        if (size) size = size * 2;
      }
      const indexOfItem = accum.findIndex((e) => e.name);
      if (indexOfItem === -1) {
        return [...accum, { ...item.chosen, size }];
      } else {
        if (size) accum[indexOfItem].size = accum[indexOfItem].size! + size;
        return accum;
      }
    },
    []
  );

  // total price per set
  const totalPrice = Object.values(uniqueItems).reduce(
    (price, e) => (e.size ? Math.ceil(e.size) * e.price + price : price),
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
