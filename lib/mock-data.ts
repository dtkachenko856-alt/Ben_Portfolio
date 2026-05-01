// Global Mock Data for Android & AI Developer Portfolio

export const personalInfo = {
  name: 'Alex Chen',
  title: 'Android & AI Developer',
  tagline: 'Building Intelligent Mobile Experiences',
  email: 'alex.chen.dev@email.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  website: 'www.alexchen.dev',
  linkedin: 'linkedin.com/in/alexchen-dev',
  github: 'github.com/alexchen-dev',
  twitter: 'twitter.com/alexchen_dev',
  resumeUrl: '/resume.pdf',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
};

export const heroData = {
  greeting: "Hello, I'm",
  name: 'Alex Chen',
  roles: [
    'Android Developer',
    'AI Engineer',
    'Machine Learning Expert',
    'Mobile App Architect',
    'Tech Innovator',
  ],
  description: 'I specialize in building cutting-edge Android applications powered by artificial intelligence. With 7+ years of experience, I transform complex AI models into seamless mobile experiences that millions of users love.',
  ctaPrimary: {
    text: 'View My Projects',
    href: '#projects',
  },
  ctaSecondary: {
    text: 'Download Resume',
    href: '#resume',
  },
  stats: [
    { value: '50+', label: 'Apps Published' },
    { value: '5M+', label: 'Downloads' },
    { value: '7+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
};

export const aboutData = {
  title: 'About Me',
  subtitle: 'Passionate Developer & AI Enthusiast',
  description: `I'm a dedicated Android developer with a deep passion for artificial intelligence and machine learning. My journey began with traditional mobile development, but I quickly realized the transformative potential of AI in creating smarter, more intuitive applications.

Today, I specialize in integrating sophisticated ML models into mobile platforms, from computer vision and natural language processing to predictive analytics and recommendation systems. My work bridges the gap between complex AI research and practical, user-friendly mobile solutions.`,
  highlights: [
    {
      icon: 'Smartphone',
      title: 'Mobile First',
      description: 'Expert in Kotlin, Java, and modern Android architecture patterns',
    },
    {
      icon: 'Brain',
      title: 'AI Integration',
      description: 'Specialized in TensorFlow Lite, ONNX, and on-device ML',
    },
    {
      icon: 'Rocket',
      title: 'Performance',
      description: 'Optimized apps with 99.9% crash-free rate and 4.8+ star ratings',
    },
    {
      icon: 'Users',
      title: 'Leadership',
      description: 'Led teams of 10+ developers across multiple successful projects',
    },
  ],
  funFacts: [
    { icon: 'Coffee', value: '1000+', label: 'Cups of Coffee' },
    { icon: 'Code', value: '50000+', label: 'Lines of Code' },
    { icon: 'Bug', value: '2000+', label: 'Bugs Fixed' },
    { icon: 'Trophy', value: '15+', label: 'Awards Won' },
  ],
};

export const skillsData = {
  title: 'Skills & Expertise',
  subtitle: 'Technologies I Work With',
  categories: [
    {
      name: 'Android Development',
      icon: 'Smartphone',
      skills: [
        { name: 'Kotlin', level: 95, icon: '🔷' },
        { name: 'Java', level: 90, icon: '☕' },
        { name: 'Jetpack Compose', level: 92, icon: '🎨' },
        { name: 'Android SDK', level: 95, icon: '📱' },
        { name: 'Coroutines & Flow', level: 88, icon: '⚡' },
        { name: 'Room & SQLite', level: 90, icon: '🗄️' },
        { name: 'Retrofit & OkHttp', level: 92, icon: '🌐' },
        { name: 'Hilt/Dagger', level: 85, icon: '💉' },
      ],
    },
    {
      name: 'AI & Machine Learning',
      icon: 'Brain',
      skills: [
        { name: 'TensorFlow & TF Lite', level: 90, icon: '🧠' },
        { name: 'PyTorch', level: 85, icon: '🔥' },
        { name: 'Computer Vision', level: 88, icon: '👁️' },
        { name: 'Natural Language Processing', level: 82, icon: '💬' },
        { name: 'OpenCV', level: 85, icon: '📷' },
        { name: 'ONNX Runtime', level: 80, icon: '⚙️' },
        { name: 'Core ML', level: 75, icon: '🍎' },
        { name: 'ML Kit', level: 88, icon: '📦' },
      ],
    },
    {
      name: 'Cloud & Backend',
      icon: 'Cloud',
      skills: [
        { name: 'Firebase', level: 92, icon: '🔥' },
        { name: 'AWS (SageMaker, EC2)', level: 80, icon: '☁️' },
        { name: 'Google Cloud Platform', level: 85, icon: '🌥️' },
        { name: 'REST APIs', level: 95, icon: '🔗' },
        { name: 'GraphQL', level: 82, icon: '◈' },
        { name: 'Node.js', level: 78, icon: '🟢' },
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Docker', level: 75, icon: '🐳' },
      ],
    },
    {
      name: 'Tools & DevOps',
      icon: 'Wrench',
      skills: [
        { name: 'Git & GitHub', level: 95, icon: '🐙' },
        { name: 'CI/CD (GitHub Actions)', level: 88, icon: '🔄' },
        { name: 'Android Studio', level: 98, icon: '🤖' },
        { name: 'Jenkins', level: 80, icon: '🏗️' },
        { name: 'Jira & Confluence', level: 90, icon: '📋' },
        { name: 'Figma', level: 75, icon: '🎭' },
        { name: 'Postman', level: 92, icon: '📮' },
        { name: 'SonarQube', level: 78, icon: '🔍' },
      ],
    },
  ],
};

export const projectsData = {
  title: 'Featured Projects',
  subtitle: 'Some of my recent work',
  projects: [
    {
      id: 1,
      title: 'VisionAI Camera',
      category: 'AI & Computer Vision',
      description: 'A real-time object detection and recognition camera app using TensorFlow Lite. Features include scene classification, object tracking, and AR overlay with 60+ FPS performance on mid-range devices.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'TensorFlow Lite', 'CameraX', 'OpenCV', 'ARCore'],
      features: [
        'Real-time object detection (30+ classes)',
        'Offline AI processing',
        'AR annotations and measurements',
        'Custom model training support',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/visionai',
        github: 'https://github.com/alexchen-dev/visionai-camera',
      },
      stats: {
        downloads: '2.5M+',
        rating: '4.8',
      },
    },
    {
      id: 2,
      title: 'MediChat AI',
      category: 'NLP & Healthcare',
      description: 'An AI-powered health consultation app with natural language understanding. Uses transformer models for symptom analysis and provides personalized health recommendations with medical disclaimer integration.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'BERT', 'PyTorch Mobile', 'Firebase', 'FHIR API'],
      features: [
        'AI symptom checker with 94% accuracy',
        'Secure health data encryption',
        'Doctor appointment booking',
        'Medication reminders with ML',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/medichat',
        github: 'https://github.com/alexchen-dev/medichat-ai',
      },
      stats: {
        downloads: '850K+',
        rating: '4.7',
      },
    },
    {
      id: 3,
      title: 'SmartExpense Pro',
      category: 'FinTech & AI',
      description: 'Intelligent expense tracking with ML-powered receipt scanning, automatic categorization, and predictive budget insights. Integrates with bank APIs for real-time transaction analysis.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'ML Kit', 'Room DB', 'Plaid API', 'WorkManager'],
      features: [
        'OCR receipt scanning with 98% accuracy',
        'Predictive spending analytics',
        'Smart budget recommendations',
        'Bank sync with 12,000+ institutions',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/smartexpense',
        github: 'https://github.com/alexchen-dev/smartexpense-pro',
      },
      stats: {
        downloads: '1.2M+',
        rating: '4.9',
      },
    },
    {
      id: 4,
      title: 'FitnessAI Coach',
      category: 'Health & Fitness AI',
      description: 'Personal AI fitness trainer using pose estimation for real-time workout form correction. Includes personalized workout generation based on user goals and progress tracking.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'PoseNet', 'TensorFlow Lite', 'Health Connect', 'MPAndroidChart'],
      features: [
        'Real-time pose estimation & form correction',
        'AI workout plan generation',
        'Calorie burn prediction',
        'Integration with wearables',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/fitnessai',
        github: 'https://github.com/alexchen-dev/fitnessai-coach',
      },
      stats: {
        downloads: '600K+',
        rating: '4.6',
      },
    },
    {
      id: 5,
      title: 'LanguageLens',
      category: 'NLP & Education',
      description: 'AR-powered language learning app with real-time translation, pronunciation analysis using speech recognition, and adaptive learning paths powered by reinforcement learning.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'ARCore', 'Speech-to-Text', 'Transformer Models', 'ML Kit'],
      features: [
        'AR real-time text translation',
        'Pronunciation scoring with AI',
        'Personalized learning paths',
        'Offline language packs',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/languagelens',
        github: 'https://github.com/alexchen-dev/languagelens',
      },
      stats: {
        downloads: '400K+',
        rating: '4.8',
      },
    },
    {
      id: 6,
      title: 'ShopSmart AI',
      category: 'E-commerce & ML',
      description: 'AI shopping assistant with visual search, price prediction, and personalized recommendations. Uses collaborative filtering and computer vision for enhanced shopping experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['Kotlin', 'Visual Search', 'Recommendation Engine', 'Retrofit', 'Glide'],
      features: [
        'Visual product search',
        'AI price drop predictions',
        'Personalized recommendations',
        'AR virtual try-on',
      ],
      links: {
        demo: 'https://play.google.com/store/apps/shopsmart',
        github: 'https://github.com/alexchen-dev/shopsmart-ai',
      },
      stats: {
        downloads: '750K+',
        rating: '4.7',
      },
    },
  ],
};

export const educationData = {
  title: 'Education & Certifications',
  subtitle: 'Academic background & continuous learning',
  education: [
    {
      degree: 'Master of Science in Computer Science',
      specialization: 'Artificial Intelligence & Machine Learning',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2016 - 2018',
      gpa: '3.9/4.0',
      highlights: [
        'Thesis: "Optimizing Neural Networks for Mobile Deployment"',
        'Graduate Research Assistant - Computer Vision Lab',
        'Published 3 papers in top-tier ML conferences',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      specialization: 'Software Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2012 - 2016',
      gpa: '3.8/4.0',
      highlights: [
        'Magna Cum Laude',
        'Senior Project: Campus Navigation AR App',
        'Teaching Assistant for Mobile Development',
      ],
    },
  ],
  certifications: [
    {
      name: 'Google Certified Android Developer',
      issuer: 'Google',
      date: '2023',
      credential: 'GAD-2023-789456',
      icon: '🤖',
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'Google (DeepLearning.AI)',
      date: '2022',
      credential: 'TF-DEV-2022-123456',
      icon: '🧠',
    },
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-ML-2023-654321',
      icon: '☁️',
    },
    {
      name: 'Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      credential: 'GCP-PCA-2022-987654',
      icon: '🌥️',
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI (Coursera)',
      date: '2021',
      credential: 'DL-SPEC-2021-456789',
      icon: '🔬',
    },
    {
      name: 'Kotlin Coroutines & Flow Masterclass',
      issuer: 'JetBrains Academy',
      date: '2023',
      credential: 'JB-KCF-2023-321654',
      icon: '🔷',
    },
  ],
};

export const experienceData = {
  title: 'Professional Experience',
  subtitle: 'My career journey',
  experiences: [
    {
      role: 'Senior Android Developer & AI Lead',
      company: 'TechVision AI',
      location: 'San Francisco, CA',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Leading the mobile AI team, architecting and developing ML-powered Android applications used by millions of users.',
      achievements: [
        'Built and deployed 8 AI-powered Android apps with 5M+ combined downloads',
        'Reduced model inference time by 60% through quantization and optimization',
        'Led a team of 12 developers across Android, iOS, and ML engineering',
        'Implemented CI/CD pipelines reducing release time by 70%',
        'Mentored junior developers and established best practices',
      ],
      technologies: ['Kotlin', 'TensorFlow Lite', 'Jetpack Compose', 'MLOps'],
    },
    {
      role: 'Android Developer (ML Specialization)',
      company: 'InnovateMobile',
      location: 'Palo Alto, CA',
      period: '2018 - 2021',
      type: 'Full-time',
      description: 'Developed cutting-edge mobile applications with integrated machine learning features for enterprise clients.',
      achievements: [
        'Created real-time document scanner with 99.2% OCR accuracy',
        'Developed predictive maintenance app for manufacturing clients',
        'Integrated on-device NLP for offline voice commands',
        'Contributed to open-source ML libraries for Android',
        'Received "Innovator of the Year" award in 2020',
      ],
      technologies: ['Java', 'Kotlin', 'TensorFlow', 'Core ML', 'OpenCV'],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      period: 'Summer 2017',
      type: 'Internship',
      description: 'Interned with the Google Photos Android team, working on ML-powered photo organization features.',
      achievements: [
        'Developed prototype for smart photo album creation',
        'Implemented face clustering algorithm improvements',
        'Contributed to ML Kit early development',
      ],
      technologies: ['C++', 'Java', 'TensorFlow', 'Android NDK'],
    },
  ],
};

export const contactData = {
  title: 'Get In Touch',
  subtitle: "Let's work together",
  description: "Have a project in mind or want to discuss AI-powered mobile solutions? I'd love to hear from you. Whether it's a full app development, ML integration, or consultation, I'm here to help bring your ideas to life.",
  availability: 'Currently available for freelance projects and full-time opportunities',
  responseTime: 'I typically respond within 24 hours',
  contactMethods: [
    {
      type: 'Email',
      value: 'alex.chen.dev@email.com',
      icon: 'Mail',
      href: 'mailto:alex.chen.dev@email.com',
    },
    {
      type: 'Phone',
      value: '+1 (555) 123-4567',
      icon: 'Phone',
      href: 'tel:+15551234567',
    },
    {
      type: 'Location',
      value: 'San Francisco, CA',
      icon: 'MapPin',
      href: '#',
    },
  ],
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexchen-dev',
      icon: 'Github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alexchen-dev',
      icon: 'Linkedin',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/alexchen_dev',
      icon: 'Twitter',
    },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/alexchen',
      icon: 'Layers',
    },
  ],
};

