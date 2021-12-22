import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import WinFrameBox from "./elements/WinFrameBox";
import Wall from "./elements/Wall";
import Glass from "./elements/Glass";
import DecorItem from "./elements/DecorItem";

// import * as THREE from "three";

const WindowCanvas = ({ winSize, decor }) => {
  let { height, width } = winSize;
  width = width / 50; // translate cm to units in 3d
  height = height / 50; // translate cm to units in 3d

  const bigFrame = 0.2; // ширина широкой внешней рамки

  const lowestPoint = 1.5 - bigFrame / 2; // нижняя грань
  const upperMiddlePoint = lowestPoint + height - bigFrame / 2; // позиция на оси y, куда должна ставиться верхняя рамка
  const vertMiddlePoint = height / 2 + lowestPoint; // позиция середины для элементов по y оси
  const widthOfInnersHor = width - bigFrame * 2;
  const heightOfInnerVert = height - bigFrame * 2;

  const topDecor = decor.filter((e) => e.name === "Верх")[0]?.chosen;
  const middleDecor = decor.filter((e) => e.name === "Середина")[0]?.chosen;
  const bottomDecor = decor.filter((e) => e.name === "Низ")[0]?.chosen;
  console.log(decor);
  return (
    <Canvas camera={{ position: [3, 5, 10], fov: 40, near: 0.01 }}>
      <directionalLight
        color="#FFFFFF"
        intensity={1}
        position={[-2.5, 5.4, 4.5]}
      />
      <gridHelper />

      {/* big window frames */}
      {/* ВЕРХ */}
      {topDecor ? (
        <Suspense fallback={null}>
          <DecorItem
            position={[
              0,
              lowestPoint + height - bigFrame + topDecor.height / 200,
              topDecor.width / 200,
            ]}
            url={topDecor.model_3d}
            size={[
              width - bigFrame * 2 + topDecor.height / 50,
              topDecor.height / 100,
              topDecor.width / 100,
            ]}
          />
        </Suspense>
      ) : (
        <WinFrameBox
          position={[0, upperMiddlePoint, 0]}
          variant="big"
          size={[width, bigFrame, 0.15]}
        />
      )}
      {/* СТОРОНЫ */}
      {middleDecor ? (
        <>
          <Suspense fallback={null}>
            <DecorItem
              position={[
                -(width / 2 - bigFrame) - middleDecor.height / 200,
                topDecor
                  ? vertMiddlePoint + topDecor.height / 200
                  : vertMiddlePoint,
                middleDecor.width / 200,
              ]}
              url={middleDecor.model_3d}
              size={[
                topDecor
                  ? heightOfInnerVert + topDecor.height / 100
                  : height - middleDecor.height / 100,
                middleDecor.height / 100,
                middleDecor.width / 100,
              ]}
              rotate={1.5707963268}
            />
          </Suspense>
          <Suspense fallback={null}>
            <DecorItem
              position={[
                width / 2 - bigFrame + middleDecor.height / 200,
                topDecor
                  ? vertMiddlePoint + topDecor.height / 200
                  : vertMiddlePoint,
                middleDecor.width / 200,
              ]}
              url={middleDecor.model_3d}
              size={[
                topDecor
                  ? heightOfInnerVert + topDecor.height / 100
                  : height - middleDecor.height / 100,
                middleDecor.height / 100,
                middleDecor.width / 100,
              ]}
              rotate={-1.5707963268}
            />
          </Suspense>
        </>
      ) : (
        <>
          <WinFrameBox
            position={[-(width / 2 - bigFrame / 2), vertMiddlePoint, 0]}
            variant="big"
            size={[bigFrame, height, 0.15]}
          />
          <WinFrameBox
            position={[width / 2 - bigFrame / 2, vertMiddlePoint, 0]}
            variant="big"
            size={[bigFrame, height, 0.15]}
          />
        </>
      )}

      {/* НИЗ */}
      {bottomDecor ? (
        <Suspense fallback={null}>
          <DecorItem
            position={[
              0,
              1.6 - bottomDecor.height / 200,
              bottomDecor.width / 200,
            ]}
            url={bottomDecor.model_3d}
            size={[width, bottomDecor.height / 100, bottomDecor.width / 100]}
          />
        </Suspense>
      ) : (
        <WinFrameBox
          position={[0, 1.5, 0]}
          variant="big"
          size={[width, bigFrame, 0.15]}
        />
      )}

      {/* small details on window * bottom - top - left - right */}
      <WinFrameBox
        position={[0, lowestPoint + bigFrame + 0.025, 0]}
        variant="small"
        size={[widthOfInnersHor, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[0, upperMiddlePoint - bigFrame / 2 - 0.025, 0]}
        variant="small"
        size={[widthOfInnersHor, 0.05, 0.05]}
      />
      <WinFrameBox
        position={[-(width / 2) + bigFrame + 0.025, vertMiddlePoint, 0]}
        variant="small"
        size={[0.05, heightOfInnerVert, 0.05]}
      />
      <WinFrameBox
        position={[width / 2 - bigFrame - 0.025, vertMiddlePoint, 0]}
        variant="small"
        size={[0.05, heightOfInnerVert, 0.05]}
      />

      {/* sticks in between glass * vert - hor */}
      <WinFrameBox
        position={[0, vertMiddlePoint, 0]}
        variant="small"
        size={[0.025, heightOfInnerVert, 0.05]}
      />
      <WinFrameBox
        position={[0, vertMiddlePoint, 0]}
        variant="small"
        size={[widthOfInnersHor, 0.025, 0.05]}
      />

      {/* glass */}
      <Glass
        position={[0, vertMiddlePoint, 0]}
        size={[widthOfInnersHor, heightOfInnerVert, 0.01]}
      />

      {/* PLANE AS WALL */}
      <Wall position={[0, 2.5, 0]} size={[10, 5, 1]} />

      {/* make it interactive */}
      <OrbitControls makeDefault dampingFactor={0.3} />
    </Canvas>
  );
};

export default WindowCanvas;
