import React from "react";
import { Text } from "@react-three/drei";

const GeneralText = ({ text, ...props }) => {
  
  const lines = text.split('/n');
  const x = props.position[0]
  const y = props.position[1]
  const z = props.position[2]

  return (
    <>
      {lines.map((line, index) => (
        <Text key={index} {...props} position={[x, (-index * 0.4) + y, z]}>
          {line}
        </Text>
      ))}
    </>
  );
}

export default GeneralText;