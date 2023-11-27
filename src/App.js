import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Avatar } from './Avatar';

function App() {
  return (
    <div className="app">
      <Canvas>
        <OrbitControls />
        {/* <ambientLight  position={[1, 0, 0]} /> */}
        <pointLight position={[2, 2, 2]}  intensity={20}/>
        {/* <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <Avatar />
      </Canvas>
    </div>
  );
}

export default App;
