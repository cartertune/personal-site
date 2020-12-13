import React, { Suspense, useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import Carter from "./Carter";
import CarterImage from "../CarterImage";
console.log(THREE);

const CarterCharacterScene = (props) => {
  const d = 8.25;
  const mouse = useRef({ x: 0, y: 0 });
  return (
    <Canvas
      // onMouseMove={(e) => (mouse.current = getMousePos(e))}
      concurrent
      colorManagement
      // pixelRatio={[1, 1.5]}
      // camera={camera}
      camera={{
        position: [0, 2, 50],
        fov: 3,
        zoom: 0.14,
      }}
    >
      {/* <hemisphereLight
        skyColor={"black"}
        groundColor={0xffffff}
        intensity={0.5}
        position={[0, 50, 0]}
      />
      <directionalLight
        position={[-8, 20, 8]}
        shadow-camera-left={d * -1}
        shadow-camera-bottom={d * -1}
        shadow-camera-right={d}
        shadow-camera-top={d}
        shadow-camera-near={0.1}
        shadow-camera-far={1500}
        castShadow
      /> */}
      <ambientLight color={"#fdf3c6"} intensity={0.4} />
      {/* Diretion light */}
      <directionalLight position={[10, 3, 5]} intensity={1} castShadow />
      <directionalLight position={[-10, 3, 5]} intensity={0.5} castShadow />
      <directionalLight position={[0, -3, 5]} intensity={0.1} castShadow />
      {/* <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={0.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      /> */}
      {/* Spotlight Large overhead light */}
      <spotLight intensity={0.4} position={[0, 120, -350]} castShadow />
      <Suspense fallback={null}>
        <Carter mouse={mouse} position={[0, -5, 0]} scale={[1.2, 1.2, 1.2]} />
      </Suspense>
    </Canvas>
  );
};

export default CarterCharacterScene;
