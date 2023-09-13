import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Figures = (state, delta) => {
  const torusRef = useRef(); // Crea una referencia para el torus y para las demás figuras
  const coneRef = useRef();
  const sphereRef = useRef();
  console.log(coneRef.current); // Imprime la referencia del cono

  // Definimos posiciones de las figuras
  let positions = {
    torus: 45,
    cone: 0,
    sphere: 135
  }

  useFrame((state, delta) => {
    //Thorus position
    positions['torus'] += 1
    torusRef.current.position.y = Math.sin(positions['torus']*Math.PI/180) * 2;

    //Cone position
    positions['cone'] += 1
    coneRef.current.position.y = Math.cos(positions['cone']*Math.PI/180) * 2;

    //Sphere position
    positions['sphere'] += 1
    sphereRef.current.position.y = Math.sin(positions['sphere']*Math.PI/180) * 2;
})

  return(
      <>
      {/* Iluminación de la escena*/}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      {/* Torus (Dona) */}
      <mesh position={[-3,0,-20]} ref={torusRef}>
        <torusGeometry args={[1]} />
        <meshPhongMaterial color="blue" />
      </mesh>

      {/* Cono */}
      <mesh ref={coneRef} position={[0,0,-20]}> {/*La referencia a esta figura esta ligada a "coneRef" */}
        <coneGeometry args={[1,2,32]} />
        <meshNormalMaterial/>
      </mesh>

      {/* Esfera */}
      <mesh position={[3,0,-20]} ref={sphereRef}>
          <sphereGeometry args={[1, 16, 16]}/>
          <meshLambertMaterial color="green" />
      </mesh>

      </>
  );
}

export default Figures;