export interface ExperienceEntry {
  id: string;
  role: string;
  org: string;
  location?: string;
  dates: string;
  summary: string;
  highlights: string[];
  curiosity: string;
  stack: string[];
}

export const experienceData: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Full-Stack Developer",
    org: "Veritas Generation Website",
    location: "Kenya",
    dates: "2025 — Present",
    summary:
      "Building a fast, clear, and story-driven web presence with strong performance and a guided user journey.",
    highlights: [
      "Shaped information architecture to improve clarity and navigation.",
      "Built responsive layouts that prioritize accessibility and speed.",
      "Implemented reusable UI patterns for consistent storytelling.",
    ],
    curiosity:
      "Explored how narrative structure can guide attention and trust.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    org: "Alabaster Scents and Jewellery",
    location: "Remote",
    dates: "2025 — Present",
    summary:
      "Crafting a refined ecommerce experience with emphasis on product storytelling and visual rhythm.",
    highlights: [
      "Designed a product-first layout with clear conversion flow.",
      "Built interactive components to elevate brand feel.",
      "Optimized the storefront for mobile performance and clarity.",
    ],
    curiosity:
      "Tested how typography and spacing influence desire and focus.",
    stack: ["React", "GSAP", "Figma"],
  },
  {
    id: "exp-3",
    role: "Frontend Developer",
    org: "Events Simplified",
    location: "Remote",
    dates: "2025 — Present",
    summary:
      "Building a clean scheduling and ticketing flow that reduces friction for organizers and attendees.",
    highlights: [
      "Mapped user flows to simplify multi-step event creation.",
      "Built modular UI components to support fast iteration.",
      "Improved clarity around pricing, dates, and booking actions.",
    ],
    curiosity:
      "Explored how microcopy can reduce anxiety in checkout flows.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "exp-4",
    role: "Game Developer",
    org: "Beyond Unreasonable",
    location: "Remote",
    dates: "Jan 2026 — Present",
    summary:
      "Building a confidence-based game experience that blends learning, probability, and playful design.",
    highlights: [
      "Designed game logic around confidence scoring and reward systems.",
      "Built clean, responsive UI for fast interaction loops.",
      "Shaped feedback patterns to make uncertainty feel engaging.",
    ],
    curiosity:
      "Investigated how risk framing changes user decision-making.",
    stack: ["Next.js", "TypeScript", "Game Logic"],
  },
];
