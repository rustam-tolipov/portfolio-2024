/* eslint-disable react/no-unknown-property */
import { useRef, useState } from "react";
import { Room } from "./Room";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import TWEEN from "@tweenjs/tween.js";
import { isMobile } from "../utils/constant";

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
      {!isMobile && (
        <OrbitControls
          ref={ref}
          target={[0, 1, 0]}
          panSpeed={0.1}
          rotateSpeed={0.1}
          // minAzimuthAngle={-Math.PI / 11}
          // maxAzimuthAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 4}
          // maxPolarAngle={Math.PI / 1.9}
          enableZoom={false}
          enableDamping
          dampingFactor={0.1}
        />
      )}
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
