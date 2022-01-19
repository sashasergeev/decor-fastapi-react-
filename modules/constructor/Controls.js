import CameraControls from "camera-controls";
import { useRef, useEffect } from "react";

import { extend, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

CameraControls.install({ THREE });
extend({ CameraControls });

const Controls = ({ defCamPoint, defRotation }) => {
  const ref = useRef();
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  useFrame((state, delta) => ref.current.update(delta));

  useEffect(() => {
    if (defRotation && defCamPoint) {
      ref.current.moveTo(0, defCamPoint, 0);
      ref.current.rotateTo(...defRotation);
    }
  }, [defRotation, defCamPoint]);

  return <cameraControls ref={ref} args={[camera, gl.domElement]} />;
};

export default Controls;
