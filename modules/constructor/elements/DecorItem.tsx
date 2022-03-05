import { useState, useEffect } from "react";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Color } from "three";

import { batch } from "react-redux";
import { setFocus, applyItemLength, clickOnItem } from "../store/actions";
import { useAppDispatch } from "../store/hooks";

interface DecorItemAlign {
  id: number;
  position: [number, number, number];
  size: [number, number, number];
  rotate?: number;
  usage: string;
}

const DecorItem = ({
  id,
  position,
  size,
  rotate = 0,
  usage,
}: DecorItemAlign) => {
  const [hover, setHover] = useState(false);
  const geom = useLoader(STLLoader, `/items/models/${id}.stl`).clone();

  const dispatch = useAppDispatch();

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
  const handleClick = () => {
    dispatch(clickOnItem(usage));
  };

  return (
    <>
      <mesh
        onClick={() => (usage ? handleClick() : null)}
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={size}
        rotation={[0, 0, rotate]}
      >
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial
          color={usage && hover ? "#db5e88" : "#9e9ea3"}
          emissive={new Color(0x333333)}
          flatShading={true}
        />
      </mesh>
    </>
  );
};

export default DecorItem;
