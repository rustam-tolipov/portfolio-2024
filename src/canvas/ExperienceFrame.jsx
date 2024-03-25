import React from "react";
import { Image } from "@react-three/drei";

import { experience, experienceMobile } from "../assets";
import { isMobile } from "../utils/constant";

const ExperienceFrame = ({ nodes, materials }) => {
  return (
    <mesh
      name="experience"
      castShadow
      receiveShadow
      geometry={nodes.experience.geometry}
      material={materials.project}
      position={[0.773, 1.349, -1.121]}
      rotation={[Math.PI / 2, -Math.PI / 2, 0]}
    >
      <Image
        url={isMobile ? experienceMobile : experience}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, 0.007, 0]}
        scale={[0.609, 0.997, 1]}
      />
    </mesh>
  );
};

export default ExperienceFrame;
