import { Project } from "../_types/genericTypes";

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Align With Me",
    description:
      "Enhance professional relationships with personalized insights. Align creates your unique user guide, helping colleagues understand your work style and preferences, and creating more harmonious connections.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "stripe",
      "propelAuth",
      "OPENAI",
    ],
    img: "/projects/alignwithme.png",
    url: "https://alignwithme.com",
  },

  {
    id: 2,
    name: "HoopWorld",
    description:
      "Get a customized baseketball training plan from the best AI coaches in the world.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS", "OPENAI"],
    img: "/projects/hoopworld.png",
  },
  {
    id: 3,
    name: "Glorious ME",
    description: "Get your personalized fitness plan and diet recommendations.",
    techStack: ["Next.js", "Postgres", "Tailwind CSS", "Supabase", "AWS"],
    img: "/projects/glorious_me.png",
  },
  {
    id: 4,
    name: "CarSpector",
    description:
      "A car inspection app that helps you make informed decisions when buying a used car.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    img: "/projects/carspector.png",
  },
  {
    id: 3,
    name: "Teachify",
    description:
      "An online platform for teachers to create and share lesson plans.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
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