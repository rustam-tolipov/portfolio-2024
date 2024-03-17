/* eslint-disable react/no-unknown-property */
import { useContext, useEffect, useRef, useState } from "react";
import { Room } from "./Room";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import TWEEN from "@tweenjs/tween.js";

const Experience = () => {
  const ref = useRef();
  const [isCameraMoving, setIsCameraMoving] = useState(false);

  return (
    <>
      <ambientLight intensity={3} />
      <Room
        controls={ref}
        isCameraMoving={isCameraMoving}
        setIsCameraMoving={setIsCameraMoving}
      />
      <OrbitControls
        ref={ref}
        target={[0, 1, 0]}
        panSpeed={0.05}
        rotateSpeed={0.05}
        // maxPolarAngle={Math.PI / 1.9}
        // minPolarAngle={Math.PI / 3}
        // minAzimuthAngle={-Math.PI / 10}
        // maxAzimuthAngle={Math.PI / 2}
        // enableZoom={false}
        enableDamping
        dampingFactor={0.1}
      />
      <Tween setIsCameraMoving={setIsCameraMoving} />
    </>
  );
};

export default Experience;

function Tween({ setIsCameraMoving }) {
  useFrame(() => {
    TWEEN.update();

    if (TWEEN.getAll().length === 0) {
      setIsCameraMoving(false);
    } else {
      setIsCameraMoving(true);
    }
  });
}
