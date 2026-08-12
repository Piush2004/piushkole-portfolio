"use client";

import { motion } from "framer-motion";
import { Mail, Download, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { profile } from "@/data/profile";
import { useState } from "react";

export default function ContactSection() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Web3Forms Access Key, provided via env var so it isn't hardcoded in source.
    // Get a free key at https://web3forms.com/ and set it in Vercel as
    // NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (Project Settings -> Environment Variables).
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult(
        `The contact form isn't fully configured yet. Please email me directly at ${profile.contact.emails[0]}.`
      );
      return;
    }

    setIsSubmitting(true);
    setResult("Sending...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.currentTarget.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("An error occurred. Please try again.");
    }
    setIsSubmitting(false);
  };

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
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium mb-12">
            I&apos;m currently open to placements, internships, freelance opportunities, and collaborations in AI, Data Science, and Backend Development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl mx-auto bg-card border border-border p-8 rounded-lg shadow-sm mb-12 text-left"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-background border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
                placeholder="How can we collaborate?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-8 py-4 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-70"
            >
              <Send className="mr-2" size={18} /> 
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {result && (
              <p className="text-center mt-4 text-sm font-medium text-muted-foreground">{result}</p>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4"
        >
          <a
            href={`mailto:${profile.contact.emails[0]}`}
            className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="mr-2" size={18} /> Direct Email
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <FaLinkedin className="mr-2 text-[#0077b5]" size={18} /> LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <SiGithub className="mr-2" size={18} /> GitHub
          </a>
          <a
            href={profile.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-accent/50 transition-colors w-full sm:w-auto justify-center"
          >
            <Download className="mr-2" size={18} /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
