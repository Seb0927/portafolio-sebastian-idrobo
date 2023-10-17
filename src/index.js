import { OrbitControls } from "@react-three/drei";
import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber"
import Info from "./Info/Info";
import Scene from "./Scene";
import "./Info/styles.css";

const root = createRoot(document.getElementById("root"));

const cameraSettings = {
    position: [0, 0.5, 5],
    fov: 60
}

root.render(
    <>
    <Info name="Sebastián Idrobo A." biography="And welcome to my portafolio! Feel free to explore and click wherever you want (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧. Click on myself for disappearing" />
    <Canvas camera={cameraSettings} shadows>
        <Scene />
        <OrbitControls makeDefault />
    </Canvas>
    </>
);