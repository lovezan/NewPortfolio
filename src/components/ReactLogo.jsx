import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Float } from "@react-three/drei";

const ReactLogo = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float floatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.4} dispose={null} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
