import { useAnimations, useFBX } from "@react-three/drei" //Necesario para importar modelos gltf
import { useEffect, useRef } from 'react';
import { Text } from "@react-three/drei";

const ChibiGuy = (props) => {
  const group = useRef();
  const model = useFBX(
    "assets/models/chibiGuy/chibiGuy.fbx"
  );
  const { actions } = useAnimations(model.animations, group);

  model.traverse(function(node) {
    if(node.isMesh){
      node.castShadow = true;
    }
  })

  const handleSign = () => {
    window.location.href = 'https://github.com/Seb0927/';
  }

  //Introducir la reproducción del clip aquí
  useEffect(() => {
    if (actions) {
      const action = actions["Idle 01"]
      action.play()
    }
  }, [actions])

  return (
    <>
      <Text 
        {...props}
        fontSize={0.12} 
        color="white" 
        outlineWidth={"10%"}
        outlineColor="black"
        font="/assets/fonts/Roboto-Bold.ttf"
        rotation={[0,Math.PI*3/2,0]} strokeColor="yellow" 
        position={[1.5, 0.6, 4.3]}>
        Click on me!
      </Text>
      <mesh 
        ref={group} 
        {...props} 
        castShadow
        onClick={(e)=> handleSign(e)}>
        <primitive object={model} />
      </mesh>
    </>
  );
};

export default ChibiGuy; //Se exporta el modelo