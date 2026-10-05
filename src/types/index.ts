export interface ProjectDemoVideo {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  category: string;
  status: 'Active' | 'Completed' | 'Ongoing' | 'Prototype' | 'TBA';
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
  demoVideos?: ProjectDemoVideo[];
  projectPageUrl?: string;
  featured: boolean;
  visibilityStatus?: 'draft' | 'published' | 'archived';
  featuredOrder?: number;
}

export type ProjectCategory =
  | 'AI & Data'
  | 'Robotics'
  | 'Healthcare'
  | 'Education'
  | 'Sustainability'
  | 'Industrial Systems';
