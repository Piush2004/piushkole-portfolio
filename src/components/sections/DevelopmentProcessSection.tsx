import { Lightbulb, Code2, Rocket, Search } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Discovery & Analysis",
    description: "Understanding the core business problem, identifying data sources, and establishing clear performance metrics and project goals.",
    icon: Search,
  },
  {
    number: "2",
    title: "Prototyping & Architecture",
    description: "Designing the scalable architecture and building rapid proof-of-concept models to validate assumptions before full-scale engineering.",
    icon: Lightbulb,
  },
  {
    number: "3",
    title: "Engineering & Modeling",
    description: "Developing robust backend systems, training machine learning models, and building agentic workflows with a focus on code quality and modularity.",
    icon: Code2,
  },
  {
    number: "4",
    title: "Deployment & Scaling",
    description: "Deploying the solution to production environments, setting up monitoring, and ensuring the system scales efficiently under load.",
    icon: Rocket,
  }
];

export default function DevelopmentProcessSection() {
  return (
    <section id="process" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Development process
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto lg:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative p-6 bg-card border border-border rounded-2xl flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-3xl font-semibold text-primary">{step.number}</span>
                <step.icon size={22} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
