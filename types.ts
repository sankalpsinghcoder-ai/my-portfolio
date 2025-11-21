export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface NavItem {
  label: string;
  href: string;
}