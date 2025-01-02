import { Project } from "../_types/genericTypes";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Align With Me",
    smallDescription:
      "Streamline collaboration through personalized user guides.",
    description:
      "Align With Me is a platform designed to enhance teamwork and communication by creating personalized user guides. These guides provide insights into individual work styles, preferences, and collaboration approaches, helping colleagues connect effectively and work harmoniously.",
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
  },
  {
    id: 2,
    name: "HoopWorld",
    smallDescription:
      "AI-powered training plans for aspiring basketball players.",
    description:
      "HoopWorld is an AI-driven platform designed to guide aspiring basketball players by creating personalized training plans. Players answer a series of targeted questions about their goals and routines, and HoopWorld generates customized reports and plans to maximize their growth potential.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "OpenAI API",
      "Zod",
      "React Hook Form",
      "Mailgun",
      "Vercel Deployment",
    ],
    img: "/projects/hoopworld.png", // Add a URL if applicable.
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
    url: "https://wimc.com", 
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
    id: 5,
    name: "Teachify",
    description:
      "A platform for teachers to create, share, and purchase lesson plans, similar to Fiverr but focused on education.",
    smallDescription: "Fiverr for teachers to buy and sell lesson plans.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "SCSS", "Stripe"],
    img: "/projects/alignwithme.png",
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
