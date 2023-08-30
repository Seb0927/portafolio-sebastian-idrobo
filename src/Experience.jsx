import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = (state, delta) => {
    const boxRef = useRef();

    useFrame((state, delta) => {
        boxRef.current.rotation.z += 1 * delta;
    })

    return(
        <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <mesh ref={boxRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="green" />
        </mesh> 
        </>
    );
}

export default Experience;