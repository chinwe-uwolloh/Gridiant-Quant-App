"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sculpture() {
  return (
    <mesh rotation={[0.4, 0.6, 0.1]}>
      <torusKnotGeometry args={[1.1, 0.36, 180, 18]} />
      <meshStandardMaterial color="#d88938" metalness={0.72} roughness={0.32} emissive="#1f3a31" emissiveIntensity={0.18} />
    </mesh>
  );
}

export function LivingEnergyField() {
  return (
    <div className="h-[460px] w-full border border-white/20 bg-gradient-to-br from-[#101720] to-[#090d13]">
      <Canvas camera={{ position: [0, 0, 3.8], fov: 44 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <Sculpture />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}