export const chatbotData = {
  name: 'AlexAI Assistant',
  greeting: "Hello! I'm Alex's AI assistant. I can help you with:",
  capabilities: [
    'Information about Alex\'s experience and skills',
    'Details about specific projects',
    'Scheduling a consultation',
    'Answering technical questions',
    'Providing resume and contact information',
  ],
  quickReplies: [
    'Tell me about your experience',
    'What AI projects have you done?',
    'What technologies do you use?',
    'How can I hire you?',
    'Download your resume',
  ],
  responses: {
    experience: `Alex has 7+ years of experience in Android development and AI integration. He is currently a Senior Android Developer & AI Lead at TechVision AI, where he leads a team of 12 developers. He has built apps with 5M+ combined downloads and specializes in on-device ML, computer vision, and NLP.`,
    projects: `Alex has worked on several exciting AI-powered projects including:\n\n1. **VisionAI Camera** - Real-time object detection with AR (2.5M+ downloads)\n2. **MediChat AI** - AI health consultation app (850K+ downloads)\n3. **SmartExpense Pro** - ML-powered expense tracking (1.2M+ downloads)\n4. **FitnessAI Coach** - Pose estimation for workout form (600K+ downloads)\n\nWould you like details on any specific project?`,
    technologies: `Alex's tech stack includes:\n\n**Android:** Kotlin, Java, Jetpack Compose, Coroutines, Hilt\n**AI/ML:** TensorFlow Lite, PyTorch, ML Kit, OpenCV, ONNX\n**Cloud:** Firebase, AWS SageMaker, Google Cloud Platform\n**Tools:** Git, CI/CD, Docker, Android Studio\n\nHe's always learning new technologies to stay at the cutting edge!`,
    hire: `Alex is currently open to:\n\n• Full-time Senior/Lead positions\n• Freelance projects (min. 3 months)\n• AI/Mobile consulting\n• Technical advisory roles\n\nYou can reach him at alex.chen.dev@email.com or use the contact form on this page. He typically responds within 24 hours!`,
    resume: `You can download Alex's resume by clicking the "Resume" link in the navigation or scrolling to the Resume section. His resume includes his full work history, education, certifications, and technical skills.`,
    default: `Thanks for your message! I'm Alex's AI assistant. I can help you learn about his experience, projects, skills, or how to get in touch. What would you like to know?`,
  },
};

export const servicesData = {
  title: 'Services',
  subtitle: 'What I can help you with',
  services: [
    {
      id: 1,
      title: 'Android App Development',
      description: 'Native Android applications built with Kotlin and modern architecture patterns. Clean, maintainable code with focus on performance.',
      icon: 'Smartphone',
      features: ['Kotlin & Jetpack Compose', 'MVVM Architecture', 'Offline-first Design', 'Material Design 3'],
    },
    {
      id: 2,
      title: 'AI/ML Integration',
      description: 'Integrating machine learning models into mobile apps. From computer vision to NLP, bringing AI capabilities to users devices.',
      icon: 'Brain',
      features: ['TensorFlow Lite', 'On-device Inference', 'Custom Model Training', 'Real-time Processing'],
    },
    {
      id: 3,
      title: 'Mobile Architecture',
      description: 'Designing scalable mobile architectures that grow with your product. Clean code, modular design, and best practices.',
      icon: 'Layers',
      features: ['Clean Architecture', 'Modular Design', 'Dependency Injection', 'CI/CD Pipelines'],
    },
  ],
};

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
