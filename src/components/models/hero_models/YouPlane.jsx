import React from "react";
import { useTexture } from "@react-three/drei";

export default function YouPlane(props) {
  const texture = useTexture("/images/you.png");

  return (
    <group {...props} dispose={null}>
      {/* Portrait plane - bright and clear */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[6, 7.5]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
