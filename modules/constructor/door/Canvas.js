import React from "react";
import { Canvas as Canvas3d } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";

import FrameBox from "../elements/FrameBox";
import DecorItem from "../elements/DecorItem";
import Door from "../elements/Door";
import Wall from "../elements/Wall";

const Canvas = ({ size, decor }) => {
  let { height, width } = size;
  width = width / 50; // translate cm to units in 3d
  height = height / 50; // translate cm to units in 3d
  const bigFrame = 0.2; // ширина широкой внешней рамки

  const upperMiddlePoint = height - bigFrame / 2; // позиция на оси y, куда должна ставиться верхняя рамка
  const vertMiddlePoint = height / 2; // позиция середины для элементов по y оси
  const widthOfInnersHor = width - bigFrame * 2;
  const heightOfInnerVert = height - bigFrame * 2;

  // objects of chosen decor
  const topDecor = decor.filter((e) => e.name === "Top")[0]?.chosen;
  const middleDecor = decor.filter((e) => e.name === "Middle")[0]?.chosen;
  const baseDecor = decor.filter((e) => e.name === "Base")[0]?.chosen;

  // calculating specific sizes/positions
  const isTopDec9 = topDecor && topDecor?.category_id === 9;
  const isTopDec9baseDec = isTopDec9 && baseDecor;
  const sidesY_pos = isTopDec9baseDec
    ? vertMiddlePoint +
      topDecor.height / 200 -
      bigFrame / 2 +
      baseDecor.height / 100
    : isTopDec9
    ? vertMiddlePoint + topDecor.height / 200 - bigFrame / 2
    : baseDecor
    ? vertMiddlePoint - bigFrame / 2 + baseDecor.height / 100
    : vertMiddlePoint - bigFrame / 2;
  const sidesX_size = isTopDec9baseDec
    ? heightOfInnerVert +
      topDecor.height / 100 +
      bigFrame -
      baseDecor.height / 50
    : isTopDec9
    ? heightOfInnerVert + topDecor.height / 100 + bigFrame
    : baseDecor
    ? heightOfInnerVert + bigFrame - baseDecor.height / 50
    : heightOfInnerVert + bigFrame;

  return (
    <Canvas3d camera={{ position: [3, 5, 10], fov: 40, near: 0.01 }}>
      <directionalLight
        color="#FFFFFF"
        intensity={1}
        position={[-2.5, 5.4, 4.5]}
      />
      <ambientLight intensity={0.3} />
      <gridHelper />

      {/* big window frames */}
      {/* ВЕРХ */}
      {topDecor ? (
        <DecorItem
          position={[
            0,
            height - bigFrame + topDecor.height / 200,
            topDecor.width / 200,
          ]}
          id={topDecor.id}
          size={[
            width - bigFrame * 2 + topDecor.height / 50,
            topDecor.height / 100,
            topDecor.width / 100,
          ]}
        />
      ) : (
        <FrameBox
          position={[0, upperMiddlePoint, 0]}
          variant="big"
          size={[width, bigFrame, 0.15]}
        />
      )}

      {/* СТОРОНЫ */}
      {middleDecor ? (
        <>
          <DecorItem
            position={[
              -(width / 2 - bigFrame) - middleDecor.height / 200,
              sidesY_pos,
              middleDecor.width / 200,
            ]}
            id={middleDecor.id}
            size={[
              sidesX_size,
              middleDecor.height / 100,
              middleDecor.width / 100,
            ]}
            rotate={1.5707963268}
          />
          <DecorItem
            position={[
              width / 2 - bigFrame + middleDecor.height / 200,
              sidesY_pos,
              middleDecor.width / 200,
            ]}
            id={middleDecor.id}
            size={[
              sidesX_size,
              middleDecor.height / 100,
              middleDecor.width / 100,
            ]}
            rotate={-1.5707963268}
          />
        </>
      ) : (
        <>
          <FrameBox
            position={[-(width / 2 - bigFrame / 2), vertMiddlePoint, 0]}
            variant="big"
            size={[bigFrame, height, 0.15]}
          />
          <FrameBox
            position={[width / 2 - bigFrame / 2, vertMiddlePoint, 0]}
            variant="big"
            size={[bigFrame, height, 0.15]}
          />
        </>
      )}

      {/* БАЗЫ */}
      {baseDecor && (
        <>
          <DecorItem
            position={[
              middleDecor
                ? -(width / 2 - bigFrame) - middleDecor.height / 200
                : 1,
              baseDecor.height / 100,
              baseDecor.width / 200,
            ]}
            id={baseDecor.id}
            size={[
              middleDecor ? middleDecor.height / 100 : 0.2,
              baseDecor.height / 50,
              baseDecor.width / 100,
            ]}
          />
          <DecorItem
            position={[
              middleDecor ? width / 2 - bigFrame + middleDecor.height / 200 : 1,
              baseDecor.height / 100,
              baseDecor.width / 200,
            ]}
            id={baseDecor.id}
            size={[
              middleDecor ? middleDecor.height / 100 : 0.2,
              baseDecor.height / 50,
              baseDecor.width / 100,
            ]}
          />
        </>
      )}

      <Sky
        distance={40}
        sunPosition={[0, 5, 5]}
        inclination={0}
        azimuth={16.3}
        turbidity={10}
        rayleigh={0.04}
      />
      {/* door */}
      <Door
        position={[0, vertMiddlePoint - bigFrame / 2, 0]}
        size={[widthOfInnersHor, heightOfInnerVert + bigFrame, 0.01]}
      />

      {/* PLANE AS WALL */}
      <Wall position={[0, 2.5, 0]} size={[10, 5, 1]} />

      {/* make it interactive */}
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas3d>
  );
};

export default Canvas;
