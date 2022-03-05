import React from "react";
import { BasicElementsProps } from "../../../api/ConstructorInterfaces";
import { Vector3, Color } from "three";

const Wall = ({ position, size } : BasicElementsProps) => {
  return (
    <mesh position={new Vector3(...position)}>
      <planeGeometry args={size} />
      <meshStandardMaterial
        color={"#b8bec3"}
        transparent={true}
        emissive={new Color(0x000000)}
        emissiveIntensity={1}
        roughness={0}
        metalness={0}
      />
    </mesh>
  );
};

export default Wall;
