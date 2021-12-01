const WinFrameBox = ({ position, size, variant }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={variant === "big" ? "#fff" : "#8a8a8a"}
        emissive={variant === "big" ? "#a6a6a6" : "#a1a1a1"}
        emissiveIntensity={1}
        metalness={0}
      />
    </mesh>
  );
};

export default WinFrameBox;
