export interface Experience {
  branch: string;
  color: string;
  title: string;
  context: string;
  period?: string;
  current: boolean;
  stack: string[];
  bullets: string[];
}

export interface ExperienceGroup {
  org: string;
  role: string;
  period: string;
  entries: Experience[];
}

export interface Repo {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  url?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  note?: string;
}

export const PROFILE = {
  name: 'Akshay Agrawal',
  role: 'Full-Stack Software Developer',
  tagline:
    'I build public-sector platforms and AI assistants — Angular and Vaadin in the browser, Spring Boot and Node.js behind it, and everything between the UI and the message queue.',
  location: 'Frankfurt am Main, Germany',
  education: 'MSc Computer Science',
  github: 'https://github.com/akshay2agrawal',
  linkedin: 'https://www.linkedin.com/in/akshay2agrawal/',
  email: 'akshay2agrawal@gmail.com',
  cv: 'Akshay_Agrawal_CV.pdf',
  stats: [
    { value: '2+', label: 'years in production teams' },
    { value: '4', label: 'products shipped to users' },
    { value: '2', label: 'AI assistants in production' },
    { value: 'MSc', label: 'Computer Science' },
  ],
};

export const EXPERIENCE_GROUPS: ExperienceGroup[] = [
  {
    org: 'PCT digital GmbH, Kiel',
    role: 'Full-Stack Software Developer',
    period: 'Sep 2024 — present',
    entries: [
      {
        branch: 'feature/identity-platform',
        color: 'var(--b-teal)',
        title: 'Identity & Access Management Platform — Education Sector',
        context:
          'For a state-level public-sector IT provider, rolled out statewide: consolidates teacher and student data from several source systems and provisions school accounts to a central directory service.',
        period: 'May 2026 — present',
        current: true,
        stack: ['Java 25', 'Spring Boot 4', 'Vaadin', 'PostgreSQL', 'RabbitMQ', 'Keycloak', 'Liquibase', 'Testcontainers'],
        bullets: [
          'Core contributor on the Java 25 / Spring Boot 4 backend and the Vaadin administration UI.',
          'Implemented ingest, merge, and provisioning features within a hexagonal architecture, keeping business logic in a framework-free domain module behind explicit ports and adapters.',
          'Built the API-key-secured ingest REST API, source-priority merge rules, and a transactional outbox with RabbitMQ acknowledgements for reliable asynchronous provisioning.',
          'Implemented entitlement-engine rules for role assignment and account lifecycle, role-based access control from Keycloak token claims, and account name and password generation.',
          'Delivered internal UI features including searchable and exportable persona views, functional mailbox management, school-admin administration, a dashboard, and a demo simulator.',
          'Maintained quality gates: GitHub Actions pipelines, Testcontainers integration tests, Liquibase migrations, and an OpenAPI contract test between API and frontend. Regular code reviewer on the team.',
        ],
      },
      {
        branch: 'feature/waste-management',
        color: 'var(--b-olive)',
        title: 'Waste-Management Customer App & Portal',
        context:
          'Multi-tenant customer portal and iOS/Android apps for a municipal-services provider, white-labelled for regional utilities.',
        period: 'Oct 2024 — Jan 2025 · Oct 2025 — May 2026',
        current: false,
        stack: ['Angular', 'Ionic / Capacitor', 'Node.js', 'tRPC', 'PostgreSQL', 'pgvector', 'LangChain', 'Cypress'],
        bullets: [
          'Built a customer-support AI chatbot end-to-end: a LangChain agent with feature-specific tools for collection calendars, invoices, payments, bulky-waste orders, and service tickets, backed by retrieval over FAQ content in PostgreSQL pgvector.',
          'Designed guardrails and operations for the chatbot: persisted chat history, rate limiting, message-size limits, modular system prompts, and AI-driven mass test campaigns to validate answer quality.',
          'Enabled the assistant to pre-fill and steer the bulky-waste order form, connecting the conversational layer to the Angular UI.',
          'Implemented the digital customer card feature across backend, frontend, data sync, and a mock external API.',
          'Remediated penetration-test findings such as account takeover, account enumeration, insecure direct object references, authorization bypass, SQL injection, and XSS.',
          'Shipped features and fixes for the mobile app and portal, including the admin statistics area, bin-change flows, receipt filtering performance, and accessibility, with Cypress end-to-end coverage.',
        ],
      },
      {
        branch: 'feature/matching-platform',
        color: 'var(--b-blue)',
        title: 'Science-and-Industry Matching Platform',
        context:
          'Platform for a regional development agency where schools and organisations discover and book scientists and other regional offers for project days.',
        period: 'Feb 2025 — May 2025',
        current: false,
        stack: ['Angular', 'ngx-formly', 'tRPC', 'Express', 'Knex', 'PostgreSQL', 'Keycloak', 'Tailwind', 'Cypress'],
        bullets: [
          'Delivered profile, catalogue, and multi-step project registration features on an Nx monorepo, including a reusable stepper form with a draft/publish lifecycle.',
          'Hardened authentication and data integrity: JWT expiry handling, Keycloak single-sign-on settings, ownership and permission checks, duplicate prevention, and matching edge cases.',
          'Implemented dark mode, responsive mobile layouts, and end-to-end test scenarios.',
        ],
      },
      {
        branch: 'feature/m365-assistant',
        color: 'var(--b-violet)',
        title: 'AI Office Assistant for Microsoft 365',
        context:
          'Conversational assistant in Microsoft Teams that reads and drafts email and manages calendar events through Microsoft Graph.',
        period: 'Jun 2025 — Sep 2025',
        current: false,
        stack: ['TypeScript', 'Node.js', 'tRPC', 'Prisma', 'pgvector', 'LangChain', 'Mistral', 'Bot Framework'],
        bullets: [
          'Lead developer of the Teams bot and a main backend contributor for the LLM assistant.',
          'Implemented intent detection and query analysis ahead of vector search, an email draft-and-confirm conversation flow, calendar event creation, and conversation-history prompting with robust LLM output parsing.',
          'Built scheduled morning notifications with server-sent-event subscriptions persisted in the backend, Graph permission scopes, and German localisation.',
        ],
      },
    ],
  },
  {
    org: 'Christian-Albrechts-Universität zu Kiel',
    role: 'Research Assistant (Information Systems)',
    period: 'Apr 2023 — Sep 2023',
    entries: [
      {
        branch: 'research/curriculum-graph',
        color: 'var(--b-amber)',
        title: 'Curriculum Analysis with Graph Databases',
        context:
          'Data analysis of the university’s computer-science course offerings to surface insights for improving the curriculum.',
        current: false,
        stack: ['Neo4j', 'Flask', 'Python', 'Data Visualization'],
        bullets: [
          'Analysed the computer-science course offerings to surface patterns and correlations that informed curriculum development.',
          'Modelled course relationships in a Neo4j graph database and built a Flask web interface for interactive exploration and visualisation.',
        ],
      },
    ],
  },
  {
    org: 'ZeroBS GmbH, Kiel',
    role: 'Full-Stack Developer (Working Student)',
    period: 'Oct 2021 — Jul 2022',
    entries: [
      {
        branch: 'feature/cms-platform',
        color: 'var(--b-rose)',
        title: 'CMS & Cloud Infrastructure',
        context:
          'Content-management and infrastructure tooling for managing workloads across multiple cloud providers.',
        current: false,
        stack: ['Flask', 'JavaScript', 'Terraform', 'AWS', 'DigitalOcean', 'Celery', 'RabbitMQ'],
        bullets: [
          'Developed a CMS platform with a Flask backend and JavaScript/Jinja2 frontend that tripled content-team productivity.',
          'Automated manual operational processes and introduced one-click deployments, cutting operational overhead by around ninety percent and giving the client full deployment autonomy.',
          'Managed cloud infrastructure on AWS and DigitalOcean with Terraform and maintained asynchronous job queues with Celery and RabbitMQ.',
        ],
      },
    ],
  },
];

