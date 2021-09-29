import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Box />
      <Stars />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
