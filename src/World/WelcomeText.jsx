import { Html, Text, Float, Text3D, Center} from "@react-three/drei";
import { Color } from "three";

const WelcomeText = () => {

  return(
    <Text 
      fontSize={0.4} 
      color="white" 
      outlineWidth={"10%"}
      font="/assets/fonts/Roboto-Bold.ttf"
      textAlign="center"
      position={[-3,3.6,-2.9]}>
      Programming Joke {'\n'}
      There are 10 kinds of people in the world.{'\n'}
      Those who understand binary and those who don't.{'\n'}
    </Text>
  );
}

export default WelcomeText;