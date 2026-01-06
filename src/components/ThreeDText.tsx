"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useStory } from "./Story";

type Props = {
  text: string;
  position: [number, number, number];
};

export default function ThreeDText({ text, position }: Props) {
  const { ready } = useStory();
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime()) * 0.05;
  });

  return (
    <Text
      ref={ref}
      position={position}
      fontSize={0.55}
      letterSpacing={-0.04}
      color={ready ? "#E6FAFF" : "#000000"}
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  );
}
