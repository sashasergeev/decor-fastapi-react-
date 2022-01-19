import React from "react";

const Glass = ({ position, size }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={"#738691"}
        transmission={1.2}
        emissiveIntensity={0}
        transparent={1}
        reflectivity={0}
      />
    </mesh>
  );
};

export default Glass;
