export const portfolioData = {
  personal: {
    name: 'Justine Carl Albay',
    title: 'Full Stack Developer',
    subtitle: 'Building elegant, user-centric web solutions with modern technologies',
    email: 'justinecarlalbay@gmail.com',
    phone: '09686710612',
    location: 'Imus, Cavite, 4103',
    profileImage: 'assets/images/profile.jpg',
    socialLinks: {
      github: 'https://github.com/kirchei',
      linkedin: 'https://linkedin.com/in/justine-albay/'
    }
  },
  
  about: {
    summary: `I'm a Full Stack Developer with a strong foundation in web development and a passion for creating efficient, 
    scalable applications. Graduated as a Summa Cum Laude with a Bachelor's Degree in Information Technology with a specialization in 
    Web Development at De La Salle University – Dasmariñas, where I maintained a GPA of 3.84 as a Dean's Lister.`,
    education: [
      {
        institution: 'De La Salle University – Dasmariñas',
        degree: 'Bachelor\'s Degree in Information Technology',
        specialization: 'Web Development',
        period: '2021 - 2025',
        achievements: [
          'Dean\'s List 1st Honor: 2021–2025',
          'Summa Cum Laude',
          'GPA: 3.84'
        ]
      },
      {
        institution: 'Lasallian Codespace',
        degree: 'Web Development Bootcamp',
        period: '2024',
        achievements: [
          'Completed an intensive full-stack web development program',
          'Mastered web development technologies and best practices',
          'Developed numerous web applications using modern frameworks and libraries',
          'Collaborated on team-based development projects'
        ]
      },
      {
        institution: 'De La Salle University – Dasmariñas Senior High School',
        period: '2019 - 2021',
        achievements: [
          'Honor\'s List: 2019–2021 (with High and Highest Distinction)',
          'GPA: 3.87'
        ]
      }
    ],
    thesis: {
      title: 'Development of an Online Green Metrics Management System for DLSU-D\'s Campus Sustainability Office',
      award: 'Best in Capstone – DLSU-D Research Week 2025'
    }
  },

  skills: {
    technical: [
      {
        category: 'Programming Languages',
        items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C#', 'C++', 'Dart', 'SQL', 'MongoDB']
      },
      {
        category: 'Frameworks & Libraries',
        items: ['React', 'Angular', 'Flutter', 'Node.js', 'Next.js', 'Express.js', 'Bootstrap', 'Material-UI', 'Ionic']
      },
      {
        category: 'Web & Development',
        items: ['Git', 'HTML', 'CSS', 'REST APIs', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Animate']
      }
    ]
  },

  experience: [
    {
      company: 'ODR Technologies Inc.',
      position: 'Frontend Developer',
      location: 'Muntinlupa, NCR | Remote',
      period: 'January 2025 – May 2025',
      description: 'Developed a mobile-first EV charging station locator app with focus on modular architecture and intuitive UX.',
      highlights: [
        'Built responsive UI components including interactive maps and dynamic carousels using Angular and Ionic',
        'Implemented filterable station lists and real-time updates',
        'Collaborated using GitHub for version control and code management'
      ],
      technologies: ['Angular', 'Ionic', 'TypeScript', 'SCSS', 'Google Maps API'],
      link: 'https://odrtech.com'
    },
    {
      company: 'DLSU-D Campus Sustainability Office',
      position: 'Full-stack Developer',
      location: 'Dasmariñas, Cavite | Remote',
      period: 'April 2024 – December 2024',
      description: 'Developed a centralized platform for managing UI GreenMetric data submissions and reports.',
      highlights: [
        'Streamlined data collection across 16 offices',
        'Designed a relational database schema for sustainability data',
        'Enhanced user experience with Material-UI components',
        'Collaborated with stakeholders for usability and data accuracy'
      ],
      technologies: ['React', 'PHP', 'MySQL', 'Material-UI', 'Chart.js'],
      link: 'https://dlsud.edu.ph'
    }
  ],

  education: [
    {
      position: "Web Development Bootcamp Graduate",
      organization: "Lasallian Codespace",
      location: "Dasmariñas, Cavite",
      period: "2024",
      highlights: [
        "Completed intensive web development training program",
        "Mastered modern web technologies and best practices",
        "Developed full-stack applications using the MERN stack",
        "Collaborated on team projects using agile methodologies"
      ]
    },
    {
      position: "Internal Public Relations Officer",
      organization: "DLSU-D Information Technology Program Council",
      location: "Dasmariñas, Cavite",
      period: "August 2024 – July 2025",
      highlights: [
        "Promoted IT program initiatives through social media campaigns",
        "Acted as liaison between students and faculty"
      ]
    }
  ],

  projects: [
    {
      title: 'Green Metrics Management System',
      description: 'A comprehensive platform for managing sustainability data and metrics for DLSU-D\'s Campus Sustainability Office.',
      technologies: ['React', 'PHP', 'MySQL', 'Material-UI', 'Chart.js'],
      highlights: [
        'Best in Capstone Award Winner',
        'Streamlined data collection process',
        'Enhanced reporting capabilities',
        'Implemented real-time data visualization'
      ],
      githubUrl: '',
      liveUrl: 'https://youtu.be/_OFip5cJN78?si=qkOa1vh-V-OcLi3Z',
      imageUrl: '/assets/images/projects/green-metrics.png'
    },
    {
      title: 'EV Charging Station Locator',
      description: 'A mobile-first web application for locating and managing electric vehicle charging stations across the Philippines.',
      technologies: ['Angular', 'Ionic', 'TypeScript', 'Google Maps API', 'Firebase'],
      highlights: [
        'Real-time station availability tracking',
        'Interactive map with custom markers',
        'User authentication and favorites',
        'Offline station data caching'
      ],
      githubUrl: 'https://github.com/ihjayyyy/Lightning',
      liveUrl: '',
      imageUrl: '/assets/images/projects/ev-locator.png'
    },
    {
      title: 'Travel And Tours Website',
      description: 'A modern travel and tours website with sleek design and interactive features.',
      technologies: ['HTML', 'CSS', 'Bootstrap'],
      highlights: [
        'Responsive design with Bootstrap',
        'Interactive image sliders and carousels',
        'User-friendly navigation and layout',
        'Optimized for performance and SEO'
      ],
      githubUrl: 'https://github.com/kirchei/S08_Activity',
      liveUrl: 'https://kirchei.github.io/S08_Activity/',
      imageUrl: '/assets/images/projects/travel-site.png'
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Angular, featuring modern design and smooth animations.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'FontAwesome'],
      highlights: [
        'Responsive design with modern aesthetics',
        'Custom animations and transitions',
        'Optimized performance and accessibility',
        'Clean and maintainable code structure'
      ],
      githubUrl: 'https://github.com/kirchei/albayPortfolio',
      liveUrl: 'https://kirchei.github.io/albayPortfolio/',
      imageUrl: '/assets/images/projects/portfolio.png'
    },
    {
      title: 'Simple Calculator',
      description: 'A basic web calculator that performs addition, subtraction, multiplication, and division with a responsive layout.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      highlights: [
        'Clean and intuitive UI',
        'Handles multiple operations',
        'Fully responsive for all devices'
      ],
      githubUrl: 'https://github.com/kirchei/myCalculator',
      liveUrl: 'https://kirchei.github.io/myCalculator/',
      imageUrl: '/assets/images/projects/calculator.png'
    },
    {
      title: 'Weather App',
      description: 'A weather forecast web app that fetches current weather data based on user’s location or city input.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
      highlights: [
        'Displays temperature, weather condition, and humidity',
        'Fetches data using OpenWeatherMap API',
        'Minimalist UI with location-based search'
      ],
      githubUrl: 'https://github.com/kirchei/myWeatherApp',
      liveUrl: 'https://kirchei.github.io/myWeatherApp/',
      imageUrl: '/assets/images/projects/weather-app.png'
    },
    {
      title: 'To-Do List',
      description: 'A simple task management app allowing users to add, delete, and mark tasks as complete.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      highlights: [
        'Persistent task storage with LocalStorage',
        'Intuitive task input and filtering',
        'Clean layout with responsive design'
      ],
      githubUrl: 'https://github.com/kirchei/todo-list',
      liveUrl: 'https://kirchei.github.io/myToDoList/',
      imageUrl: '/assets/images/projects/todo-list.png'
    }
  ]
}; 