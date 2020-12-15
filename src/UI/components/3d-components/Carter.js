import React, { useRef } from "react";
import CarterGLT from "../../resources/Avatarz Carter.glb";
import { useGLTF } from "drei";

const Carter = (props) => {
  const group = useRef();

  const stuff = useGLTF(CarterGLT, "/draco-gltf");

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
