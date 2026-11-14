import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

function statusTone(status?: string): "caution" | "active" {
  if (!status) return "active";
  const s = status.toLowerCase();
  return s.includes("research") || s.includes("progress") ? "caution" : "active";
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6 text-foreground tracking-tight">
            Engineering case studies
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of AI systems, research initiatives, and data-driven products that showcase my approach to solving real-world engineering challenges.
          </p>
        </div>

        {/* Case Studies Container */}
        <div className="space-y-16">
          {profile.projects.map((project, idx) => {
            const tone = statusTone(project.status);
            const accentClass = tone === "caution" ? "bg-caution" : "bg-secondary";
            const badgeClass = tone === "caution" ? "bg-caution/10 text-caution" : "bg-secondary/10 text-secondary";

            return (
            <div
              key={project.id}
              className="relative border border-border rounded-2xl bg-card overflow-hidden"
            >
              {/* Status accent bar */}
              {project.status && (
                <div className={`absolute inset-y-0 left-0 w-1.5 ${accentClass}`} aria-hidden />
              )}

              <div
                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start p-6 sm:p-10 lg:p-14 pl-7 sm:pl-11 lg:pl-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >

                {/* Image / Visual Side */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                  <div className="relative rounded-xl overflow-hidden border border-border bg-background">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted">
                          <span className="text-muted-foreground font-medium">{project.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-10">

                  {/* Header */}
                  <div>
                    {project.status && (
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${badgeClass}`}>
                        {project.status}
                      </span>
                    )}
                    <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-3 tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-5">
                      {project.subtitle}
                    </h4>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-[65ch]">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-border">
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Problem</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Solution</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Features & Tech */}
                  <div className="space-y-8 pt-8 border-t border-border">
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-4">Key features</h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {project.features.map(f => (
                          <li key={f} className="flex items-start text-sm text-muted-foreground">
                            <span className="mt-2 mr-3 w-1 h-1 rounded-full bg-primary shrink-0" />
                            <span className="leading-tight">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Tech stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(t => (
                          <span key={t} className="font-mono px-3 py-1.5 bg-muted border border-border rounded-md text-xs text-foreground/80">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture Pipeline */}
                  {project.architecture.length > 0 && (
                    <div className="pt-8 border-t border-border">
                      <h5 className="text-sm font-semibold text-foreground mb-4">Architecture</h5>
                      <div className="flex flex-wrap items-center gap-y-3 gap-x-2 text-sm text-muted-foreground">
                        {project.architecture.map((step, i) => (
                          <span key={step} className="flex items-center">
                            <span className="font-mono text-xs bg-background border border-border px-2.5 py-1.5 rounded-md text-foreground/90">{step}</span>
                            {i < project.architecture.length - 1 && <span className="mx-2 text-muted-foreground/50">&rarr;</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenges & Scope */}
                  <div className="space-y-6 pt-8 border-t border-border">
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Challenges</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.challenges}
                      </p>
                    </div>
                    {project.lessonsLearned && (
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Lessons learned</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.lessonsLearned}
                        </p>
                      </div>
                    )}
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Future scope</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.futureScope}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-8 border-t border-border">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors"
                    >
                      View case study
                    </Link>

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
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
