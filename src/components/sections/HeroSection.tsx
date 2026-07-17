"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import { profile } from "@/data/profile";

const roles = [
  "AI Engineer",
  "Building Intelligent Systems",
  "Solving Real-World Problems with AI",
  "From Research to Production"
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP Role Switcher Animation - Crossfade
    const tl = gsap.timeline({ repeat: -1 });
    const rolesEl = document.querySelectorAll(".role-item");
    
    rolesEl.forEach((role) => {
      tl.to(role, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .to(role, {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power2.in",
        delay: 2.5,
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-background overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] mix-blend-screen" />
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col items-center justify-center max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-8 w-full"
        >
          {/* Label */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[1px] bg-primary/50" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Hi, I&apos;m
            </span>
            <span className="w-8 h-[1px] bg-primary/50" />
          </div>

          {/* Name & Roles */}
          <div className="space-y-4 w-full relative">
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-muted-foreground pb-2">
              {profile.name}
            </h1>
            
            <div className="h-[40px] md:h-[50px] relative w-full flex justify-center items-center overflow-hidden">
              {roles.map((role) => (
                <div 
                  key={role}
                  className="role-item absolute text-2xl md:text-4xl font-semibold tracking-tight text-muted-foreground opacity-0 translate-y-5"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-medium mt-4"
          >
            {profile.summary.split('. ')[0] + '.'} {profile.summary.split('. ')[1] + '.'}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          >
            <Link 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background font-medium rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>View Projects</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href={profile.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-card border border-border text-foreground font-medium rounded-xl shadow-sm hover:bg-muted hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>

            <Link 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-transparent text-muted-foreground hover:text-foreground hover:border-border font-medium rounded-xl transition-all flex items-center justify-center space-x-2"
            >
              <span>Let&apos;s Connect</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-6 mt-12 pt-12 border-t border-border/40 w-24 justify-center"
          >
            <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="GitHub">
              <SiGithub size={20} />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${profile.contact.emails[0]}`} className="text-muted-foreground hover:text-foreground transition-colors p-2" aria-label="Email">
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <Link href="#about" className="p-2 text-muted-foreground/50 hover:text-foreground transition-colors">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </Link>
      </motion.div>

    </section>
  );
}
