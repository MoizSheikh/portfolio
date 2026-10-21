import { Cert, Project } from "../_types/genericTypes";

export const projectsData: Project[] = [
  {
    id: 9,
    name: "Mycelium (MyCLM)",
    smallDescription:
      "No-code platform for contract lifecycle and freight-forwarding operations.",
    description:
      "Solo founder-engineer. Ops teams build their own tables, pages, workflows, invoices, and PDFs through a visual builder, and every client runs on its own isolated database and automation server. A compiler turns drag-and-drop React Flow workflows into live n8n pipelines, powering an AI pipeline that reads air-freight pre-alert emails, extracts data from scanned PDFs with GPT vision, and creates full shipment records. Includes a complete finance layer with ledgers, branded invoices, and multi-currency FX, plus AI copilots that design data models and pages from plain English.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "n8n",
      "React Flow",
      "OpenAI API",
    ],
    img: "/projects/myclm.png",
    url: "https://my-clm.com",
  },
  {
    id: 1,
    name: "Align With Me",
    smallDescription:
      "Personalized user guides with real-time collaboration to improve how teams work together.",
    description:
      "Built end-to-end solo — a SaaS that turns each teammate's MBTI, DISC, Enneagram, Kolbe, and CliftonStrengths results into one AI-generated Personal User Guide. Features a 10-minute AI voice interview, team dynamics clustering, an AI chat over the whole team, and a culture database of 441 company profiles synthesized from 5,389 cited sources.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Stripe",
      "PropelAuth",
      "OpenAI API",
      "Zod",
      "React Hook Form",
      "Vercel Deployment",
    ],
    img: "/projects/alignwithme.png",
    url: "https://alignwithme.com",
    githubLink: "",
  },
  {
    id: 5,
    name: "Bayut.com",
    description:
      "A leading property portal for Saudi Arabia and the UAE, where users can buy, sell, and rent real estate with localized search across multiple markets.",
    smallDescription: "Zillow for Saudi Arabia’s real estate market.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Mapbox"],
    img: "/projects/bayut.png",
    url: "https://bayut.com",
  },
  {
    id: 2,
    name: "Hoopwrld",
    smallDescription:
      "AI platform for personalized basketball assessments and player development.",
    description:
      "“Developed an AI-powered basketball assessment platform that analyzes player routines, skills, and goals to generate personalized feedback and recommendations. Features include skill development, diet, fitness guidance, NBA/WNBA player comparisons, and integrated reports from coaches, parents, or friends to provide comprehensive insights.”",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind",
      "OpenAI API",
      "Zod",
      "React Hook Form",
      "Mailgun",
    ],
    img: "/projects/hoopworld.png",
    url: "https://hoopwrld.com",
  },
  {
    id: 6,
    name: "Dubizzle.com",
    description:
      "A classifieds platform enabling users to buy, sell, and rent everything from cars and properties to jobs and services across the UAE and MENA region, similar to Craigslist but localized for the Middle East.",
    smallDescription: "Craigslist for the Middle East.",
    techStack: ["React", "Node.js", "Express.js", "MySQL", "Mapbox"],
    img: "/projects/dubizzle.png",
    url: "https://dubizzle.com",
  },

  {
    id: 4,
    name: "CarSpector",
    description:
      "An app for car inspections where users can register as inspectors or hire one when buying a used car.",
    smallDescription: "Car inspection service for buying used cars.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "SCSS", "Stripe"],
    img: "/projects/carspector.png",
  },

  {
    id: 7,
    name: "olx.com.pk",
    description:
      "A leading Pakistani classifieds platform for buying, selling, and renting vehicles, property, electronics, and more—offering localized features tailored to Pakistan’s market needs.",
    smallDescription: "Craigslist for Pakistan.",
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "Redis", "AWS"],
    img: "/projects/olx.png",
    url: "https://olx.com.pk",
  },
  {
    id: 8,
    name: "Crosscheck",
    description:
      "Centralized test management tool for managing test cases, test suites, and test results.",
    smallDescription: "Centralized test management tool",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
    img: "/projects/crosscheck.png",
    url: "https://www.crosscheck.cloud",
  },
  {
    id: 3,
    name: "Glorious ME",
    description:
      "Your personalized fitness journey, including fitness plans and tailored diet recommendations.",
    smallDescription: "Personalized fitness and diet plans.",
    techStack: [
      "Next.js",
      "PostgreSQL",
      "Drizzle",
      "Tailwind CSS",
      "Stripe",
      "Supabase",
      "AWS",
      "Chart.js",
    ],
    img: "/projects/glorious_me.png",
    url: "https://www.wimc.me",
  },
];

