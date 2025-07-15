/**
 * Personal information interface
 */
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

/**
 * Education information interface
 */
export interface Education {
  institution: string;
  degree?: string;
  specialization?: string;
  period: string;
  achievements: string[];
}

/**
 * About section interface
 */
export interface About {
  summary: string;
  education: Education[];
  thesis?: {
    title: string;
    award: string;
  };
}

/**
 * Project interface
 */
export interface Project {
  title: string;
  description: string;
  imageUrl?: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

/**
 * Experience interface
 */
export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  link?: string;
}

/**
 * Technical skill category interface
 */
export interface TechnicalSkillCategory {
  category: string;
  items: string[];
}

/**
 * Skills section interface
 */
export interface Skills {
  technical: TechnicalSkillCategory[];
}

/**
 * Complete portfolio data interface
 */
export interface PortfolioData {
  personal: PersonalInfo;
  about: About;
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  education: {
    position: string;
    organization: string;
    location: string;
    period: string;
    highlights: string[];
  }[];
} 