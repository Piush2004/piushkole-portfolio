"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
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
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 bg-background"
    >
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col items-center justify-center max-w-4xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center space-y-8 w-full"
        >
          {/* Name & Roles */}
          <div className="space-y-4 w-full relative">
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-semibold tracking-tight leading-[1.05] text-foreground pb-2">
              {profile.name}
            </h1>

            <div className="h-[40px] md:h-[50px] relative w-full flex justify-center items-center overflow-hidden">
              {roles.map((role) => (
                <div
                  key={role}
                  className="role-item absolute text-2xl md:text-4xl font-medium tracking-tight text-muted-foreground opacity-0 translate-y-5"
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
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mt-4"
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
              className="w-full sm:w-auto px-8 py-3.5 bg-foreground text-background font-medium rounded-xl hover:bg-foreground/90 transition-colors flex items-center justify-center"
            >
              <span>Explore the work</span>
            </Link>

            <a
              href={profile.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-card border border-border text-foreground font-medium rounded-xl hover:bg-muted transition-colors flex items-center justify-center space-x-2"
            >
              <Download size={18} />
              <span>Download résumé</span>
            </a>

            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-transparent text-muted-foreground hover:text-foreground hover:border-border font-medium rounded-xl transition-colors flex items-center justify-center"
            >
              <span>Get in touch</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center space-x-6 mt-12 pt-12 border-t border-border w-24 justify-center"
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
        <Link href="#about" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
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
