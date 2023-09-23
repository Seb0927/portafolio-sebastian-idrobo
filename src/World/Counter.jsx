import { useState } from 'react'
import { Text } from "@react-three/drei";

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const handleClick = () => {
    setCount(count + 1)
  }

  return(
    <Text 
      fontSize={0.4} 
      color="white" 
      outlineWidth={"10%"}
      outlineColor="black"
      font="/assets/fonts/Roboto-Bold.ttf" 
      position={[2.9,5.5,3]}
      rotation={[0,Math.PI*3/2,0]} strokeColor="yellow" 
      onClick={handleClick}>
      ¡Click me counter!: {count}
    </Text>
  );
}

export default Counter;

