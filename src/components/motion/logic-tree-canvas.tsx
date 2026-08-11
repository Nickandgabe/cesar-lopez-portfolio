"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/cn";
import { mulberry32, seedFromString } from "@/lib/prng";
import { useIsCompactViewport } from "@/lib/use-compact-viewport";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type LogicTreeCanvasProps = {
  /** Deterministic seed (e.g. project slug) — same seed always renders the same tree shape. */
  seed: string;
  className?: string;
};

const DEPTH = 4;

type TreeNode = { pos: THREE.Vector3; depth: number; children: TreeNode[] };

/** Procedural branching schematic — a project's logic modeled as a decision tree rather
 * than a literal screenshot. Root at top, branches fan downward; no model file, no
 * textures, every position generated from the project slug. */
function buildTree(seed: number) {
  const rand = mulberry32(seed);

  function grow(pos: THREE.Vector3, dir: THREE.Vector3, depth: number): TreeNode {
    const node: TreeNode = { pos, depth, children: [] };
    if (depth >= DEPTH) return node;

    const branchCount = depth === 0 ? 3 : 2 + Math.floor(rand() * 2);
    for (let i = 0; i < branchCount; i++) {
      const spread = (i - (branchCount - 1) / 2) * 0.7 + (rand() - 0.5) * 0.35;
      const newDir = new THREE.Vector3(dir.x + spread, dir.y - 0.85 - rand() * 0.25, dir.z + (rand() - 0.5) * 0.7).normalize();
      const length = 1.15 - depth * 0.14;
      const newPos = pos.clone().add(newDir.multiplyScalar(length));
      node.children.push(grow(newPos, newDir, depth + 1));
    }
    return node;
  }

  return grow(new THREE.Vector3(0, 2.3, 0), new THREE.Vector3(0, -1, 0), 0);
}

function flattenTree(root: TreeNode) {
  const positions: THREE.Vector3[] = [];
  const depths: number[] = [];
  const edges: [number, number][] = [];

  function walk(node: TreeNode, parentIdx: number | null) {
    const idx = positions.length;
    positions.push(node.pos);
    depths.push(node.depth);
    if (parentIdx !== null) edges.push([parentIdx, idx]);
    node.children.forEach((child) => walk(child, idx));
  }

  walk(root, null);
  return { positions, depths, edges };
}

function TreeSchematic({ seed, reduced }: { seed: string; reduced: boolean }) {
  const { positions, edges } = useMemo(() => flattenTree(buildTree(seedFromString(seed))), [seed]);

  const groupRef = useRef<THREE.Group>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const clockRef = useRef(0);

  const nodeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(positions.length * 3);
    positions.forEach((p, i) => arr.set([p.x, p.y, p.z], i * 3));
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [positions]);

  const edgeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const arr = new Float32Array(edges.length * 2 * 3);
    edges.forEach(([a, b], idx) => {
      arr.set([positions[a].x, positions[a].y, positions[a].z], idx * 6);
      arr.set([positions[b].x, positions[b].y, positions[b].z], idx * 6 + 3);
    });
    geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return geo;
  }, [edges, positions]);

  useFrame((_, delta) => {
    clockRef.current += delta;
    if (!reduced && groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clockRef.current * 0.12) * 0.25;
    }
    if (pointsRef.current) {
      const pulse = reduced ? 1 : 0.85 + Math.sin(clockRef.current * 1.1) * 0.15;
      pointsRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial color="#00e5ff" transparent opacity={0.4} />
      </lineSegments>
      <points ref={pointsRef} geometry={nodeGeometry}>
        <pointsMaterial color="#8fefff" size={0.09} transparent opacity={0.9} sizeAttenuation depthWrite={false} />
      </points>
      {/* root marker, slightly larger — the "decision origin" */}
      <mesh position={[positions[0].x, positions[0].y, positions[0].z]}>
        <octahedronGeometry args={[0.14, 0]} />
        <meshBasicMaterial color="#b300ff" />
      </mesh>
    </group>
  );
}

function LogicTreeFallback({ className }: { className?: string }) {
  return (
    <div className={cn("hud-grid relative flex h-full w-full items-center justify-center bg-charcoal", className)}>
      <span className="font-mono text-hud-xs text-ink-dim uppercase">Logic tree // static</span>
    </div>
  );
}

export function LogicTreeCanvas({ seed, className }: LogicTreeCanvasProps) {
  const isCompact = useIsCompactViewport();
  const prefersReducedMotion = usePrefersReducedMotion();

  if (isCompact) return <LogicTreeFallback className={className} />;

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Canvas camera={{ position: [3.2, 0.5, 4.6], fov: 38 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: false }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 7, 12]} />
        <TreeSchematic seed={seed} reduced={prefersReducedMotion} />
      </Canvas>
    </div>
  );
}
