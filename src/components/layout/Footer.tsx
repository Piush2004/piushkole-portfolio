"use client";


import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border/50 bg-background/50 backdrop-blur-md pt-16 pb-8 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-4 inline-block">
              {profile.name}
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm">
              {profile.role} specializing in Machine Learning, Deep Learning, and Generative AI. Building the future of intelligent systems.
            </p>
            <p className="text-primary font-medium mt-4 text-sm bg-primary/10 inline-block px-3 py-1 rounded-full">
              Available for Placements, Internships, Freelance, and AI Collaborations.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Research', 'Timeline', 'Projects'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <SiGithub size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${profile.contact.emails[0]}`} className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0 px-3 py-1.5 bg-muted/20 border border-border/30 rounded-full">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500/80"></span>
            </span>
            <span className="text-xs text-muted-foreground/80 font-medium tracking-wide">
              Currently Exploring: Multi-Agent AI & Computer Vision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
