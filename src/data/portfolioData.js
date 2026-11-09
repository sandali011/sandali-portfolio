// ============================================================
// Portfolio Data — Update this file to customise your portfolio
// ============================================================

export const personalInfo = {
  name: 'D.M.S.A.K Dissanayaka',
  displayName: 'Sandali Aloka',
  title: 'Full-Stack Developer',
  institute: 'Institute of Technology, University of Moratuwa',
  bio: "Passionate IT undergraduate at ITUM crafting full-stack web applications and exploring modern cloud technologies. I love turning complex problems into clean, scalable solutions.",
  github: 'https://github.com/sandali011',
  linkedin: 'https://www.linkedin.com/in/sandali-aloka/',
  email: 'sandalialoka011@gmail.com',
  availableForHire: true,
  cvUrl: '/Sandali_Aloka_CV.pdf',
}

export const projects = [
  {
    id: 1,
    title: 'ShopLK',
    emoji: '🛍️',
    description:
      'Modern, high-performance e-commerce frontend built with React 19 and Tailwind CSS, featuring smooth search, state management, and cart persistence.',
    highlights: [
      'Debounced instant search using React 19 useDeferredValue',
      'Global cart state management with Context API & useReducer',
      'Cart persistence using custom LocalStorage sync',
      'Optimized performance with Code Splitting (React.lazy & Suspense)',
      'Deployed live on Vercel with responsive mobile-first UI',
    ],
    tech: ['React 19', 'Tailwind CSS', 'JavaScript ES6+', 'Context API', 'Vercel', 'Vite'],
    github: 'https://github.com/sandali011/shoplk--fullstack-',
    live: 'https://shoplk-fullstack.vercel.app',
    gradient: 'from-cyan-500 to-blue-600',
    accentColor: 'cyan',
  },
  {
    id: 2,
    title: 'Settle Up',
    emoji: '💸',
    description:
      'Smart group expense splitter that minimises the number of payments using an optimal debt-simplification algorithm. Built with zero dependencies.',
    highlights: [
      'Greedy algorithm reduces n expenses to at most n-1 payments',
      'Multiple payers per expense with net balance calculation',
      'XSS-safe with full keyboard accessibility & ARIA labels',
      'localStorage persistence with schema migration support',
    ],
    tech: ['JavaScript ES6+', 'HTML5', 'CSS3', 'LocalStorage', 'Responsive', 'A11y'],
    github: 'https://github.com/sandali011/settle-up',
    live: 'https://sandali011.github.io/settle-up/',
    gradient: 'from-purple-500 to-pink-600',
    accentColor: 'purple',
  },
  {
    id: 3,
    title: 'MicroLink',
    emoji: '🔗',
    description:
      'Cross-platform mobile application with a high-performance Python backend, designed around microservice architecture patterns.',
    highlights: [
      'Flutter frontend for cross-platform (iOS & Android)',
      'FastAPI backend with async request handling',
      'PostgreSQL for structured data management',
      'RESTful API with clean architecture',
    ],
    tech: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'REST API'],
    github: null,
    live: null,
    gradient: 'from-emerald-500 to-teal-600',
    accentColor: 'emerald',
  },
]

export const skillCategories = [
  {
    label: 'Languages & Mobile',
    color: 'cyan',
    skills: ['JavaScript', 'Python', 'Flutter', 'HTML5', 'CSS3'], // Dart අයින් කර Flutter පමණක් තැබුවා
  },
  {
    label: 'Frontend',
    color: 'blue',
    skills: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    label: 'Backend',
    color: 'purple',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs'],
  },
  {
    label: 'Database',
    color: 'green',
    skills: ['PostgreSQL', 'MongoDB'],
  },
  {
    label: 'DevOps & Tools',
    color: 'orange',
    skills: ['Docker', 'Git', 'GitHub', 'Postman', 'Vercel', 'VS Code'],
  },
  {
    label: 'Architecture & Concepts',
    color: 'pink',
    skills: ['OOP Concepts', 'Microservices', 'SDLC', 'Clean Code'],
  },
]

export const certificates = [
  {
    id: 1,
    title: 'Full Stack Open (Parts 0–5)',
    issuer: 'University of Helsinki',
    year: '2026',
    status: 'Verified Certificate',
    description: 'Foundations of modern full stack development using React, Node.js, Express, and REST APIs.',
    inProgressNote: 'Currently continuing remaining modules',
    certificateUrl: '/certificate-fullstack-helsinki.png',
    downloadName: 'Helsinki_FullStack_Certificate.png',
    skills: ['React', 'Node.js', 'REST APIs'],
  },
]

export const softSkills = [
  'Problem Solving',
  'Team Collaboration',
  'Communication',
  'Time Management',
  'Adaptability',
  'Critical Thinking',
]
