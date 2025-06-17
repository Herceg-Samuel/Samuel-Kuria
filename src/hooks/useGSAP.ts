import { useEffect, useRef } from 'react';
import { scrollAnimations, textAnimations, transitions, performanceAnimations } from '@/lib/animations';

export const useGSAP = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const animate = {
    // Scroll animations
    fadeInUp: (delay?: number) => {
      if (elementRef.current) {
        return scrollAnimations.fadeInUp(elementRef.current, delay);
      }
    },
    staggerFadeIn: (stagger?: number) => {
      if (elementRef.current) {
        return scrollAnimations.staggerFadeIn(elementRef.current, stagger);
      }
    },
    parallax: (speed?: number) => {
      if (elementRef.current) {
        return scrollAnimations.parallax(elementRef.current, speed);
      }
    },

    // Text animations
    splitText: () => {
      if (elementRef.current) {
        return textAnimations.splitText(elementRef.current);
      }
    },
    typing: (duration?: number) => {
      if (elementRef.current) {
        return textAnimations.typing(elementRef.current, duration);
      }
    },

    // Transitions
    pageTransition: () => {
      if (elementRef.current) {
        return transitions.pageTransition(elementRef.current);
      }
    },
    scaleIn: () => {
      if (elementRef.current) {
        return transitions.scaleIn(elementRef.current);
      }
    },

    // Performance animations
    fadeIn: () => {
      if (elementRef.current) {
        return performanceAnimations.fadeIn(elementRef.current);
      }
    },
    slideIn: () => {
      if (elementRef.current) {
        return performanceAnimations.slideIn(elementRef.current);
      }
    }
  };

  return {
    elementRef,
    animate
  };
}; 