import React, { useEffect, useRef } from 'react';
import { useScroll, useReducedMotion } from 'framer-motion';
import './SpaceBackground.css';

export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  // Keep references for animation states to prevent React re-renders from recreating them
  const stateRef = useRef({
    scrollProgress: 0,
    cameraZ: 0,
    cameraX: 0,
    cameraY: 0,
    targetCameraX: 0,
    targetCameraY: 0,
    prevCameraZ: 0,
    time: 0,
    stars: [],
    galaxy: [],
    nebulas: [],
    planets: [],
    crystals: [],
    dnas: [],
    blackhole: {}
  });

  // Handle scroll update from Framer Motion
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      stateRef.current.scrollProgress = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    const state = stateRef.current;

    // ----- Initialize 3D Space Data -----
    const MAX_Z = 2000;
    const FOV = 400;

    // 1. Stars (Space Dust)
    const STAR_COUNT = 600;
    state.stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      state.stars.push({
        x: (Math.random() - 0.5) * 3000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * MAX_Z,
        size: Math.random() * 1.6 + 0.4,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.03 + 0.015
      });
    }

    // 2. Milky Way spiral galaxy
    const GALAXY_PARTICLES = 650;
    const GALAXY_ARMS = 3;
    const galaxyCenter = { x: 380, y: 120, z: 1200 };
    state.galaxy = [];
    for (let i = 0; i < GALAXY_PARTICLES; i++) {
      const arm = i % GALAXY_ARMS;
      // Spiral radius
      const r = (i / GALAXY_PARTICLES) * 350 + Math.random() * 18;
      // Spiral formula: theta = arm angle + distance twist + minor noise
      const theta = arm * ((Math.PI * 2) / GALAXY_ARMS) + r * 0.014 + (Math.random() - 0.5) * 0.3;
      state.galaxy.push({
        x: Math.cos(theta) * r,
        y: (Math.random() - 0.5) * 22,
        z: Math.sin(theta) * r,
        size: Math.random() * 1.8 + 0.4,
        colorType: i % 3 // 0: cyan, 1: purple, 2: indigo/blue
      });
    }

    // 3. Nebulas (Atmospheric glows)
    state.nebulas = [
      { x: 250, y: 140, z: 140, radius: 380, color: '6, 182, 212' },     // Cyan — early welcome glow
      { x: -350, y: -120, z: 380, radius: 450, color: '6, 182, 212' },   // Cyan
      { x: 420, y: -200, z: 620, radius: 400, color: '99, 102, 241' },   // Blue
      { x: 480, y: 180, z: 850, radius: 550, color: '168, 85, 247' },  // Purple
      { x: -420, y: -150, z: 1100, radius: 420, color: '236, 72, 153' }, // Magenta
      { x: -450, y: 280, z: 1350, radius: 480, color: '236, 72, 153' }, // Magenta
      { x: 350, y: 220, z: 1560, radius: 460, color: '6, 182, 212' },   // Cyan
      { x: 300, y: -220, z: 1750, radius: 600, color: '99, 102, 241' }  // Blue
    ];

    // 4. Planets
    // Hand-crafted properties to match the visual styling in the original CSS
    state.planets = [
      {
        id: 'p1',
        x: 480,
        y: -150,
        z: 1650,
        radius: 75,
        hue: 'cyan',
        hasRing: true,
        ringAngle: -0.35,
        ringRadiusX: 135,
        ringRadiusY: 28,
        highlight: '#ffffff',
        baseColor: '#0fd8e8',
        shadowColor: '#051a35',
        glowColor: 'rgba(15, 216, 232, 0.35)'
      },
      {
        id: 'p2',
        x: -450,
        y: 220,
        z: 920,
        radius: 48,
        hue: 'purple',
        hasRing: false,
        highlight: '#ffffff',
        baseColor: '#c084fc',
        shadowColor: '#1e0a3c',
        glowColor: 'rgba(168, 85, 247, 0.32)'
      },
      {
        id: 'p3',
        x: -240,
        y: -180,
        z: 460,
        radius: 32,
        hue: 'blue',
        hasRing: true,
        ringAngle: 0.26,
        ringRadiusX: 60,
        ringRadiusY: 13,
        highlight: '#ffffff',
        baseColor: '#818cf8',
        shadowColor: '#11103a',
        glowColor: 'rgba(99, 102, 241, 0.35)'
      },
      {
        id: 'p4',
        x: 520,
        y: 300,
        z: 1250,
        radius: 95,
        hue: 'magenta',
        hasRing: false,
        highlight: '#ffffff',
        baseColor: '#f472b6',
        shadowColor: '#260b29',
        glowColor: 'rgba(236, 72, 153, 0.3)'
      },
      {
        id: 'p5',
        x: 320,
        y: 90,
        z: 680,
        radius: 20,
        hue: 'cyan',
        hasRing: false,
        highlight: '#ffffff',
        baseColor: '#0fd8e8',
        shadowColor: '#051a35',
        glowColor: 'rgba(15, 216, 232, 0.25)'
      },
      {
        id: 'p6',
        x: -280,
        y: 120,
        z: 220,
        radius: 26,
        hue: 'purple',
        hasRing: false,
        highlight: '#ffffff',
        baseColor: '#c084fc',
        shadowColor: '#1e0a3c',
        glowColor: 'rgba(168, 85, 247, 0.3)'
      },
      {
        id: 'p7',
        x: 420,
        y: -260,
        z: 1480,
        radius: 58,
        hue: 'magenta',
        hasRing: true,
        ringAngle: 0.3,
        ringRadiusX: 95,
        ringRadiusY: 20,
        highlight: '#ffffff',
        baseColor: '#f472b6',
        shadowColor: '#260b29',
        glowColor: 'rgba(236, 72, 153, 0.32)'
      }
    ];

    // 5. 3D Floating Crystals
    // Octahedron geometry
    const crystalVertices = [
      [0, 1, 0],    // Top
      [0, -1, 0],   // Bottom
      [1, 0, 0],    // Right
      [-1, 0, 0],   // Left
      [0, 0, 0.75],  // Front
      [0, 0, -0.75]  // Back
    ];
    const crystalFaces = [
      [0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], // Top pyramid
      [1, 2, 4], [1, 4, 3], [1, 3, 5], [1, 5, 2]  // Bottom pyramid
    ];

    const crystalCenters = [
      { id: 'c0', x: 140, y: -160, z: 160, size: 16 },
      { id: 'c1', x: -160, y: 130, z: 350, size: 18 },
      { id: 'c2', x: 280, y: -70, z: 580, size: 22 },
      { id: 'c3', x: -320, y: -90, z: 1080, size: 26 },
      { id: 'c4', x: 190, y: 240, z: 1380, size: 32 },
      { id: 'c5', x: -190, y: 320, z: 780, size: 20 },
      { id: 'c6', x: 320, y: -240, z: 1680, size: 36 },
      { id: 'c7', x: -280, y: 60, z: 1560, size: 24 }
    ];

    state.crystals = crystalCenters.map((c) => ({
      ...c,
      vertices: crystalVertices,
      faces: crystalFaces,
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      speedX: Math.random() * 0.015 + 0.005,
      speedY: Math.random() * 0.015 + 0.005,
      speedZ: Math.random() * 0.015 + 0.005
    }));

    // 6. DNA Double Helix(es)
    const buildDnaPoints = (count, height) => {
      const pts = [];
      for (let i = 0; i < count; i++) {
        const t = i / (count - 1);
        pts.push({ angle: t * Math.PI * 4.4, y: t * height - height / 2, stepIndex: i });
      }
      return pts;
    };
    state.dnas = [
      { center: { x: 260, y: 60, z: 980 }, points: buildDnaPoints(24, 320), radius: 38, rotY: 0 },
      { center: { x: -300, y: -80, z: 1620 }, points: buildDnaPoints(20, 260), radius: 30, rotY: 1.4 }
    ];

    // 7. Wormhole / Black Hole Gateway (at the very top of page)
    state.blackhole = {
      x: 0,
      y: -100,
      z: 60,
      rot: 0
    };

    // ----- Resize Handler -----
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // ----- Mouse Move / Parallax Handler -----
    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      state.targetCameraX = ((e.clientX / window.innerWidth) - 0.5) * 160;
      state.targetCameraY = ((e.clientY / window.innerHeight) - 0.5) * 160;
    };
    const handleMouseLeave = () => {
      state.targetCameraX = 0;
      state.targetCameraY = 0;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // ----- 3D rotation helper -----
    const rotate3D = (pt, ax, ay, az) => {
      // Z rotation
      let x1 = pt[0] * Math.cos(az) - pt[1] * Math.sin(az);
      let y1 = pt[0] * Math.sin(az) + pt[1] * Math.cos(az);
      let z1 = pt[2];

      // Y rotation
      let x2 = x1 * Math.cos(ay) + z1 * Math.sin(ay);
      let y2 = y1;
      let z2 = -x1 * Math.sin(ay) + z1 * Math.cos(ay);

      // X rotation
      let x3 = x2;
      let y3 = y2 * Math.cos(ax) - z2 * Math.sin(ax);
      let z3 = y2 * Math.sin(ax) + z2 * Math.cos(ax);

      return [x3, y3, z3];
    };

    // ----- Render Loop -----
    const render = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // 1. Clear Canvas (Transparent)
      ctx.clearRect(0, 0, width, height);

      // Increment clock
      state.time += 1;

      // 2. Camera math
      // scroll progress maps to Z depth flight
      // We reserve the range [0, 1800] for cameraZ.
      const targetZ = state.scrollProgress * 1800;

      if (prefersReducedMotion) {
        state.cameraZ = targetZ;
        state.cameraX = 0;
        state.cameraY = 0;
      } else {
        state.cameraZ += (targetZ - state.cameraZ) * 0.08;
        state.cameraX += (state.targetCameraX - state.cameraX) * 0.05;
        state.cameraY += (state.targetCameraY - state.cameraY) * 0.05;
      }

      const velocity = state.cameraZ - state.prevCameraZ;
      state.prevCameraZ = state.cameraZ;

      // 3. Draw Stars (Background layer)
      // Group stars into 4 depth/opacity bins for single-path batch drawing
      const starBins = [[], [], [], []];
      
      state.stars.forEach((star) => {
        // Warp wrap-around
        let relativeZ = star.z - state.cameraZ;
        if (relativeZ < 0) {
          // wrap around to the far Z limit
          star.z += MAX_Z;
          relativeZ = star.z - state.cameraZ;
        }

        if (relativeZ <= 5) return; // skip clipping boundary

        const scale = FOV / relativeZ;
        const px = (star.x - state.cameraX) * scale + width / 2;
        const py = (star.y - state.cameraY) * scale + height / 2;

        if (px < -10 || px > width + 10 || py < -10 || py > height + 10) return;

        // Twinkle effect
        const twinkle = 0.35 + 0.65 * Math.sin(state.time * star.twinkleSpeed + star.twinklePhase);
        const opacity = Math.max(0, Math.min(1, relativeZ / 150) * twinkle); // fade near clip plane, clamp >= 0

        // Star drawing (velocity streak or normal dot)
        const size = star.size * scale * 0.15;
        
        // Put in an opacity bin, clamped safely to [0..3]
        const binIdx = Math.max(0, Math.min(3, Math.floor(opacity * 4)));
        starBins[binIdx].push({ px, py, size, opacity, relativeZ, star });
      });

      // Draw normal stars in 4 batched draw calls (one per opacity level)
      starBins.forEach((bin, bIdx) => {
        if (bin.length === 0) return;
        const avgOpacity = (bIdx + 0.5) / 4;
        
        // Batch 1: circles
        ctx.fillStyle = `rgba(255, 255, 255, ${avgOpacity})`;
        ctx.beginPath();
        bin.forEach((s) => {
          const streakLength = prefersReducedMotion ? 0 : Math.min(32, Math.abs(velocity) * 4.8);
          if (streakLength <= 0.8) {
            ctx.moveTo(s.px + s.size, s.py);
            ctx.arc(s.px, s.py, s.size, 0, Math.PI * 2);
          }
        });
        ctx.fill();

        // Batch 2: lines (velocity streaks)
        const streakLength = prefersReducedMotion ? 0 : Math.min(32, Math.abs(velocity) * 4.8);
        if (streakLength > 0.8) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${avgOpacity * 0.95})`;
          ctx.lineWidth = Math.max(0.6, (bin[0]?.size || 1) * 0.85);
          ctx.beginPath();
          bin.forEach((s) => {
            ctx.moveTo(s.px, s.py);
            const prevProjScale = FOV / (s.relativeZ + Math.abs(velocity) * 1.5);
            const prevPx = (s.star.x - state.cameraX) * prevProjScale + width / 2;
            const prevPy = (s.star.y - state.cameraY) * prevProjScale + height / 2;
            ctx.lineTo(prevPx, prevPy);
          });
          ctx.stroke();
        }
      });

      // 4. Draw Milky Way Spiral Galaxy (Midground layer)
      const cosG = Math.cos(state.time * 0.0012);
      const sinG = Math.sin(state.time * 0.0012);
      
      // Group galaxy particles by color type and opacity bands to batch draw calls (3 colors * 3 opacity bins)
      const galaxyBins = Array.from({ length: 9 }, () => []);

      state.galaxy.forEach((p) => {
        // Spiral orbital rotation over time
        const rx = p.x * cosG - p.z * sinG;
        const rz = p.x * sinG + p.z * cosG;

        // Place absolute location relative to the galaxy center
        const absX = galaxyCenter.x + rx;
        const absY = galaxyCenter.y + p.y;
        const absZ = galaxyCenter.z + rz;

        const relativeZ = absZ - state.cameraZ;
        if (relativeZ <= 5 || relativeZ > MAX_Z) return;

        const scale = FOV / relativeZ;
        const px = (absX - state.cameraX) * scale + width / 2;
        const py = (absY - state.cameraY) * scale + height / 2;

        if (px < -10 || px > width + 10 || py < -10 || py > height + 10) return;

        const size = Math.max(0.4, p.size * scale * 0.14);
        const opacity = Math.max(0, Math.max(0, Math.min(0.65, (relativeZ - 5) / 120)) * (1.2 - relativeZ / MAX_Z)); // clamp >= 0

        const opBin = Math.max(0, Math.min(2, Math.floor(opacity * 4.5))); // clamp safely to [0..2]
        const binIndex = Math.max(0, Math.min(8, p.colorType * 3 + opBin)); // clamp safely to [0..8]
        galaxyBins[binIndex].push({ px, py, size });
      });

      // Draw galaxy particles in 9 batch paths
      const colors = ['6, 182, 212', '168, 85, 247', '99, 102, 241'];
      galaxyBins.forEach((bin, idx) => {
        if (bin.length === 0) return;
        const colorType = Math.floor(idx / 3);
        const opBin = idx % 3;
        const avgOpacity = opBin === 0 ? 0.15 : (opBin === 1 ? 0.38 : 0.58);

        ctx.fillStyle = `rgba(${colors[colorType]}, ${avgOpacity})`;
        ctx.beginPath();
        bin.forEach((s) => {
          ctx.moveTo(s.px + s.size, s.py);
          ctx.arc(s.px, s.py, s.size, 0, Math.PI * 2);
        });
        ctx.fill();
      });

      // 5. Painter's Algorithm for Z-Sorting major solid entities
      const drawQueue = [];

      // Add Nebulas
      state.nebulas.forEach((neb, idx) => {
        const relativeZ = neb.z - state.cameraZ;
        if (relativeZ <= 5) return;

        // Float slightly over time
        const floatY = Math.sin(state.time * 0.0035 + idx) * 20;

        drawQueue.push({
          depth: relativeZ,
          draw: () => {
            const scale = FOV / relativeZ;
            const px = (neb.x - state.cameraX) * scale + width / 2;
            const py = (neb.y + floatY - state.cameraY) * scale + height / 2;
            const rad = neb.radius * scale * 0.25;

            if (rad < 5) return;

            // Fade out when camera flies inside it, and fade at far clipping boundary
            const clipFade = relativeZ < 150 ? Math.max(0, (relativeZ - 10) / 140) : 1;
            const borderFade = Math.min(1, (MAX_Z - relativeZ) / 400);
            const opacity = 0.44 * clipFade * borderFade;

            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            const grad = ctx.createRadialGradient(px, py, 0, px, py, rad);
            grad.addColorStop(0, `rgba(${neb.color}, ${opacity})`);
            grad.addColorStop(0.5, `rgba(${neb.color}, ${opacity * 0.28})`);
            grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(px, py, rad, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        });
      });

      // Add Black Hole (Wormhole Gateway)
      const bhZ = state.blackhole.z - state.cameraZ;
      if (bhZ > 5 && bhZ < 350) {
        state.blackhole.rot += prefersReducedMotion ? 0.003 : 0.012;
        drawQueue.push({
          depth: bhZ,
          draw: () => {
            const scale = FOV / bhZ;
            const px = (state.blackhole.x - state.cameraX) * scale + width / 2;
            const py = (state.blackhole.y - state.cameraY) * scale + height / 2;
            const rad = Math.min(width, height) * 0.7 * scale * 0.16;

            if (rad < 2) return;

            // Fades away as the camera fly-through goes past it
            const opacity = Math.max(0, Math.min(1, (130 - state.cameraZ) / 130));
            if (opacity <= 0.01) return;

            ctx.save();
            ctx.globalCompositeOperation = 'screen';

            // 1. Accretion Glow Halo
            const glow = ctx.createRadialGradient(px, py, rad * 0.2, px, py, rad * 2.4);
            glow.addColorStop(0, `rgba(255, 255, 255, ${0.32 * opacity})`);
            glow.addColorStop(0.18, `rgba(244, 114, 182, ${0.38 * opacity})`);  // pink
            glow.addColorStop(0.38, `rgba(168, 85, 247, ${0.28 * opacity})`);  // purple
            glow.addColorStop(0.65, `rgba(6, 182, 212, ${0.16 * opacity})`);   // cyan
            glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(px, py, rad * 2.4, 0, Math.PI * 2);
            ctx.fill();

            // 2. Conic Accretion Ring (simulate spinning space-time warp)
            ctx.translate(px, py);
            ctx.rotate(state.blackhole.rot);
            const ringCount = 3;
            for (let rIdx = 0; rIdx < ringCount; rIdx++) {
              const rRadius = rad * (0.75 + rIdx * 0.18);
              ctx.strokeStyle = rIdx % 2 === 0 ? `rgba(251, 146, 60, ${0.45 * opacity})` : `rgba(244, 114, 182, ${0.35 * opacity})`;
              ctx.lineWidth = Math.max(1.5, rad * 0.045);
              ctx.beginPath();
              // Elliptical ring path
              ctx.ellipse(0, 0, rRadius * 1.35, rRadius * 0.38, -0.3, 0, Math.PI * 2);
              ctx.stroke();
            }
            ctx.restore();

            // 3. Absolute Black Core
            ctx.fillStyle = '#000003';
            ctx.beginPath();
            ctx.arc(px, py, rad * 0.45, 0, Math.PI * 2);
            ctx.fill();
            // Drop shadow glow effect on event horizon
            const coreShadow = ctx.createRadialGradient(px, py, rad * 0.44, px, py, rad * 0.58);
            coreShadow.addColorStop(0, 'rgba(0,0,0,1)');
            coreShadow.addColorStop(0.4, 'rgba(0,0,0,0.85)');
            coreShadow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = coreShadow;
            ctx.beginPath();
            ctx.arc(px, py, rad * 0.58, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // Add Planets
      state.planets.forEach((p) => {
        const relativeZ = p.z - state.cameraZ;
        if (relativeZ <= 5 || relativeZ > MAX_Z) return;

        // Add float parallax based on mouse
        drawQueue.push({
          depth: relativeZ,
          draw: () => {
            const scale = FOV / relativeZ;
            const px = (p.x - state.cameraX) * scale + width / 2;
            const py = (p.y - state.cameraY) * scale + height / 2;
            const radiusProj = p.radius * scale * 0.22;

            if (radiusProj < 1.5) return;

            // Fade near screen clip
            const clipFade = relativeZ < 120 ? Math.max(0, (relativeZ - 8) / 112) : 1;
            const edgeFade = Math.min(1, (MAX_Z - relativeZ) / 300);
            const opacity = clipFade * edgeFade;

            // --- 1. Glow Backing ---
            const glowGrad = ctx.createRadialGradient(px, py, radiusProj * 0.85, px, py, radiusProj * 1.5);
            glowGrad.addColorStop(0, p.glowColor);
            glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(px, py, radiusProj * 1.5, 0, Math.PI * 2);
            ctx.fill();

            // --- 2. Ring - Back Half ---
            if (p.hasRing) {
              ctx.save();
              ctx.translate(px, py);
              ctx.rotate(p.ringAngle);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * opacity})`;
              ctx.lineWidth = Math.max(1, radiusProj * 0.05);
              ctx.beginPath();
              // Back half goes from PI to 2*PI
              ctx.ellipse(0, 0, radiusProj * 1.65, radiusProj * 0.38, 0, Math.PI, Math.PI * 2);
              ctx.stroke();
              ctx.restore();
            }

            // --- 3. Spherical Body Shading ---
            const bodyGrad = ctx.createRadialGradient(
              px - radiusProj * 0.28,
              py - radiusProj * 0.28,
              radiusProj * 0.1,
              px,
              py,
              radiusProj
            );
            bodyGrad.addColorStop(0, p.highlight);
            bodyGrad.addColorStop(0.35, p.baseColor);
            bodyGrad.addColorStop(0.9, p.shadowColor);
            bodyGrad.addColorStop(1, '#000004');

            ctx.fillStyle = bodyGrad;
            ctx.beginPath();
            ctx.arc(px, py, radiusProj, 0, Math.PI * 2);
            ctx.fill();

            // Spherical shadow overlay
            const shadowGrad = ctx.createRadialGradient(
              px - radiusProj * 0.45,
              py - radiusProj * 0.45,
              radiusProj * 0.6,
              px,
              py,
              radiusProj
            );
            shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0)');
            shadowGrad.addColorStop(0.85, `rgba(0, 0, 0, ${0.68 * opacity})`);
            shadowGrad.addColorStop(1, `rgba(0, 0, 0, ${0.94 * opacity})`);
            ctx.fillStyle = shadowGrad;
            ctx.beginPath();
            ctx.arc(px, py, radiusProj, 0, Math.PI * 2);
            ctx.fill();

            // --- 4. Ring - Front Half ---
            if (p.hasRing) {
              ctx.save();
              ctx.translate(px, py);
              ctx.rotate(p.ringAngle);
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.34 * opacity})`;
              ctx.lineWidth = Math.max(1.2, radiusProj * 0.05);
              ctx.beginPath();
              // Front half goes from 0 to PI
              ctx.ellipse(0, 0, radiusProj * 1.65, radiusProj * 0.38, 0, 0, Math.PI);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Add Crystals
      state.crystals.forEach((c) => {
        const relativeZ = c.z - state.cameraZ;
        if (relativeZ <= 5 || relativeZ > MAX_Z) return;

        // Rotate crystal vertices over time
        if (!prefersReducedMotion) {
          c.rotX += c.speedX;
          c.rotY += c.speedY;
          c.rotZ += c.speedZ;
        }

        drawQueue.push({
          depth: relativeZ,
          draw: () => {
            const scale = FOV / relativeZ;
            const cxProj = (c.x - state.cameraX) * scale + width / 2;
            const cyProj = (c.y - state.cameraY) * scale + height / 2;
            const sizeProj = c.size * scale * 0.18;

            if (sizeProj < 1.5) return;

            const clipFade = relativeZ < 100 ? Math.max(0, (relativeZ - 8) / 92) : 1;
            const edgeFade = Math.min(1, (MAX_Z - relativeZ) / 250);
            const opacity = clipFade * edgeFade;

            // Rotate vertices and project
            const rotatedVerts = c.vertices.map((v) => {
              const rot = rotate3D(v, c.rotX, c.rotY, c.rotZ);
              return [
                rot[0] * sizeProj + cxProj,
                rot[1] * sizeProj + cyProj,
                rot[2] * sizeProj + relativeZ
              ];
            });

            // Sort faces by Z-depth back-to-front
            const sortedFaces = c.faces
              .map((faceIdxs) => {
                const pts = faceIdxs.map((idx) => rotatedVerts[idx]);
                const avgDepth = (pts[0][2] + pts[1][2] + pts[2][2]) / 3;
                return { idxs: faceIdxs, avgDepth };
              })
              .sort((a, b) => b.avgDepth - a.avgDepth);

            // Draw crystal faces
            sortedFaces.forEach((face) => {
              const pts = face.idxs.map((idx) => ({
                x: rotatedVerts[idx][0],
                y: rotatedVerts[idx][1]
              }));

              ctx.beginPath();
              ctx.moveTo(pts[0].x, pts[0].y);
              ctx.lineTo(pts[1].x, pts[1].y);
              ctx.lineTo(pts[2].x, pts[2].y);
              ctx.closePath();

              // Facet reflection gradient
              const xMin = Math.min(pts[0].x, pts[1].x, pts[2].x);
              const xMax = Math.max(pts[0].x, pts[1].x, pts[2].x);
              const yMin = Math.min(pts[0].y, pts[1].y, pts[2].y);
              const yMax = Math.max(pts[0].y, pts[1].y, pts[2].y);

              const grad = ctx.createLinearGradient(xMin, yMin, xMax, yMax);
              grad.addColorStop(0, `rgba(255, 255, 255, ${0.45 * opacity})`);
              grad.addColorStop(0.3, `rgba(160, 200, 255, ${0.26 * opacity})`);
              grad.addColorStop(0.75, `rgba(190, 140, 255, ${0.14 * opacity})`);
              grad.addColorStop(1, `rgba(90, 240, 250, ${0.35 * opacity})`);

              ctx.fillStyle = grad;
              ctx.fill();

              // Edges
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.55 * opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            });
          }
        });
      });

      // Add DNA Double Helix(es)
      state.dnas.forEach((dna) => {
        const dnaZ = dna.center.z - state.cameraZ;
        if (dnaZ <= 5 || dnaZ >= MAX_Z) return;

        dna.rotY += prefersReducedMotion ? 0.003 : 0.012;

        drawQueue.push({
          depth: dnaZ,
          draw: () => {
            const scale = FOV / dnaZ;
            const cxProj = (dna.center.x - state.cameraX) * scale + width / 2;
            const cyProj = (dna.center.y - state.cameraY) * scale + height / 2;
            const rProj = dna.radius * scale * 0.22;
            const hProj = scale * 0.2; // height scaling multiplier

            if (rProj < 1.5) return;

            const clipFade = dnaZ < 100 ? Math.max(0, (dnaZ - 8) / 92) : 1;
            const edgeFade = Math.min(1, (MAX_Z - dnaZ) / 250);
            const opacity = clipFade * edgeFade;

            // Draw base pair connecting bars and glowing nodes
            dna.points.forEach((pt) => {
              // Rotate node angles
              const rotA = pt.angle + dna.rotY;
              const rotB = pt.angle + Math.PI + dna.rotY;

              const xA = Math.cos(rotA) * rProj + cxProj;
              const yA = pt.y * hProj + cyProj;

              const xB = Math.cos(rotB) * rProj + cxProj;
              const yB = pt.y * hProj + cyProj;

              // Draw base pair connector bar
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * opacity})`;
              ctx.lineWidth = Math.max(0.6, scale * 0.012);
              ctx.beginPath();
              ctx.moveTo(xA, yA);
              ctx.lineTo(xB, yB);
              ctx.stroke();

              // Draw Node A (Cyan Strand)
              const sizeA = Math.max(1.2, (5 + Math.sin(rotA) * 1.5) * scale * 0.024);
              ctx.fillStyle = `rgba(6, 182, 212, ${opacity * 0.28})`;
              ctx.beginPath();
              ctx.arc(xA, yA, sizeA * 2.2, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = `rgba(126, 240, 255, ${opacity})`;
              ctx.beginPath();
              ctx.arc(xA, yA, sizeA, 0, Math.PI * 2);
              ctx.fill();

              // Draw Node B (Purple Strand)
              const sizeB = Math.max(1.2, (5 + Math.sin(rotB) * 1.5) * scale * 0.024);
              ctx.fillStyle = `rgba(168, 85, 247, ${opacity * 0.28})`;
              ctx.beginPath();
              ctx.arc(xB, yB, sizeB * 2.2, 0, Math.PI * 2);
              ctx.fill();

              ctx.fillStyle = `rgba(216, 180, 254, ${opacity})`;
              ctx.beginPath();
              ctx.arc(xB, yB, sizeB, 0, Math.PI * 2);
              ctx.fill();
            });
          }
        });
      });

      // 6. Sort and Draw Major entities
      drawQueue.sort((a, b) => b.depth - a.depth);
      drawQueue.forEach((obj) => obj.draw());

      // Queue next frame
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="space-bg" aria-hidden="true">
      {/* Deep space base gradient backdrop */}
      <div className="space-bg__void" />
      {/* High-performance canvas */}
      <canvas ref={canvasRef} className="space-bg__canvas" />
    </div>
  );
}
