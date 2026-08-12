"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24 lg:mb-32 max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Engineering Case Studies
          </h2>
          <div className="w-16 h-1 bg-foreground rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            A selection of AI systems, research initiatives, and data-driven products that showcase my approach to solving real-world engineering challenges.
          </p>
        </motion.div>

        {/* Case Studies Container */}
        <div className="space-y-32 lg:space-y-48">
          {profile.projects.map((project, idx) => {
            const isFeatured = idx === 0;
            return (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-12 ${isFeatured ? 'lg:gap-24' : 'lg:gap-20'} items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              
              {/* Image / Visual Side (Sticky on Desktop) */}
              <div className={`w-full ${isFeatured ? 'lg:w-[55%]' : 'lg:w-1/2'} lg:sticky lg:top-32 group perspective-1000`}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative transition-all duration-500 ease-out group-hover:scale-[1.02]"
                >
                  {/* Border Glow & Shadow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Browser Window Mockup */}
                  <div className="relative rounded-[2rem] overflow-hidden border border-border/60 bg-card/40 backdrop-blur-md shadow-2xl shadow-black/40">
                    
                    {/* Browser Header */}
                    <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-6 space-x-3 backdrop-blur-sm relative z-20">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.4)]" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.4)]" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                      </div>
                      {/* URL Bar Mockup */}
                      <div className="mx-auto w-1/2 max-w-[200px] h-6 bg-white/5 rounded-full flex items-center justify-center border border-white/5">
                        <span className="text-[10px] text-foreground/40 font-medium tracking-wider">{project.id}.ai</span>
                      </div>
                    </div>
                    
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050505]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority={isFeatured}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.03]"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-card">
                          <span className="text-muted-foreground font-medium">{project.title}</span>
                        </div>
                      )}

                      {/* Overlays & Lighting */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent z-10 pointer-events-none opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20" />
                      
                      {/* Dynamic Glass Reflection Sweep */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20 overflow-hidden">
                        <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] skew-x-[-20deg] transition-transform duration-[1500ms] ease-out group-hover:translate-x-[50%]" />
                      </div>
                    </div>
                    
                    {/* Subtle inner border for depth */}
                    <div className="absolute inset-0 rounded-[2rem] border border-white/5 pointer-events-none z-30" />
                  </div>
                </motion.div>
              </div>

              {/* Content Side */}
              <div className={`w-full ${isFeatured ? 'lg:w-[45%]' : 'lg:w-1/2'} space-y-12`}>
                
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                >
                  {project.status && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-4">
                      {project.status}
                    </span>
                  )}
                  <h2 className={`${isFeatured ? 'text-5xl lg:text-7xl mb-6' : 'text-4xl lg:text-5xl mb-4'} font-bold tracking-tight text-foreground`}>
                    {project.title}
                  </h2>
                  <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} text-primary font-medium mb-6`}>
                    {project.subtitle}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
                
                {/* Problem & Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border/50"
                >
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2" /> Problem
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3 flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" /> Solution
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </motion.div>
                
                {/* Features & Tech */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-10 pt-8 border-t border-border/50"
                >
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map(f => (
                        <li key={f} className="flex items-start text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-3 text-primary shrink-0 mt-0.5" /> 
                          <span className="leading-tight">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(t => (
                        <span key={t} className="px-3 py-1.5 bg-muted/50 border border-border/50 rounded-lg text-xs font-semibold text-foreground/80 hover:text-foreground hover:border-primary/50 transition-colors cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Architecture Pipeline */}
                {project.architecture.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="pt-8 border-t border-border/50"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-6">Architecture</h4>
                    <div className="flex flex-wrap items-center gap-y-4 gap-x-2 text-sm text-muted-foreground">
                      {project.architecture.map((step, i) => (
                        <span key={step} className="flex items-center">
                          <span className="font-medium bg-card border border-border/50 px-3 py-1.5 rounded-lg text-foreground/90 shadow-sm">{step}</span>
                          {i < project.architecture.length - 1 && <ArrowRight className="w-4 h-4 mx-2 text-muted-foreground/50" />}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Challenges & Scope */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-6 pt-8 border-t border-border/50"
                >
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Challenges</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  {project.lessonsLearned && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Lessons Learned</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.lessonsLearned}
                      </p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Future Scope</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.futureScope}
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-8"
                >
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-xl hover:bg-foreground/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      <SiGithub className="mr-2" size={18} /> GitHub
                    </a>
                  )}

                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-xl hover:bg-muted transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                    >
                      <ExternalLink className="mr-2" size={18} /> Live Demo
                    </a>
                  )}
                </motion.div>

              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
