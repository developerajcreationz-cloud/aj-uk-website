"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Builds a small local light-probe (no external HDRI fetch) so the chrome
 * material gets real reflections/highlights instead of looking flat.
 */
function SceneLighting() {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const envTexture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    // three.js/r3f idiom: assigning the generated env map onto the scene
    // instance is how lighting is applied, not React state.
    // eslint-disable-next-line react-hooks/immutability
    scene.environment = envTexture;
    return () => {
      envTexture.dispose();
      pmrem.dispose();
    };
  }, [gl, scene]);

  return null;
}

function ChromeKnot({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => new THREE.TorusKnotGeometry(1, 0.32, 220, 28, 2, 3), []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    mesh.rotation.y += delta * 0.22;
    mesh.rotation.x += delta * 0.08;

    const mx = mouseX.get();
    const my = mouseY.get();
    mesh.rotation.z = THREE.MathUtils.lerp(mesh.rotation.z, mx * 0.5, 0.05);
    mesh.position.y = THREE.MathUtils.lerp(mesh.position.y, my * -0.25, 0.05);
  });

  return (
    <mesh ref={meshRef} geometry={geometry} scale={1.1}>
      <meshPhysicalMaterial
        color="#eef2e2"
        metalness={1}
        roughness={0.15}
        clearcoat={1}
        clearcoatRoughness={0.12}
        reflectivity={1}
        envMapIntensity={1.3}
      />
    </mesh>
  );
}

export function HeroScene({
  mouseX,
  mouseY,
  className,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  className?: string;
}) {
  return (
    <div className={cn("pointer-events-none", className)} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 32 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.75]}
      >
        <Suspense fallback={null}>
          <SceneLighting />
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 4, 2]} intensity={1.4} color="#c8e455" />
          <directionalLight position={[-3, -2, -2]} intensity={0.7} color="#4d5f18" />
          <ChromeKnot mouseX={mouseX} mouseY={mouseY} />
        </Suspense>
      </Canvas>
    </div>
  );
}
