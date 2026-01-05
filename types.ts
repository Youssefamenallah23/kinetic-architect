
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  metrics: string; // e.g., "40% Faster"
  imageUrl: string;
  videoUrl?: string; // Optional video
  diagramData?: DiagramNode[]; // Simplified for this demo
  year?: string; // For the archive list
  link?: string; // External link
}

export interface DiagramNode {
  id: string;
  label: string;
  type: 'service' | 'db' | 'client';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  focus: string[];
  color?: string; // For light mode accents
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

export enum NavigationSection {
  HERO = 'hero',
  ABOUT = 'about',
  EXPERIENCE = 'experience',
  WORK = 'work',
  EDUCATION = 'education',
  TESTIMONIALS = 'testimonials',
  BLOG = 'blog',
  CONTACT = 'contact'
}
