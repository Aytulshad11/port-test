import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          <span className="text-blue-600 dark:text-blue-400">•</span>
          <span className="text-gray-700 dark:text-gray-300">
            {experience.company}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {experience.duration}
          </span>
        </div>
        
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li 
              key={index}
              className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
              {achievement}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      duration: "Jan 2022 - Present",
      achievements: [
        "Led a team of 5 developers in building a high-performance SaaS platform using React and TypeScript",
        "Improved application performance by 40% through code optimization and lazy loading implementation",
        "Established coding standards and review processes, reducing bug reports by 30%"
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      duration: "Mar 2020 - Dec 2021",
      achievements: [
        "Developed responsive web applications serving 100k+ monthly active users",
        "Implemented automated testing, achieving 90% code coverage",
        "Collaborated with UX team to improve user engagement by 25%"
      ],
      technologies: ["React", "JavaScript", "SCSS", "Jest"]
    },
    {
      role: "Web Developer",
      company: "Creative Agency",
      duration: "Jun 2018 - Feb 2020",
      achievements: [
        "Built and maintained 20+ client websites using modern web technologies",
        "Reduced page load times by 60% through optimization techniques",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in web development and the impact I've made along the way
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;