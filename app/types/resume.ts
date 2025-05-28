export interface HeaderData {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface ExperienceData {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  technologies: string[];
  additionalSkills: string[];
  points: string[];
  logo?: string; // Optional path to company logo image in public folder
}

export interface AchievementData {
  icon: 'Timer' | 'Users' | 'Star' | 'Trophy' | 'UserRound' | 'LayoutGrid' | 'Rocket';
  title: string;
  description: string;
}

export interface CertificationData {
  title: string;
  description: string;
}

export interface SkillsCategory {
  baseYears: number;
  standouts: string[];
  otherNotables: string[];
}

export interface ResumeData {
  header: HeaderData;
  summary: string;
  experience: ExperienceData[];
  achievements: AchievementData[];
  certifications: CertificationData[];
  topTechnologySkills: SkillsCategory;
  topAdditionalSkills: SkillsCategory;
}
