"use client";

import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";

export default function PostFX() {
  return (
    <EffectComposer>
      <Bloom intensity={0.35} luminanceThreshold={0.15} luminanceSmoothing={0.9} />
      <Vignette eskil={false} offset={0.25} darkness={0.6} />
      <Noise opacity={0.03} />
    </EffectComposer>
  );
}
