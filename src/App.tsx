import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from "@react-three/fiber";
import { Html, Preload, OrbitControls } from "@react-three/drei";
// import { Popconfirm } from 'antd'

import {
  CubeTextureLoader,
  RGBAFormat,
  CubeCamera, //highlight-line
  WebGLCubeRenderTarget, //highlight-line
  LinearMipmapLinearFilter, //highlight-line
} from "three";

extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame with useFrame
  const controls: any = useRef();
  useFrame(() => controls?.current?.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
    />
  );
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  // highlight-start
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "space/space1.jpg",
    "space/space2.jpg",
    "space/space3.jpg",
    "space/space4.jpg",
    "space/space5.jpg",
    "space/space6.jpg",
  ]);

  // const texture = loader.load([
  // 	"space/space1.jpg",
  // 	"space/space1.jpg",
  // 	"space/space1.jpg",
  // 	"space/space1.jpg",
  // 	"space/space1.jpg",
  // 	"space/space1.jpg",
  //   ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  // highlight-end
  return null;
}

// Geometry
function Sphere() {
  // highlight-start
  const { scene, gl } = useThree();
  // The cubeRenderTarget is used to generate a texture for the reflective sphere.
  // It must be updated on each frame in order to track camera movement and other changes.
  const cubeRenderTarget = new WebGLCubeRenderTarget(256, {
    format: RGBAFormat,
    generateMipmaps: true,
    minFilter: LinearMipmapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 1000, cubeRenderTarget);
  cubeCamera.position.set(0, 100, 0);
  scene.add(cubeCamera);

  // Update the cubeCamera with current renderer and scene.
  useFrame(() => cubeCamera.update(gl, scene));
  // highlight-end
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        envMap={cubeCamera.renderTarget.texture} // highlight-line
        color="white"
        //   roughness={0.1}
        //   metalness={1}
      />
    </mesh>
  );
}

function Box() {
  const map = new THREE.TextureLoader().load("space/space.jpg");
  const loader = new THREE.CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    "space/space1.jpg",
    "space/space2.jpg",
    "space/space3.jpg",
    "space/space4.jpg",
    "space/space5.jpg",
    "space/space6.jpg",
  ]);
  const meshRef: any = useRef();
  const incRef = useRef(0.005);
  useFrame((state, delta) => {
    // adjust object position
    if (meshRef.current) {
      meshRef.current.rotation.x += delta / 2;
      meshRef.current.rotation.y += delta / 2;
    }
  });

  return (
    <mesh ref={meshRef}>
     <sphereBufferGeometry args={[3, 64, 32]} />
      <meshBasicMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
}

export default function App() {
  return (
    <Canvas
      frameloop="demand"
      style={{ height: "100vh" }}
      camera={{ fov: 70, near: 0.01, far: 100, position: [0, 0, 1] }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={true}
        enableDamping
        dampingFactor={0.2}
        autoRotate={true}
        rotateSpeed={-0.5}
      />
      {/* <Suspense fallback={null}> */}
      {/* <Preload all /> */}
      {/* <CameraControls /> */}
      {/* <Sphere /> */}
      {/* <SkyBox/> */}
      <Box />
      {/* </Suspense> */}
    </Canvas>
  );
}
