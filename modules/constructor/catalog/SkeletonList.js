import React from "react";
import { SkeletElem } from "../../../styles/constructor";

const SkeletonList = ({ width, height, size }) => {
  return (
    <>
      {[...Array(size)].map((e, inx) => (
        <SkeletElem key={`skelet${inx}`} width={width} height={height} />
      ))}
    </>
  );
};

export default SkeletonList;
