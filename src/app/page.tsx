import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ResearchSection from "@/components/sections/ResearchSection";
import DevelopmentProcessSection from "@/components/sections/DevelopmentProcessSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ResearchSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <CertificatesSection />
      <DevelopmentProcessSection />
      <GitHubSection />
      <ContactSection />
    </div>
  );
}
