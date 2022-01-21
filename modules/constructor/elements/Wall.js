import React from "react";

const Wall = ({ position, size }) => {
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshStandardMaterial
        color={"#b8bec3"}
        transparent={true}
        emissive={"#000"}
        emissiveIntensity={1}
        roughness={0}
        metalness={0}
      />
    </mesh>
  );
};

export default Wall;
