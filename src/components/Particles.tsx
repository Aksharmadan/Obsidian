"use client";

import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions}>
      <PointMaterial color="#3CF2FF" size={0.02} transparent opacity={0.15} />
    </Points>
  );
}
