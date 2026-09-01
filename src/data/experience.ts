export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    company: 'FUEL (Friends Union for Energising Lives), Pune',
    role: 'Core Java & Backend Development Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Pune, India',
    points: [
      'Wrote and debugged Core Java programs under real deadlines, moving past classroom exercises into production-style backend work.',
      'Implemented JDBC connectivity to MySQL, writing and executing SQL queries directly against a live database.',
      'Worked within a team development workflow for the first time, picking up code review habits and collaborative debugging.',
      'Applied structured problem-solving to real backend issues rather than isolated assignments.',
    ],
  },
  {
    company: 'MySkillForge – LearnSquare',
    role: 'Pre-Internship Program & Virtual Internship',
    period: 'May 2025 – Jul 2025',
    location: 'Remote',
    points: [
      'Completed structured tracks in Java, React + Bootstrap, GitHub, and aptitude/emerging-tech modules.',
      'Used GitHub for version control across multiple exercises, building the habit of atomic commits and clear messages.',
      'Ran API testing in Postman and documented request/response behavior — a direct precursor to the REST work in the To-Do List Manager project.',
      'Built confidence in structured logical reasoning and technical communication.',
    ],
  },
];
