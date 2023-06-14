import { Suspense, useCallback, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
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
      <boxBufferGeometry args={[400, 400, 400, 10, 10, 10]} />
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

function Swarm({ count, mouse }:any) {
  const mesh:any = useRef()
  const light:any = useRef()
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width

  const dummy = useMemo(() => new THREE.Object3D(), [])
  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -50 + Math.random() * 100
      const yFactor = -50 + Math.random() * 100
      const zFactor = -50 + Math.random() * 100
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])
  // The innards of this hook will run every frame
  useFrame(state => {
    if(light && light.current){
    // Makes the light follow the mouse
    light?.current?.position.set(mouse.current[0] / aspect, -mouse.current[1] / aspect, 0)
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      // There is no sense or reason to any of this, just messing around with trigonometric functions
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.cos(t)
      particle.mx += (mouse.current[0] - particle.mx) * 0.01
      particle.my += (mouse.current[1] * -1 - particle.my) * 0.01
      // Update the dummy object
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
    }
  })
  return (
    <>
      <pointLight ref={light} distance={340} intensity={1} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronBufferGeometry attach="geometry" args={[0.2, 0]} />
        <meshPhongMaterial attach="material" color="rgb(46, 100, 217)" opacity={0.1} />
      </instancedMesh>
    </>
  )
}

function App() {

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }:any) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  return (
	<>
	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/planet2.png" style={{backgroundColor:'transparent',position:'absolute'}}/>

    <Canvas
      camera={{ fov: 90, near: 1, far: 1100, position: [0, 0, 1],aspect:window.innerWidth/window.innerHeight }}
      style={{ height: "100vh", backgroundColor: "#000000" }}
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
        <pointLight distance={100} intensity={4} color="white" />
        <Swarm count={500} mouse={mouse}/>
        <Sphere />

      </Suspense>
    </Canvas>
	</>
  );
}

export default App;
