export interface Skill {
  name: string;
  level: number; // 0-100, used for animated proficiency bars
}

export interface SkillCategory {
  category: string;
  icon: 'backend' | 'language' | 'frontend' | 'database' | 'tools';
  skills: Skill[];
}

// Proficiency levels are estimated from project depth and internship exposure described
// in the resume (e.g. Spring Boot used across two projects + explicit internship focus
// on Core Java/JDBC ranks higher than tools only used briefly).
export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    icon: 'language',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Python', level: 60 },
      { name: 'C', level: 65 },
    ],
  },
  {
    category: 'Backend',
    icon: 'backend',
    skills: [
      { name: 'Spring Boot', level: 82 },
      { name: 'REST API Design', level: 85 },
      { name: 'JDBC', level: 80 },
      { name: 'Spring Data JPA', level: 75 },
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Schema Design', level: 78 },
      { name: 'SQL Query Optimization', level: 65 },
    ],
  },
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: [
      { name: 'HTML / CSS', level: 78 },
      { name: 'JavaScript', level: 68 },
      { name: 'Bootstrap', level: 74 },
    ],
  },
  {
    category: 'Tools & Platforms',
    icon: 'tools',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'Postman', level: 78 },
      { name: 'IntelliJ IDEA', level: 82 },
      { name: 'Eclipse', level: 70 },
    ],
  },
];

// Tech stack "chips" shown in a compact grid — the tools she reaches for daily.
export const techStack = [
  'Java',
  'Spring Boot',
  'Spring Data JPA',
  'MySQL',
  'JDBC',
  'REST APIs',
  'Postman',
  'Git',
  'GitHub',
  'IntelliJ IDEA',
  'Bootstrap',
  'JavaScript',
];
