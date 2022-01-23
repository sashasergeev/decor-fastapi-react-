import { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import { useDispatch } from "react-redux";
import {
  clearCatalog,
  setCatalog,
  setFocus,
  toggleSettings,
} from "../store/actions";

const DecorItem = ({ id, position, size, rotate = 0, usage }) => {
  const [hover, setHover] = useState(false);

  const geom = useLoader(STLLoader, `/items/models/${id}.stl`).clone();

  const dispatch = useDispatch();

  useEffect(() => {
    const [x, y, z] = position;
    dispatch(
      setFocus({
        focus: { x, y, z },
        zoom: true,
      })
    );
  }, [id]);

  const handleClick = () => {
    dispatch(clearCatalog());
    dispatch(setCatalog({ chosenUsage: usage }));
    dispatch(toggleSettings("onItem"));
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
          color={usage && hover ? "#db5e88" : "#9e9ea3"}
          emissive="#333333"
          flatShading={true}
        />
      </mesh>
    </>
  );
};

export default DecorItem;
