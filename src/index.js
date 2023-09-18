import { OrbitControls } from "@react-three/drei";
import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber"
import Info from "./Info/Info";
import Figures from "./Figures";
import Scene from "./Scene";
import "./Info/styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <Info name="Sebastián Idrobo A." biography="I am a Software developer student!" />
    <Canvas
        camera={{position:[0,0,5]}}>
        {/* <Experience /> */}
        <Figures />
        <Scene />
        <OrbitControls makeDefault />
    </Canvas>
    </>
);