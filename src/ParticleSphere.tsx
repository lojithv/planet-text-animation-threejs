import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import THREE, {
  BufferAttribute,
  Points,
  PointsMaterial,
  Color,
  TextureLoader,
} from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { setActive, useActive } from "./store/sphereState";

const ParticleSphere = () => {
  const particleRef = useRef<any>();

  const active = useActive();

  const { scale } = useSpring({
    scale: active ? 1.5 : 1,
    config: config.wobbly,
  });

  useFrame(() => {
    // Rotate the particle sphere
  });

  const map = useLoader(TextureLoader, "/space/space.jpg");
  const alphaMap = useLoader(TextureLoader, "/space/space.jpg");

  return active ? (
    <>
      <pointLight distance={340} intensity={1} color="lightblue" />
      <animated.points
        scale={scale}
        onClick={() => setActive(!active)}
        ref={particleRef}
      >
        <sphereGeometry args={[2, 32, 32]} />
        <pointsMaterial
          size={0.2}
          sizeAttenuation={true}
          // color={active ? new Color("#285fb0") : new Color("transparent")}
          map={map}
          alphaMap={alphaMap}
        />
      </animated.points>
    </>
  ) : null;
};

export default ParticleSphere;
