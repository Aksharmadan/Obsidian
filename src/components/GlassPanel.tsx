"use client";

import { Html } from "@react-three/drei";
import { useState } from "react";

type Props = {
  position: [number, number, number];
  title: string;
  subtitle: string;
  onClick?: () => void;
};

export default function GlassPanel({ position, title, subtitle, onClick }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <Html position={position} transform>
      <div
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`cursor-pointer backdrop-blur-xl bg-white/5 border rounded-2xl px-6 py-4 transition-all duration-300 
        ${hovered ? "border-cyan-300 shadow-[0_0_60px_rgba(60,242,255,0.35)] scale-105" : "border-white/10 shadow-[0_0_40px_rgba(60,242,255,0.15)]"}`}
      >
        <h2 className="text-lg font-semibold tracking-wide text-white">{title}</h2>
        <p className="text-sm text-white/60 mt-1">{subtitle}</p>
      </div>
    </Html>
  );
}
