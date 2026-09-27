import { Project, Education, Testimonial, ExperienceItem, BlogPost } from './types';

export const HERO_TITLE = 'AMEN ALLAH YOUSSEF';
export const HERO_SUBTITLE = 'AI / ML Research Engineer focused on reliable LLM systems, retrieval, and applied model evaluation.';
export const ABOUT_TEXT = 'I build LLM and retrieval systems with an evaluation-first mindset. My work spans hybrid SQL and vector retrieval, model experimentation, and production AI applications - treating measurement, failure modes, and reproducibility as part of the product.';
export const TECH_STACK = ['Python', 'PyTorch', 'RAG systems', 'Hybrid retrieval', 'Qdrant', 'ChromaDB', 'Weights & Biases', 'Hugging Face', 'FastAPI', 'Docker', 'SQL', 'TypeScript'];

export const PROJECTS: Project[] = [
  { id: 'grade-advisor', title: 'Grade Advisor', category: 'Hybrid RAG / Engineering', description: 'A hybrid SQL and vector retrieval system that maps engineering requirements to verified Erasteel steel grades, with deterministic filtering for numeric constraints.', techStack: ['Python', 'DuckDB', 'ChromaDB', 'Gemini API'], metrics: '100% benchmark pass rate', imageUrl: '/image/rfp.png', year: '2026', link: 'https://github.com/Youssefamenallah23/Grade-Advisor' },
  { id: 'arxiv-search', title: 'Arxiv Research Assistant', category: 'Evaluation-first RAG', description: 'A retrieval and reranking pipeline for exploring AI research, built with a held-out evaluation protocol and experiment tracking.', techStack: ['Python', 'Qdrant', 'SentenceTransformers', 'FastAPI'], metrics: '0.962 faithfulness', imageUrl: '/image/sentinels.png', year: '2026', link: 'https://github.com/Youssefamenallah23/Arxiv-search' },
  { id: 'tactical-gpt', title: 'TacticsGPT', category: 'LLM Research', description: 'A decoder-only transformer for football tactical analysis, trained from a custom BPE tokenizer through LoRA SFT and GRPO-style fine-tuning.', techStack: ['Python', 'PyTorch', 'JAX', 'LoRA'], metrics: '+41% task reward', imageUrl: '/image/portfolio.png', year: '2026', link: 'https://github.com/Youssefamenallah23/TacticalGPT' },
  { id: 'sentinel', title: 'Sentinel AIOps Agent', category: 'Agentic Systems', description: 'An event-driven agent for monitoring microservices, investigating failures, and proposing code fixes with a semantic cache.', techStack: ['Python', 'Docker', 'FastAPI', 'Gemini API'], metrics: '90% inference-cost reduction', imageUrl: '/image/sentinel.png', year: '2025', link: 'https://github.com/Youssefamenallah23/sentinel' },
];

export const EDUCATION_DATA: Education[] = [
  { id: 'e1', degree: "Master's in Intelligent Pervasive Systems", institution: 'ISSATSO, Sousse, Tunisia', year: 'Expected 2027', focus: ['Agentic AI', 'RL', 'Efficient Fine-Tuning'] },
  { id: 'e2', degree: "Bachelor's in Software Engineering", institution: 'ISSATSO, Sousse, Tunisia', year: '2025', focus: ['Software Engineering', 'Algorithms', 'Web Systems'] },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  { id: 'exp4', role: 'Freelance Digital Designer & Web Developer', company: 'Independent — hospitality clients, led by Elama Resto Café, M’saken', period: '2026', description: 'Designing digital menus, landing pages, and QR-code experiences for cafés. Elama Resto Café is the lead client, alongside ongoing work for other local hospitality businesses; deliverables include print-ready materials for in-venue use.', skills: ['Digital Menus', 'QR Experiences', 'Landing Pages', 'Print Production'] },
  { id: 'exp1', role: 'AI Engineer', company: 'Novera', period: '2026', description: 'Architected an AI-powered photo-matching system with InsightFace and PostgreSQL, while contributing to open-source LLM and inference work in a three-person engineering collective.', skills: ['InsightFace', 'PostgreSQL', 'LLM APIs'] },
  { id: 'exp2', role: 'AI Engineering Intern', company: 'Mobelite', period: '2025', description: 'Designed a production RAG system for semantic search across 500+ company documents and evaluated chunking and embedding configurations against a precision@5 set.', skills: ['AstraDB', 'Gemini API', 'RAG Evaluation'] },
  { id: 'exp3', role: 'Freelance AI Engineer - Voice Automation', company: 'Independent', period: '2025', description: 'Designed and deployed an LLM-powered voice agent handling 10,000+ outbound calls per month at 99.5% uptime.', skills: ['Voice AI', 'Next.js', 'Supabase'] },
];

export const BLOG_DATA: BlogPost[] = [];
export const TESTIMONIALS_DATA: Testimonial[] = [];
export const SYSTEM_INSTRUCTION = 'You are the portfolio assistant for Amen Allah Youssef, an AI / ML Research Engineer in Sousse, Tunisia. He specializes in LLM systems, retrieval-augmented generation, evaluation-first ML, and applied model research. Keep answers concise and accurate. Direct contact requests to the form.';
export const SOCIAL_LINKS = [
  { name: 'Github', url: 'https://github.com/Youssefamenallah23' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amen-allah-youssef-8685012bb/' },
  { name: 'Mail', url: 'mailto:youssefamenallah.contact@gmail.com' }
];
