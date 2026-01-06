"use client";
import { useStory } from "./Story";


import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataGlobe() {
  const { ready } = useStory();
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const { points, lines } = useMemo(() => {
    const pts: number[] = [];
    const linePts: number[] = [];
    const radius = 1.25;
    const count = 220;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pts.push(x, y, z);

      if (i % 3 === 0) {
        const j = Math.max(0, i - 1);
        linePts.push(x, y, z);
        linePts.push(pts[j * 3], pts[j * 3 + 1], pts[j * 3 + 2]);
      }
    }

    return {
      points: new Float32Array(pts),
      lines: new Float32Array(linePts),
    };
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (pointsRef.current) pointsRef.current.rotation.y = t * 0.15;
    if (linesRef.current) linesRef.current.rotation.y = t * 0.15;
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[points, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#3CF2FF" transparent opacity={ready ? 0.85 : 0} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" array={lines} count={lines.length / 3} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#7C7CFF" transparent opacity={ready ? 0.18 : 0} />
      </lineSegments>
    </group>
  );
}
