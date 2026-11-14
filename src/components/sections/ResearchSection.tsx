import { Camera, BrainCircuit, Sparkles } from "lucide-react";

const researchAreas = [
  {
    title: "Camera-based Body Measurement Estimation",
    description: "Conducting computer vision research to accurately estimate human body measurements from 2D images. Exploring deep learning techniques, pose estimation models, and 3D mesh reconstruction to extract precise anthropometric data for applications in virtual fitting and health monitoring.",
    icon: Camera,
  },
  {
    title: "AI Agents",
    description: "Investigating multi-agent architectures that autonomously plan, execute, and evaluate complex workflows. Focusing on self-reflection loops, memory structures, and reliable tool-use to reduce hallucination and improve autonomous reasoning capabilities.",
    icon: BrainCircuit,
  },
  {
    title: "Generative AI",
    description: "Exploring the fine-tuning of Large Language Models (LLMs) and the implementation of advanced Retrieval-Augmented Generation (RAG) pipelines to build context-aware, domain-specific AI solutions.",
    icon: Sparkles,
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Research
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="bg-card border border-border rounded-2xl p-8 hover:border-foreground/30 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-6">
                <area.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{area.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