export const journeyData = [
  {
    id: 1,
    title: "University",
    logo: "/university.svg",
    description:
      "Developed a foundation in programming and algorithms, igniting a passion for problem-solving and software design. Built early projects that laid the groundwork for a career in tech.",
  },
  {
    id: 2,
    title: "Freelancer",
    logo: "upwork.svg",
    description:
      "Dived into real-world projects, working directly with clients and learning to adapt quickly. Gained hands-on experience in delivering solutions, managing deadlines, and sharpening front-end and back-end skills.",
  },
  {
    id: 3,
    title: "Lyftron",
    logo: "/Lyftron.jpeg",
    description:
      "Joined as a frontend engineer, building the configuration UI for 50+ ETL connectors and a data-catalog module. Sharpened React expertise and mentored 4 engineers along the way.",
  },
  {
    id: 4,
    title: "Dubizzle",
    logo: "/DL.png",
    description:
      "Advanced skills in React and modern full-stack technologies. Took on leadership roles, managing team sprints and coordinating projects to deliver high-impact features on schedule.",
  },
];

export const MY_SKILLS = [
  { name: "HTML", icon: "/icons/html.svg", color: "#E34F26" },
  { name: "CSS", icon: "/icons/css.svg", color: "#1572B6" },
  { name: "SCSS", icon: "/icons/sass.svg", color: "#CC6699" },
  { name: "TailwindCSS", icon: "/icons/tailwind.svg", color: "#38B2AC" },
  { name: "JavaScript", icon: "/icons/js.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "/icons/ts.svg", color: "#3178C6" },
  { name: "React", icon: "/icons/skills/reactJS.svg", color: "#61DAFB" },
  { name: "Redux", icon: "/icons/redux.svg", color: "#764ABC" },
  { name: "Next.js", icon: "/icons/next.svg", color: "#000000" },
  { name: "Node.js", icon: "/icons/node.svg", color: "#339933" },
  { name: "Express", icon: "/icons/express.svg", color: "#000000" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", color: "#47A248" },
  { name: "SQL", icon: "/icons/mysql.svg", color: "#1572B6" },
  { name: "PostGres", icon: "/icons/postgres.svg", color: "#1572B6" },
  { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
  { name: "Vite", icon: "/icons/vite.svg", color: "#646CFF" },
  { name: "UI UX", icon: "/icons/ui.svg", color: "#61DAFB" },
  { name: "Team Player", icon: "/icons/leadership.svg", color: "#F7DF1E" },
];

export const certs: Cert[] = [
  {
    id: 1,
    name: "Tailwind CSS",
    issuer: "Frontend Masters",
    issueDate: "Dec 2024",
    credentialId: "b7c0e2dfd3-hXdaKmozON",
    skills: ["Cascading Style Sheets (CSS)", "Tailwind CSS", "UI/UX"],
    logo: "/icons/certs/frontendmasters.jpeg",
  },
  {
    id: 2,
    name: "The Hard Parts of UI Development",
    issuer: "Frontend Masters",
    issueDate: "Dec 2024",
    credentialId: "b7c0e2dfd3-DpFXiJTXXf",
    skills: ["HTML", "JavaScript"],
    logo: "/icons/certs/frontendmasters.jpeg",
  },
  {
    id: 3,
    name: "JavaScript: The Hard Parts",
    issuer: "Frontend Masters",
    issueDate: "Nov 2024",
    credentialId: "b7c0e2dfd3-fjjCYVxYTO",
    skills: ["JavaScript"],
    logo: "/icons/certs/frontendmasters.jpeg",
  },
  {
    id: 4,
    name: "The Hard Parts of Servers & Node.js",
    issuer: "Frontend Masters",
    issueDate: "Nov 2024",
    credentialId: "b7c0e2dfd3-GuXNAjfipL",
    skills: ["Node.js", "Server Development"],
    logo: "/icons/certs/frontendmasters.jpeg",
  },
  {
    id: 5,
    name: "Learn TypeScript",
    issuer: "Scrimba",
    issueDate: "Oct 2024",
    skills: ["TypeScript"],
    credentialId: "cert24zAwJ77fGzop3jqfm8v8Ktj8PFx88QTQoJyp",
    logo: "/icons/certs/scrimba.jpeg",
  },
  {
    id: 6,
    name: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    issueDate: "Jul 2020",
    credentialId: "57BEYX3B8JBG",
    skills: ["HTML", "CSS", "JavaScript"],
    logo: "/icons/certs/coursera.jpeg",
  },
];

export const experienceData = [
  {
    id: 1,
    company: "Laam",
    role: "Software Engineer III",
    duration: "2025 - Present",
    location: "Lahore, Pakistan",
    logo: "",
    responsibilities: [
      "Lane owner for Laam Ads — own product decisions with sellers and advertisers, write the design docs, and make the architecture calls; led Ads V2 with a personalized recommendation engine and per-product insights.",
      "Grew the ads business to 220+ billed advertisers a month and a record ~$270K revenue month.",
      "Designed Laam Ads' promo and subscription monetization model — promo ledger, bonus impressions, subscription commitments, pool expiry, and first-time-seller free promos.",
      "Bootstrapped ads.laam.com end-to-end, a self-serve platform opening Laam to external advertisers.",
      "Ads serve 1M+ impressions a day (peak 1.88M) on a split pipeline — Redis decides what serves, ClickHouse decides what's billed.",
      "Built the full billboard campaign lifecycle — prepaid/postpaid billing, auto-invoicing, and a payment ledger.",
      "Rebuilt Reviews & Ratings into a full system; total reviews up 57% and store review coverage from 19% to 28% in one month.",
      "Replaced plain rating averages with a Bayesian score per category, keeping ~89K products fresh for search ranking.",
      "Built Laam's single design system, now used by every Laam app, and closed ~50 on-call tickets in 3 months.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "ClickHouse",
      "Elasticsearch",
    ],
  },
  {
    id: 2,
    company: "Dubizzle Labs (Bayut & OLX)",
    role: "Software Engineer II",
    duration: "2022 - 2025",
    location: "Lahore, Pakistan",
    logo: "/DL.png",
    responsibilities: [
      "Tech lead for a 6-engineer sub-team on Jarvis, Dubizzle Group's central CRM — ran sprints, code reviews, and architecture calls.",
      "Led Jarvis's migration from Webpack to Vite + React 18 with lazy loading, Suspense, and React Query caching.",
      "Built backend features on Python/FastAPI services, including single-schema multi-tenancy.",
      "Owned the frontend across 15+ country configurations, moving to config-driven rendering behind feature flags.",
      "Designed the CRM's i18n contract so adding a language touches zero backend code.",
      "Built the frontend for Arabic-language search in MENA markets and delivered tenant onboarding for the KSA launch.",
    ],
    technologies: ["React", "TypeScript", "Vite", "React Query", "Python", "FastAPI"],
  },
  {
    id: 3,
    company: "Lyftrondata",
    role: "Software Engineer I",
    duration: "2020 - 2022",
    location: "Virginia, USA (Remote)",
    logo: "/Lyftron.jpeg",
    responsibilities: [
      "Built the configuration UI for 50+ ETL connectors, cutting pipeline creation to under 5 minutes.",
      "Helped build the connector pipelines on the Python/FastAPI backend.",
      "Built the data-catalog module with row/column permissions and IndexedDB caching.",
      "Refactored legacy frontend code and mentored 4 new engineers.",
    ],
    technologies: ["React", "TypeScript", "Python", "FastAPI", "IndexedDB"],
  },
];
