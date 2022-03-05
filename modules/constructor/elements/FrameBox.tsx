import { useState } from "react";

import { BasicElementsProps } from "../../../api/ConstructorInterfaces";
import { clickOnItem } from "../store/actions";

import { Vector3, Color } from "three";
import { useAppDispatch } from "../store/hooks";

const FrameBox = ({ position, size, variant, usage }: BasicElementsProps) => {
  const [hover, setHover] = useState(false);

  const dispatch = useAppDispatch();
  const handleClick = () => (usage ? dispatch(clickOnItem(usage)) : null);

  return (
    <mesh
      position={new Vector3(...position)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onClick={() => (usage ? handleClick() : null)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={
          usage && hover
            ? new Color(0xf90055)
            : variant === "big"
            ? new Color(0xfff)
            : new Color(0x8a8a8a)
        }
        emissive={variant === "big" ? new Color(0xa6a6a6) : new Color(0xa1a1a1)}
        emissiveIntensity={1}
        metalness={0}
      />
    </mesh>
  );
};

export default FrameBox;
