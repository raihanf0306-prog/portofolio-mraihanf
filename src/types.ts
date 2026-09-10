export interface ExperienceItem {
  id: string;
  role: string;
  subtitle?: string;
  badge?: string;
  description: string;
  responsibilities: string[];
  skills?: string[];
  highlight?: string;
  placeholderTitle?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  size: 'large' | 'small';
  customImage?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  icon: string;
}
