import CameraControls from "camera-controls";
import { useRef, useEffect, useState } from "react";

import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

CameraControls.install({ THREE });
extend({ CameraControls });

const Controls = ({ defCamPoint, defRotation }) => {
  // settings controlls
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  useFrame((state, delta) => ref.current.update(delta));

  // default camera rotation
  const [rotated, setRotated] = useState(false);
  useEffect(() => {
    if (defRotation && defCamPoint && !rotated) {
      ref.current.moveTo(0, defCamPoint, 0);
      ref.current.rotateTo(...defRotation);
      setRotated(true);
    }
  }, [defRotation, defCamPoint]);

  return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
};

export default Controls;
