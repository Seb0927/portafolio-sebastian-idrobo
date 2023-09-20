import { useAnimations, useFBX } from "@react-three/drei" //Necesario para importar modelos gltf
import { useEffect, useRef } from 'react';

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

  //Introducir la reproducción del clip aquí
  useEffect(() => {
    if (actions) {
      const action = actions["Idle 01"]
      action.play()
    }
  }, [actions])

  return (
    <mesh ref={group} {...props} castShadow>
      <primitive object={model} />
    </mesh>
  );
};

export default ChibiGuy; //Se exporta el modelo