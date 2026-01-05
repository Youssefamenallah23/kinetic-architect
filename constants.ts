
import { Project, Education, Testimonial, ExperienceItem, BlogPost } from './types';

export const HERO_TITLE = "AMEN ALLAH YOUSSEF";
export const HERO_SUBTITLE = "Building autonomous microservices and RAG systems that bridge the gap between LLMs and enterprise logic.";

export const ABOUT_TEXT = "I am a Full Stack & AI Engineer based in Tunisia, dedicated to building the next generation of autonomous enterprise systems. I specialize in creating Agentic Workflows and RAG systems that don't just process data, they act on it. By bridging modern stacks (Next.js, TypeScript) with AI orchestration (n8n, Gemini, Docker), I develop self-healing microservices that slash operational overhead";

export const TECH_STACK = [
  "Full Stack Development", "n8n", "Agentic AI", "Next.js", "React", "Tailwindcss", "FastAPI","TypeScript", "Docker",'GSAP', "Supabase", "PostgreSQL", "Gemini API", "Vapi Voice AI", "LangChain", "RAG Systems", "Model Context Protocol (MCP)", "CI/CD"
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Sentinel AIOps Agent',
    category: 'Autonomous DevOps',
    description: 'An event-driven DevOps agent that monitors microservices, detects crashes, and auto-generates code fixes. Features a Symbolic RAG (LLM-Backed Semantic Cache) using SQLite.',
    techStack: ['Python', 'n8n', 'Docker', 'Gemini API','SQLite','FastAPI'],
    metrics: '90% Cost Reduction',
    imageUrl: './image/rfp.png',
    year: '2025',
    link: 'https://github.com/Youssefamenallah23/sentinel'
  },
  {
    id: 'p2',
    title: 'TitanFlow Sales Agent',
    category: 'Agentic AI',
    description: 'Autonomous inbound sales agent using n8n for orchestration. Implemented Model Context Protocol (MCP) to verify services against local SQL databases and write back to CRMs.',
    techStack: ['n8n', 'Full Stack', 'MCP', 'Docker','Gemini API','FastAPI','SQLite'],
    metrics: 'Automated RFPs',
    imageUrl: './image/sentinels.png',
    year: '2025',
    link: 'https://github.com/Youssefamenallah23/titanflow'
  },
  {
    id: 'p3',
    title: 'AI Mental Health Platform',
    category: 'MedTech / RAG',
    description: 'Personalized well-being app featuring a RAG-based chatbot (Gemini + Astra DB). Secured via Clerk authentication with persistent vector data storage and AI-powered insights and Gamified analytics. \n Note: not responsive,project was mainly to implement RAG and test it with real data',
    techStack: ['Next.js', 'TypeScript', 'Astra DB', 'Clerk','Gemini API','RAG System','zod'],
    metrics: '92% Emotion Accuracy',
    imageUrl: './image/mindcare.png',
    year: '2025',
    link: 'https://mind-care-ai-mindy.vercel.app/'
  },
  // Archive Projects
  {
    id: 'p4',
    title: 'Personal Portfolio',
    category: 'Portoflio',
    description: 'Immersive 3D Portfolio v2 "An ultra-performant personal brand experience built to demonstrate advanced frontend engineering. Moving beyond a standard layout, I leveraged Three.js and GSAP to create a seamless, scroll-driven 3D narrative.',
    techStack: ['Vite', 'TypeScript', 'Tailwind CSS', 'Gsap' ,'ThreeJS'],
    metrics: 'Introduce Myself',
    imageUrl: './image/portfolio.png',
    year: '2025',
    link: 'https://portfolio-youssef-amen-allah.vercel.app/'
  },
  {
    id: 'p5',
    title: 'Mojito Cocktail',
    category: 'Landing Page',
    description: 'A vibrant web app for cocktail bars, featuring a modern animations using GSAP.',
    techStack: ['React', 'GSAP', 'Vite', 'JavaScript'],
    metrics: 'Modern Animations',
    imageUrl: './image/mojito.png',
    year: '2025',
    link: 'https://gsap-cocktail-beta.vercel.app/'
  },
  {
    id: 'p6',
    title: 'CarePulse',
    category: 'Web Platform , HealthTech',
    description: 'a web app for hospitals with sms notification and admin dashboard',
    techStack: ['Next.js 15', 'React 19', 'Twilio', 'Appwrite'],
    metrics: 'SMS Notifications',
    imageUrl: './image/carepulse.png',
    year: '2024',
    link: 'https://care-pulse-sms.vercel.app/'
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'e1',
    degree: 'Master\'s in Intelligent Pervasive Systems',
    institution: 'ISSATSO (Sousse, Tunisia)',
    year: 'Expected 2027',
    focus: ['AI Systems', 'IoT', 'Distributed Computing'],
    color: 'bg-soft-rose'
  },
  {
    id: 'e2',
    degree: 'Bachelor\'s in Software Engineering',
    institution: 'ISSATSO (Sousse, Tunisia)',
    year: 'Graduated 2025',
    focus: ['Software Architecture', 'Web Development', 'Algorithms'],
    color: 'bg-soft-sky'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Freelance AI Voice Engineer',
    company: 'Call Center Automation SaaS',
    period: 'Jun 2025 – Oct 2025',
    description: 'Engineered an AI Voice Agent using Vapi and Next.js, automating 10,000+ monthly interactions. Integrated Supabase for real-time data handling (99.5% uptime) and optimized backend latency for sub-500ms responses.',
    skills: ['Vapi AI', 'Next.js', 'Supabase', 'Zustand']
  },
  {
    id: 'exp2',
    role: 'Software Engineering Intern',
    company: 'Mobelite',
    period: 'Feb 2025 – Jun 2025',
    description: 'Developed scalable solutions using React.js and TypeScript. Implemented RAG architectures utilizing Astra DB and Gemini API. Optimized frontend performance, achieving a 20% reduction in load times.',
    skills: ['React.js', 'TypeScript', 'RAG', 'Gemini API']
  },
  {
    id: 'exp3',
    role: 'Lead Frontend Developer',
    company: 'Eb7ath (Hackathon Team)',
    period: 'Dec 2023',
    description: 'Led the development of a humanitarian facial recognition app. Won First Place at DevFest Hackathon for technical innovation and social impact.',
    skills: ['React', 'Facial Recognition', 'Rapid Prototyping']
  }
];

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'mcp-integration-2025',
    title: 'Mastering the Model Context Protocol (MCP)',
    excerpt: 'Standardizing how AI agents access enterprise tools and local data. A guide to moving from custom integrations to universal protocol standards.',
    date: 'Dec 2025',
    readTime: '12 min read',
    imageUrl:'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3399a364-9bd7-4302-b0a4-40cd956ba23d_5246x3200.png',
    tags: ['MCP', 'Architecture', 'Anthropic'],
    link:'https://machinelearningmastery.com/the-complete-guide-to-model-context-protocol/'
  },
  {
    id: 'agentic-rag-n8n',
    title: 'Agentic RAG: Beyond Simple Vector Search',
    excerpt: 'Implementing self-correcting retrieval loops in n8n. How to use autonomous agents to rewrite queries and verify data accuracy in real-time.',
    date: 'Nov 2025',
    readTime: '10 min read',
    imageUrl: 'https://images.ctfassets.net/d6o5ai4eeewt/26ARXh0b8yQltYc1QiUEsh/4184d1568cad4f0f52be80d6a318b69a/Understanding_RAG.jpg',
    tags: ['n8n', 'RAG', 'AI Ops'],
    link:'https://blog.n8n.io/agentic-rag/'
  },
  {
    id: 'vapi-latency-optimization',
    title: 'The Sub-500ms Voice Challenge',
    excerpt: 'A technical deep-dive into reducing pipeline latency for Voice AI. Optimizing the STT-LLM-TTS loop for human-grade conversational speed.',
    date: 'Oct 2025',
    readTime: '8 min read',
    imageUrl: 'https://vapi.ai/brand/img/full-logo-square-5.svg',
    tags: ['Voice AI', 'Vapi', 'Performance'],
    link:'https://vapi.ai/blog/speech-latency'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    text: "Youssef was a valuable addition to our team. His code is always clean and easy to work with, which made the entire integration process proceed smoothly. He accomplishes tasks efficiently without unnecessary complications.",
    author: "Daly C.",
    role: "Project Owner & Freelancer",
    company: ""
  },
  {
    id: 't2',
    text: "I enjoyed working with Youssef. He is a skilled developer who is always open to feedback and quick to help. His methodical approach to building features is reliable.",
    author: "Aymen B.",
    role: "Software Engineer & AI Developer",
    company: ""
  },
  {
    id: 't3',
    text: "Youssef’s work on the client-facing app was outstanding. The UI is clean and easy to navigate, which made testing straightforward. Everything was well-organized and functioned as anticipated, indicating high-quality work.",
    author: "Imen B.",
    role: "3D Designer & Web Developer",
    company: ""
  }
];

