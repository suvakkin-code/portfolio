export interface Project {
  id: 1;
  title: string;
  tagline: string;
  description: string;
  category: 'Hardware';
  featured: boolean;
  tags: string[];
  metrics: string;
  githubUrl: string;
  liveUrl: '';
  details: {
    challenge: '';
    solution: '';
    features: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'experience' | 'education';
  description: string;
  achievements: string[];
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient'
    icon?: string;
  }[];
}

export const portfolioData = {
  personal: {
    name: "S Suvakkin",
    shortName: "zack",
    handle: "suvakkin",
    role: "Student",
    secondaryRole: "Full-Stack & Systems Developer",
    location: "Vellore, India",
    availability: "Available for new opportunities",
    email: "ssuvakkin908@gmail.com",
    github: "https://github.com/suvakkin-code",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    resumeUrl: "#",
    headline: "Building resilient systems and crisp, high-performance web experiences.",
    shortBio: "Software engineer focused on clean architecture, minimal design interfaces, and reliable distributed systems. I turn complex requirements into elegant, maintainable code.",
    aboutParagraphs: [
      "I am a software engineer driven by an obsession with simplicity, performance, and craftsmanship. I believe great software is characterized not by how much you can add, but by how cleanly and reliably it serves its purpose.",
      "My work spans the full spectrum of software delivery—from low-latency backend services and REST/GraphQL APIs to responsive, accessible, and fast web applications. I place deep emphasis on code readability, robust test coverage, and ergonomic user interfaces.",
      "When I am not shipping code, I enjoy dissecting open-source architectures, experimenting with emerging developer tools, and continuously honing my technical toolkit."
    ],
    stats: [
      { label: "Years Experience", value: "0" },
      { label: "Production Apps", value: "1" },
      { label: "GitHub Commits", value: "7" },
      { label: "Code Uptime Focus", value: "99.9%" }
    ]
  },

  skills: [
    {
      category: "Frontend Architecture",
      items: [
        { name: "React / React 19", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Next.js", level: "Proficient" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "State Management (Zustand/Redux)", level: "Advanced" },
        { name: "Web Performance & Core Web Vitals", level: "Advanced" },
        { name: "HTML5 / Semantic Accessible Web", level: "Advanced" }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js / Express", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "PostgreSQL & Prisma", level: "Proficient" },
        { name: "Redis Caching & PubSub", level: "Proficient" },
        { name: "WebSockets & Realtime Sync", level: "Proficient" },
        { name: "Python / FastAPI", level: "Intermediate" }
      ]
    },
    {
      category: "Cloud, DevOps & Tooling",
      items: [
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "Git & GitHub CI/CD Actions", level: "Advanced" },
        { name: "Linux & Bash Scripting", level: "Proficient" },
        { name: "AWS (S3, EC2, Lambda basics)", level: "Intermediate" },
        { name: "Vite, Rollup & Modern Bundlers", level: "Advanced" },
        { name: "Vitest / Jest Testing", level: "Proficient" }
      ]
    },
    {
      category: "Engineering Principles",
      items: [
        { name: "Clean Architecture & SOLID", level: "Advanced" },
        { name: "API Design & Versioning", level: "Advanced" },
        { name: "Test-Driven Development (TDD)", level: "Proficient" },
        { name: "Microservices & Event-Driven Flows", level: "Proficient" },
        { name: "Database Schema Optimization", level: "Proficient" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "kiteflow",
      title: "KiteFlow",
      tagline: "High-throughput asynchronous job queue and distributed orchestration engine.",
      description: "An event-driven task queue system built to process background jobs with resilient retry backoffs, dead-letter queues, and real-time visual telemetry.",
      category: "Systems / Cloud",
      featured: true,
      tags: ["TypeScript", "Node.js", "Redis", "React", "WebSockets", "Tailwind CSS"],
      metrics: "Processes 10k+ concurrent jobs/sec with sub-millisecond scheduling latency",
      githubUrl: "https://github.com/suvakkin/kiteflow",
      liveUrl: "https://kiteflow-demo.vercel.app",
      details: {
        challenge: "Handling spiky ingestion rates across asynchronous workers without memory leaks or message loss during node failure.",
        solution: "Implemented an atomic Redis Lua script concurrency manager with heartbeats, worker pooling, and an SSE-based real-time dashboard.",
        features: [
          "Real-time node telemetry and queue throughput analytics",
          "Automated exponential backoff and dead-letter queue re-drive",
          "Interactive browser UI for inspecting payload stacktraces",
          "Zero-dependency lightweight client SDK"
        ]
      }
    },
    {
      id: "note-studio",
      title: "Minimalist Note Studio",
      tagline: "Local-first markdown knowledge graph with instant search and zero distraction.",
      description: "A keyboard-first note-taking application designed for engineers. Features bidirectional wikilinks, local-only IndexedDB storage, and sub-10ms search.",
      category: "Frontend",
      featured: true,
      tags: ["React", "TypeScript", "Tailwind CSS", "IndexedDB", "Web Workers", "Canvas"],
      metrics: "Instant sub-10ms full-text search across 5,000+ local markdown notes",
      githubUrl: "https://github.com/suvakkin/note-studio",
      liveUrl: "https://notestudio-demo.vercel.app",
      details: {
        challenge: "Maintaining a fluid 60fps interactive knowledge graph while indexing thousands of markdown documents on the client thread.",
        solution: "Offloaded tokenizer and inverted-index generation to a Dedicated Web Worker, paired with high-performance HTML5 Canvas rendering.",
        features: [
          "Complete local-first architecture with end-to-end user privacy",
          "Interactive 2D physics graph visualization of document links",
          "Vim-style navigation and custom command palette",
          "Clean export to PDF, HTML, and raw Markdown bundles"
        ]
      }
    },
    {
      id: "doculens-ai",
      title: "DocuLens AI",
      tagline: "Semantic retrieval engine for technical manuals and API documentation.",
      description: "An intelligent query interface that parses complex engineering documents, generates vector embeddings, and provides hallucination-free answers with exact citations.",
      category: "AI & Tools",
      featured: true,
      tags: ["Python", "FastAPI", "React", "TypeScript", "Vector DB", "Tailwind CSS"],
      metrics: "94% citation accuracy on multi-page engineering whitepapers",
      githubUrl: "https://github.com/suvakkin/doculens-ai",
      liveUrl: "https://doculens-demo.vercel.app",
      details: {
        challenge: "Extracting tabular data and cross-referencing footnotes in technical PDF documentation without context fragmentation.",
        solution: "Developed an adaptive chunking pipeline that respects header hierarchies and keeps tables intact during vector ingestion.",
        features: [
          "Side-by-side document preview with real-time passage highlight",
          "Semantic hybrid search blending BM25 lexical with dense embeddings",
          "Streaming markdown responses with interactive code blocks",
          "Extensible REST endpoints for automated CI/CD doc indexing"
        ]
      }
    },
    {
      id: "pulse-metrics",
      title: "PulseMetrics",
      tagline: "Minimalist cloud observability dashboard for microservices and API gateways.",
      description: "A clean, unbloated monitoring solution providing P95/P99 latency tracking, error tracking, and custom threshold alerting for modern cloud deployments.",
      category: "Full-Stack",
      featured: false,
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS"],
      metrics: "Reduced monitoring overhead by 70% compared to legacy monitoring agents",
      githubUrl: "https://github.com/suvakkin/pulse-metrics",
      liveUrl: "https://pulse-metrics.vercel.app",
      details: {
        challenge: "Storing and charting millions of time-series data points efficiently on lightweight serverless infrastructure.",
        solution: "Utilized PostgreSQL time-partitioned hypertables and client-side downsampling algorithms for butter-smooth chart interactions.",
        features: [
          "Configurable webhooks for Slack, Discord, and PagerDuty",
          "P50, P90, P99 latency distribution histograms",
          "Automated health-check pings across multi-region endpoints",
          "Zero-config setup with a single Docker Compose recipe"
        ]
      }
    }
  ] as unknown as Project[],

  timeline: [
    {
      id: "exp-1",
      role: "Software Engineer",
      company: "Aura Systems",
      location: "Bengaluru, India",
      period: "2023 — Present",
      type: "experience",
      description: "Spearheading full-stack development of high-scale customer web applications and internal orchestration services.",
      achievements: [
        "Architected and deployed a modular frontend design system, reducing design-to-production turnaround by 40%.",
        "Optimized frontend bundle sizes and assets, slashing Largest Contentful Paint (LCP) from 2.8s to 1.1s.",
        "Collaborated with platform engineers to design resilient RESTful APIs handling over 2M requests daily."
      ],
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"]
    },
    {
      id: "exp-2",
      role: "Associate Software Developer",
      company: "Nexus Digital Innovations",
      location: "Bengaluru, India",
      period: "2022 — 2023",
      type: "experience",
      description: "Developed core web features, client dashboards, and automated integration test suites for client-facing software.",
      achievements: [
        "Constructed reusable data grid components with virtual scrolling for rendering 50,000+ records seamlessly.",
        "Introduced automated CI pipelines with GitHub Actions, eliminating manual release deployment steps.",
        "Authored comprehensive API documentation and developer guides used by partner teams."
      ],
      technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Jest", "Git"]
    },
    {
      id: "edu-1",
      role: "B.E. in Computer Science & Engineering",
      company: "Anna University Affiliate",
      location: "India",
      period: "2018 — 2022",
      type: "education",
      description: "Graduated with honors. Deep coursework in Algorithms, Data Structures, Database Systems, Computer Networks, and Software Engineering.",
      achievements: [
        "Published capstone project on distributed fault-tolerant storage algorithms.",
        "Active member of the university coding club; organized technical symposiums and hackathons."
      ]
    }
  ]
};
