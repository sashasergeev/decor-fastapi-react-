import React from "react";

const Door = ({ position, size }) => {
  return (
    <>
      <mesh position={position}>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={"#a3a3a3"}
          transmission={0}
          emissiveIntensity={0}
        />
      </mesh>
      <mesh position={[position[0], position[1], position[2] + 0.01]}>
        <boxGeometry args={[size[0] * 0.75, size[1] * 0.9, size[2]]} />
        <meshStandardMaterial
          color={"#ffffff"}
          transmission={0}
          emissiveIntensity={0}
          flatShading={true}
        />
      </mesh>
      <mesh
        position={[
          size[0] / 2 - (size[0] * 0.25) / 4,
          position[1],
          position[2] + 0.01,
        ]}
      >
        <boxGeometry args={[size[0] * 0.1, size[1] * 0.1, size[2]]} />
        <meshStandardMaterial
          color={"#626263"}
          transmission={0}
          emissiveIntensity={0}
          flatShading={true}
        />
      </mesh>
    </>
  );
};

export default Door;
