import { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../store";

const DecorItem = ({ id, position, size, rotate = 0, usage }) => {
  const [hover, setHover] = useState(false);

  const geom = useLoader(STLLoader, `/items/models/${id}.stl`).clone();

  const dispatch = useDispatch();
  const ac = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    ac.clearCatalog();
    ac.setCatalog("chosenUsage", usage);
    ac.setUI("hideSettings", false);
  };

  return (
    <>
      <mesh
        onClick={usage ? handleClick : null}
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={size}
        rotation={[0, 0, rotate]}
      >
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial
          color={usage && hover ? "#eb6392" : "#9e9ea3"}
          emissive="#333333"
          flatShading={true}
        />
      </mesh>
    </>
  );
};

export default DecorItem;
