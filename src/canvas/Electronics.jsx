/* eslint-disable react/no-unknown-property */
import React from "react";
import { Html, Image } from "@react-three/drei";
import Desktop from "../ui/Desktop";
import { isMobile } from "../utils/constant";

const Electronics = ({ nodes, materials, Html, isCameraMoving }) => {
  return (
    <>
      <group
        name="desktop"
        position={[-0.539, 1.026, -0.944]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={materials.desktop}
        />
        <mesh
          name="Cube008_1"
          geometry={nodes.Cube008_1.geometry}
          material={materials.screen}
          position={[0, 0, -0.001]}
        >
          {/* {!isMobile && (
            <Html
              transform
              className="screen"
              scale={0.01}
              position={[0, -0.004, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              style={{
                opacity: isCameraMoving ? 0 : 1,
              }}
            >
              <Desktop />
            </Html>
          )} */}
        </mesh>

        <mesh
          name="desktop001"
          geometry={nodes.desktop001.geometry}
          material={materials.desktop}
          position={[0, 0.03, -0.155]}
        />
        <mesh
          name="desktop002"
          geometry={nodes.desktop002.geometry}
          material={materials.desktop}
          position={[0, 0.024, -0.367]}
          rotation={[-Math.PI / 2, 0, 0]}
        />

        <Image
          url={"/images/desktop.jpeg"}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.003, 0]}
          scale={[0.685, 0.399, 1]}
        />
      </group>

      <group
        name="mac_top"
        position={[-1.054, 0.66, -0.771]}
        rotation={[-1.826, -0.203, 0.658]}
      >
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={materials.gray}
        />
        <mesh
          name="Cube007_1"
          geometry={nodes.Cube007_1.geometry}
          material={materials.mac_screen}
        />
        <Image
          url={"/images/wallpaper.jpeg"}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -0.003, 0.102]}
          scale={[0.285, 0.19, 1]}
        />
      </group>

      <group
        name="tv"
        position={[-1.215, 0.521, 0.859]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
      >
        <mesh
          name="Cube101"
          geometry={nodes.Cube101.geometry}
          material={materials.desktop}
        />
        <mesh
          name="Cube101_1"
          geometry={nodes.Cube101_1.geometry}
          material={materials.screen}
        >
          {!isMobile && (
            <Html
              transform
              occlude="blending"
              className="tv"
              scale={0.01}
              position={[0, -0.004, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              style={{
                opacity: isCameraMoving ? 0 : 1,
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/AFtUpMTs4vI"
                title='BMW M4 - "Ultimate Racetrack"'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="h-full w-full"
              ></iframe>
            </Html>
          )}
        </mesh>
        <mesh
          name="tv001"
          geometry={nodes.tv001.geometry}
          material={materials.desktop}
          position={[-0.012, 0.002, -0.225]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="tv002"
          geometry={nodes.tv002.geometry}
          material={materials.desktop}
          position={[-0.003, 0.019, -0.119]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </>
  );
};

export default Electronics;
