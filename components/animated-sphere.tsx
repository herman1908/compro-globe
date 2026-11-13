"use client";

import { useEffect, useRef } from "react";

export function AnimatedSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars = "░▒▓█▀▄▌▐│RoboKomputer";
    let time = 0;

    let currentRotX = 0;
    let currentRotY = 0;
    let isInteracting = false;
    let lastX = 0;
    let lastY = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const handlePointerDown = (e: PointerEvent | TouchEvent) => {
      isInteracting = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as PointerEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as PointerEvent).clientY;
      lastX = clientX;
      lastY = clientY;
    };

    const handlePointerMove = (e: PointerEvent | TouchEvent) => {
      if (!isInteracting) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as PointerEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as PointerEvent).clientY;
      
      const deltaX = clientX - lastX;
      const deltaY = clientY - lastY;
      currentRotY += deltaX * 0.008;
      currentRotX -= deltaY * 0.008;

      lastX = clientX;
      lastY = clientY;
    };

    const handlePointerUp = () => {
      isInteracting = false;
    };

    canvas.addEventListener("pointerdown", handlePointerDown as EventListener);
    window.addEventListener("pointermove", handlePointerMove as EventListener);
    window.addEventListener("pointerup", handlePointerUp);

    canvas.addEventListener("touchstart", handlePointerDown as EventListener, { passive: true });
    window.addEventListener("touchmove", handlePointerMove as EventListener, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const radius = Math.min(rect.width, rect.height) * 0.525;

      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const points: { x: number; y: number; z: number; char: string }[] = [];

      const rotYTotal = currentRotY + time * 0.3;
      const rotXTotal = currentRotX + time * 0.2;

      // Generate sphere points
      for (let phi = 0; phi < Math.PI * 2; phi += 0.15) {
        for (let theta = 0; theta < Math.PI; theta += 0.15) {
          const x = Math.sin(theta) * Math.cos(phi);
          const y = Math.sin(theta) * Math.sin(phi);
          const z = Math.cos(theta);

          // Rotate around Y axis
          const rotY = rotYTotal;
          const newX = x * Math.cos(rotY) - z * Math.sin(rotY);
          const newZ = x * Math.sin(rotY) + z * Math.cos(rotY);

          // Rotate around X axis
          const rotX = rotXTotal;
          const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
          const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);

          const depth = (finalZ + 1) / 2;
          const charIndex = Math.floor(depth * (chars.length - 1));

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[charIndex],
          });
        }
      }

      // Sort by z for depth
      points.sort((a, b) => a.z - b.z);

      // Draw points with soft gray color
      points.forEach((point) => {
        const alpha = 0.2 + (point.z + 1) * 0.4;
        ctx.fillStyle = `rgba(105, 110, 115, ${alpha})`;
        ctx.fillText(point.char, point.x, point.y);
      });

      if (!isInteracting) {
        currentRotY += 0.003;
      }

      time += 0.02;
      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointerdown", handlePointerDown as EventListener);
      window.removeEventListener("pointermove", handlePointerMove as EventListener);
      window.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("touchstart", handlePointerDown as EventListener);
      window.removeEventListener("touchmove", handlePointerMove as EventListener);
      window.removeEventListener("touchend", handlePointerUp);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      style={{ display: "block", touchAction: "pan-y" }}
    />
  );
}
