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
      githubUrl: "https://github.com/Piush2004/agentix-data-science-platform" as string | null,
      demoUrl: null,
      type: "Public Repository",
      status: "Active"
    },
    {
      id: "cartsync-ai",
      title: "CartSync AI",
      subtitle: "AI-Powered Body Measurement & Size Recommendation",
      description: "A consumer fashion platform that maps a user's body measurements from two phone photos to brand-specific size charts, giving an explainable fit score and size recommendation in under 30 seconds.",
      problem: "Online shoppers can't tell if a garment will actually fit, which drives guesswork, high return rates, and lost trust in a brand's sizing.",
      solution: "Built an AI measurement pipeline using MediaPipe pose detection and Depth Anything V2 for monocular depth, calibrated against the user's own height from just a front and side photo. A sizing engine maps the resulting measurements to brand-specific charts and explains each recommendation in plain language, wrapped in a Next.js + FastAPI app.",
      features: [
        "Dual-Image Measurement Pipeline",
        "MediaPipe + Depth Anything V2",
        "Brand-Specific Size Charts",
        "Explainable Fit Score (0-100%)",
        "Image Quality Checks (lighting, blur, occlusion)",
        "Outfit & Product Comparison"
      ],
      techStack: ["Next.js", "FastAPI", "MediaPipe", "Depth Anything V2", "Firebase", "Tailwind CSS"],
      architecture: ["Front + Side Photo", "Pose & Depth Estimation", "Calibration", "Sizing Engine", "Explainable Fit Score"],
      challenges: "Calibrating body measurements from two ordinary phone photos with no reference object, correcting for camera angle and lens distortion, and catching bad input (poor lighting, occlusion) before it reaches the sizing engine.",
      lessonsLearned: "Turned a research pipeline into a real product by pairing the computer-vision core with a backend-for-frontend architecture — keeping heavy processing server-side while the Next.js frontend stays fast and the explanations stay plain-language.",
      futureScope: "Expanding the brand size-chart library, adding outfit generation, and tightening the calibration pipeline for more camera conditions.",
      image: "/images/body_measurement_premium.jpg",
      githubUrl: "https://github.com/Piush2004/cartsync-ai-shopping-assistant" as string | null,
      demoUrl: null,
      type: "Public Repository",
      status: "Active"
    },
    {
      id: "synthetic-silence",
      title: "Synthetic Silence",
      subtitle: "Evidence-Grounded Claim Checking for LLM Output",
      description: "A Chrome extension and backend that extracts claims from LLM-generated text, retrieves evidence from Wikipedia and OpenAlex, and returns a verdict per claim — built alongside a rigorous, honestly-reported test of whether a representation-space density signal can also flag unsupported claims.",
      problem: "Large Language Models often state unsupported or fabricated claims with full confidence, and there's no fast way for a reader to check them against real sources.",
      solution: "Built a claim-checking pipeline: the extension sends selected or pasted text to a FastAPI backend, which extracts individual claims, retrieves supporting or refuting evidence from Wikipedia and OpenAlex, and returns a per-claim verdict. Alongside the shipped verdict pipeline, ran a separate research track testing whether a representation-space density signal (kNN distance to a reference manifold) could serve as a model-free hallucination-risk score.",
      features: [
        "Chrome Extension (selection, popup & side panel)",
        "Claim Extraction & Evidence Retrieval",
        "Wikipedia + OpenAlex Source Search",
        "Per-Claim Verdict Pipeline",
        "Local History & Markdown/JSON Export",
        "Research Mode: Density-Signal Evaluation"
      ],
      techStack: ["Python", "FastAPI", "TypeScript", "Chrome Extension APIs", "OpenRouter"],
      architecture: ["Selected Text", "Claim Extraction", "Evidence Retrieval (Wikipedia/OpenAlex)", "Verdict Model", "Verdict + Confidence"],
      challenges: "Keeping the shipped verdict pipeline honest about what it can and can't show: claim highlighting only matches text verbatim, a failed retrieval shows an explicit error instead of a false \"no sources\" result, and the experimental density score stays hidden until it's properly calibrated.",
      lessonsLearned: "Testing the density-based signal across two fact-checking datasets (FEVER and AVeriTeC) showed it doesn't generalize — a modest signal on one dataset inverted on the other, and cross-dataset evaluation collapsed it to chance. Negative results are still results: the shipped verdict pipeline doesn't lean on a signal that doesn't hold up.",
      futureScope: "Testing temporal conditions and full NLI baselines, and building richer structural control populations before revisiting any density-based signal.",
      image: null,
      githubUrl: "https://github.com/Piush2004/synthetic-silence" as string | null,
      demoUrl: null,
      type: "Open-Source Tool",
      status: "Active"
    },
    {
      id: "qsci-platform",
      title: "QSCI Platform",
      subtitle: "Quantum vs. Classical Benchmarking for Forecasting & Optimization",
      description: "A rigorously audited research-and-product platform that benchmarks quantum approaches — variational quantum regression, quantum-assisted routing — against classical baselines for financial forecasting, optimization, and risk, under a strict no-overclaiming discipline.",
      problem: "Claims of \"quantum advantage\" in finance are common and rarely held to a rigorous, leakage-free, statistically honest comparison against a real classical baseline.",
      solution: "Built a shared engine with a classical golden path and a quantum track (variational quantum regression, quantum-assisted routing), then audited every phase for data leakage, statistical validity, and fairness before any result was allowed into the final comparison — including explicitly flagging and discarding a leakage-affected early run rather than reporting it.",
      features: [
        "Classical vs. Quantum Benchmarking",
        "Variational Quantum Regression (VQR)",
        "Quantum-Assisted Routing",
        "Leakage & Fairness Audits per Phase",
        "Statistical Significance Testing (Diebold-Mariano)",
        "Financial Impact & Confidence Scoring"
      ],
      techStack: ["Python", "Qiskit", "Jupyter", "FastAPI", "Next.js"],
      architecture: ["Classical Baseline", "Quantum Circuit (VQR / Routing)", "Leakage & Fairness Audit", "Statistical Comparison", "Financial Impact Layer"],
      challenges: "Catching a data-leakage bug in an early quantum forecasting run before it could skew the headline comparison, then re-running and auditing every later phase against one rule: no claim of quantum advantage without a real classical baseline and a leakage-free, statistically tested result.",
      lessonsLearned: "Built a repo-wide discipline of auditing claims before trusting them: every number in the final comparison traces to a specific, already-audited experiment file, and unqualified phrases like \"quantum advantage\" or \"production ready\" are grepped out of the final notebook unless they appear as an explicit, qualified disclaimer.",
      futureScope: "Extending the fairness and leakage-audit framework to new quantum subsystems as they're added, and continuing to benchmark against stronger classical baselines rather than claiming advantage by default.",
      image: "/images/quantum.jpg",
      githubUrl: "https://github.com/Piush2004/qsci-platform" as string | null,
      demoUrl: null,
      type: "Research Platform",
      status: "Active"
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
