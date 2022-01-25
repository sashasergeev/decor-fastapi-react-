import { useState, useEffect } from "react";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import { useDispatch, batch } from "react-redux";
import { setFocus, applyItemLength, clickOnItem } from "../store/actions";

const DecorItem = ({ id, position, size, rotate = 0, usage }) => {
  const [hover, setHover] = useState(false);
  const geom = useLoader(STLLoader, `/items/models/${id}.stl`).clone();

  const dispatch = useDispatch();

  useEffect(() => {
    if (position[0] >= 0) {
      // in case, when one item is applied more than once on usage (middle, bases...)
      batch(() => {
        // focus on chosen item
        const [x, y, z] = position;
        dispatch(
          setFocus({
            focus: { x, y, z },
            zoom: true,
          })
        );
        // add size of an item to state (usage -> chosen.size)
        dispatch(applyItemLength(usage, size[0]));
      });
    }
  }, [id]);

  // handle click on an object to change current item of its usage
  const handleClick = () => dispatch(clickOnItem(usage));

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
