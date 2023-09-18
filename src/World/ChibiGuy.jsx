import { useGLTF, useAnimations } from "@react-three/drei" //Necesario para importar modelos gltf
import { useEffect, useRef } from 'react';

const ChibiGuy = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "assets/models/chibiGuy/chibiGuy.glb"
  );
  const { actions } = useAnimations(animations, group);

  //Introducir la reproducción del clip aquí
  useEffect(() => {
    const action = actions["Walk 01"]
    action.play()
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="1cf93b2a664746e38cba1960689f913bfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Mini_Chibi_Kid_Armature"
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_36"
                      geometry={nodes.Object_36.geometry}
                      material={materials.mini_material}
                      skeleton={nodes.Object_36.skeleton}
                    />
                    <skinnedMesh
                      name="Object_38"
                      geometry={nodes.Object_38.geometry}
                      material={materials.mini_material_secondary}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <skinnedMesh
                      name="Object_39"
                      geometry={nodes.Object_39.geometry}
                      material={materials.mini_material}
                      skeleton={nodes.Object_39.skeleton}
                    />
                    <skinnedMesh
                      name="Object_41"
                      geometry={nodes.Object_41.geometry}
                      material={materials.mini_material_secondary}
                      skeleton={nodes.Object_41.skeleton}
                    />
                    <skinnedMesh
                      name="Object_42"
                      geometry={nodes.Object_42.geometry}
                      material={materials.mini_material}
                      skeleton={nodes.Object_42.skeleton}
                    />
                    <skinnedMesh
                      name="Object_44"
                      geometry={nodes.Object_44.geometry}
                      material={materials.mini_material}
                      skeleton={nodes.Object_44.skeleton}
                    />
                    <group name="Object_35" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_37" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_40" rotation={[-Math.PI / 2, 0, 0]} />
                    <group name="Object_43" />
                  </group>
                </group>
                <group name="head" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="eyes" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="cap" rotation={[-Math.PI / 2, 0, 0]} />
                <group name="body" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default ChibiGuy; //Se exporta el modelo
useGLTF.preload("/assets/models/chibiGuy/chibiGuy.glb")