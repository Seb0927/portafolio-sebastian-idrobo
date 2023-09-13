import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import ChibiGuy from "./World/ChibiGuy"
import Grass from "./World/Grass"

const Scene = () => {
  return (
    <>
      <ChibiGuy/>
      <Grass />
    </>
  )
}

export default Scene;