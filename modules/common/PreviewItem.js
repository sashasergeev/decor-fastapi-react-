import { OrbitControls } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const PreviewItem = ({ item, mini }) => {
  const geom = useLoader(STLLoader, `/items/models/${item.id}.stl`);

  const state = useThree();

  useEffect(() => () => state.gl.dispose(), []);

  return (
    <>
      <directionalLight
        color="#FFFFFF"
        intensity={1}
        position={[-2.5, 5.4, 4.5]}
      />
      <ambientLight intensity={0.5} />
      <mesh scale={[1, item.height / 50, item.width / 50]} position={[0, 0, 0]}>
        <primitive object={geom} attach="geometry" />
        <meshStandardMaterial
          color="#787878"
          emissive="#333333"
          flatShading={true}
        />
      </mesh>
      <OrbitControls makeDefault dampingFactor={0.3} />
    </>
  );
};

export default PreviewItem;
