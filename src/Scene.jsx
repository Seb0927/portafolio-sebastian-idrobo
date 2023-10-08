import React, { useState } from "react";
import { BakeShadows } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import ChibiGuy from "./World/ChibiGuy"
import Office from "./World/Office"
import Lights from "./World/Lights"
import Environments from "./World/Environment"
import WelcomeText from "./World/WelcomeText"
import Counter from "./World/Counter"
import VoleyBall from "./World/VolleyBall"

const Scene = () => {
  return (
    <>
      <Lights />
      <BakeShadows />
      <Environments />
      <WelcomeText />
      <Physics debug>
        <ChibiGuy position={[1.5, -2, 4.3]} rotation-y={-Math.PI * 0.15} scale={2}/>
        <Office position={[0,-2,0]} rotation={[0, Math.PI*1, 0]} scale={[3,3,3]}/>
        <VoleyBall scale={0.08} position={[-7, -1, 7]}/>
      </Physics>
      <Counter />
    </>
  )
}

export default Scene;