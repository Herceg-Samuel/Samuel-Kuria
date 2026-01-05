
import { projectsData } from "@/lib/projects";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Samuel Kuria`,
    description: project.description,
    openGraph: {
      images: [project.imageUrl],
      title: project.title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground pt-20 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Navigation */}
        <div className="mb-12">
            <Link href="/" className="inline-flex items-center text-lg font-bold hover:underline decoration-4">
                <ArrowLeft className="mr-2 h-6 w-6" />
                BACK 
            </Link>
        </div>

        {/* Hero Header */}
        <div className="border-b-4 border-foreground pb-8 mb-12">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-6 break-words">
            {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-foreground text-background font-bold text-sm uppercase tracking-widest border border-foreground">
                        {tech}
                    </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="relative group">

                <div className="relative aspect-video w-full overflow-hidden border-4 border-foreground bg-muted">
                    <Image
                    src={project.imageUrl}
                    alt={project.imageAiHint || project.title}
                    fill
                    className="object-cover"
                    priority
                    />
                </div>
            </div>

            {/* Description and Links Side */}
            <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                    <h2 className="text-3xl font-black uppercase tracking-tighter decoration-4 underline decoration-foreground">The Brief</h2>
                    <p className="text-xl md:text-2xl font-bold leading-relaxed">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-4 border-foreground/20">
                    {project.liveLink && (
                        <Button asChild size="lg" className="h-16 text-lg font-black uppercase border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background rounded-none transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                Live Demo <ExternalLink className="ml-2 h-6 w-6" />
                            </Link>
                        </Button>
                    )}
                    {project.repoLink && (
                        <Button asChild size="lg" variant="outline" className="h-16 text-lg font-black uppercase border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background rounded-none transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                             <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                <Github className="ml-2 h-6 w-6" /> View Code
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
