import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Scroll-based animations
export const scrollAnimations = {
  fadeInUp: (element: string | Element, delay: number = 0) => {
    return gsap.from(element, {
      y: 60,
      opacity: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  },

  staggerFadeIn: (elements: string | Element, stagger: number = 0.2) => {
    return gsap.from(elements, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elements,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    });
  },

  parallax: (element: string | Element, speed: number = 1) => {
    return gsap.to(element, {
      y: `${speed * 100}%`,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  }
};

// Text animations
export const textAnimations = {
  splitText: (element: string | Element) => {
    const text = document.querySelector(element)?.textContent || "";
    const chars = text.split("");
    const container = document.querySelector(element);
    
    if (!container) return;
    
    container.innerHTML = "";
    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      container.appendChild(span);
    });

    return gsap.from(container.children, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.02,
      ease: "back.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%"
      }
    });
  },

  typing: (element: string | Element, duration: number = 1) => {
    const text = document.querySelector(element)?.textContent || "";
    const container = document.querySelector(element);
    
    if (!container) return;
    
    container.innerHTML = "";
    const span = document.createElement("span");
    container.appendChild(span);

    return gsap.to(span, {
      text: text,
      duration,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 80%"
      }
    });
  }
};

// Advanced transitions
export const transitions = {
  pageTransition: (element: string | Element) => {
    return gsap.timeline()
      .to(element, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
      })
      .to(element, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut"
      });
  },

  scaleIn: (element: string | Element) => {
    return gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 80%"
      }
    });
  }
};

// Performance-critical animations
export const performanceAnimations = {
  // Optimized for performance using transform and opacity
  fadeIn: (element: string | Element) => {
    return gsap.from(element, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      clearProps: "all" // Cleans up after animation
    });
  },

  // Using will-change for better performance
  slideIn: (element: string | Element) => {
    const el = document.querySelector(element);
    if (el) {
      el.style.willChange = "transform, opacity";
    }
    
    return gsap.from(element, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        if (el) {
          el.style.willChange = "auto";
        }
      }
    });
  }
}; 