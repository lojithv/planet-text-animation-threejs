import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

function Sphere() {
  const map = useTexture([
    "space/space4.jpg", // pos-x
    "space/space2.jpg", // neg-x
    "space/space1.jpg", // pos-y
    "space/space6.jpg", // neg-y
    "space/space3.jpg", // pos-z
    "space/space5.jpg", // neg-z
  ]);
  const meshRef: any = useRef();
  useFrame((state, delta) => {
    // adjust object position
    if (meshRef.current) {
      // Perform your animation or modification logic here
      for (
        let i = 0, l = meshRef.current.geometry.attributes.position.count;
        i < l;
        i++
      ) {
        console.log("update...........");
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(
          meshRef.current.geometry.attributes.position,
          i
        );
        vertex.normalize().multiplyScalar(550);
        meshRef.current.geometry.attributes.position.setXYZ(
          i,
          vertex.x,
          vertex.y,
          vertex.z
        );
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[300, 300, 300, 7, 7, 7]} />
      {map.map((texture, idx) => (
        <meshBasicMaterial
          key={texture.id}
          attach={`material-${idx}`}
          map={texture}
          side={THREE.BackSide}
		  needsUpdate={true}
		  
        />
      ))}
    </mesh>
  );
}

function App() {
  return (
    <Canvas
      camera={{ fov: 70, near: 0.01, far: 1000, position: [0, 0, 1] }}
      style={{ height: "100vh", backgroundColor: "#87CEEB" }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableDamping
        dampingFactor={0.2}
        autoRotate={true}
        rotateSpeed={-0.5}
      />

      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Canvas>
  );
}

export default App;
