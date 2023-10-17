import { useTexture } from "@react-three/drei"

const DarkTiles = (props) => {
  const PATH = "/assets/textures/darkTiles/";

  const propsTexture = useTexture({
    map: PATH + 'darkTilesColor.png',
    normalMap: PATH + 'darkTilesNormal.png',
    roughnessMap: PATH + 'darkTilesRoughness.png',
    aoMap: PATH + 'darkTilesAO.png',
  })

  return (
    <group {...props} dispose={null}>
      <mesh position-y={-1.93} position-x={-3} position-z={3} rotation-x={-Math.PI / 2} >
        <planeGeometry attach="geometry" args={[12, 12]} />
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  );
}

export default DarkTiles