import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei";

const Snake = (props) => {
  //Esto para direccionar a videojuego Snake
  const handleSign = () => {
    window.location.href='https://br4z.github.io/JNGDS/'
  }

  //Referencia al Snake
  const snakeRef = useRef();

  //Se define rotación
  let rotation = 0

  useFrame((state, delta) => {
    rotation += 0.5 * Math.PI/180
    snakeRef.current.rotation.y = rotation
  })

  const { nodes, materials } = useGLTF("/assets/models/snake/snake.glb");
  return (
    <group {...props} dispose={null} ref={snakeRef} onClick={(e) => handleSign(e)}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tail.geometry}
        material={materials.Body}
        position={[4.107, 2.011, -3.928]}
        scale={0.462}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Head.geometry}
        material={materials.Body}
        position={[4.107, 2.011, -3.928]}
        scale={0.462}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eye1.geometry}
        material={materials.Eye}
        position={[4.458, 2.202, -3.713]}
        scale={0.132}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eye2.geometry}
        material={materials.Eye}
        position={[4.438, 2.194, -4.153]}
        scale={0.132}
      />
    </group>
  );
}

export default Snake
useGLTF.preload("/assets/models/snake/snake.glb");