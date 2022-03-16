import React from "react";
import { SkeletElem } from "../../../../styles/constructor";

export interface SkeletonListProps {
  width: number;
  height: number;
  size: number;
}

const SkeletonList = ({ width, height, size }: SkeletonListProps) => {
  const arrOfNeededSize = new Array<string>(size).fill("skelet");
  return (
    <>
      {arrOfNeededSize.map((e, inx) => (
        <SkeletElem key={`skelet${inx}`} width={width} height={height} />
      ))}
    </>
  );
};

export default SkeletonList;
