import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Experience from "./Experience";
import { useContext, useEffect, useRef } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { isMobile } from "../utils/constant";

const Model = () => {
  const isMounted = useRef(false);

  const { setIsCanvasLoaded } = useContext(ProjectContext);

  useEffect(() => {
    isMounted.current = true;

    setTimeout(() => {
      if (isMounted.current) {
        setIsCanvasLoaded(true);
      }
    }, 500);

    return () => (isMounted.current = false);
  }, [setIsCanvasLoaded]);

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
        fov: isMobile ? 35 : 25,
      }}
    >
      <Experience />
    </Canvas>
  );
};

export default Model;
