import React from "react";

const Wall = ({ position, size }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshPhysicalMaterial transparent={true} roughness={0} metalness={0} />
    </mesh>
  );
};

export default Wall;
