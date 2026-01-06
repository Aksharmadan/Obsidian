"use client";

import { useThree, useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

export let setActiveSection: (n: number) => void;

const SECTIONS = [
  { position: new THREE.Vector3(0, 0, 6) },      // FRONT
  { position: new THREE.Vector3(-6, 0, 6) },    // LEFT
  { position: new THREE.Vector3(6, 0, 6) },     // RIGHT
  { position: new THREE.Vector3(0, 4, 6) },     // TOP
  { position: new THREE.Vector3(0, 0, -6) },    // BACK

  { position: new THREE.Vector3(0, 0, 6) },
  { position: new THREE.Vector3(-6, 0, 6) },
  { position: new THREE.Vector3(6, 0, 6) },
];

export default function CameraController() {
  const { camera } = useThree();
  const [section, setSection] = useState(0);
  const target = SECTIONS[section].position;

  setActiveSection = setSection;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "1") setSection(0);
      if (e.key === "2") setSection(1);
      if (e.key === "3") setSection(2);
      if (e.key === "4") setSection(3);
      if (e.key === "5") setSection(4);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useFrame(() => {
    camera.position.lerp(target, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
