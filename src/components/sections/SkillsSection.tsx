"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython, SiHtml5,
  SiOpencv,
  SiScikitlearn, SiPandas, SiNumpy,
  SiGithub, SiFastapi, SiDocker, SiLinux
} from "react-icons/si";
import { FaDatabase, FaChartBar, FaFileExcel, FaNetworkWired } from "react-icons/fa";
import { Brain, Cpu, Database, Network, Blocks, Sparkles, FileJson } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Web",
    icon: CodeIcon,
    skills: [
      { name: "Python", icon: SiPython, level: 95 },
      { name: "SQL", icon: FaDatabase, level: 90 },
      { name: "HTML/CSS", icon: SiHtml5, level: 90 },
      { name: "REST APIs", icon: FaNetworkWired, level: 85 },
      { name: "JSON", icon: FileJson, level: 95 },
    ]
  },
  {
    title: "AI & ML",
    icon: BrainIcon,
    skills: [
      { name: "Machine Learning", icon: Brain, level: 90 },
      { name: "Computer Vision", icon: Cpu, level: 85 },
      { name: "LLMs & RAG", icon: Sparkles, level: 85 },
      { name: "LangChain", icon: Blocks, level: 80 },
      { name: "FastAPI", icon: SiFastapi, level: 85 },
    ]
  },
  {
    title: "Libraries",
    icon: LibraryIcon,
    skills: [
      { name: "Pandas", icon: SiPandas, level: 95 },
      { name: "NumPy", icon: SiNumpy, level: 90 },
      { name: "Scikit-learn", icon: SiScikitlearn, level: 90 },
      { name: "OpenCV", icon: SiOpencv, level: 85 },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: ToolIcon,
    skills: [
      { name: "Power BI", icon: FaChartBar, level: 90 },
      { name: "Excel", icon: FaFileExcel, level: 95 },
      { name: "Git/GitHub", icon: SiGithub, level: 90 },
      { name: "Docker", icon: SiDocker, level: 75 },
      { name: "Linux Basics", icon: SiLinux, level: 80 },
    ]
  }
];

// Helper icons
function CodeIcon(props: React.ComponentProps<typeof Cpu>) { return <Cpu {...props} />; }
function BrainIcon(props: React.ComponentProps<typeof Brain>) { return <Brain {...props} />; }
function LibraryIcon(props: React.ComponentProps<typeof Database>) { return <Database {...props} />; }
function ToolIcon(props: React.ComponentProps<typeof Network>) { return <Network {...props} />; }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SkillCard({ skill }: { skill: { name: string; icon: any; level: number } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative group/skill z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative flex flex-col items-center justify-center p-4 bg-card border border-border rounded-2xl w-28 h-28 hover:border-foreground/30 hover:shadow-sm cursor-pointer overflow-hidden transition-all"
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-2 left-0 right-0 px-3 flex flex-col items-center gap-1"
            >
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
              <span className="text-[10px] font-bold text-foreground">
                {skill.level}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className="flex flex-col items-center transition-transform duration-300 group-hover/skill:translate-y-2"
        >
          <skill.icon className="w-8 h-8 mb-2 text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300" />
          <span className="font-mono text-[11px] leading-tight text-center text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-left">
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-foreground">
            Skills
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-muted rounded-xl text-foreground">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
