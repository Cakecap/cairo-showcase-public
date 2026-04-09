export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  category: string;
  status: 'Active' | 'Completed' | 'Ongoing' | 'Prototype';
  year: number;
  duration: string;
  pic: string;
  team: string[];
  collaborator: string;
  cost: string;
  technology: string[];
  impactOutcomes: string[];
  posterImage: string;
  heroImage: string;
  galleryImages: string[];
  demoVideoUrl?: string;
  featured: boolean;
}

export type ProjectCategory =
  | 'AI & Data'
  | 'Robotics'
  | 'Healthcare'
  | 'Education'
  | 'Sustainability'
  | 'Industrial Systems';
