import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Figures = (state, delta) => {
  const torusRef = useRef(); // Crea una referencia para el torus y para las demás figuras
  const coneRef = useRef();
  const sphereRef = useRef();

  // Definimos posiciones de las figuras
  let positions = {
    torus: 45,
    cone: 0,
    sphere: 135
  }

  useFrame((state, delta) => {
    torusRef.current.rotation.y=Math.PI/2 //Rotación del torus

    //Thorus position
    positions['torus'] += 1
    torusRef.current.position.y = Math.sin(positions['torus']*Math.PI/180) * 1/10 - 0.5;

    //Cone position
    positions['cone'] += 1
    coneRef.current.position.y = Math.cos(positions['cone']*Math.PI/180) * 1/10 - 0.5;

    //Sphere position
    positions['sphere'] += 1
    sphereRef.current.position.y = Math.sin(positions['sphere']*Math.PI/180) * 1/10 - 0.5;
})


  return(
      <>
      {/* Torus (Dona) */}
      <mesh position={[1,0,0.50]} ref={torusRef}>
        <torusGeometry args={[0.1, 0.05]} />
        <meshPhongMaterial color="blue" />
      </mesh>

      {/* Cono */}
      <mesh ref={coneRef} position={[1,0,0.80]}> {/*La referencia a esta figura esta ligada a "coneRef" */}
        <coneGeometry args={[0.1,0.2,16]} />
        <meshNormalMaterial/>
      </mesh>

      {/* Esfera */}
      <mesh position={[1,0,1.10]} ref={sphereRef}>
          <sphereGeometry args={[0.1, 16, 16]}/>
          <meshLambertMaterial color="green" />
      </mesh>

      </>
  );
}

export default Figures;