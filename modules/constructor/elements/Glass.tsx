import React from "react";
import { Vector3 } from 'three'
import { BasicElementsProps } from "../../../api/ConstructorInterfaces";

const Glass = ({ position, size } : BasicElementsProps) => {
  return (
    <mesh position={new Vector3(...position)}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={"#738691"}
        transmission={1.2}
        emissiveIntensity={0}
        transparent={true}
        reflectivity={0}
      />
    </mesh>
  );
};

export default Glass;
