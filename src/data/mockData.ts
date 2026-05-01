// Global GitHub username - change this to update all GitHub references
export const githubUsername = 'tattsedsharma'

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'GitHub', href: '#github' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yassine-dev', icon: 'Github' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yassine-dev', icon: 'Linkedin' },
]

export const heroData = {
  name: 'David Jones',
  tagline: 'Software Developer & Creative Problem Solver',
  description: 'I specialize in building exceptional digital experiences with React, Node.js, TypeScript, and modern web technologies. Let\'s bring your ideas to life.',
  availability: 'Available for freelance work',
  avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=400&h=400&fit=crop&crop=face',
  resumeUrl: 'https://example.com/yassine-resume.pdf',
  badges: [
    { icon: 'Code2', label: 'Full Stack' },
    { icon: 'Terminal', label: 'Clean Code' },
  ],
}

export const aboutData = {
  title: 'David Jones',
  avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&h=700&fit=crop&crop=full',
  description: [
    'I\'m David Jones, a software developer based in United State with a passion for building digital products that make a difference. With expertise spanning frontend, backend, mobile, and game development, I bring a versatile skill set to every project.',
    'My journey in software development started with a curiosity for how things work, which evolved into a career creating solutions that help businesses grow and users thrive.',
  ],
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
  ],
  services: [
    {
      icon: 'Code2',
      title: 'Web Development',
      description: 'Building scalable web applications with React, Node.js, and modern frameworks.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native for iOS and Android.',
    },
    {
      icon: 'Gamepad2',
      title: 'Game Development',
      description: 'Creating engaging 2D and 3D games with Unity and C#.',
    },
    {
      icon: 'Database',
      title: 'Backend Systems',
      description: 'Robust APIs and database solutions with PostgreSQL, MongoDB, and GraphQL.',
    },
  ],
}

export const experienceData = [
  {
    title: 'Senior Software Developer',
    company: 'Freelance',
    period: '2022 - Present',
    description: [
      'Leading full-stack development projects for international clients',
      'Specializing in React, Node.js, and cloud solutions',
      'Architecting scalable applications with modern best practices',
    ],
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Tech Startup',
    period: '2020 - 2022',
    description: [
      'Developed and maintained web applications serving 100K+ users',
      'Implemented CI/CD pipelines and microservices architecture',
      'Optimized database queries reducing load times by 40%',
    ],
    skills: ['React', 'Express', 'MongoDB', 'Docker', 'GraphQL'],
  },
  {
    title: 'Mobile App Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description: [
      'Built cross-platform mobile applications using React Native',
      'Delivered 10+ apps to the App Store and Google Play',
      'Integrated third-party APIs and payment gateways',
    ],
    skills: ['React Native', 'iOS', 'Android', 'Firebase', 'Redux'],
  },
  {
    title: 'Junior Developer',
    company: 'Software Company',
    period: '2018 - 2019',
    description: [
      'Started professional journey developing web applications',
      'Learned modern development practices and agile methodologies',
      'Collaborated with senior developers on production code',
    ],
    skills: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS', 'Git'],
  },
]

export const projectsData = [
  {
    title: 'Shopify E-Commerce Store',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://shopify-demo.vercel.app',
    githubUrl: 'https://github.com/yassine-dev/shopify-store',
    featured: true,
  },
  {
    title: 'Fashion Online Store',
    description: 'Modern fashion e-commerce platform with product filtering, cart management, and checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    demoUrl: '',
    githubUrl: 'https://github.com/yassine-dev/fashion-store',
    featured: true,
  },
  {
    title: 'Electronics Marketplace',
    description: 'Multi-vendor electronics store with product comparisons and reviews system.',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&h=600&fit=crop',
    tags: ['React', 'GraphQL', 'MongoDB', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Organic Food Store',
    description: 'Fresh produce delivery platform with subscription boxes and local vendor integration.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Jewelry Boutique',
    description: 'Luxury jewelry e-commerce with 360° product view and custom engraving options.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop',
    tags: ['React', 'Three.js', 'Node.js', 'WebGL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Home Decor Store',
    description: 'Interior design marketplace with AR room preview and style recommendations.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
    tags: ['React', 'AR.js', 'Python', 'FastAPI'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Sports Equipment Shop',
    description: 'Athletic gear e-commerce with size guides, inventory tracking, and team discounts.',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MySQL', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Book Store Platform',
    description: 'Online bookstore with reading lists, reviews, and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AI'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Pet Supplies Store',
    description: 'Pet products marketplace with auto-replenishment and veterinary partnerships.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Cosmetics Boutique',
    description: 'Beauty products store with virtual try-on and skin type recommendations.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop',
    tags: ['React', 'WebRTC', 'Python', 'ML'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
]

export const skillsData = {
  categories: [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg' },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
      ],
    },
    {
      title: 'Mobile & Game Dev',
      skills: [
        { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Unity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ],
    },
  ],
  additionalTechnologies: [
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
    { name: 'Storybook', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg' },
  ],
}

export const githubData = {
  username: githubUsername,
  profileUrl: `https://github.com/${githubUsername}`,
  contributions: [
    // Generate mock contribution data for the last year (52 weeks x 7 days)
    ...Array.from({ length: 364 }, () => Math.floor(Math.random() * 5)),
  ],
  stats: {
    repositories: 45,
    stars: 128,
    followers: 89,
    following: 34,
  },
}

export const contactData = {
  email: 'davidjones@gmail.com',
  phone: '+112 6XX XXX XXX',
  location: 'United State',
  contactInfo: [
    { icon: 'Mail', label: 'Email', value: 'davidjones@gmail.com', href: 'mailto:davidjones@gmail.com' },
    { icon: 'Phone', label: 'Phone', value: '+112 6XX XXX XXX', href: 'tel:+112600000000' },
    { icon: 'MapPin', label: 'Location', value: 'United State', href: '#' },
  ],
}

export const footerData = {
  name: 'David Jones',
  year: new Date().getFullYear(),
}
