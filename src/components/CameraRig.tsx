"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(
      vec.set(mouse.x * 0.6, mouse.y * 0.4, 6),
      0.05
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}
