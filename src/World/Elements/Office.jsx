import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier"

const Office = (props) => {
  const { nodes, materials } = useGLTF("/assets/models/office/office.glb");
  return (
    <RigidBody type="fixed" colliders = {"trimesh"}>
      <group {...props} dispose={null}>
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          position={[1, 1.522, -1]}
          scale={[2,1.5,2]}
          
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[0.748, 0.34, 0.814]}
          scale={[0.229, 0.332, 0.105]}
        />
        <mesh
          //castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
          position={[-0.495, 1.055, 0.965]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.322, 0.424, 0.169]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[-0.291, 0.207, 0]}
          scale={[0.233, 0.196, 0.489]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-0.139, 0.43, 0.023]}
          scale={[0.048, -0.008, 0.131]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[0.733, 0.127, -0.086]}
          scale={[-0.174, -0.022, -0.487]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-0.746, 0.199, 0.023]}
          scale={[0.032, 0.102, 0.032]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[0.579, 0.069, -0.537]}
          scale={[-0.017, -0.046, -0.032]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[0.844, 0.069, -0.537]}
          scale={[-0.017, -0.046, -0.032]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0.579, 0.069, 0.353]}
          scale={[-0.017, -0.046, -0.032]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={nodes.Cube009.material}
          position={[0.844, 0.069, 0.353]}
          scale={[-0.017, -0.046, -0.032]}
        />
        <mesh
          // castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[-0.091, 1.624, 0.05]}
          scale={[0.031, 0.235, 0.166]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[0.232, 0.074, -0.678]}
          scale={[0.247, 0.064, 0.171]}
        />
      </group>
    </RigidBody>
  );
}

export default Office
useGLTF.preload("/assets/models/office/office.glb")