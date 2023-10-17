import React, { useState } from "react";
import { BakeShadows } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import ChibiGuy from "./World/Elements/ChibiGuy"
import Office from "./World/Elements/Office"
import Lights from "./World/Staging/Lights"
import Environments from "./World/Staging/Environment"
import WelcomeText from "./World/Elements/WelcomeText"
import Counter from "./World/Elements/Counter"
import VoleyBall from "./World/Elements/VolleyBall"
import Snake from "./World/Elements/Snake"
import GeneralText from "./World/Elements/generalText";
import Figures from "./World/Elements/Figures";

const Scene = () => {
  return (
    <>
      <Lights />
      <BakeShadows />
      <Environments />
      <WelcomeText />
      <Counter />
      <Figures />
      <GeneralText 
        text="I started my Software Engineer/nMajor on 2021, since then I've been /nimproving my skills and myself as well. /nGo an take a look on my first steps/n clicking on the snake!" 
        position={[-5, 0,2]} 
        fontSize={0.4} 
        color="#A4DE02" 
        outlineWidth={"20%"} 
        font="assets/fonts/Roboto-Bold.tff" 
        textAligh="center" 
        outlineColor="#1E5631"
      />
      <GeneralText 
        text="I used to play Voleyball in the/npast, touch            the ball and/n surprise               yourself!" 
        position={[-7.0, -0.8, 7]} 
        fontSize={0.35} 
        color="#e5e4db" 
        outlineWidth={"10%"} 
        font="assets/fonts/Roboto-Bold.tff" 
        textAligh="center" 
        outlineColor="#73726e"
      />
      <Physics>
        <ChibiGuy position={[1.5, -2, 4.3]} rotation-y={-Math.PI * 0.15} scale={2}/>
        <Office position={[0,-2,0]} rotation={[0, Math.PI*1, 0]} scale={[3,3,3]}/>
        <VoleyBall scale={0.08} position={[-7, -1, 7]}/>
        <Snake position={[-6, 0, 1]} scale={0.40} rotation={[0, 270 * Math.PI/180, 0]}></Snake>
      </Physics>
    </>
  )
}

export default Scene;