import { useGLTF, useAnimations } from "@react-three/drei" //Necesario para importar modelos gltf
import { useEffect, useRef } from 'react';

const ChibiGuy = () => {
  //Creando la referencia al objeto 3D de ChibiGuy
  const chibiGuyRef = useRef();
  const chibiGuyModel = useGLTF('assets/models/chibiGuy/scene.gltf') //Guardamos el modelo 3D en una variable

  const {animations} = chibiGuyModel; //Deestructuramos de chibiGuyModel a animations

  console.log(chibiGuyModel); //Para darme cuenta si tiene animaciones

  const {actions} = useAnimations(animations, chibiGuyRef);

  //Introducir la reproducción del clip aquí
  useEffect(() => {
    const action = actions["Walk 01"]
    action.play()
  }, [])

  return (
    <mesh ref={chibiGuyRef} position={[2, -2, -1]} rotation-y={-Math.PI * 0.15} scale={2}>
      <primitive object={chibiGuyModel.scene}/>
    </mesh>
  );
};

export default ChibiGuy; //Se exporta el modelo
useGLTF.preload("/assets/models/chibiGuy/scene.gltf")