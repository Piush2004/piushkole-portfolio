import { Server, Database, BrainCog } from "lucide-react";

const services = [
  {
    title: "Custom AI Solutions",
    description: "End-to-end development of custom machine learning models, autonomous AI agents, and RAG systems tailored to your specific business requirements.",
    icon: BrainCog,
  },
  {
    title: "Backend API Development",
    description: "Designing and building secure, scalable, and high-performance RESTful APIs and microservices using modern frameworks like FastAPI and Next.js.",
    icon: Server,
  },
  {
    title: "Data Science & Analytics",
    description: "Extracting actionable insights from complex datasets through advanced statistical analysis, predictive modeling, and interactive data visualizations.",
    icon: Database,
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Services
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-8 hover:border-foreground/30 transition-colors flex flex-col"
            >
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
