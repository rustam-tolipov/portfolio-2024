import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./Experience";

const Model = () => {
  return (
    <Canvas
      onCreated={({ gl }) => {
        gl.setClearColor(new THREE.Color("#000002"));
      }}
      dpr={[1, 2]}
      gl={{ antialias: true }}
      camera={{
        position: [4.462, 5.999, 5.392],
        rotation: [-0.787, 0.57, 0.497],
        fov: 25,
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default Model;
