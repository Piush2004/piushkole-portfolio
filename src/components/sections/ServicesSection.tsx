"use client";

import { motion } from "framer-motion";
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
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Services
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card/50 border border-border/50 rounded-2xl p-8 hover:bg-card hover:border-foreground/30 transition-all flex flex-col"
            >
              <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
