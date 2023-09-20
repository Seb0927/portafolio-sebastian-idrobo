import { Environment, Sky, Stars, Sparkles, Cloud } from "@react-three/drei"

const Environments = () => {
  return (
    <>
      <Environment preset="night" background={true} />
      <Sparkles
            color="white"
            count={100}
            size={16}
            fade={false}
            speed={0.5}
            scale={12}
            position={[-2,3,2]}
        />
    </>
  )
}

export default Environments