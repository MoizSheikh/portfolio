import { Project } from "../_types/genericTypes";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Align With Me",
    smallDescription:
      "“Developed an AI-powered platform enabling professionals to create personalized user guides for enhancing workplace collaboration and communication.”",
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
    id: 2,
    name: "HoopWorld",
    smallDescription:
      "Built an AI-driven platform providing personalized basketball assessments and actionable player development insights.",
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
    url: "https://wimc.me",
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
  // {
  //   id: 5,
  //   name: "Teachify",
  //   description:
  //     "A platform for teachers to create, share, and purchase lesson plans, similar to Fiverr but focused on education.",
  //   smallDescription: "Fiverr for teachers to buy and sell lesson plans.",
  //   techStack: ["React", "Node.js", "Express.js", "MongoDB", "SCSS", "Stripe"],
  //   img: "/projects/alignwithme.png",
  // },
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
  { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
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
