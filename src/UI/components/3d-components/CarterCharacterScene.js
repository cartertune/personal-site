import React, { Suspense, useRef, useState } from "react";

import { Canvas, useFrame } from "react-three-fiber";
import Carter from "./Carter";
import CarterImage from "../CarterImage";

const Lights = (props) => {
  return (
    <>
      <ambientLight color={"#fdf3c6"} intensity={0.3} />
      {/* Diretion light */}
      <directionalLight position={[10, 3, 5]} intensity={0.7} castShadow />
      <directionalLight position={[-10, 3, 5]} intensity={0.4} castShadow />
      <directionalLight position={[0, -3, 5]} intensity={0.1} castShadow />
      <spotLight intensity={0.4} position={[0, 120, -350]} castShadow />
    </>
  );
};

const CarterCharacterScene = (props) => {
  return (
    <Canvas
      concurrent
      colorManagement
      camera={{
        position: [0, 2, 50],
        fov: 3,
        zoom: 0.14,
      }}
    >
      <Suspense fallback={CarterImage}>
        <Lights />
        <Carter position={[0, -5, 0]} scale={[1.2, 1.2, 1.2]} />
      </Suspense>
    </Canvas>
  );
};

export default CarterCharacterScene;
