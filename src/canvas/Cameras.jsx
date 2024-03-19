import { PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { MOUSE_SPEED } from "../utils/constant";
import * as THREE from "three";

const Cameras = ({ current }) => {
  const ref = useRef();

  useFrame((state) => {
    if (current) {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        (-state.mouse.x * Math.PI) / 100,
        MOUSE_SPEED,
      );

      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        THREE.MathUtils.clamp(
          ref.current.rotation.x + (state.mouse.y * Math.PI) / 200,
          -0.174533,
          -0.174533 / 1.5,
        ),
        MOUSE_SPEED,
      );
    } else {
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        0,
        MOUSE_SPEED,
      );

      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        0,
        MOUSE_SPEED,
      );
    }
  });

  return (
    <>
      <PerspectiveCamera
        name="Camera"
        makeDefault={true}
        far={100}
        near={0.1}
        fov={25.361}
        position={[4.462, 5.999, 5.392]}
        rotation={[-0.665, 0.556, 0.393]}
        ref={ref}
      />
      <PerspectiveCamera
        name="CameraMobile"
        makeDefault={false}
        far={100}
        near={0.1}
        fov={25.361}
        position={[6.38, 7.991, 7.179]}
        rotation={[-0.787, 0.57, 0.497]}
      />
      <PerspectiveCamera
        name="CameraDesktop"
        makeDefault={false}
        far={100}
        near={0.1}
        fov={25.361}
        position={[-0.544, 1.183, 1.472]}
        rotation={[-0.065, -0.002, 0]}
        ref={ref}
      />
    </>
  );
};

export default Cameras;
