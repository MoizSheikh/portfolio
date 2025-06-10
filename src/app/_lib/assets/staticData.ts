import { Cert, Project } from "../_types/genericTypes";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Align With Me",
    smallDescription:
      "AI platform for creating personalized user guides to enhance workplace collaboration.",
    description:
      "“Designed an AI-powered platform to create personalized user guides based on work styles, communication preferences, and professional goals. The platform enhances collaboration by helping teams and individuals understand each other better. Features include customization, team dashboards, and ongoing AI-driven guidance.”",
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
      "A platform for car inspections where users can register as inspectors or hire one when buying a used car.",
    smallDescription: "Zillow for Saudi Arabia’s real estate market.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Elasticsearch",
      "Mapbox",
    ],
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
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MySQL",
      "Elasticsearch",
      "Mapbox",
    ],
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
      "Transitioned to full-stack development, collaborating across teams on complex applications. Contributed to scalable solutions while deepening expertise in React and backend architecture.",
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
    company: "Dubizzle Labs",
    role: "Software Engineer",
    duration: "Jul 2023 - Present",
    location: "Lahore, Punjab, Pakistan",
    logo: "/DL.png",
    responsibilities: [
      "Led the development of key features across platforms including Bayut, Dubizzle, and OLX ensuring optimal performance and scalability.",
      "Spearheaded a team to maintain high code quality, architecture standards, and streamlined deployment processes.",
      "Improved search and filter functionalities, leading to a 20% boost in user engagement.",
      "Refactored codebase, reducing load times by 30%.",
      "Managed sprint planning, retrospectives, and interviews while implementing processes to enhance team productivity.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
  },
  {
    id: 2,
    company: "Lyftrondata",
    role: "Software Engineer",
    duration: "Jun 2022 - Jul 2023",
    location: "Remote",
    logo: "/Lyftron.jpeg",
    responsibilities: [
      "Worked across both frontend and backend, implementing new features and improving system performance.",
      "Led the refactoring of the existing codebase, enhancing maintainability and scalability.",
      "Onboarded new team members, leading and training a small group of developers.",
      "Contributed to daily development tasks, code reviews, and team collaboration.",
      "Addressed 70+ Jira tickets, including bug fixes and feature implementation.",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Docker",
    ],
  },
];
