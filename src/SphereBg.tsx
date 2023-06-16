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

type Props = {};

const SphereBg = (props: Props) => {
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
      <boxGeometry args={[400, 400, 400, 10, 10, 10]} />
      {map.map((texture, idx) => {
        texture.minFilter = THREE.LinearFilter;
        texture.anisotropy = 8
        return (
          <meshBasicMaterial
            key={texture.id}
            attach={`material-${idx}`}
            map={texture}
            side={THREE.BackSide}
            needsUpdate={true}
          />
        );
      })}
    </mesh>
  );
};

export default SphereBg;
