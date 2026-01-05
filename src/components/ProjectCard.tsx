"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Github } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Adjusted delay for smoother staggering
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      className="group bg-card border-4 border-foreground rounded-none overflow-hidden transition-all duration-300 hover:-translate-y-2 relative"
    >
      {/* Heavy shadow block effect via pseudo-element simulation or just pure border style */}
      <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <Link href={`/projects/${project.slug}`} className="block relative w-full h-64 border-b-4 border-foreground overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          data-ai-hint={project.imageAiHint}
          className="transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
        />
      </Link>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${project.slug}`} className="group-hover:underline decoration-4 decoration-foreground">
            <h3 className="text-3xl font-black uppercase text-foreground mb-3 leading-none tracking-tighter">{project.title}</h3>
        </Link>
        <p className="text-foreground/80 font-medium mb-6 line-clamp-3">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-bold uppercase border border-foreground text-foreground bg-transparent">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-bold uppercase border border-foreground text-foreground bg-transparent">+{project.technologies.length - 3}</span>
            )}
          </div>
          
          <Button asChild size="lg" className="w-full rounded-none font-black uppercase border-2 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground transition-all duration-300">
            <Link href={`/projects/${project.slug}`}>
               Explore
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
