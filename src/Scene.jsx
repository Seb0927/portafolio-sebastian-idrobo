import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BakeShadows } from "@react-three/drei";
import ChibiGuy from "./World/ChibiGuy"
import Office from "./World/Office"
import Lights from "./World/Lights"
import Environments from "./World/Environment"
import WelcomeText from "./World/WelcomeText"
import Counter from "./World/Counter"
import DarkTiles from "./World/DarkTiles"
import Grass from "./World/Grass"

const Scene = () => {
  return (
    <>
      <ChibiGuy position={[1.5, -2, 4.3]} rotation-y={-Math.PI * 0.15} scale={2}/>
      <Office position={[0,-2,0]} rotation={[0, Math.PI*1, 0]} scale={[3,3,3]}/>
      <Lights />
      <BakeShadows />
      <Environments />
      <WelcomeText />
      <Counter />
      {/*<Grass /> */}
      {/*<DarkTiles />*/}
    </>
  )
}

export default Scene;