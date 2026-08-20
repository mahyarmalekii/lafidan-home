import { useEffect, useRef } from 'react';

export const ThreeCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // 3D Point & Vector definition
    type Point3D = { x: number; y: number; z: number };

    // 3D Geometric Meshes (Architectural Forms: Cube, Octahedron, Grid Plane)
    interface Mesh3D {
      vertices: Point3D[];
      edges: [number, number][];
      position: Point3D;
      rotation: { x: number; y: number; z: number };
      rotSpeed: { x: number; y: number; z: number };
      scale: number;
      color: string;
      lineWidth: number;
    }

    // Create 3D Cube vertices & edges
    const createCube = (size: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const s = size / 2;
      const vertices: Point3D[] = [
        { x: -s, y: -s, z: -s },
        { x: s, y: -s, z: -s },
        { x: s, y: s, z: -s },
        { x: -s, y: s, z: -s },
        { x: -s, y: -s, z: s },
        { x: s, y: -s, z: s },
        { x: s, y: s, z: s },
        { x: -s, y: s, z: s }
      ];
      const edges: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0], // back
        [4, 5], [5, 6], [6, 7], [7, 4], // front
        [0, 4], [1, 5], [2, 6], [3, 7]  // connecting
      ];
      return { vertices, edges };
    };

    // Create 3D Icosahedron/Octahedron
    const createOctahedron = (size: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const s = size;
      const vertices: Point3D[] = [
        { x: 0, y: -s, z: 0 },
        { x: s, y: 0, z: 0 },
        { x: 0, y: 0, z: s },
        { x: -s, y: 0, z: 0 },
        { x: 0, y: 0, z: -s },
        { x: 0, y: s, z: 0 }
      ];
      const edges: [number, number][] = [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [5, 1], [5, 2], [5, 3], [5, 4],
        [1, 2], [2, 3], [3, 4], [4, 1]
      ];
      return { vertices, edges };
    };

    // Create Architectural Floor Grid
    const createFloorGrid = (gridSize: number, step: number): { vertices: Point3D[]; edges: [number, number][] } => {
      const vertices: Point3D[] = [];
      const edges: [number, number][] = [];
      const half = gridSize / 2;
      let idx = 0;

      for (let x = -half; x <= half; x += step) {
        vertices.push({ x, y: 0, z: -half });
        vertices.push({ x, y: 0, z: half });
        edges.push([idx, idx + 1]);
        idx += 2;
      }
      for (let z = -half; z <= half; z += step) {
        vertices.push({ x: -half, y: 0, z });
        vertices.push({ x: half, y: 0, z });
        edges.push([idx, idx + 1]);
        idx += 2;
      }
      return { vertices, edges };
    };

    const cube1 = createCube(220);
    const cube2 = createCube(360);
    const octa = createOctahedron(180);
    const grid = createFloorGrid(1400, 100);

    const meshes: Mesh3D[] = [
      {
        vertices: cube1.vertices,
        edges: cube1.edges,
        position: { x: 0, y: -30, z: 0 },
        rotation: { x: 0.3, y: 0.4, z: 0 },
        rotSpeed: { x: 0.003, y: 0.005, z: 0.001 },
        scale: 1,
        color: 'rgba(255, 255, 255, 0.45)',
        lineWidth: 1.2
      },
      {
        vertices: cube2.vertices,
        edges: cube2.edges,
        position: { x: 0, y: -30, z: 0 },
        rotation: { x: -0.2, y: -0.3, z: 0.1 },
        rotSpeed: { x: -0.002, y: -0.003, z: 0.001 },
        scale: 1,
        color: 'rgba(255, 255, 255, 0.15)',
        lineWidth: 0.8
      },
      {
        vertices: octa.vertices,
        edges: octa.edges,
        position: { x: 0, y: -30, z: 0 },
        rotation: { x: 0.5, y: 0.2, z: 0.4 },
        rotSpeed: { x: 0.004, y: -0.006, z: 0.002 },
        scale: 1,
        color: 'rgba(255, 255, 255, 0.65)',
        lineWidth: 1.5
      },
      {
        vertices: grid.vertices,
        edges: grid.edges,
        position: { x: 0, y: 220, z: 100 },
        rotation: { x: 1.1, y: 0, z: 0 },
        rotSpeed: { x: 0, y: 0.001, z: 0 },
        scale: 1,
        color: 'rgba(255, 255, 255, 0.07)',
        lineWidth: 0.6
      }
    ];

    // Floating 3D particles
    const particleCount = 70;
    const particles: (Point3D & { vx: number; vy: number; vz: number; size: number; alpha: number })[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 800,
        z: (Math.random() - 0.5) * 800,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.6 + 0.2
      });
    }

    // 3D rotation helper
    const rotatePoint = (p: Point3D, rot: { x: number; y: number; z: number }): Point3D => {
      // Rotate around X
      const radX = rot.x;
      const cosX = Math.cos(radX);
      const sinX = Math.sin(radX);
      const y1 = p.y * cosX - p.z * sinX;
      const z1 = p.y * sinX + p.z * cosX;

      // Rotate around Y
      const radY = rot.y;
      const cosY = Math.cos(radY);
      const sinY = Math.sin(radY);
      const x2 = p.x * cosY + z1 * sinY;
      const z2 = -p.x * sinY + z1 * cosY;

      // Rotate around Z
      const radZ = rot.z;
      const cosZ = Math.cos(radZ);
      const sinZ = Math.sin(radZ);
      const x3 = x2 * cosZ - y1 * sinZ;
      const y3 = x2 * sinZ + y1 * cosZ;

      return { x: x3, y: y3, z: z2 };
    };

    // Camera perspective projection
    const fov = 650;
    const project = (p: Point3D, cx: number, cy: number) => {
      const zDistance = p.z + 700;
      if (zDistance <= 1) return null;
      const scale = fov / zDistance;
      return {
        x: cx + p.x * scale,
        y: cy + p.y * scale,
        scale,
        depth: zDistance
      };
    };

    // Render loop
    const render = () => {
      // Lerp mouse towards target
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffsetNormX = (mouse.x - width / 2) / (width / 2);
      const mouseOffsetNormY = (mouse.y - height / 2) / (height / 2);

      const centerX = width / 2 + mouseOffsetNormX * 30;
      const centerY = height * 0.42 + mouseOffsetNormY * 20;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x > 600) p.x = -600;
        if (p.x < -600) p.x = 600;
        if (p.y > 400) p.y = -400;
        if (p.y < -400) p.y = 400;
        if (p.z > 400) p.z = -400;
        if (p.z < -400) p.z = 400;

        // Apply mouse tilt to particle
        const rotatedP = rotatePoint(p, {
          x: mouseOffsetNormY * 0.2,
          y: mouseOffsetNormX * 0.3,
          z: 0
        });

        const proj = project(rotatedP, centerX, centerY);
        if (proj) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * Math.min(1, proj.scale)})`;
          ctx.fill();
        }
      });

      // Render 3D Meshes
      meshes.forEach((mesh) => {
        mesh.rotation.x += mesh.rotSpeed.x;
        mesh.rotation.y += mesh.rotSpeed.y;
        mesh.rotation.z += mesh.rotSpeed.z;

        const effectiveRot = {
          x: mesh.rotation.x + mouseOffsetNormY * 0.35,
          y: mesh.rotation.y + mouseOffsetNormX * 0.45,
          z: mesh.rotation.z
        };

        const projectedVertices = mesh.vertices.map((v) => {
          const scaled = {
            x: v.x * mesh.scale,
            y: v.y * mesh.scale,
            z: v.z * mesh.scale
          };
          const rotated = rotatePoint(scaled, effectiveRot);
          const translated = {
            x: rotated.x + mesh.position.x,
            y: rotated.y + mesh.position.y,
            z: rotated.z + mesh.position.z
          };
          return project(translated, centerX, centerY);
        });

        // Draw Edges
        ctx.strokeStyle = mesh.color;
        ctx.lineWidth = mesh.lineWidth;

        mesh.edges.forEach(([i, j]) => {
          const p1 = projectedVertices[i];
          const p2 = projectedVertices[j];
          if (p1 && p2) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw Vertex Points on main objects
        if (mesh.lineWidth > 1) {
          projectedVertices.forEach((p) => {
            if (p) {
              ctx.beginPath();
              ctx.arc(p.x, p.y, 2 * p.scale, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
              ctx.fill();
            }
          });
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      style={{ opacity: 0.85 }}
    />
  );
};
