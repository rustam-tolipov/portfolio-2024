import { useContext } from "react";
import { Image } from "@react-three/drei";

import { ProjectContext } from "../context/ProjectContext.jsx";

import {
  rasmgaOl,
  budgetPlanner,
  socialAPI,
  handheld,
  diorMovers,
  selmart,
} from "../assets/index.js";
import { BASE_URL } from "../utils/constant.js";

const Frames = ({ nodes, materials }) => {
  const { onHover } = useContext(ProjectContext);

  return (
    <>
      <mesh
        name="frame001"
        geometry={nodes.frame001.geometry}
        material={materials.project}
        position={[-1.264, 0.977, -0.035]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project1")}
        onPointerOut={() => onHover(false)}
        onClick={() => window.open(`${BASE_URL}/rasmga_ol`, "_blank")}
      >
        <Image
          url={rasmgaOl}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0065, 0]}
          scale={[0.38, 0.24, 0.5]}
        />
      </mesh>
      <mesh
        name="frame002"
        geometry={nodes.frame002.geometry}
        material={materials.project}
        position={[-1.264, 1.284, -0.071]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project2")}
        onPointerOut={() => onHover(false)}
        onClick={() =>
          window.open(`${BASE_URL}/personal-budget-planner-v2`, "_blank")
        }
      >
        <Image
          url={budgetPlanner}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0065, 0]}
          scale={[0.458, 0.298, 0.5]}
        />
      </mesh>
      <mesh
        name="frame003"
        geometry={nodes.frame003.geometry}
        material={materials.project}
        position={[-1.264, 1.594, 0.09]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project3")}
        onPointerOut={() => onHover(false)}
        onClick={() => window.open(`${BASE_URL}/dior-movers`, "_blank")}
      >
        <Image
          url={socialAPI}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0063, 0]}
          scale={[0.38, 0.24, 0.5]}
        />
      </mesh>
      <mesh
        name="frame004"
        geometry={nodes.frame004.geometry}
        material={materials.project}
        position={[-1.264, 1.172, 0.344]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project4")}
        onPointerOut={() => onHover(false)}
        onClick={() => window.open(`${BASE_URL}/selmart`, "_blank")}
      >
        <Image
          url={selmart}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0065, 0]}
          scale={[0.265, 0.5, 0.5]}
        />
      </mesh>
      <mesh
        name="frame005"
        geometry={nodes.frame005.geometry}
        material={materials.project}
        position={[-1.264, 1.517, -0.482]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project5")}
        onPointerOut={() => onHover(false)}
        onClick={() => window.open(`${BASE_URL}/best-dental-clinic`, "_blank")}
      >
        <Image
          url={diorMovers}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0065, 0]}
          scale={[0.272, 0.505, 0.5]}
        />
      </mesh>
      <mesh
        name="frame006"
        geometry={nodes.frame006.geometry}
        material={materials.project}
        position={[-1.264, 1.598, -0.221]}
        rotation={[0, 0, -Math.PI / 2]}
        onPointerOver={() => onHover("project6")}
        onPointerOut={() => onHover(false)}
        onClick={() => window.open(`${BASE_URL}/handheld`, "_blank")}
      >
        <Image
          url={handheld}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          position={[0, 0.0065, 0]}
          scale={[0.16, 0.24, 0.5]}
        />
      </mesh>
    </>
  );
};

export default Frames;
