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
    title: "Portfolio Website V1",
    description: "My first personal portfolio website, built to showcase early projects and skills in web development. Focused on clean design and responsiveness.",
    imageUrl: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAiHint: "developer portfolio",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://iamsamuel.vercel.app/",
  },
];
