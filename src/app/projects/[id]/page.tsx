import { profile } from "@/data/profile";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { id: string };

function getProject(id: string) {
  return profile.projects.find((p) => p.id === id);
}

function statusTone(status?: string): "caution" | "active" {
  if (!status) return "active";
  const s = status.toLowerCase();
  return s.includes("research") || s.includes("progress") ? "caution" : "active";
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

  const tone = statusTone(project.status);
  const badgeClass = tone === "caution" ? "bg-caution/10 text-caution" : "bg-secondary/10 text-secondary";

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to projects
        </Link>

        {project.status && (
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${badgeClass}`}>
            {project.status}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-6xl font-semibold mb-4 text-foreground tracking-tight">
          {project.title}
        </h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-8">
          {project.subtitle}
        </h2>

        {project.image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-card mb-12">
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

        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-[75ch]">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Problem</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Solution</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-10 pt-8 border-t border-border mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Key features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start text-sm text-muted-foreground">
                  <span className="mt-2 mr-3 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <span className="leading-tight">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Tech stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="font-mono px-3 py-1.5 bg-muted border border-border rounded-md text-xs text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.architecture.length > 0 && (
          <div className="pt-8 border-t border-border mb-12">
            <h3 className="text-sm font-semibold text-foreground mb-6">
              Architecture
            </h3>
            <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-sm text-muted-foreground">
              {project.architecture.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="font-mono text-xs bg-card border border-border px-2.5 py-1.5 rounded-md text-foreground/90">
                    {step}
                  </span>
                  {i < project.architecture.length - 1 && (
                    <span className="mx-2 text-muted-foreground/50">&rarr;</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-6 pt-8 border-t border-border mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Challenges
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.challenges}
            </p>
          </div>
          {project.lessonsLearned && (
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Lessons learned
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          )}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">
              Future scope
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.futureScope}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
            >
              <SiGithub className="mr-2" size={18} /> GitHub
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors"
            >
              <ExternalLink className="mr-2" size={18} /> Live demo
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
