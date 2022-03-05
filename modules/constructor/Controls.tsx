import CameraControls from "camera-controls";
import { useState, useMemo } from "react";

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { setScene, moveCameraBack } from "./store/actions";
import { useAppDispatch, useAppSelector } from "./store/hooks";

CameraControls.install({ THREE });

interface ControlsPropsI {
  defCamPoint: number;
  defRotation: [number, number, boolean];
}

const Controls = ({ defCamPoint, defRotation }: ControlsPropsI) => {
  const [rotated, setRotated] = useState(false);

  // redux
  const dispatch = useAppDispatch();
  const { zoom, focus, moveBack } = useAppSelector(({ scene }) => scene);

  const pos = new THREE.Vector3(),
    look = new THREE.Vector3();

  // settings controlls
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);

  const defPosition = (back: boolean) => {
    controls.moveTo(0, defCamPoint, 0, true);
    controls.rotateTo(...defRotation);
    controls.dolly(back ? -2 : 0, true);
    setRotated(true);
  };
  return useFrame((state, delta) => {
    if (defCamPoint && defRotation && !rotated) {
      defPosition(false);
    }
    if (zoom) {
      dispatch(setScene({ zoom: false }));
      if (focus) {
        pos.set(focus.x, focus.y, focus.z + 0.8);
        look.set(focus.x, focus.y, focus.z - 0.5);
      }

      state.camera.position.lerp(pos, 1);
      state.camera.updateProjectionMatrix();
      controls.setLookAt(
        state.camera.position.x,
        state.camera.position.y,
        state.camera.position.z,
        look.x,
        look.y,
        look.z,
        true
      );
    }
    if (moveBack) {
      dispatch(moveCameraBack());
      defPosition(true);
    }
    return controls.update(delta);
  });
};

export default Controls;
