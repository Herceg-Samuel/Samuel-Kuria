import Image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "project-1",
    title: "Blog",
    description:
      "A quiet corner of the internet where I finally show up.For years, my writing lived in scattered notes and whispered drafts. Now it’s here — a home for my dev journey, maybe a sprinkle of psychology too (we'll see 😅).",
    imageUrl:
      "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://the-identified-blog.vercel.app/",
  },
  {
    id: "project-2",
    title: "Portfolio Website V1",
    description:
      "My first personal portfolio website, built to showcase early projects and skills in web development. Focused on clean design and responsiveness.",
    imageUrl:
      "https://images.unsplash.com/photo-1639755507638-e34150b56db2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://iamsamuel.vercel.app/",
  },
];
