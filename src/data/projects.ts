export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
}

export const projects: Project[] = [
  {
    id: "agentix",
    slug: "agentix",
    title: "Agentix",
    description: "Multi-agent LLM platform built with LangGraph, Ollama, and Streamlit.",
    problem: "Need for an intelligent, automated data intelligence platform that follows the CRISP-DM methodology for complex data workflows.",
    approach: "Designed a multi-agent system utilizing LangGraph to orchestrate LLMs (via Ollama). Built an interactive frontend using Streamlit and a robust backend with FastAPI and Next.js.",
    outcome: "Successfully created an agentic data intelligence platform capable of autonomous data processing, model training, and explanation using SHAP.",
    stack: ["LangGraph", "Ollama", "Streamlit", "AutoML", "SHAP", "XGBoost", "CatBoost", "FastAPI", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/Piush2004/Agentix",
  },
  {
    id: "llm-hallucination-detection",
    slug: "llm-hallucination-detection",
    title: "LLM Hallucination Detection",
    description: "Ongoing research using a TT-GAN framework to detect and mitigate hallucinations in Large Language Models.",
    problem: "Large Language Models frequently hallucinate information, reducing their reliability in critical applications.",
    approach: "Implementing a Truth-Tuned Generative Adversarial Network (TT-GAN) framework to systematically identify and penalize hallucinated outputs during training or inference.",
    outcome: "Ongoing research yielding promising early results in improving the factuality of generated text.",
    stack: ["Python", "PyTorch", "Transformers", "GANs", "NLP"],
    githubUrl: "https://github.com/Piush2004/LLM-Hallucination", // Guessed URL based on repos
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Developer Portfolio",
    description: "Terminal-inspired developer portfolio designed for performance and precision.",
    problem: "Needed a digital presence that reflects my technical identity and engineering values rather than a generic marketing site.",
    approach: "Built with Next.js App Router, Tailwind CSS (with strict tokens), and Framer Motion for minimal animations. Features GitHub API integration and a serverless contact form.",
    outcome: "A blazing fast, accessible, and uniquely styled portfolio that acts as a digital resume and project showcase.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Piush2004/Portfolio-Website-Task-1-",
  },
];
