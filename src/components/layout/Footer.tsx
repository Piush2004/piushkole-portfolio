"use client";


import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="font-display text-2xl font-semibold text-foreground mb-4 inline-block">
              {profile.name}
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm">
              {profile.role} specializing in Machine Learning, Deep Learning, and Generative AI. Building the future of intelligent systems.
            </p>
            <p className="text-primary font-medium mt-4 text-sm">
              Available for placements, internships, freelance, and AI collaborations.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground">Quick links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Research', 'Timeline', 'Projects', 'Certificates'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors" aria-label="GitHub">
                <SiGithub size={20} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${profile.contact.emails[0]}`} className="p-2 bg-card border border-border rounded-full hover:border-primary hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-secondary"></span>
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              Currently exploring: multi-agent AI & computer vision
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
