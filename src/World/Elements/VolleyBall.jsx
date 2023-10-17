import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function VoleyBall(props) {

  const voleyBallBodyRef = useRef();

  let valorX = 0.1
  let valorY = 2
  let valorZ = 0.1

  const onHandleVoleyBall = () => {

    voleyBallBodyRef.current.applyImpulse({
      x:valorX,
      y:valorY,
      z:-valorZ
    }, true)
  }

  const [play, setPlay] = useState(false)
  const [hitSound] = useState (() => new Audio("assets/sounds/hit.mp3"))

  useEffect(() => {
    if (play){
      hitSound.currentTime = 0;
      hitSound.volume = Math.random();
      hitSound.play();
    }
  }, [play])

  useEffect(() => {
    voleyBallBodyRef.current.wakeUp()
  }, [])

  const { nodes, materials } = useGLTF("/assets/models/voleyBall/voleyBall.glb");
  return (
    <RigidBody 
      colliders={"ball"} 
      ref={voleyBallBodyRef}
      onCollisionEnter={()=>setPlay(true)}
      onCollisionExit={()=>setPlay(false)}>
      <group {...props} dispose={null}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.VoleyballBall_BrawlStars_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[0, 725.168, 0]}
            scale={[2074.484, 2074.484, 2052.677]}
            onClick={onHandleVoleyBall}
          />
        </group>
      </group>
    </RigidBody>
  );
}

export default VoleyBall
useGLTF.preload("/assets/models/voleyBall/voleyBall.glb");

