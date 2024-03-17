/* eslint-disable react/no-unknown-property */
import React, { useContext, useEffect, useRef } from "react";
import {
  Html,
  PerspectiveCamera,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { ProjectContext } from "../context/ProjectContext";

import Frames from "./Frames";

import TWEEN from "@tweenjs/tween.js";
import annotations from "../../data/annotations.json";
import { DAMPING_FACTOR, SCROLL_SPEED, isMobile } from "../utils/constant";

export function Room({ controls, isCameraMoving }) {
  const group = useRef();

  const { nodes, materials, animations } = useGLTF("models/room.glb");
  const { actions } = useAnimations(animations, group);

  const { camera } = useThree();

  const { isCurrent, scrollPosition } = useContext(ProjectContext);

  useEffect(() => {
    const handleChangeCamera = (item) => {
      // change target
      new TWEEN.Tween(controls.current.target)
        .to(
          {
            x: item.lookAt.x,
            y: item.lookAt.y,
            z: item.lookAt.z,
          },
          2100,
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();

      // change camera position
      new TWEEN.Tween(camera.position)
        .to(
          {
            x: item.position.x,
            y: item.position.y,
            z: item.position.z,
          },
          2000,
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    };

    if (isCurrent && !isMobile) {
      let current = annotations.find((item) => item.title === isCurrent);
      handleChangeCamera(current);
    }
  }, [camera.position, controls, isCurrent]);

  useEffect(
    () => void (actions.CameraActionMobile.reset().play().paused = true),
    [],
  );
  useEffect(() => void (actions.CameraAction.reset().play().paused = true), []);

  const animateOnScroll = (item) => {
    return (item.time +=
      (item.getClip().duration * scrollPosition * SCROLL_SPEED - item.time) *
      DAMPING_FACTOR);
  };

  useFrame((state) => {
    if (actions && isMobile) {
      animateOnScroll(actions.CameraActionMobile);
    }
  });

  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <Frames nodes={nodes} materials={materials} />

        <PerspectiveCamera
          name="CameraMobile"
          makeDefault={isMobile}
          far={100}
          near={0.1}
          fov={39.598}
          position={[6.38, 7.991, 7.179]}
          rotation={[-0.787, 0.57, 0.497]}
        />

        <mesh
          name="base"
          geometry={nodes.base.geometry}
          material={materials.base}
        />
        <mesh
          name="mac_key"
          geometry={nodes.mac_key.geometry}
          material={materials.keys}
          position={[-1.136, 0.659, -0.67]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mak_key"
          geometry={nodes.mak_key.geometry}
          material={materials.keys}
          position={[-1.125, 0.659, -0.658]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mak_key001"
          geometry={nodes.mak_key001.geometry}
          material={materials.keys}
          position={[-1.098, 0.659, -0.656]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mak_key002"
          geometry={nodes.mak_key002.geometry}
          material={materials.keys}
          position={[-1.086, 0.659, -0.642]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mak_key003"
          geometry={nodes.mak_key003.geometry}
          material={materials.keys}
          position={[-1.073, 0.659, -0.629]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mak_key004"
          geometry={nodes.mak_key004.geometry}
          material={materials.keys}
          position={[-1.077, 0.659, -0.6]}
          rotation={[0, 0.689, 0]}
        />
        <mesh
          name="mac_key001"
          geometry={nodes.mac_key001.geometry}
          material={materials.keys}
          position={[-0.712, 0.662, -0.627]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="mak_key005"
          geometry={nodes.mak_key005.geometry}
          material={materials.keys}
          position={[-0.712, 0.662, -0.604]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="mak_key006"
          geometry={nodes.mak_key006.geometry}
          material={materials.keys}
          position={[-0.686, 0.662, -0.577]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="mak_key007"
          geometry={nodes.mak_key007.geometry}
          material={materials.keys}
          position={[-0.685, 0.662, -0.55]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="mak_key008"
          geometry={nodes.mak_key008.geometry}
          material={materials.keys}
          position={[-0.683, 0.662, -0.523]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="mak_key009"
          geometry={nodes.mak_key009.geometry}
          material={materials.keys}
          position={[-0.711, 0.662, -0.495]}
          rotation={[0, 0.003, 0]}
        />
        <mesh
          name="floor"
          geometry={nodes.floor.geometry}
          material={materials.floor}
          position={[-0.03, 0.137, 0.067]}
        />
        <mesh
          name="room"
          geometry={nodes.room.geometry}
          material={materials.wall}
          position={[-0.256, 0.898, -0.15]}
        />
        <mesh
          name="experience"
          geometry={nodes.experience.geometry}
          material={materials.project}
          position={[0.773, 1.349, -1.121]}
          rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="laptop001"
          geometry={nodes.laptop001.geometry}
          material={materials.desktop}
          position={[-0.548, 0.657, -0.559]}
          rotation={[Math.PI, 0, 0]}
        />
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
            // position={[0, 0, -0.001]}
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
                <iframe
                  src="https://www.youtube.com/embed/AFtUpMTs4vI"
                  title='BMW M4 - "Ultimate Racetrack"'
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="h-full w-full"
                ></iframe>
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
        </group>
        <mesh
          name="speaker"
          geometry={nodes.speaker.geometry}
          material={materials.desktop}
          position={[0.103, 0.743, -1.025]}
        />
        <group name="clipboard001" position={[0.525, 0.389, -0.808]}>
          <mesh
            name="Cube071"
            geometry={nodes.Cube071.geometry}
            material={materials.desktop}
          />
          <mesh
            name="Cube071_1"
            geometry={nodes.Cube071_1.geometry}
            material={materials.screen}
          />
          <mesh
            name="clipboard"
            geometry={nodes.clipboard.geometry}
            material={materials.desktop}
            position={[0.02, -0.034, -0.032]}
          />
        </group>
        <mesh
          name="chair"
          geometry={nodes.chair.geometry}
          material={materials.desktop}
          position={[-0.539, 0.436, 0.032]}
        >
          <mesh
            name="chair001"
            geometry={nodes.chair001.geometry}
            material={materials.desktop}
            position={[-0.002, -0.175, 0.002]}
          />
          <mesh
            name="chair002"
            geometry={nodes.chair002.geometry}
            material={materials.desktop}
            position={[-0.192, -0.264, 0.003]}
            rotation={[0.427, 0.321, -1.698]}
          />
          <mesh
            name="chair003"
            geometry={nodes.chair003.geometry}
            material={materials.desktop}
            position={[-0.06, -0.264, 0.181]}
            rotation={[0.423, -0.289, -1.428]}
          />
          <mesh
            name="chair004"
            geometry={nodes.chair004.geometry}
            material={materials.desktop}
            position={[0.148, -0.264, 0.115]}
            rotation={[0.423, -0.289, -1.428]}
          />
          <mesh
            name="chair005"
            geometry={nodes.chair005.geometry}
            material={materials.desktop}
            position={[0.151, -0.264, -0.107]}
            rotation={[0.423, -0.289, -1.428]}
          />
          <mesh
            name="chair006"
            geometry={nodes.chair006.geometry}
            material={materials.desktop}
            position={[-0.062, -0.264, -0.179]}
            rotation={[0.427, 0.321, -1.698]}
          />
          <mesh
            name="chair008"
            geometry={nodes.chair008.geometry}
            material={materials.desktop}
            position={[0.153, 0.085, 0.003]}
          />
          <mesh
            name="chair009"
            geometry={nodes.chair009.geometry}
            material={materials.desktop}
            position={[0.002, -0.001, 0.005]}
            rotation={[-1.248, 0, 0]}
          />
          <mesh
            name="chair010"
            geometry={nodes.chair010.geometry}
            material={materials.desktop}
            position={[0.002, 0.027, 0.133]}
            rotation={[-1.248, 0, 0]}
          />
          <mesh
            name="chair011"
            geometry={nodes.chair011.geometry}
            material={materials.desktop}
            position={[0, 0.215, 0.192]}
            rotation={[-1.455, 0, 0]}
          />
          <mesh
            name="chair012"
            geometry={nodes.chair012.geometry}
            material={materials.desktop}
            position={[-0.16, 0.085, 0.003]}
          />
        </mesh>
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
            {/* {!isMobile && (
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
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="h-full w-full"
                ></iframe>
              </Html>
            )} */}
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
        <mesh
          name="tumb"
          geometry={nodes.tumb.geometry}
          material={materials.desktop}
          position={[-1.176, 0.219, 0.87]}
        />
        <mesh
          name="mouse"
          geometry={nodes.mouse.geometry}
          material={materials.desktop}
          position={[-0.268, 0.664, -0.543]}
          rotation={[-0.037, 0.779, 0.026]}
        />
        <mesh
          name="pencil"
          geometry={nodes.pencil.geometry}
          material={materials.desktop}
          position={[0.115, 0.658, -0.291]}
          rotation={[0, 1.279, -Math.PI / 2]}
        />
        <mesh
          name="pencil001"
          geometry={nodes.pencil001.geometry}
          material={materials.desktop}
          position={[0.003, 0.666, -0.328]}
          rotation={[0, 0.593, -Math.PI / 2]}
        />
        <mesh
          name="desk_gadget001"
          geometry={nodes.desk_gadget001.geometry}
          material={materials.desktop}
          position={[-0.091, 0.661, -0.813]}
        />
        <group name="desk_gadget" position={[-0.091, 0.72, -0.813]}>
          <mesh
            name="Cube010"
            geometry={nodes.Cube010.geometry}
            material={materials.desktop}
          />
          <mesh
            name="Cube010_1"
            geometry={nodes.Cube010_1.geometry}
            material={materials.screen}
          />
        </group>
        <mesh
          name="book_hold"
          geometry={nodes.book_hold.geometry}
          material={materials.desktop}
          position={[-1.116, 1.227, -1.042]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube005"
          geometry={nodes.Cube005.geometry}
          material={materials.screen}
          position={[0.021, 1.448, -1.108]}
          rotation={[0, 0, -1.285]}
        >
          <mesh
            name="clock"
            geometry={nodes.clock.geometry}
            material={materials.desktop}
            position={[0, 0, -0.014]}
            rotation={[Math.PI / 2, 1.285, 0]}
          />
          {/* <mesh
            name="Cube004_1"
            geometry={nodes.Cube004_1.geometry}
            material={materials.screen}
            rotation={[0, 0, 1.285]}
          /> */}
        </mesh>
        <mesh
          name="desk"
          geometry={nodes.desk.geometry}
          material={materials.book}
          position={[-0.536, 0.63, -0.676]}
        >
          <mesh
            name="desk001"
            geometry={nodes.desk001.geometry}
            material={materials.book}
            position={[0.627, -0.25, -0.332]}
          />
          <mesh
            name="desk002"
            geometry={nodes.desk002.geometry}
            material={materials.book}
            position={[-0.611, -0.25, 0.348]}
          />
          <mesh
            name="desk003"
            geometry={nodes.desk003.geometry}
            material={materials.book}
            position={[-0.611, -0.25, -0.332]}
          />
          <mesh
            name="desk004"
            geometry={nodes.desk004.geometry}
            material={materials.book}
            position={[0.627, -0.25, 0.348]}
          />
        </mesh>
        <mesh
          name="table"
          geometry={nodes.table.geometry}
          material={materials.book}
          position={[0.487, 0.281, 0.869]}
          rotation={[0, -1.571, 0]}
        >
          <mesh
            name="desk006"
            geometry={nodes.desk006.geometry}
            material={materials.book}
            position={[0.245, -0.065, 0.106]}
          />
          <mesh
            name="desk007"
            geometry={nodes.desk007.geometry}
            material={materials.book}
            position={[0.245, -0.065, -0.112]}
          />
          <mesh
            name="desk008"
            geometry={nodes.desk008.geometry}
            material={materials.book}
            position={[-0.25, -0.065, 0.106]}
          />
          <mesh
            name="desk009"
            geometry={nodes.desk009.geometry}
            material={materials.book}
            position={[-0.25, -0.065, -0.112]}
          />
        </mesh>
        <mesh
          name="sofa"
          geometry={nodes.sofa.geometry}
          material={materials.book}
          position={[1.008, 0.254, 0.821]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="switch"
          geometry={nodes["switch"].geometry}
          material={materials.image}
          position={[-1.268, 0.962, 1.115]}
          rotation={[0, 0, 0.093]}
        >
          <mesh
            name="switch001"
            geometry={nodes.switch001.geometry}
            material={materials.image}
            position={[-0.006, 0.001, 0]}
            rotation={[0, 0, -0.093]}
          />
        </mesh>
        <mesh
          name="electr"
          geometry={nodes.electr.geometry}
          material={materials.image}
          position={[-1.278, 0.723, -0.57]}
        />
        <mesh
          name="carpet"
          geometry={nodes.carpet.geometry}
          material={materials["carpet.001"]}
          position={[0.101, 0.151, 0.34]}
        />
        <mesh
          name="book001"
          geometry={nodes.book001.geometry}
          material={materials["carpet.001"]}
          position={[-1.268, 1.316, -1.059]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="book002"
          geometry={nodes.book002.geometry}
          material={materials["book.001"]}
          position={[-1.241, 1.316, -1.059]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="book003"
          geometry={nodes.book003.geometry}
          material={materials.book}
          position={[-1.034, 1.251, -1.059]}
          rotation={[0, 0, Math.PI]}
        />
        <mesh
          name="book"
          geometry={nodes.book.geometry}
          material={materials.desk}
          position={[-1.189, 1.315, -1.059]}
          rotation={[0, 0, 1.981]}
        />
        <mesh
          name="notebook"
          geometry={nodes.notebook.geometry}
          material={materials.image}
          position={[0.012, 0.656, -0.399]}
          rotation={[Math.PI, 0.495, 0]}
        />
        <mesh
          name="pot"
          geometry={nodes.pot.geometry}
          material={materials.desk}
          position={[1.129, 0.294, -0.985]}
        />
        <mesh
          name="flower001"
          geometry={nodes.flower001.geometry}
          material={materials.plant}
          position={[1.182, 0.508, -1.003]}
          rotation={[-1.307, -0.864, -1.216]}
        />
        <mesh
          name="flower"
          geometry={nodes.flower.geometry}
          material={materials.plant}
          position={[1.095, 0.516, -1.009]}
          rotation={[-0.86, 1.04, 0.784]}
        />
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
        </group>
        <mesh
          name="mac_bottom"
          geometry={nodes.mac_bottom.geometry}
          material={materials.gray}
          position={[-0.984, 0.656, -0.685]}
          rotation={[0, 0.684, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/room.glb");
