import {createRoot} from "react-dom/client";
import {Canvas} from "@react-three/fiber"
import Experience from "./Experience";
import Info from "./Info";
import Figures from "./Figures"
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <>
    <Info name="Sebastián Idrobo A." biography="I am a Software developer student!" />
    <Canvas
        camera={{position:[0,0,5]}}>
        {/* <Experience /> */}
        <Figures />
    </Canvas>
    </>
);