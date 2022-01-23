import { useState } from "react";

import { useDispatch } from "react-redux";
import { clearCatalog, setCatalog, toggleSettings } from "../store/actions";

const FrameBox = ({ position, size, variant, usage }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCatalog());
    dispatch(setCatalog({ chosenUsage: usage }));
    dispatch(toggleSettings("onItem"));
  };

  return (
    <mesh
      position={position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={usage ? handleClick : null}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={
          usage && hover ? "#f90055" : variant === "big" ? "#fff" : "#8a8a8a"
        }
        emissive={variant === "big" ? "#a6a6a6" : "#a1a1a1"}
        emissiveIntensity={1}
        metalness={0}
      />
    </mesh>
  );
};

export default FrameBox;
