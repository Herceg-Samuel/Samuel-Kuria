"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children animation
      delayChildren: 0.2,
    },
  },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A selection of my work, showcasing my skills in web development and my interests.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="ink-stamp">Field Notes</span>
          </div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // amount:0.1 means animation triggers when 10% of element is visible
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="ink-button"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
