// Global GitHub username - change this to update all GitHub references
export const githubUsername = "";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "GitHub", href: "#github" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    href: `https://github.com/${githubUsername}`,
    icon: "Github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ben-schnitzer-6098b3418/",
    icon: "Linkedin",
  },
];

export const heroData = {
  name: "Ben Schnitzer",
  tagline:
    "Senior AI Engineer | AI Agent, RAG Systems, LangGraph, Open AI, Claude",
  description:
    "I build AI-powered applications using LLMs, AI agents, RAG, and modern web technologies. Let's create intelligent solutions that automate processes and deliver measurable results.",
  availability: "Available for freelance work",
  avatar: "/images/avatar/about-avatar.png",
  resumeUrl:
    "https://drive.google.com/file/d/1-Eg9EQNBwJEFq6e4oD8dI3VSsMfVmBMU/view?usp=drive_link",
  badges: [
    { icon: "Code2", label: "Full Stack" },
    { icon: "Terminal", label: "Clean Code" },
  ],
};

export const aboutData = {
  title: "Ben Schnitzer",
  avatar: "/images/avatar/about-avatar.png",
  description: [
    "I'm a Senior AI Engineer specializing in building AI-powered applications, AI agents, and intelligent automation solutions that help businesses save time, improve workflows, and make better use of their data.",
    "My experience includes designing and developing AI-powered SaaS platforms, agentic workflows, knowledge management systems, internal copilots, customer support assistants, and document processing solutions. I work across the full AI product lifecycle, from architecture and model selection to implementation, deployment, optimization, and long-term maintenance using technologies like OpenAI, Claude, LangGraph, LangChain, Python, FastAPI, React, Next.js, and AWS.",
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "30+", label: "Happy Clients" },
  ],
  services: [
    {
      icon: "Bot",
      title: "AI Agents & Multi-Agent Systems",
      description:
        "Building intelligent AI agents and multi-agent workflows using OpenAI, Claude, LangGraph, LangChain, MCP integrations, and tool calling.",
    },
    {
      icon: "Database",
      title: "RAG & Knowledge Systems",
      description:
        "Developing Retrieval-Augmented Generation systems with vector databases, embeddings, semantic search, and private business knowledge bases.",
    },
    {
      icon: "Workflow",
      title: "AI Automation",
      description:
        "Creating AI-powered automation solutions that connect workflows, APIs, CRMs, and business systems to reduce repetitive tasks.",
    },
    {
      icon: "Code2",
      title: "Full-Stack AI Development",
      description:
        "Building scalable AI applications using Python, FastAPI, React, Next.js, Node.js, PostgreSQL, Supabase, and AWS.",
    },
  ],
};

export const educationData = {
  title: "Education",
  education: [
    {
      degree: "Bachelor Degree Computer Science",
      school: "Aix-Marseille University",
      location: "Marseille",
      period: "4 years",
      achievements: [
        "Studied computer science fundamentals, software engineering, and artificial intelligence.",
        "Developed strong foundations in programming, algorithms, databases, and modern software development.",
        "Focused on machine learning, AI technologies, and building scalable software solutions.",
      ],
    },
  ],
  certifications: [],
};

export const navbarData = {
  logo: {
    text: "BS",
    fullText: "Ben Schnitzer",
  },
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "GitHub", href: "#github" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
  ],
  ctaButton: {
    text: "Let's Talk",
    href: "#contact",
  },
};

export const experienceData = [
  {
    title: "Senior AI Engineer",
    company: "Capgemini",
    period: "September 2024 - April 2026",
    description: [
      "Designed and deployed enterprise-grade AI SaaS platforms using Large Language Models including OpenAI and Claude.",
      "Built multi-agent systems and AI orchestration pipelines using LangGraph and LangChain.",
      "Architected RAG systems for enterprise knowledge bases, internal copilots, and intelligent assistants.",
      "Integrated AI solutions with CRM, ERP, APIs, and enterprise data platforms.",
      "Led production deployment, scalability improvements, monitoring, and AI cost optimization.",
    ],
    skills: [
      "OpenAI",
      "Claude",
      "LangGraph",
      "LangChain",
      "RAG",
      "Python",
      "FastAPI",
      "AWS",
    ],
  },

  {
    title: "AI Engineer",
    company: "Atos",
    period: "January 2023 - September 2024",
    description: [
      "Developed AI chatbots, internal copilots, and automation systems for enterprise clients.",
      "Built Retrieval-Augmented Generation pipelines using vector databases and semantic search.",
      "Implemented prompt engineering, tool calling, and LLM workflow automation.",
      "Integrated OpenAI APIs into enterprise software ecosystems.",
      "Delivered document intelligence and AI-powered knowledge retrieval solutions.",
    ],
    skills: [
      "AI Agents",
      "RAG",
      "LLMs",
      "OpenAI API",
      "Vector Databases",
      "NLP",
      "Automation",
    ],
  },

  {
    title: "Full Stack AI Developer",
    company: "Sopra Steria",
    period: "July 2022 - December 2022",
    description: [
      "Built AI-powered SaaS applications using OpenAI APIs and modern web technologies.",
      "Developed full-stack applications with React, Next.js, Node.js, and PostgreSQL.",
      "Implemented authentication systems, dashboards, and third-party API integrations.",
      "Deployed scalable applications using AWS and Vercel.",
      "Developed early AI automation workflows and LLM-based solutions.",
    ],
    skills: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
  },
];

