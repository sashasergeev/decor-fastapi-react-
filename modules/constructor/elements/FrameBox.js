import { useState } from "react";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const FrameBox = ({ position, size, variant, usage }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    ac.clearCatalog();
    ac.setCatalog("chosenUsage", usage);
    ac.setUI("hideSettings", false);
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
