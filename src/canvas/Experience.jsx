/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useRef } from "react";
import { Room } from "./Room";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import TWEEN from "@tweenjs/tween.js";

const Experience = () => {
  const ref = useRef();

  return (
    <>
      <ambientLight intensity={3} />
      <Room controls={ref} />
      <OrbitControls
        ref={ref}
        target={[0, 1, 0]}
        panSpeed={0.05}
        rotateSpeed={0.05}
        enableZoom={false}
        enableDamping
        dampingFactor={0.1}
      />
      <Tween />
    </>
  );
};

export default Experience;

function Tween() {
  useFrame(() => {
    TWEEN.update();
  });
}
