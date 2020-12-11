import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import CarterGLT from "../../resources/Avatarz Carter .glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Carter = (props) => {
  const group = useRef();

  const { nodes, animations, scene, scenes, materials } = useLoader(
    GLTFLoader,
    CarterGLT
  );

  console.log(nodes, animations, scene, scenes);
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Carter;
