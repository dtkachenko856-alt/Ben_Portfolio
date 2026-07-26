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
      title: "AI Engineering & LLM Applications",
      skills: [
        {
          name: "OpenAI API",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAjVBMVEX////Nzf+Vlf9iYv82Nv8ODv/09P+IiP8AAP+amv/39/89Pf/u7v9zc/++vv+1tf9LS/84OP8ZGf/X1//Dw//q6v9WVv+Pj/8wMP/d3f+qqv/Q0P+hof9cXP/Gxv/Kyv+wsP9mZv/f3/9QUP9HR//j4/8iIv97e/8pKf+urv+EhP9ubv9/f/+fn/+MjP+3KsfjAAABeklEQVR4AY3TVXbDMBRF0Ws+URjMDnNp/sPrklTG7G/BQ30QhFGcJHEUBvpBmvFBluqLHl/09JHp803f6M2AHw30wuAxHAXjCe+MvCnObKD5IteiKLMKZ/o5PlMDNJKR2g+RpnidASa5OmBpUpxUUoZTmZLZSusZJIA2WJkknIW0ZZfuoUjVQCkcKcBa66Atx47ZWqtMGp50wgoUYv/UAXegJ62AjY5KsEJF7oM59kAtnc/SEC5z7bEixQDHKyjiGPjvjn0YCyv2L81HoNLGAHT5WmPw9Un8gZ7gqjb3B47cCUZzfyDG0gjinU8pOLIUXI/+iwhrorqCe+nhQaqJBPXIBxliJTraf1lJ4ePRHpio8GkGWBfNttJToIWLIdJEK6xAwtETPCo/2FLviKQRzluzxsI5tVoklOaCk723OzUR0LhHMI946YeBCWQ1ADvzebSnOKeH7DBSvqqVJzhTeYZ3h816dA+euXXsJTPlm6m5ffUc88/y/rr+z3aBIukX/4qTAAAAAElFTkSuQmCC",
        },
        {
          name: "Anthropic Claude",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/anthropic.svg",
        },
        {
          name: "LangChain",
          icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langchain-color.png",
        },
        {
          name: "LangGraph",
          icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/langgraph-color.png",
        },
        {
          name: "RAG Architecture",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        },
        {
          name: "AI Agents",
          icon: "data:image/png;base64,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",
        },
        {
          name: "Prompt Engineering",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "LLM Fine-tuning",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
      ],
    },

    {
      title: "AI Data & Knowledge Systems",
      skills: [
        {
          name: "Vector Databases",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        },
        {
          name: "Pinecone",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAWlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxdubm5iYmIGBgZYWFjGxsb+/v7y8vIwMDDf39/o6Og+Pj6MjIyYmJi5ubl8fHzU1NSoqKgPDw8iIiJISEgAAACoxhMQAAAAHnRSTlMCMq/y/8VM3////////////////////////////2p0PrsZAAABLUlEQVR4AZXTB3KDMBQEUBLWtnr76lLuf81YyRR3j5cOD1Ddtq/vHU+yH47n5we8yOm4fQMvxbbjdTZ8ChgX8gWQShurXgDndQieHgKpYkrkKPBcHgJWTW0OpB0j6g+AC0EPQDKJErLod0B5UQswGNCLNeoOUOlusBIyA/fBzlugUgeoWmOSFIV7dw0kDwu4yEML4szbTRmUDXFKACI45YA+b8C0vuZ1z/0X3/mbQsqmHVvH8bcnyppdAZAmACOG9fOeQzDiGsg5gLkqEeUZihDmNeiZM0exhBbUuqq37cBq062D+yGGBOMON2B4k92qhMSMIyncApatjx0r5Ju/B+hUYqem4EQ2fjwZUclkqaq3ST4B6wuSDcc+Gfb7O3B4N/WOJ7zI/rO9FKef7Rfk1R6JpAGrzgAAAABJRU5ErkJggg=="
        },
        {
          name: "ChromaDB",
          icon: "data:image/png;base64,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"
        },
        {
          name: "FAISS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Semantic Search",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
        },
        {
          name: "Embeddings",
          icon: "data:image/png;base64,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",
        },
        {
          name: "NLP",
          icon: "data:image/png;base64,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",
        },
      ],
    },

    {
      title: "Backend & API Development",
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
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "NestJS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
        },
        {
          name: "REST APIs",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "GraphQL",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/graphql.svg",
        },
        {
          name: "WebSockets",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
    },

    {
      title: "Frontend & Full Stack",
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
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Shadcn UI",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/shadcnui.svg",
        },
        {
          name: "Redux",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redux.svg",
        },
        {
          name: "React Query",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/reactquery.svg",
        },
      ],
    },

    {
      title: "Databases & Storage",
      skills: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/supabase.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        {
          name: "Firebase",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/firebase.svg",
        },
        {
          name: "Prisma ORM",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg",
        },
      ],
    },

    {
      title: "Cloud Infrastructure & DevOps",
      skills: [
        {
          name: "AWS",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Azure",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftazure.svg",
        },
        {
          name: "Docker",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Kubernetes",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        },
        {
          name: "GitHub Actions",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg",
        },
        {
          name: "Linux",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg",
        },
      ],
    },

    {
      title: "AI Automation & Integrations",
      skills: [
        {
          name: "MCP Integrations",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "n8n Automation",
          icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAMFBMVEVHcEzrS3HqS3HrS3HqSnHsSnPqS3HqS3HqS3HrS3HrS3HrS3HqS3HqS3HqS3HqS3GTHBDKAAAAEHRSTlMAK3xmEgVB8ea1HYfXyFadigmG4wAAAJlJREFUeAFjGAggZILECWWrqFwA5y3erXM14wGMx/Jn5owJEkCu9DeGuE8L2Ppc/CrPLmDgunMj4cWNCUy3GFjfb2Rg4DvG2dnP1jldgYGBNQDIPcjZ28/We12BgRVoBFDx9YQXdy5wX+HSTwXxpf8xxP0GGrX2ZDPCESxzrov+DEDwF08XmInEZVjb04fsARZrARQPBdA0uACGYDDdpek7UQAAAABJRU5ErkJggg==",
        },
        {
          name: "Make.com",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/make.svg",
        },
        {
          name: "Zapier",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg",
        },
        {
          name: "Stripe API",
          icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/stripe.svg",
        },
        {
          name: "CRM Integrations",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
      ],
    },
  ],

 additionalTechnologies: [],
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
