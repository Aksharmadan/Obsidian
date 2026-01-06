"use client";

import { Html } from "@react-three/drei";
import { useStory } from "./Story";

export default function HUDSecurity({ position }: { position: [number, number, number] }) {
  const { hud } = useStory();

  return (
    <Html position={position} transform>
      <div
        style={{
          opacity: hud ? 1 : 0,
          transform: hud ? "translateY(0px)" : "translateY(12px)",
          transition: "all 600ms ease",
        }}
        className="w-64 backdrop-blur-xl bg-black/70 border border-red-500/40 rounded-xl p-4 text-red-400 shadow-[0_0_40px_rgba(255,0,0,0.35)]"
      >
        <div className="text-sm font-semibold mb-2">SECURITY OVERRIDE</div>
        <div className="text-center text-xl font-bold tracking-widest bg-red-600/20 py-2 rounded">
          ACCESS DENIED
        </div>
      </div>
    </Html>
  );
}
