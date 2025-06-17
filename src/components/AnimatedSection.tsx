"use client";

import { useEffect } from 'react';
import { useGSAP } from '@/hooks/useGSAP';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fadeInUp' | 'staggerFadeIn' | 'parallax' | 'splitText' | 'typing' | 'scaleIn' | 'fadeIn' | 'slideIn';
  className?: string;
  delay?: number;
  stagger?: number;
  speed?: number;
  duration?: number;
}

export function AnimatedSection({
  children,
  animation = 'fadeInUp',
  className = '',
  delay,
  stagger,
  speed,
  duration
}: AnimatedSectionProps) {
  const { elementRef, animate } = useGSAP();

  useEffect(() => {
    if (elementRef.current) {
      switch (animation) {
        case 'fadeInUp':
          animate.fadeInUp(delay);
          break;
        case 'staggerFadeIn':
          animate.staggerFadeIn(stagger);
          break;
        case 'parallax':
          animate.parallax(speed);
          break;
        case 'splitText':
          animate.splitText();
          break;
        case 'typing':
          animate.typing(duration);
          break;
        case 'scaleIn':
          animate.scaleIn();
          break;
        case 'fadeIn':
          animate.fadeIn();
          break;
        case 'slideIn':
          animate.slideIn();
          break;
      }
    }
  }, [animation, delay, stagger, speed, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
} 