import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#000002"));
      }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
    >
      {/* <OrbitControls /> */}
      <Experience />
    </Canvas>
  );
};

export default Model;
