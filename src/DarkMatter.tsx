import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { setActive, useActive } from "./store/sphereState";

type Props = {};

const DarkMatter = () => {
  const sphereRef: any = useRef();
  const repeatX = 4;
  const repeatY = 2;

  const active = useActive();

  //   const base = useLoader(THREE.TextureLoader, "/space/space1.jpg");
  //   base.wrapS = THREE.RepeatWrapping;
  //   base.wrapT = THREE.RepeatWrapping;
  //   base.repeat.set(repeatX, repeatY);

  //   const bump = useLoader(THREE.TextureLoader, "/space/space2.jpg");
  //   bump.wrapS = THREE.RepeatWrapping;
  //   bump.wrapT = THREE.RepeatWrapping;
  //   bump.repeat.set(repeatX, repeatY);

  //   const normal = useLoader(THREE.TextureLoader, "/space/space3.jpg");
  //   normal.wrapS = THREE.RepeatWrapping;
  //   normal.wrapT = THREE.RepeatWrapping;
  //   normal.repeat.set(repeatX, repeatY);

  //   const ao = useLoader(THREE.TextureLoader, "/space/space4.jpg");
  //   ao.wrapS = THREE.RepeatWrapping;
  //   ao.wrapT = THREE.RepeatWrapping;
  //   ao.repeat.set(repeatX, repeatY);

  //   const metalness = useLoader(THREE.TextureLoader, "/space/space5.jpg");
  //   metalness.wrapS = THREE.RepeatWrapping;
  //   metalness.wrapT = THREE.RepeatWrapping;
  //   metalness.repeat.set(repeatX, repeatY);

  //   const rough = useLoader(THREE.TextureLoader, "/space/space6.jpg");
  //   rough.wrapS = THREE.RepeatWrapping;
  //   rough.wrapT = THREE.RepeatWrapping;
  //   rough.repeat.set(repeatX, repeatY);

  return !active ? (
    <mesh onClick={() => setActive(!active)}>
      <sphereGeometry ref={sphereRef} args={[2, 24, 24]} />
      <meshStandardMaterial color={"#01134a"} />
      {/* <meshPhysicalMaterial
          map={base}
          metalnessMap={metalness}
          bumpMap={bump}
          aoMap={ao}
          normalMap={normal}
          roughnessMap={rough}
        /> */}
    </mesh>
  ) : null;
};

export default DarkMatter;
