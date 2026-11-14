import { profile } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Timeline Line */}
          <div className="absolute left-4 md:left-[20%] top-0 bottom-0 w-[1px] bg-border rounded-full" />

          {profile.experience.map((exp, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[20%] w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-[5px] mt-2 z-10" />

              {/* Period & Company (Left side on desktop) */}
              <div className="w-full md:w-[20%] pl-10 md:pl-0 md:pr-12 pt-1 mb-4 md:mb-0">
                <span className="block text-sm font-semibold text-muted-foreground mb-1">{exp.duration}</span>
                <span className="block text-sm font-medium text-foreground/70">{exp.company}</span>
              </div>

              {/* Content (Right side on desktop) */}
              <div className="w-full md:w-[80%] pl-10 md:pl-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">{exp.title}</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {exp.impact && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Impact</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.impact}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs px-3 py-1 bg-card border border-border rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
