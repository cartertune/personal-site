import React, { useRef } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import CarterGLT from "../../resources/Avatarz Carter.glb";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "drei";

const Carter = (props) => {
  const group = useRef();

  const stuff = useGLTF(CarterGLT, "/draco-gltf");
  console.log(stuff);

  return (
    <group ref={group}>
      <primitive
        object={stuff.scene}
        dispose={null}
        position={props.position}
        scale={props.scale}
      />
    </group>
  );
};

export default Carter;
