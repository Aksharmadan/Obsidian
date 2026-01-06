"use client";
import { useStory } from "./Story";


import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";

export default function HUDAnalytics({ position }: { position: [number, number, number] }) {
  const { hud } = useStory();
  const [value, setValue] = useState(30);

  useEffect(() => {
    const i = setInterval(() => {
      setValue(v => (v > 90 ? 30 : v + Math.random() * 10));
    }, 800);
    return () => clearInterval(i);
  }, []);

  return (
    <Html position={position} transform>
      <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="w-72 backdrop-blur-xl bg-white/5 border border-cyan-400/30 rounded-xl p-4 text-cyan-200 shadow-[0_0_40px_rgba(60,242,255,0.25)]">
        <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="text-sm font-semibold mb-2">ANALYTICS</div>
        <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="h-2 bg-cyan-900/40 rounded overflow-hidden">
          <div className="h-full bg-cyan-400 transition-all" style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease", width: `%` }} />
        </div>
      </div>
    </Html>
  );
}
