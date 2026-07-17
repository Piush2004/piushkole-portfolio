"use client";

import { motion } from "framer-motion";
import { Brain, GraduationCap, Target, Briefcase, Code, Database, Sparkles, Server, LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";

// Mapping icons by name strings
const iconMap: Record<string, LucideIcon> = {
  Brain: Brain,
  Eye: Code,
  Layers: Server,
  Sparkles: Sparkles,
  Code: Code,
  Database: Database
};

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            About
          </h2>
          <div className="w-16 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: About Me, Philosophy, Current Focus */}
          <div className="space-y-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="prose prose-invert max-w-none"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 tracking-tight">
                {profile.headline}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an {profile.education[0].degree} student and AI Engineer driven by the potential of Artificial Intelligence to solve complex, real-world problems. My journey started with a fascination for data and has evolved into building sophisticated machine learning models, generative AI platforms, and high-performance systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Whether designing a scalable RAG pipeline or optimizing a computer vision model, I focus on building robust, modular, and maintainable architectures that prioritize engineering quality and end-user experience.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-card border border-border/50 rounded-2xl"
            >
              <Brain className="w-6 h-6 text-primary mb-6" />
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase mb-4">Core Philosophy</h4>
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                &quot;AI should augment human capability, not replace it. The best systems are those that are intuitive, reliable, and transparent in their reasoning.&quot;
              </p>
            </motion.div>

            {/* Current Focus Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase mb-8">Current Focus</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.currentFocus.map((focus, idx) => {
                  const IconComponent = iconMap[focus.icon] || Code;
                  return (
                    <div key={idx} className="p-6 bg-muted/30 border border-border/30 rounded-xl hover:border-primary/30 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary mb-4" />
                      <h5 className="font-semibold text-foreground mb-2">{focus.title}</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">{focus.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>

          {/* Right Column: Education, Experience Summary, Goals */}
          <div className="space-y-8 lg:sticky lg:top-32">
            
            {/* Education Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-card border border-border/50 rounded-2xl"
            >
              <GraduationCap className="w-6 h-6 text-foreground mb-6" />
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase mb-6">Education</h4>
              
              <div className="space-y-6">
                {profile.education.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-6 border-t border-border/50" : ""}>
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="text-lg font-semibold text-foreground">{edu.degree}</h5>
                      <span className={`text-sm ${edu.status === 'Pursuing' ? 'font-medium bg-muted/50 px-3 py-1 rounded-full text-foreground' : 'text-muted-foreground'}`}>
                        {edu.duration.split(' – ')[1] || edu.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{edu.university}</p>
                    
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span key={course} className="text-xs font-semibold px-3 py-1.5 bg-muted rounded-md text-foreground/80">
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-card border border-border/50 rounded-2xl"
            >
              <Briefcase className="w-6 h-6 text-foreground mb-6" />
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase mb-6">Experience Summary</h4>
              
              <div className="space-y-6">
                {profile.experience.map((exp, idx) => (
                  <div key={idx} className={`relative pl-6 border-l-2 ${idx === 0 ? 'border-primary/20' : 'border-border'}`}>
                    <div className={`absolute w-3 h-3 rounded-full -left-[7px] top-1.5 ${idx === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                    <h5 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h5>
                    <p className="text-sm text-muted-foreground mb-3">{exp.company} &bull; {exp.duration}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {exp.responsibilities[0]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Goals */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-8 bg-transparent border border-border/50 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Target className="w-5 h-5 text-primary mb-4 relative z-10" />
              <h4 className="text-sm font-bold text-foreground tracking-widest uppercase mb-4 relative z-10">Career Objective</h4>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {profile.summary.split('. ').slice(-2).join('. ')}
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
