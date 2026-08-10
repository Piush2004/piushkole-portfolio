export const profile = {
  name: "Piush Kole",
  role: "AI Engineer & Data Scientist",
  headline: "Engineering intelligent systems from first principles.",
  summary: "MSc Data Science student with hands-on experience in machine learning, data analytics, and business intelligence. Skilled in building predictive models, creating interactive dashboards, and turning complex data into clear business insights. Passionate about solving real-world problems using data and AI. Seeking opportunities as a Machine Learning Engineer or Data Scientist to help organizations make smarter, data-driven decisions.",
  contact: {
    emails: ["piushkole2004@gmail.com", "piush.kole@msds.christuniversity.in"],
    location: "Bengaluru, Karnataka",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/piush-kole2004",
    github: "https://github.com/Piush2004",
    resume: "https://docs.google.com/document/d/1DxGUISXkduRf9FkUJ4y02JXdnq2oEfKtZBRZhSb4_Po/export?format=pdf"
  },
  github: {
    username: "Piush2004",
    public_repos: 7,
    followers: 2,
    following: 0,
    stars: 0,
    commits: 154
  },
  education: [
    {
      degree: "M.Sc. Data Science",
      university: "CHRIST (Deemed to be University), Bengaluru",
      duration: "Jul 2025 – May 2027 (Expected)",
      status: "Pursuing",
      grade: "57.2%",
      coursework: ["Machine Learning", "Deep Learning", "Computer Vision", "Data Structures"]
    },
    {
      degree: "B.Sc (Honours) Data Science",
      university: "Techno India University, Kolkata",
      duration: "May 2022 – Apr 2025",
      status: "Graduated",
      grade: "69.67%",
      coursework: []
    }
  ],
  experience: [
    {
      title: "Data Executive Intern",
      company: "Cybertoss Pvt. Ltd.",
      location: "Kolkata (Onsite)",
      duration: "Jun 2024 – May 2025",
      type: "Internship",
      description: "Managed data operations, focusing on extracting actionable business intelligence and driving lead generation.",
      impact: "Automated data collection and cleaning pipelines, improving lead qualification accuracy and reducing manual reporting time.",
      responsibilities: [
        "Collected, cleaned, and managed large datasets, ensuring high data quality, accuracy, and consistency for analysis and reporting.",
        "Conducted data research and gathered information from multiple sources to generate actionable insights and support data-driven decision-making.",
        "Improved data processing workflows and collaborated with cross-functional teams to deliver analytical projects efficiently and on time."
      ],
      technologies: ["Python", "SQL", "Pandas", "Excel"]
    },
    {
      title: "Summer Intern",
      company: "RemarkSkill — KSHITIJ, IIT Kharagpur",
      location: "Remote",
      duration: "Jun 2024",
      type: "Internship",
      description: "Completed intensive training in Python for data analysis and data visualization using Power BI.",
      impact: "Strengthened practical data storytelling and reporting skills by applying hands-on techniques to real-world datasets.",
      responsibilities: [
        "Analyzed datasets using Python (Pandas, Matplotlib, NumPy).",
        "Built interactive data visualizations using Power BI."
      ],
      technologies: ["Python", "Pandas", "Power BI", "Matplotlib"]
    }
  ],
  projects: [
    {
      id: "agentix",
      title: "Agentix AI",
      subtitle: "AI-Powered Multi-Agent Data Intelligence Platform",
      description: "An AI-powered multi-agent data science platform for automated data cleaning, exploratory analysis, AutoML, explainability, and intelligent business insights.",
      problem: "Data analysis workflows require switching between various tools for cleaning, analysis, and visualization, heavily reducing productivity for data teams.",
      solution: "Developed Agentix, a unified intelligent system utilizing autonomous agents to assist in end-to-end data processing, answering analytical queries via LLMs.",
      features: [
        "Multi-Agent Orchestration",
        "Automated Data Cleaning",
        "Exploratory Data Analysis",
        "LLM-Powered Querying",
        "Interactive Dashboard",
        "Local Model Support via Ollama"
      ],
      techStack: ["Python", "LangGraph", "Ollama", "Streamlit", "Pandas", "LLMs", "LangChain"],
      architecture: ["User", "Streamlit", "Agent Orchestrator", "LangGraph", "LLM", "Pandas Engine", "Response"],
      challenges: "Managing context sizes for large datasets in local LLMs and designing robust tools for the autonomous agents to successfully execute Pandas commands without hallucination.",
      lessonsLearned: "Learned how to effectively orchestrate multiple AI agents and manage state across complex data analysis workflows.",
      futureScope: "Integration with cloud databases, adding advanced AutoML capabilities, and offering an API layer for enterprise integrations.",
      image: "/images/agentix_premium.jpg",
      githubUrl: "https://github.com/Piush2004/Agentix",
      demoUrl: null,
      type: "Public Repository",
      status: "Active"
    },
    {
      id: "body-measurement",
      title: "AI-Based Body Measurement System",
      subtitle: "Computer Vision & Deep Learning Research",
      description: "Computer vision research project focused on extracting human body measurements accurately from image inputs using advanced deep learning architectures.",
      problem: "Traditional body measurements require intensive manual effort and contact, making virtual try-ons and tailored clothing difficult for e-commerce.",
      solution: "A robust computer vision pipeline utilizing pose estimation, body landmark detection, and mathematical camera calibration combined with statistical regression.",
      features: [
        "Pose Estimation",
        "Body Landmark Detection",
        "Camera Calibration",
        "Statistical Regression",
        "Measurement Prediction"
      ],
      techStack: ["Python", "Computer Vision", "Deep Learning", "OpenCV", "PyTorch"],
      architecture: ["Image", "Pose Detection", "Landmarks", "Camera Calibration", "Regression", "Measurements"],
      challenges: "Overcoming perspective distortion across varying focal lengths, real-world lighting inconsistencies, and camera calibration without reference objects.",
      lessonsLearned: "Gained deep insights into the mathematical foundations of computer vision, coordinate geometry, and dealing with real-world noise in image data.",
      futureScope: "Virtual Try-On for e-commerce, automated fashion sizing, healthcare monitoring, and anthropometric analysis.",
      image: "/images/body_measurement_premium.jpg",
      githubUrl: null,
      demoUrl: null,
      type: "Research Project",
      status: "Research in progress"
    },
    {
      id: "llm-hallucination",
      title: "LLM Hallucination Detection",
      subtitle: "Truth-Tuned GAN Framework for LLMs",
      description: "Ongoing research using a TT-GAN framework to detect and mitigate hallucinations in Large Language Models.",
      problem: "Large Language Models frequently hallucinate information, reducing their reliability in critical real-world applications where accuracy is paramount.",
      solution: "Implementing a Truth-Tuned Generative Adversarial Network (TT-GAN) framework to systematically identify and penalize hallucinated outputs during model training and inference.",
      features: [
        "Hallucination Detection",
        "TT-GAN Architecture",
        "Factuality Scoring",
        "Mitigation Pipeline",
        "Automated Evaluation"
      ],
      techStack: ["Python", "PyTorch", "Transformers", "GANs", "NLP"],
      architecture: ["Base LLM", "Generator", "Truth-Tuned Discriminator", "Factuality Penalty", "Optimized LLM"],
      challenges: "Defining a robust objective function for 'truthfulness' that doesn't overly constrain the model's fluency or creativity.",
      lessonsLearned: "Gained deep experience with adversarial training dynamics and the inner workings of attention mechanisms in transformer models.",
      futureScope: "Integrating the detection pipeline directly into real-time RAG applications to score and filter retrieved context.",
      image: "/images/llm_hallucination.jpg",
      githubUrl: "https://github.com/Piush2004/LLM-Hallucination",
      demoUrl: null,
      type: "Research Project",
      status: "Active Research"
    },
    {
      id: "portfolio",
      title: "Developer Portfolio",
      subtitle: "Terminal-Inspired Engineering Showcase",
      description: "A blazing fast, accessible, and uniquely styled portfolio that acts as a digital resume and engineering case study platform.",
      problem: "Needed a digital presence that reflects my technical identity and engineering values rather than a generic marketing site.",
      solution: "Built a custom React application with Next.js App Router, Tailwind CSS (with strict tokens), and Framer Motion for minimal, purposeful animations.",
      features: [
        "Static Generation",
        "Serverless Contact Form",
        "GitHub API Integration",
        "Custom Design System",
        "Responsive Layout"
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      architecture: ["Next.js Frontend", "Tailwind Theme", "Framer Motion", "Web3Forms API", "Vercel"],
      challenges: "Implementing strict styling constraints (like zero gradients and shadows) while maintaining a premium and highly interactive feel.",
      lessonsLearned: "Mastered the Next.js App router paradigm, static site generation, and building complex accessible UI components from scratch.",
      futureScope: "Adding a dedicated blog section powered by MDX to share technical articles and research findings.",
      image: "/images/portfolio.jpg",
      githubUrl: "https://github.com/Piush2004/Portfolio-Website-Task-1-",
      demoUrl: null,
      type: "Frontend Engineering",
      status: "Completed"
    }
  ],
  certifications: [
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Academy",
      date: "2025",
      credentialUrl: null
    },
    {
      title: "Agentic AI in Action: RAG with LangChain",
      issuer: "Skillsoft",
      date: "2025",
      credentialUrl: null
    },
    {
      title: "Introduction to Business Analysis Using Spreadsheets: Basics",
      issuer: "Coursera Project Network",
      date: "2025",
      credentialUrl: null
    },
    {
      title: "Python for Data Science & Machine Learning: Zero to Hero",
      issuer: "Udemy",
      date: "2023",
      credentialUrl: null
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "SQL"] },
    { category: "Data Science & ML", items: ["Pandas", "NumPy", "Scikit-Learn", "Computer Vision"] },
    { category: "AI & GenAI", items: ["LLMs", "LangGraph", "Ollama", "Generative AI", "AI Agents"] },
    { category: "BI & Analytics", items: ["Advanced Excel", "Power BI", "Tableau", "Data Visualization"] },
    { category: "Tools & Frameworks", items: ["Streamlit", "Git"] },
    { category: "Domain", items: ["Business Intelligence", "Predictive Analytics", "Business Analysis"] }
  ],
  currentFocus: [
    { title: "AI Agents", desc: "Building autonomous systems with Agentix.", icon: "Brain" },
    { title: "Computer Vision", desc: "Researching visual AI and body tracking.", icon: "Eye" },
    { title: "Backend Systems", desc: "Engineering scalable APIs in Python.", icon: "Layers" },
    { title: "Generative AI", desc: "Working with LLMs and LangChain.", icon: "Sparkles" }
  ]
};
