import React from "react";

const Glass = ({ position, size }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={"#738691"}
        transmission={1}
        emissiveIntensity={0}
        transparent={1}
      />
    </mesh>
  );
};

export default Glass;
