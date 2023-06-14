import React from "react";
import { render } from "react-dom";
import { Canvas } from "@react-three/fiber";
import DarkMatter from "./DarkMatter";

const Sphere = () => {
  return (
    <mesh>
      <sphereGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
};

const Test = () => {
  return (
    <Canvas
      style={{  height: "100vh", width:'100vw' }}
      camera={{ position: [0, 0, 15] }}
    >
      <pointLight position={[15, 15, 15]} />
      <DarkMatter/>
    </Canvas>
  );
};

export default Test;
