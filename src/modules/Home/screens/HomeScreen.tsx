import { Canvas } from "@react-three/fiber";
import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default HomeScreen;
