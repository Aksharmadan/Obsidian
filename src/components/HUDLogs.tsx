"use client";
import { useStory } from "./Story";


import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";

const LOGS = [
  "Initializing neural core...",
  "Loading data streams...",
  "Decrypting channels...",
  "Accessing node cluster...",
  "Sync complete.",
  "Monitoring activity...",
];

export default function HUDLogs({ position }: { position: [number, number, number] }) {
  const { hud } = useStory();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setIndex(v => (v + 1) % LOGS.length);
    }, 1200);
    return () => clearInterval(i);
  }, []);

  return (
    <Html position={position} transform>
      <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="w-72 h-40 backdrop-blur-xl bg-black/60 border border-green-400/30 rounded-xl p-4 font-mono text-xs text-green-400 shadow-[0_0_40px_rgba(0,255,150,0.25)]">
        <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="mb-2 text-green-300 font-semibold">SYSTEM LOGS</div>
        <div style={{ opacity: hud ? 1 : 0, transform: hud ? "translateY(0px)" : "translateY(12px)", transition: "all 600ms ease" }} className="space-y-1">
          {LOGS.slice(0, index + 1).map((l, i) => (
            <div key={i}>&gt; {l}</div>
          ))}
        </div>
      </div>
    </Html>
  );
}
