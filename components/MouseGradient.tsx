"use client";

import { useEffect, useRef } from 'react';

const MouseGradient = () => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentRadius = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      const speed = 0.06;
      const radiusSpeed = 0.08;

      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      currentRadius += (900 - currentRadius) * radiusSpeed;

      gradient.style.background = `
        radial-gradient(
          ${currentRadius}px circle at ${currentX}px ${currentY}px,
          rgba(0, 198, 255, 0.14),
          rgba(59, 130, 246, 0.08),
          rgba(139, 92, 246, 0.04),
          transparent 50%
        ),
        radial-gradient(
          ${currentRadius * 0.6}px circle at ${currentX}px ${currentY}px,
          rgba(255, 255, 255, 0.03),
          transparent 60%
        )
      `;

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      gradient.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      gradient.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      className="fixed inset-0 -z-10 pointer-events-none transition-opacity duration-700"
      style={{
        opacity: 1,
        willChange: 'background',
      }}
    />
  );
};

export default MouseGradient;
