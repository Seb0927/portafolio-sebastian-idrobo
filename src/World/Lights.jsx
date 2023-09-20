import { useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
//import { useControls } from "leva";
import { useEffect, useMemo, useRef } from "react";
import { DirectionalLightHelper, HemisphereLightHelper, PointLightHelper, SpotLightHelper } from "three";

const Lights = () => {
  const spotLightRef = useRef();
  const targetRef = useRef();
  //useHelper(spotLightRef, SpotLightHelper);

  const pointLightRef = useRef();
  //useHelper(pointLightRef, PointLightHelper);

  useEffect (() => {
    if (targetRef.current){
      spotLightRef.current.target = targetRef.current
    }
  }, [targetRef.current]) 

  //General values

  return (
    <>
      {/* Iluminación de la escena */}
      <ambientLight intensity={0.1} />

      {/* SpotLight apuntando a chibiGuy */}
      
      <spotLight
        ref={spotLightRef}
        position={[1.5,4,12]}
        intensity={180}
        color={"#f5e1fd"}
        penumbra={0.1}
        distance={20}
        angle={Math.PI/16}
        castShadow
      />
      <mesh ref={targetRef} position={[1.5,0,6.2]} />
      <pointLight 
        ref={pointLightRef} 
        position={[0,0.5,0]} 
        intensity={8} 
        color={"white"}
      />
      <pointLight 
        ref={pointLightRef} 
        position={[-1.5,-0.5,8]} 
        intensity={6} 
        color={"white"} 
      />
      <pointLight 
        ref={pointLightRef} 
        position={[-6.5,-0.5,8]} 
        intensity={6} 
        color={"white"} 
      />
      <pointLight 
        ref={pointLightRef} 
        position={[-6.5,-0.5,0]} 
        intensity={6} 
        color={"white"} 
      />
    </>
  )
}

export default Lights;