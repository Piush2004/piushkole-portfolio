"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);




  return (
    <section id="experience" className="py-24 relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Experience
          </h2>
          <div className="w-12 h-1 bg-foreground rounded-full" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Timeline Line */}
          <div className="absolute left-4 md:left-[20%] top-0 bottom-0 w-[1px] bg-border/50 rounded-full" />

          {profile.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex flex-col md:flex-row items-start mb-16 last:mb-0"
            >
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-[20%] w-3 h-3 rounded-full bg-foreground border-4 border-background -translate-x-[5px] mt-2 z-10" />

              {/* Period & Company (Left side on desktop) */}
              <div className="w-full md:w-[20%] pl-10 md:pl-0 md:pr-12 pt-1 mb-4 md:mb-0">
                <span className="block text-sm font-semibold text-muted-foreground mb-1">{exp.duration}</span>
                <span className="block text-sm font-medium text-foreground/70">{exp.company}</span>
              </div>

              {/* Content (Right side on desktop) */}
              <div className="w-full md:w-[80%] pl-10 md:pl-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{exp.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                {exp.impact && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Impact</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.impact}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs font-medium px-3 py-1 bg-card border border-border/50 rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