export const projectsData = [
  {
    title: "AI Children’s Storytelling Platform",
    description:
      "AI-powered storytelling platform that creates personalized children’s stories, generates custom illustrations, and delivers engaging voice-narrated experiences.",
    image: "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/pro1.png",
    tags: ["LangChain", "OpenAI", "RAG", "Next.js", "Python", "FastAPI", "AWS"],
    demoUrl: "https://app.talemint.com/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "AI Lead Qualification & CRM Automation",
    description:
      "AI-powered sales automation system that captures incoming leads, analyzes customer intent, scores opportunities, updates CRM records, and automatically schedules qualified meetings.",
    image:
      "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/Ben/pro2.jpg",
    tags: [
      "n8n",
      "OpenAI",
      "HubSpot",
      "CRM",
      "Google Calendar",
      "Gmail APIs",
      "Slack",
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Calling Bees",
    description:
      "AI voice calling platform that lets businesses deploy AI phone agents for inbound and outbound calls, automate lead qualification, book meetings, connect CRM and calendars, and analyze conversations with transcripts and sentiment insights.",
    image:
      "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/Ben/pro3.jpg", // Replace with a screenshot if preferred
    tags: [
      "Voice AI",
      "LLM",
      "Speech-to-Text",
      "Text-to-Speech",
      "CRM",
      "Calendars",
      "Twilio",
      "AI Agents",
    ],
    demoUrl: "https://callingbees.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "DropBot AI Chatbot Platform",
    description:
      "AI-powered website chatbot platform that helps businesses automate customer conversations, answer questions instantly, capture leads, and provide 24/7 support using custom-trained AI agents.",
    image:
      "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/Ben/pro4.jpg",
    tags: [
      "AI Chatbot",
      "OpenAI",
      "RAG",
      "LLM",
      "Knowledge Base",
      "Next.js",
      "TypeScript",
      "SaaS",
    ],
    demoUrl: "https://dropbot.me/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Course Generation & Presentation Automation Platform",
    description:
      "AI-powered learning platform that transforms documents, PDFs, and knowledge bases into structured courses with automated lesson plans, modules, and presentation slides. Built with RAG and LLM workflows, the system enables administrators to generate, review, and publish scalable educational content through an intelligent web-based platform.",
    image:
      "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/Ben/pro5.jpg",
    tags: [
      "AI Engineer",
      "RAG",
      "OpenAI",
      "LangChain",
      "LLM",
      "Next.js",
      "Python",
      "FastAPI",
      "AWS",
    ],
    demoUrl: "https://iamglobalalliance.com/",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "AI Weather Report Automation Workflow",
    description:
      "AI-powered automation workflow that generates personalized weather reports using real-time weather APIs and LLM agents. Built with n8n, LangChain, and OpenAI, the system understands user requests, retrieves live weather data, creates AI-generated summaries, and automatically delivers reports through email.",
    image: "https://l9kudpijgzio1vvu.public.blob.vercel-storage.com/Ben/pro6.jpg",
    tags: ["n8n","OpenAI","LangChain","AI Agents","GPT-4","API Integration","Gmail Automation","Workflow Automation"],
    demoUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export const skillsData = {
  categories: [
    {
      title: "AI Engineering",
      skills: [
        {
          name: "OpenAI API",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg",
        },
        {
          name: "Claude",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg",
        },
        {
          name: "LangChain",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "LangGraph",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "RAG Systems",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        },
      ],
    },

    {
      title: "Backend & AI Infrastructure",
      skills: [
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
      ],
    },

    {
      title: "Cloud & DevOps",
      skills: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "CI/CD",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Git",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
      ],
    },
  ],

  additionalTechnologies: [
    {
      name: "LangChain",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "LangGraph",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "VectorDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
    },
    {
      name: "MCP Integrations",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "NLP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Machine Learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
      name: "n8n",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Make.com",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
  ],
};

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
};

export const contactData = {
  email: "benschnitzer787@gmail.com",
  phone: "+xxx xxx xxx xxxx",
  location: "France",
  contactInfo: [
    {
      icon: "Mail",
      label: "Email",
      value: "benschnitzer787@gmail.com",
      href: "mailto:benschnitzer787@gmail.com",
    },
    { icon: "MapPin", label: "Location", value: "France", href: "#" },
  ],
};

export const footerData = {
  name: "Ben Schnitzer",
  year: new Date().getFullYear(),
};

export const chatbotData = {
  welcomeMessage:
    "👋 Hi! I'm Ben's AI assistant. Ask me anything about his AI expertise, projects, experience, or how to get in touch!",
  botName: "Ben's Assistant",
  botResponses: {
    hello:
      "Hi there! 👋 Welcome to Ben's AI portfolio. How can I help you today?",
    hi: "Hello! 👋 I'm Ben's virtual assistant. Ask me about his AI skills, projects, experience, or services!",
    hey: "Hey! 👋 What would you like to know about Ben?",

    skills: `Ben specializes in AI Engineering, AI Agents, Multi-Agent Systems, Large Language Models (LLMs), OpenAI, Anthropic Claude, LangChain, LangGraph, RAG systems, MCP integrations, Python, FastAPI, React, Next.js, and cloud technologies. 🤖`,

    experience: `Ben is a Senior AI Engineer with experience building production-ready AI solutions, enterprise copilots, RAG platforms, AI automation systems, and intelligent SaaS applications for businesses. 🚀`,

    projects: `Ben has built AI-powered platforms including personalized children's story generation systems, AI course creator platforms using RAG and LLMs, document intelligence solutions, and automation workflows. Check out the Projects section! 🛠️`,

    contact: `You can reach Ben via email at ${contactData.email} or through the contact form on this page. 📧`,

    email: `Ben's email is ${contactData.email}. Feel free to reach out for AI projects, consulting, or collaboration opportunities! 📧`,

    hire: "Ben is available for AI engineering projects, consulting, freelance work, and full-time opportunities. Contact him to discuss your AI solution! 💼",

    resume:
      "You can download Ben's resume from the Download Resume button in the hero section! 📄",

    about: `Ben is a Senior AI Engineer based in Marseille, France, specializing in building scalable AI applications, intelligent automation systems, and LLM-powered products. 🌍`,

    github: `You can check out Ben's GitHub profile for his latest AI projects and engineering work! 🐙`,

    linkedin: `Connect with Ben on LinkedIn for professional networking and AI engineering opportunities! 💼`,

    location: `Ben is based in Marseille, France and available for remote AI engineering projects worldwide! 🌍`,

    availability:
      "Ben is available for AI development projects, consulting, and opportunities involving LLM applications, AI agents, RAG systems, and automation solutions.",

    "ai agents": `Ben builds AI agent systems using OpenAI, Claude, LangGraph, and LangChain to automate workflows, connect business data, and create intelligent applications. 🤖`,

    rag: `Ben develops Retrieval-Augmented Generation (RAG) systems using vector databases, embeddings, semantic search, and private knowledge sources to create intelligent AI assistants. 📚`,

    default:
      "I'm not sure about that. Try asking about Ben's skills, AI experience, projects, availability, or contact information! 🤔",
  },

  quickReplies: [
    "Tell me about your AI skills",
    "View your AI projects",
    "How to contact you?",
    "Are you available for AI work?",
  ],
};

export const verificationData = {
  // Multiple verification sets for daily rotation
  verificationSets: [
    {
      instruction:
        "Select all 4 images containing a computer to verify you're human",
      correctImageIndices: [0, 2, 4, 7],
      images: [
        { url: "/images/verification/computer1.jpg", alt: "Laptop computer" },
        { url: "/images/verification/store.jpg", alt: "Store interior" },
        { url: "/images/verification/computer2.jpg", alt: "Desktop computer" },
        { url: "/images/verification/shoes.jpg", alt: "Forest trees" },
        { url: "/images/verification/computer3.jpg", alt: "Computer setup" },
        { url: "/images/verification/street.jpg", alt: "City street" },
        { url: "/images/verification/coffee.jpg", alt: "Ocean beach" },
        {
          url: "/images/verification/computer4.jpg",
          alt: "Coding on computer",
        },
        { url: "/images/verification/office.jpg", alt: "Office space" },
      ],
    },
    {
      instruction:
        "Select all 4 images containing a car to verify you're human",
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
      instruction:
        "Select all 4 images containing a tree to verify you're human",
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
      instruction:
        "Select all 4 images containing a beach to verify you're human",
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
      instruction:
        "Select all 4 images containing a building to verify you're human",
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
  getDailyVerification: function () {
    const today = new Date();
    const dayOfYear = Math.floor(
      (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
        86400000,
    );
    const setIndex = dayOfYear % this.verificationSets.length;
    return this.verificationSets[setIndex];
  },

  // Function to get verification key for today (for validation)
  getDailyKey: function () {
    const today = new Date();
    return today.toISOString().split("T")[0]; // YYYY-MM-DD format
  },
};
