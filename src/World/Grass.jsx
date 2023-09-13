import { useTexture } from "@react-three/drei" 

const grass = (props) => {
  const PATH = "/assets/textures/grass/";

  const propsTexture = useTexture({
    map: PATH + 'grassColor.jpg',
    //displacementMap: PATH + 'grassHeight.png',
    normalMap: PATH + 'grassNormal.jpg',
    roughnessMap: PATH + 'grassRoughness.jpg',
    aoMap: PATH + 'grassAO.jpg',
  })

  return (
    <group {...props} dispose={null}>
      <mesh position-y={-2} rotation-x={-Math.PI / 2} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  );
}

export default grass

/*
<mesh position-y={-2} rotation-x={-Math.PI / 2} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial attach="material" color="green" />
      </mesh>

      <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial {...propsTexture}/>
      </mesh>*/