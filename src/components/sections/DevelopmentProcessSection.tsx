"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code2, Rocket, Search } from "lucide-react";

const steps = [
  {
    title: "1. Discovery & Analysis",
    description: "Understanding the core business problem, identifying data sources, and establishing clear performance metrics and project goals.",
    icon: Search,
  },
  {
    title: "2. Prototyping & Architecture",
    description: "Designing the scalable architecture and building rapid proof-of-concept models to validate assumptions before full-scale engineering.",
    icon: Lightbulb,
  },
  {
    title: "3. Engineering & Modeling",
    description: "Developing robust backend systems, training machine learning models, and building agentic workflows with a focus on code quality and modularity.",
    icon: Code2,
  },
  {
    title: "4. Deployment & Scaling",
    description: "Deploying the solution to production environments, setting up monitoring, and ensuring the system scales efficiently under load.",
    icon: Rocket,
  }
];

export default function DevelopmentProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Development Process
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full mx-auto lg:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 bg-card/50 border border-border/50 rounded-2xl flex flex-col"
            >
              <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center mb-6 shadow-md">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
