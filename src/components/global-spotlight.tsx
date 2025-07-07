'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion, useSpring, useTransform, SpringOptions } from 'motion/react';
import { cn } from '@/lib/utils';

export type GlobalSpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: SpringOptions;
};

export function GlobalSpotlight({
  className,
  size = 180,
  springOptions = { bounce: 0.3, duration: 0.1 },
}: GlobalSpotlightProps) {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`);
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      console.log('Spotlight: Mouse move detected', event.clientX, event.clientY);
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);
    },
    [mouseX, mouseY]
  );

  // Auto-hide timer
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setIsVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    // Listen to mouse events on document
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      className={cn(
        'pointer-events-none fixed rounded-full z-[60]',
        'bg-gradient-to-r from-orange-600/30 via-orange-400/25 to-yellow-400/15',
        'transition-opacity duration-300 blur-2xl',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
      style={{
        width: size,
        height: size,
        left: spotlightLeft,
        top: spotlightTop,
      }}
    />
  );
}