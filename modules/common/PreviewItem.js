import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const PreviewItem = ({ item, mini }) => {
  const geom = useLoader(STLLoader, `/items/models/${item.id}.stl`);
  return (
    <Canvas
      style={{ width: mini ? "220px" : "300px" }}
      camera={{ position: [0.8, 0.2, 0.4], fov: 50, near: 0.01 }}
    >
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
    </Canvas>
  );
};

export default PreviewItem;
