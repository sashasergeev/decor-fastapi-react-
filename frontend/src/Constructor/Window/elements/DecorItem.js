import React from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const DecorItem = ({ url, position, size, rotate = 0 }) => {
  const geom = useLoader(STLLoader, url);

  return (
    <>
      <mesh position={position} scale={size} rotation={[0, 0, rotate]}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial
          color="#787878"
          emissive="#333333"
          flatShading={true}
        />
      </mesh>
    </>
  );
};

export default DecorItem;