export const SYSTEM_INSTRUCTION = `
You are the digital avatar of Amen Allah Youssef, a Full Stack & AI Engineer based in Sousse, Tunisia.
Your personality is professional, innovative, and focused on efficiency. You are embedded in his portfolio website.

Here is his full resume content. Use this to answer any questions about his skills, experience, or projects:

PROFESSIONAL SUMMARY
Full Stack & AI Engineer specializing in Agentic Workflows, AIOps, and RAG Systems. Expert in orchestrating autonomous microservices using Full Stack technologies, n8n, and Docker. Proven track record of building self-healing systems and AI-driven automation that integrates LLMs (Gemini, Vapi) with structured enterprise data (SQL, MCP) to reduce operational costs and enhance efficiency.

TECHNICAL SKILLS
- Core & Backend: Full Stack, TypeScript, Node.js, SQL, Model Context Protocol (MCP).
- AI & Automation: n8n, Agentic AI, RAG Systems, Vector DBs (Astra/Supabase), Gemini API, Vapi.
- Frontend: React.js, Next.js 15, Tailwind CSS, Zustand, React Query.
- DevOps & Tools: Docker, Microservices Architecture, Git, CI/CD, Event-Driven Architecture.

WORK EXPERIENCE
1. Freelance (Call Center Automation) | AI Voice Engineer (Jun 2025 – Oct 2025)
   - Engineered an AI Voice Agent using Vapi and Next.js, automating 10,000+ monthly customer interactions.
   - Integrated Supabase for real-time data handling, achieving 99.5% uptime for the automation pipeline.
   - Optimized backend latency, ensuring near-instant voice responses (sub-500ms) for natural conversation flow.

2. Mobelite | Software Engineering Intern (Feb 2025 – Jun 2025)
   - Implemented RAG architectures utilizing Astra DB and Gemini API to enhance internal knowledge retrieval systems.
   - Contributed to the backend architecture of scalable web solutions using TypeScript and Node.js.
   - Optimized data fetching strategies, reducing server load and improving API response times.

PROJECT EXPERIENCE
1. Sentinel: Autonomous AIOps & Self-Healing Agent | Full Stack, Docker, Gemini
   - Architected an event-driven DevOps agent that monitors microservices, detects crashes, and auto-generates code fixes.
   - Implemented a Symbolic RAG (LLM-Backed Semantic Cache) using SQLite, reducing AI inference costs by 90%.
   - Designed a fully containerized Docker environment where the agent autonomously performs root-cause analysis.

2. TitanFlow: Agentic AI Sales System | n8n, Full Stack, MCP, Docker
   - Built an autonomous inbound sales agent using n8n for orchestration and custom reasoning logic.
   - Implemented Model Context Protocol (MCP) to connect LLMs with a local pricing database and CRM.
   - Automated the full RFP lifecycle: parsing PDFs, calculating VIP scores, and drafting personalized quote emails.

3. AI-Driven Mental Health Platform | Next.js, TypeScript, RAG
   - Built a personalized well-being app featuring a RAG-based chatbot (Gemini + Astra DB) with 92% emotion recognition accuracy.
   - Reduced deployment overhead by 30% through the integration of Sanity CMS and Clerk authentication.

4. Eb7ath (DevFest Hackathon Winner) | Lead Frontend Developer (Dec 2023)
   - First Place Winner: Developed a humanitarian facial recognition app to reunite families during crises.

EDUCATION
Higher Institute of Applied Sciences and Technology (ISSATSO) Sousse, Tunisia
- Master’s in Intelligent Pervasive Systems (Expected Jun 2027)
- Bachelor’s in Software Engineering (Graduated Jun 2025)

Keep answers concise and punchy. Use markdown for emphasis. If asked about contact, direct them to the contact form below.
`;

export const SOCIAL_LINKS = [
  { name: 'Github', url: 'https://github.com/Youssefamenallah23' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amen-allah-youssef-8685012bb/' },
  { name: 'Facebook', url: 'https://www.facebook.com/amen.youssef.9' },
  { name: 'Mail', url: 'mailto:youssefamenallah.contact@gmail.com' }
];
