"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import { cn } from "@/lib/cn";
import { useIsCompactViewport } from "@/lib/use-compact-viewport";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";
import { GradientPlaceholder } from "@/components/motion/gradient-placeholder";

type Model3DViewerProps = {
  src: string;
  alt: string;
  poster?: string;
  className?: string;
  /** Use a taller, full-bleed frame (no rounded corners/aspect cap) for a case-study hero instead of a boxed grid-card preview. */
  hero?: boolean;
  /** Scroll progress (0→1) driving the wireframe→materialized reveal. Read via `.get()`
   * inside useFrame — never passed through React state, to avoid a re-render every frame.
   * Omit for a fully-materialized model with no reveal (e.g. the small radiograph panel). */
  progress?: MotionValue<number>;
};

/**
 * The source FBX carried V-Ray materials with no baked textures, so every
 * mesh imported as flat placeholder gray. There's no texture data to recover,
 * so materials are reassigned here from the (real, descriptive) material
 * names V-Ray already gave each part — e.g. "Supra_RefractionBlue" is the
 * body paint, "M_HeadLightGlass1" is a lens, "RedBrake" is a caliper.
 */
function materialFor(name: string) {
  const n = name.toLowerCase();

  if (n.includes("glass") || n.includes("window")) {
    return new THREE.MeshPhysicalMaterial({
      color: "#dbe7f2",
      roughness: 0.05,
      metalness: 0,
      transmission: 1,
      thickness: 0.4,
      transparent: true,
      opacity: 0.4,
    });
  }
  if (n.includes("refractionblue")) {
    return new THREE.MeshPhysicalMaterial({
      color: "#1c4fd6",
      roughness: 0.2,
      metalness: 0.7,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      transparent: true,
    });
  }
  if (n.includes("tire")) {
    return new THREE.MeshStandardMaterial({ color: "#161616", roughness: 0.9, transparent: true });
  }
  if (n.includes("aluminum") || n.includes("silver") || n.includes("wheelsblackshine")) {
    return new THREE.MeshStandardMaterial({ color: "#c8cacd", metalness: 1, roughness: 0.2, transparent: true });
  }
  if (n.includes("light")) {
    const color = n.includes("orange") ? "#ff8a1f" : n.includes("red") ? "#ff2b2b" : "#fff2d6";
    return new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.7, transparent: true });
  }
  if (n.includes("brake")) {
    return new THREE.MeshStandardMaterial({ color: "#b3122a", metalness: 0.3, roughness: 0.4, transparent: true });
  }
  if (n.includes("red")) {
    return new THREE.MeshStandardMaterial({ color: "#5a1414", roughness: 0.6, transparent: true });
  }
  return new THREE.MeshStandardMaterial({ color: "#161719", roughness: 0.6, metalness: 0.1, transparent: true });
}

/** Uniform cyan blueprint wireframe — the "before" state of the materialize reveal.
 * One shared material for every part; the point is the schematic, not per-part color. */
function wireframeMaterial() {
  return new THREE.MeshBasicMaterial({ color: "#00e5ff", wireframe: true, transparent: true, opacity: 1 });
}

function CarModel({ src, progress }: { src: string; progress?: MotionValue<number> }) {
  const { scene } = useGLTF(src);

  const built = useMemo(() => {
    const solidClone = scene.clone(true);
    const cache = new Map<string, THREE.Material>();
    solidClone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = Array.isArray(child.material) ? child.material[0] : child.material;
        const key = material?.name || child.name;
        if (!cache.has(key)) cache.set(key, materialFor(key));
        child.material = cache.get(key)!;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const shared = wireframeMaterial();
    const wireClone = scene.clone(true);
    wireClone.scale.multiplyScalar(1.003); // avoids z-fighting with the solid mesh's coincident surfaces
    wireClone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = shared;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });

    return { solidObject: solidClone, solidMaterials: [...cache.values()], wireObject: wireClone, wireMaterial: shared };
  }, [scene]);

  // Mutating THREE material/geometry state every frame is the standard escape
  // hatch for this kind of imperative animation loop — routed through a ref
  // rather than mutating the useMemo result directly, so the frame loop
  // always reads the latest built assets without depending on React state.
  const builtRef = useRef(built);
  useEffect(() => {
    builtRef.current = built;
  }, [built]);

  useFrame(() => {
    const data = builtRef.current;
    const t = progress ? Math.min(1, Math.max(0, progress.get())) : 1;
    data.solidMaterials.forEach((m) => {
      (m as THREE.Material & { opacity: number }).opacity = t;
    });
    (data.wireMaterial as THREE.Material & { opacity: number }).opacity = 1 - t;
  });

  return (
    <>
      <primitive object={built.solidObject} />
      <primitive object={built.wireObject} />
    </>
  );
}

/** Interactive drag-to-orbit viewer for a real .glb model. Falls back to a static poster/placeholder on compact viewports, where mounting WebGL is the highest-risk jank source. */
export function Model3DViewer({ src, alt, poster, className, hero, progress }: Model3DViewerProps) {
  const isCompact = useIsCompactViewport();
  const prefersReducedMotion = usePrefersReducedMotion();

  const frameClass = hero
    ? "relative h-[70vh] min-h-[480px] w-full overflow-hidden"
    : "hud-glass relative aspect-[4/3] w-full overflow-hidden rounded-hud shadow-hud-3";

  if (isCompact) {
    if (poster) {
      return (
        <div className={cn(frameClass, "bg-charcoal", className)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={poster} alt={alt} className="h-full w-full object-cover" />
        </div>
      );
    }
    return <GradientPlaceholder seed={alt} label={alt} className={className} />;
  }

  return (
    <div className={cn(frameClass, "bg-void", className)}>
      <Canvas camera={{ position: [-4, 1.4, 4.6], fov: hero ? 28 : 32 }} dpr={[1, 1.75]} shadows>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 8, 16]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 6, 4]} intensity={1.5} castShadow />
        <pointLight position={[-5, 1.5, -3]} intensity={9} color="#00e5ff" />
        <pointLight position={[4, -1, -4]} intensity={6} color="#b300ff" />
        <Suspense fallback={null}>
          <CarModel src={src} progress={progress} />
          <ContactShadows position={[0, -0.78, 0]} opacity={0.55} scale={10} blur={2.4} far={2} color="#00e5ff" />
          <Environment preset="night" environmentIntensity={0.5} />
        </Suspense>
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 3.2}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={3.5}
          maxDistance={7}
          autoRotate={!prefersReducedMotion}
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
