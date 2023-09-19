import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const targetRef = useRef();
  useHelper(spotLightRef, SpotLightHelper);

  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper);

  return (
    <>
      {/* Iluminación de la escena */}
      <ambientLight intensity={0.1} />

      {/* SpotLight apuntando a chibiGuy */}
      <mesh ref={targetRef} position={[1.5,0,4]} />
      <spotLight
        ref={spotLightRef}
        position={[1.5,4,4]}
        intensity={40}
        color={"white"}
        penumbra={0.1}
        distance={8}
        angle={Math.PI/12}
        target={targetRef.current}
      />
      <pointLight 
        ref={pointLightRef} 
        position={[0,0.5,0]} 
        intensity={10} 
        color={"white"} 
      />
      
    </>
  )
}

export default Lights;