import { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  ScrollControls,
  Stars,
  useScroll,
  useTexture,
} from "@react-three/drei";
import DarkMatter from "./DarkMatter";
import Overlay from "./Overlay";
import SphereBg from "./SphereBg";
import Swarm from "./Swarm";

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  const mouse = useRef([0, 0]);

  return (
    <div>
      <Canvas
        camera={{
          fov: 90,
          near: 1,
          far: 1100,
          position: [0, 0, 15],
          aspect: window.innerWidth / window.innerHeight,
        }}
        style={{ height: "100vh", width: "100vw" }}
        shadows
        eventSource={
          document.getElementById("root") !== null
            ? (document.getElementById("root") as HTMLElement)
            : undefined
        }
        eventPrefix="client"
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
          <pointLight position={[0, 15, 15]} />
          <pointLight position={[15, 0, 15]} />
          <DarkMatter />

          <pointLight distance={100} intensity={4} color="white" />
          <Swarm count={500} mouse={mouse} />
          <Stars radius={200} count={500} />
          <SphereBg />
        </Suspense>
      </Canvas>
      <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  );
}

export default App;
