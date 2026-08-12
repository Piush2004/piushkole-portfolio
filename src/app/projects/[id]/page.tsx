import { profile } from "@/data/profile";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { id: string };

function getProject(id: string) {
  return profile.projects.find((p) => p.id === id);
}

export async function generateStaticParams() {
  return profile.projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return {};
  return {
    title: `${project.title} | ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </Link>

        {project.status && (
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
            {project.status}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
          {project.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-8">
          {project.subtitle}
        </h2>

        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/60 bg-card mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        )}

        <p className="text-lg text-muted-foreground leading-relaxed mb-12">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border/50 mb-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" /> Problem
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" /> Solution
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-10 pt-8 border-t border-border/50 mb-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((f) => (
                <li key={f} className="flex items-start text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 mr-3 text-primary shrink-0 mt-0.5" />
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-muted/50 border border-border/50 rounded-lg text-xs font-semibold text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.architecture.length > 0 && (
          <div className="pt-8 border-t border-border/50 mb-12">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">
              Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-y-4 gap-x-2 text-sm text-muted-foreground">
              {project.architecture.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="font-medium bg-card border border-border/50 px-3 py-1.5 rounded-lg text-foreground/90 shadow-sm">
                    {step}
                  </span>
                  {i < project.architecture.length - 1 && (
                    <ArrowRight className="w-4 h-4 mx-2 text-muted-foreground/50" />
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6 pt-8 border-t border-border/50 mb-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Challenges
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.challenges}
            </p>
          </div>
          {project.lessonsLearned && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
                Lessons Learned
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
              Future Scope
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.futureScope}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-border/50">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all shadow-sm hover:shadow-md"
            >
              <SiGithub className="mr-2" size={18} /> GitHub
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all shadow-sm hover:shadow-md"
            >
              <ExternalLink className="mr-2" size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
