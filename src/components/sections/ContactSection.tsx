"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Let&apos;s Build Something Intelligent
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
            I&apos;m currently open to placements, internships, freelance opportunities, and collaborations in AI, Data Science, and Backend Development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-12"
        >
          <a
            href={`mailto:${profile.contact.emails[0]}`}
            className="flex items-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="mr-2" size={20} /> Contact Me
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <FaLinkedin className="mr-2 text-[#0077b5]" size={20} /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <SiGithub className="mr-2" size={20} /> GitHub
          </a>
          <a
            href={profile.socials.resume.replace('/edit?usp=sharing', '/export?format=pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-8 py-4 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <Download className="mr-2" size={20} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
