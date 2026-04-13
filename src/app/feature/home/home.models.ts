export interface Skill {
  name: string;
  level: number;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  name: string;
  description: string;
  githubUrl?: string;
  tags: {
    label: string;
    type?: 'default' | 'blue' | 'green' | 'amber';
  }[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
}

export interface ProfileData {
  fullName: string;
  role: string;
  location: string;
  email: string;
  github: string;
  profile: string;
  objective: string;
  available: boolean;
  avatarUrl?: string;
}

export interface HomePageData {
  profile: ProfileData;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  formation: string[];
  contacts: ContactItem[];
}
