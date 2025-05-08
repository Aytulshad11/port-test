export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    tech: ["React", "Redux", "Tailwind CSS", "Stripe API"],
    github: "https://github.com/username/ecommerce-project",
    demo: "https://ecommerce-project.demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for task management with drag-and-drop functionality, filters, and team collaboration features.",
    image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
    tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/username/task-manager",
    demo: "https://task-manager.demo.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard showing current conditions and 5-day forecast with location search.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    tech: ["React", "OpenWeather API", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/username/weather-app",
    demo: "https://weather-app.demo.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website to showcase projects and skills with dark/light mode support.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.demo.com"
  }
];

export const skillsData = {
  frontend: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "code" },
    { name: "TypeScript", icon: "file-code" },
    { name: "React", icon: "atom" },
    { name: "Tailwind CSS", icon: "palette" },
    { name: "Redux", icon: "layers" }
  ],
  backend: [
    { name: "Node.js", icon: "server" },
    { name: "Express.js", icon: "server" },
    { name: "Python", icon: "code" },
    { name: "RESTful APIs", icon: "database" }
  ],
  database: [
    { name: "MongoDB", icon: "database" },
    { name: "PostgreSQL", icon: "database" },
    { name: "Firebase", icon: "database" }
  ],
  tools: [
    { name: "Git", icon: "git-branch" },
    { name: "Docker", icon: "layers" },
    { name: "VS Code", icon: "code" },
    { name: "Figma", icon: "figma" }
  ]
};

export const navLinks = [
  { name: "Home", path: "hero" },
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  { name: "Projects", path: "projects" },
  { name: "Skills", path: "skills" },
  { name: "Contact", path: "contact" }
];