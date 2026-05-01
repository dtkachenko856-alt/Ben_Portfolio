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
  avatar: '/images/avatar/about-avatar.jpg',
  resumeUrl: 'https://example.com/yassine-resume.pdf',
  badges: [
    { icon: 'Code2', label: 'Full Stack' },
    { icon: 'Terminal', label: 'Clean Code' },
  ],
}

export const aboutData = {
  title: 'David Jones',
  avatar: '/images/avatar/about-avatar.jpg',
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
    image: 'https://picsum.photos/800/600?random=shop1',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demoUrl: 'https://shopify-demo.vercel.app',
    githubUrl: 'https://github.com/yassine-dev/shopify-store',
    featured: true,
  },
  {
    title: 'Fashion Online Store',
    description: 'Modern fashion e-commerce platform with product filtering, cart management, and checkout.',
    image: 'https://picsum.photos/800/600?random=fashion1',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    demoUrl: '',
    githubUrl: 'https://github.com/yassine-dev/fashion-store',
    featured: true,
  },
  {
    title: 'Electronics Marketplace',
    description: 'Multi-vendor electronics store with product comparisons and reviews system.',
    image: 'https://picsum.photos/800/600?random=electronics1',
    tags: ['React', 'GraphQL', 'MongoDB', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Organic Food Store',
    description: 'Fresh produce delivery platform with subscription boxes and local vendor integration.',
    image: 'https://picsum.photos/800/600?random=organic1',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Jewelry Boutique',
    description: 'Luxury jewelry e-commerce with 360° product view and custom engraving options.',
    image: 'https://picsum.photos/800/600?random=jewelry1',
    tags: ['React', 'Three.js', 'Node.js', 'WebGL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Home Decor Store',
    description: 'Interior design marketplace with AR room preview and style recommendations.',
    image: 'https://picsum.photos/800/600?random=homedecor1',
    tags: ['React', 'AR.js', 'Python', 'FastAPI'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Sports Equipment Shop',
    description: 'Athletic gear e-commerce with size guides, inventory tracking, and team discounts.',
    image: 'https://picsum.photos/800/600?random=sports1',
    tags: ['React', 'Node.js', 'MySQL', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Book Store Platform',
    description: 'Online bookstore with reading lists, reviews, and personalized recommendations.',
    image: 'https://picsum.photos/800/600?random=books1',
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AI'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Pet Supplies Store',
    description: 'Pet products marketplace with auto-replenishment and veterinary partnerships.',
    image: 'https://picsum.photos/800/600?random=pets1',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    title: 'Cosmetics Boutique',
    description: 'Beauty products store with virtual try-on and skin type recommendations.',
    image: 'https://picsum.photos/800/600?random=cosmetics1',
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

export const chatbotData = {
  welcomeMessage: "👋 Hi! I'm David's AI assistant. Ask me anything about his work, skills, or how to get in touch!",
  botName: "David's Assistant",
  botResponses: {
    'hello': 'Hi there! 👋 Welcome to my portfolio. How can I help you today?',
    'hi': 'Hello! 👋 I\'m David\'s virtual assistant. Ask me about his skills, projects, or experience!',
    'hey': 'Hey! 👋 What would you like to know about David?',
    'skills': `David is skilled in React, TypeScript, Node.js, Next.js, Tailwind CSS, and more. Check out the Skills section for details! 💻`,
    'experience': `David has 5+ years of experience as a Software Developer, working with startups and international clients. 🚀`,
    'projects': `David has built many projects including E-commerce stores, Mobile apps, and Web applications. Check the Projects section! 🛠️`,
    'contact': `You can reach David via email at ${contactData.email} or through the contact form on this page. 📧`,
    'email': `David's email is ${contactData.email}. Feel free to reach out! 📧`,
    'hire': 'David is available for freelance work and full-time opportunities. Contact him to discuss your project! 💼',
    'resume': 'You can download David\'s resume from the Download CV button in the hero section! 📄',
    'about': `David is a Software Developer based in ${contactData.location}, passionate about building digital products that make a difference. 🌍`,
    'github': `You can check out David's GitHub profile at https://github.com/${githubUsername} for his latest projects and contributions! 🐙`,
    'linkedin': `Connect with David on LinkedIn: https://linkedin.com/in/yassine-dev for professional networking! 💼`,
    'location': `David is based in ${contactData.location} and available for remote work worldwide! 🌍`,
    'availability': heroData.availability,
    'default': 'I\'m not sure about that. Try asking about skills, experience, projects, or how to contact David! 🤔',
  },
  quickReplies: [
    'Tell me about your skills',
    'View your projects', 
    'How to contact you?',
    'Are you available for hire?',
  ],
}

export const verificationData = {
  // Multiple verification sets for daily rotation
  verificationSets: [
    {
      instruction: "Select all 4 images containing a computer to verify you're human",
      correctImageIndices: [0, 2, 7, 8],
      images: [
        { url: "/images/verification/computer1.jpg", alt: "Laptop computer" },
        { url: "/images/verification/store.jpg", alt: "Store interior" },
        { url: "/images/verification/computer2.jpg", alt: "Desktop computer" },
        { url: "/images/verification/shoes.jpg", alt: "Fashion shoes" },
        { url: "/images/verification/computer3.jpg", alt: "Computer setup" },
        { url: "/images/verification/street.jpg", alt: "City street" },
        { url: "/images/verification/coffee.jpg", alt: "Coffee shop" },
        { url: "/images/verification/computer4.jpg", alt: "Coding on computer" },
        { url: "/images/verification/office.jpg", alt: "Office space" },
      ],
    },
    {
      instruction: "Select all 4 images containing a car to verify you're human",
      correctImageIndices: [1, 3, 5, 8],
      images: [
        { url: "/images/verification/store.jpg", alt: "Store interior" },
        { url: "/images/verification/car1.jpg", alt: "Sports car" },
        { url: "/images/verification/tree1.jpg", alt: "Forest trees" },
        { url: "/images/verification/car2.jpg", alt: "Vintage car" },
        { url: "/images/verification/beach1.jpg", alt: "Ocean beach" },
        { url: "/images/verification/car3.jpg", alt: "Luxury car" },
        { url: "/images/verification/building1.jpg", alt: "Modern building" },
        { url: "/images/verification/shoes.jpg", alt: "Fashion shoes" },
        { url: "/images/verification/car4.jpg", alt: "Classic car" },
      ],
    },
    {
      instruction: "Select all 4 images containing a tree to verify you're human",
      correctImageIndices: [0, 4, 6, 7],
      images: [
        { url: "/images/verification/tree1.jpg", alt: "Forest trees" },
        { url: "/images/verification/car1.jpg", alt: "Sports car" },
        { url: "/images/verification/computer2.jpg", alt: "Desktop computer" },
        { url: "/images/verification/car2.jpg", alt: "Vintage car" },
        { url: "/images/verification/tree2.jpg", alt: "Palm tree" },
        { url: "/images/verification/car3.jpg", alt: "Luxury car" },
        { url: "/images/verification/tree3.jpg", alt: "Oak tree" },
        { url: "/images/verification/tree4.jpg", alt: "Pine trees" },
        { url: "/images/verification/car4.jpg", alt: "Classic car" },
      ],
    },
    {
      instruction: "Select all 4 images containing a beach to verify you're human",
      correctImageIndices: [2, 5, 7, 8],
      images: [
        { url: "/images/verification/tree1.jpg", alt: "Forest trees" },
        { url: "/images/verification/car1.jpg", alt: "Sports car" },
        { url: "/images/verification/beach1.jpg", alt: "Ocean beach" },
        { url: "/images/verification/car2.jpg", alt: "Vintage car" },
        { url: "/images/verification/tree2.jpg", alt: "Palm tree" },
        { url: "/images/verification/beach2.jpg", alt: "Tropical beach" },
        { url: "/images/verification/tree3.jpg", alt: "Oak tree" },
        { url: "/images/verification/beach3.jpg", alt: "Sandy beach" },
        { url: "/images/verification/beach4.jpg", alt: "Beach sunset" },
      ],
    },
    {
      instruction: "Select all 4 images containing a building to verify you're human",
      correctImageIndices: [1, 3, 5, 6],
      images: [
        { url: "/images/verification/tree1.jpg", alt: "Forest trees" },
        { url: "/images/verification/building1.jpg", alt: "Modern building" },
        { url: "/images/verification/beach1.jpg", alt: "Ocean beach" },
        { url: "/images/verification/building2.jpg", alt: "Office building" },
        { url: "/images/verification/tree2.jpg", alt: "Palm tree" },
        { url: "/images/verification/building3.jpg", alt: "Skyscraper" },
        { url: "/images/verification/building4.jpg", alt: "Historic building" },
        { url: "/images/verification/beach3.jpg", alt: "Sandy beach" },
        { url: "/images/verification/beach4.jpg", alt: "Beach sunset" },
      ],
    },
  ],
  
  // Function to get today's verification set
  getDailyVerification: function() {
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
    const setIndex = dayOfYear % this.verificationSets.length
    return this.verificationSets[setIndex]
  },
  
  // Function to get verification key for today (for validation)
  getDailyKey: function() {
    const today = new Date()
    return today.toISOString().split('T')[0] // YYYY-MM-DD format
  },
}
