'use client'

import React, { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Text, Float } from "@react-three/drei";
import * as THREE from "three";

const TechnologySphere = ({ position, tech, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = React.useState(false);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
      
      // Floating animation
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + index) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={hovered ? "#6366F1" : "#8B5CF6"}
          transparent
          opacity={0.8}
          wireframe={hovered}
        />
        <Text
          position={[0, 0, 0.5]}
          fontSize={0.1}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/inter-bold.woff"
        >
          {tech.name.length > 8 ? tech.name.substring(0, 8) + "..." : tech.name}
        </Text>
      </mesh>
    </Float>
  );
};

const TechnologiesScene = ({ technologies }) => {
  // Create a circular arrangement of technologies
  const techPositions = useMemo(() => {
    const positions = [];
    const radius = 2.5;
    const count = Math.min(technologies.length, 12); // Limit to 12 for performance
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.sin(angle * 2) * 0.5);
      positions.push([x, y, z]);
    }
    return positions;
  }, [technologies]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#6366F1" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#8B5CF6" />

      {/* Technologies */}
      {technologies.slice(0, 12).map((tech, index) => (
        <TechnologySphere
          key={tech.name}
          position={techPositions[index]}
          tech={tech}
          index={index}
        />
      ))}

      {/* Center text */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.3}
        color="#6366F1"
        anchorX="center"
        anchorY="middle"
      >
        Technologies
      </Text>
    </>
  );
};

const TechnologiesCanvas = ({ technologies = [] }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ 
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
        antialias: false,
        alpha: true
      }}
      frameloop='demand'
      dpr={[1, 1.5]}
      onCreated={({ gl }) => {
        gl.setClearColor('#0B0B0F', 0);
      }}
    >
      <Suspense fallback={null}>
        <TechnologiesScene technologies={technologies} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TechnologiesCanvas;
