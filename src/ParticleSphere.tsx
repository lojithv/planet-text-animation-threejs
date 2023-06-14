import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferAttribute, Points, PointsMaterial, Color } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const ParticleSphere = () => {
  const particleRef = useRef<any>();

  useFrame(() => {
    // Rotate the particle sphere
    if (particleRef.current) {
      particleRef.current.rotation.y += 0.001;
    }
  });

  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const index = i * 3;
    positions[index] = (Math.random() - 0.5) * 10;
    positions[index + 1] = (Math.random() - 0.5) * 10;
    positions[index + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particleRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          //   attachObject={['geometry', 'attributes', 'position']}
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.05}
        color={new Color("#000000")}
      />
    </points>
  );
};

const ParticleApp = () => {
  return (
    <Canvas
      camera={{
        fov: 90,
        near: 1,
        far: 1100,
        position: [0, 0, 15],
        aspect: window.innerWidth / window.innerHeight,
      }}
      style={{ height: "100vh", width: "100vw", backgroundColor: "black" }}
    >
      {/* <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} /> */}
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableDamping
        dampingFactor={0.2}
        // autoRotate={true}
        // rotateSpeed={-0.5}
      />
      <Stars radius={100} count={500} />
    </Canvas>
  );
};

export default ParticleApp;
