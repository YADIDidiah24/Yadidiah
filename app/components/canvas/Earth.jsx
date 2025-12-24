'use client'

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  // Ensure valid geometry data
  useEffect(() => {
    if (earth && earth.scene) {
      earth.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Fix potential NaN values in geometry
          if (child.geometry.attributes && child.geometry.attributes.position) {
            const positionAttribute = child.geometry.attributes.position;
            const positions = positionAttribute.array;
            
            // Check for and fix NaN values
            for (let i = 0; i < positions.length; i++) {
              if (isNaN(positions[i]) || !isFinite(positions[i])) {
                positions[i] = 0;
              }
            }
            
            positionAttribute.needsUpdate = true;
            child.geometry.computeBoundingSphere();
          }
        }
      });
    }
  }, [earth]);

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: false,
        powerPreference: "high-performance",
        antialias: false
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