export const REPOS: Repo[] = [
  {
    name: 'Todo-TDD',
    description: 'A todo API built strictly test-first — the TDD habit that carried into production work.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/akshay2agrawal/Todo-TDD',
  },
  {
    name: 'tRPC',
    description: 'End-to-end typesafe APIs without code generation — the pattern later used in production.',
    language: 'TypeScript',
    languageColor: '#3178c6',
    url: 'https://github.com/akshay2agrawal/tRPC',
  },
  {
    name: 'Master-Thesis',
    description:
      'Non-neural twin for autoencoders: VQPCA matched autoencoder reconstruction on linear data while staying interpretable.',
    language: 'Python',
    languageColor: '#3572a5',
    url: 'https://github.com/akshay2agrawal/Master-Thesis',
  },
  {
    name: 'formula-student-driverless',
    description:
      'Centerline estimation for an autonomous race car in ROS — SVM track analysis and B-spline trajectory optimisation.',
    language: 'ROS / C++',
    languageColor: '#7d9dd4',
    url: undefined,
  },
  {
    name: 'API-authentication',
    description: 'Authentication patterns hands-on: sessions, hashing, JWT, and OAuth flows in Node.js.',
    language: 'JavaScript',
    languageColor: '#f1e05a',
    url: 'https://github.com/akshay2agrawal/API-authentication',
  },
  {
    name: 'Digital-Lending-Product-',
    description: 'REST APIs in Django for customer and loan-offer data with a React frontend; tested with Pytest and Jest.',
    language: 'Django + React',
    languageColor: '#44b78b',
    url: 'https://github.com/akshay2agrawal/Digital-Lending-Product-',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'Java', 'JavaScript', 'Python', 'SQL', 'HTML / CSS'],
  },
  {
    label: 'Backend',
    skills: ['Spring Boot', 'Node.js + Express', 'tRPC / ts-rest', 'Prisma', 'Knex', 'Liquibase', 'REST + OpenAPI', 'RabbitMQ', 'Hexagonal architecture'],
  },
  {
    label: 'Frontend & Mobile',
    skills: ['Angular', 'Vaadin', 'Ionic + Capacitor', 'Tailwind CSS', 'ngx-formly', 'Nx monorepos'],
  },
  {
    label: 'AI Engineering',
    skills: ['LangChain', 'RAG (pgvector, Pinecone)', 'Tool-calling agents', 'Prompt design', 'Mistral & OpenAI APIs', 'AI-driven test automation'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'pgvector', 'SQLite', 'Neo4j'],
  },
  {
    label: 'Security & Identity',
    skills: ['Keycloak', 'OAuth2 / OIDC', 'JWT', 'Microsoft Graph + MSAL', 'Role-based access control', 'Pen-test remediation'],
  },
  {
    label: 'DevOps',
    skills: ['Docker', 'GitHub Actions', 'GitLab CI', 'Kubernetes (k3d · Helm · Tilt)', 'OpenTofu / Terraform', 'Ansible', 'Open Telekom Cloud', 'Testcontainers'],
  },
  {
    label: 'Testing',
    skills: ['JUnit', 'Jest', 'Vitest', 'Cypress / Cucumber', 'Test-driven development'],
  },
  {
    label: 'AI Tooling',
    skills: ['Claude Code', 'GitHub Copilot'],
  },
  {
    label: 'Spoken',
    skills: ['English (fluent)', 'German (B1)', 'Hindi (native)'],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'MSc Computer Science',
    school: 'Christian-Albrechts-Universität zu Kiel, Germany',
    period: '2019 — 2023',
    note: 'Thesis: a non-neural twin for simple autoencoders',
  },
  {
    degree: 'BE Computer Science',
    school: 'Xavier Institute of Engineering, Mumbai, India',
    period: '2015 — 2019',
  },
];
