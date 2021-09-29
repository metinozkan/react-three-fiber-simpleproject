import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

import { Physics, usePlane, useBox } from "@react-three/cannon";
const Box = () => {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 3, 0] }));
  return (
    <mesh
      ref={ref}
      onClick={() => {
        api.velocity.set(2, 2, 0);
      }}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
};

const Plane = () => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    args: [5, 5],
  }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshLambertMaterial attach="material" color="brown" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Box />
        <Plane />
      </Physics>

      <Stars />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
