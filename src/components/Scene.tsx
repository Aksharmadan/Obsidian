"use client";
import PostFX from "./PostFX";

import HUDLogs from "./HUDLogs";
import HUDSecurity from "./HUDSecurity";
import HUDAnalytics from "./HUDAnalytics";

import DataGlobe from "./DataGlobe";

import { setActiveSection } from "./CameraController";

import CameraController from "./CameraController";

import ThreeDText from "./ThreeDText";


import Particles from "./Particles";

import GlassPanel from "./GlassPanel";


import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import CameraRig from "./CameraRig";

function CoreObject() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.08;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.25, 128, 128]} />
      <meshStandardMaterial
        color="#0F1621"
        metalness={0.9}
        roughness={0.15}
        emissive="#3CF2FF"
        emissiveIntensity={0.25}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.8], fov: 50 }}>
      <fog attach="fog" args={["#020409", 6, 14]} />

      <CameraController />

      <CameraRig />
      <Particles />


      <ambientLight intensity={0.25} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -5, 5]} intensity={0.6} color="#7C7CFF" />

      <ThreeDText text="OBSIDIAN" position={[0, 1.8, 0]} />
      <GlassPanel position={[0, 3.2, 0]} title="OVERVIEW" subtitle="System Overview" onClick={() => setActiveSection?.(3)} />



      <DataGlobe />
      <GlassPanel position={[0, 0, -3.2]} title="NETWORK" subtitle="Deep Network View" onClick={() => setActiveSection?.(4)} />

      <HUDLogs position={[-5.5, 1.6, -1]} />
      <GlassPanel position={[-3.2, -0.8, 0]} title="SYSTEMS" subtitle="View Systems" onClick={() => setActiveSection?.(1)} />

      <HUDAnalytics position={[5.5, 1.6, -1]} />

      <HUDSecurity position={[5.5, -1.6, -1]} />
      <GlassPanel position={[3.2, 0, 0]} title="PROJECTS" subtitle="View Projects" onClick={() => setActiveSection?.(2)} />


      <GlassPanel position={[-2.2, 0.6, 0]} title="HOME" subtitle="Go to Home" onClick={() => setActiveSection?.(0)} />


      <Environment preset="city" />
      <PostFX />

    </Canvas>
  );
}
