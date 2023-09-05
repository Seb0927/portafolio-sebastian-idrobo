const Figures = (state, delta) => {

  return(
      <>
      {/* Iluminación de la escena*/}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      {/* Torus (Dona) */}
      <mesh position={[-3,0,0]}>
        <torusGeometry args={[1]} />
        <meshPhongMaterial color="blue" />
      </mesh>

      {/* Cono */}
      <mesh>
        <coneGeometry args={[1,2,32]} />
        <meshNormalMaterial/>
      </mesh>

      {/* Esfera */}
      <mesh position={[3,0,0]}>
          <sphereGeometry args={[1, 16, 16]}/>
          <meshLambertMaterial color="green" />
      </mesh>

      </>
  );
}

export default Figures;