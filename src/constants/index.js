export const myProjects = [
  {
    id: 1,
    title: "IntelliHire",
    description:
      "IntelliHire is an AI-powered interview intelligence platform that automates interview execution and evaluates candidates using multimodal behavioral signals to produce structured, recruiter-ready decision reports.",
    subDescription: [
      "It runs interviews in a guided flow and captures candidate responses through video, audio, and text.",
      "It analyzes eye gaze, facial emotions, and speech patterns to estimate focus, confidence, and engagement.",
      "The platform converts raw signals into scoring metrics and insights that are easy for recruiters to understand.",
      "It is designed as modular services so each AI component can scale independently.",
      "The final output is a clear evaluation report with strengths, concerns, and overall fit.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql-icon.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "SETU",
    description:
      "SETU is a FHIR R4–compliant terminology interoperability microservice that ingests NAMASTE codes and synchronizes with WHO ICD-11 (TM2 & Biomedicine) to enable secure dual-coding, clinical search, and standardized mapping for Ayush EMR systems.",
    subDescription: [
      "SETU bridges traditional medicine and modern clinical coding by harmonizing NAMASTE terminologies with WHO ICD-11 Traditional Medicine Module 2 (TM2) and Biomedicine.",
      "It offers fast auto-complete and lookup services that allow clinicians to record diagnoses using standardized codes instead of free text.",
      "The microservice supports translation operations to generate accurate mappings across coding systems, enabling double-coding for interoperability and insurance-ready reporting.",
      "SETU exposes secure, OAuth 2.0–protected FHIR endpoints for uploading and validating Bundles, ensuring auditability, version tracking, and consent-ready metadata.",
      "Designed as a lightweight, scalable microservice, SETU integrates seamlessly with any hospital EMR while keeping patient clinical data within the hospital’s environment.",
    ],
    href: "https://github.com/duxstein/SETU.git",
    logo: "",
    
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescriptlang-icon.svg",
      },
      {
        id: 2,
        name: "Python",
        path: "/assets/logos/python-icon.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql-icon.svg",
      },
      {
        id: 4,
        name: "FastAPI",
        path: "/assets/logos/FastAPI.svg",
      },
      {
        id: 4,
        name: "Redis",
        path: "/assets/logos/redis-icon.svg",
      },
    ],
  },
  {
    id: 3,
    title: "SynapSys",
    description:
      "SynapSys is an enterprise-grade AI Agent Orchestration Framework that enables developers to define, execute, and monitor intelligent workflows at scale using distributed task execution, modular tools, and full observability.",
    subDescription: [
      "Designed task workflows as DAGs / State Machines with retries, timeouts, and deterministic execution",
      "Built a scalable runtime using Kafka-based orchestration, distributed executors, and pluggable connector architecture",
      "Integrated Memory + Guardrails to support safe, context-aware agent execution with auditability",
      "Implemented complete observability stack (metrics, logs, tracing) using Prometheus, Grafana, Jaeger & Elasticsearch",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-icon.svg",
      },
      {
        id: 2,
        name: "OpenVINO",
        path: "/assets/logos/OpenVINO_logo.svg",
      },
      {
        id: 3,
        name: "Apache Kafka",
        path: "/assets/logos/apache_kafka-icon.svg",
      },
      {
        id: 4,
        name: "Prometheus",
        path: "/assets/logos/prometheusio-icon.svg",
      },
    ],
  },
  {
    id: 4,
    title: "BlockVault",
    description:
      "BlockVault is a decentralized file-sharing web application that uses blockchain technology and IPFS (InterPlanetary File System) to ensure secure, tamper-proof, and permission-based file transfers.",
    subDescription: [
      "The platform leverages the distributed nature of IPFS for file storage and Ethereum smart contracts to control access.",
      "Users can upload files, assign access to specific Ethereum addresses, and manage everything through a secure interface powered by MetaMask wallet authentication.",
      "The backend, built with Node.js and Express, connects the frontend (React.js) with IPFS and the Ethereum blockchain.",
      "It handles file uploads, communicates with smart contracts, and verifies download permissions.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/",
    tags: [
      {
        id: 1,
        name: "TypeScript",
        path: "/assets/logos/typescriptlang-icon.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql-icon.svg",
      },
      {
        id: 3,
        name: "Solidity",
        path: "/assets/logos/Solidity_logo.svg",
      },
      {
        id: 4,
        name: "Ethereum",
        path: "/assets/logos/ethereum-icon.svg",
      },
    ],
  },
  {
    id: 5,
    title: "SketchBoard",
    description:
      "SketchBoard is an open-source, Excalidraw-inspired collaborative whiteboard that enables users to sketch, diagram, and brainstorm in real-time with an offline-first, privacy-focused architecture.",
    subDescription: [
      "Built a high-performance canvas-based drawing engine supporting shapes, freehand strokes, text, selection, and transformations.",
      "Implemented real-time multi-user collaboration using CRDTs (Yjs) and WebSockets for conflict-free sync.",
      "Designed an offline-first persistence layer with IndexedDB, ensuring seamless work without internet connectivity.",
      "Developed scalable backend services with Node.js/Fastify, handling sessions, document sync, and shareable links.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/",
    tags: [
      {
        id: 1,
        name: "Yjs",
        path: "/assets/logos/yjs.png",
      },
      {
        id: 2,
        name: "Redis",
        path: "/assets/logos/redis-icon.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql-icon.svg",
      },
      {
        id: 4,
        name: "React",
        path: "/assets/logos/react.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Nature Snoop",
    description:
      "Nature Snoop is a plant identification web app that uses AI to recognize plants from uploaded or captured photos and provide detailed care instructions.",
    subDescription: [
      "Built with React (TypeScript), Vite, Tailwind CSS, shadcn/ui, and Framer Motion, it delivers a fast, responsive, and modern user experience.",
      "The app integrates Google’s Gemini AI API through Supabase Edge Functions to return plant names, descriptions, care details, and confidence levels.",
      "Users can create accounts with Supabase Auth, track their identification history, and manage past searches through a clean, scrollable interface.",
      "With robust error handling, real-time feedback, and a mobile-friendly design, Nature Snoop makes plant discovery simple, reliable, and engaging for enthusiasts of all levels.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/nature_snoop.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "Supabase",
        path: "/assets/logos/supabase.svg",
      },
      {
        id: 4,
        name: "Redis",
        path: "/assets/logos/redis-icon.svg",
      },
      {
        id: 5,
        name: "Google Gemini",
        path: "/assets/logos/google-gemini.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.link/27z3ng",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/theabhishhekmishra",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/duxstein",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Freelance Developer",
    date: "2022-2024",
    contents: [
      "Designed and delivered backend systems for client projects with focus on scalability, performance, and clean architecture.",
      "Collaborated with international and local clients, ensuring clear communication, timely delivery, and high-quality outcomes.",
      "Built and optimized responsive websites, applications, and digital tools that improved user experience and client business performance.",
      "Applied problem-solving, research, and modern technologies to create innovative, scalable, and cost-efficient solutions.",
      "Maintained strong client relationships by providing ongoing support, updates, and enhancements beyond initial project delivery.",
    ],
  },
  {
    title: "Student Developer",
    date: "2025-Present",
    contents: [
      "Delivered scalable backend systems and APIs for web-based products with a focus on performance and maintainability.",
      "Learned and applied modern frameworks, libraries, and tools through hands-on project building and experimentation.",
      "Architected databases, authentication flows, and service logic tailored to real client requirements and production workloads.",
      "Engaged in continuous self-learning by researching best practices, system design challenges, and implementing real-world solutions.",
      "Built a strong foundation in system architecture by designing and developing backend-driven projects beyond academic requirements, driven by curiosity and passion for scalable systems.",
    ],
  },

];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
