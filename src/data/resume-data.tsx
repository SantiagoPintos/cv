import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Santiago Pintos",
  initials: "SP",
  location: "Montevideo, Uruguay",
  locationLink: "https://www.google.com/maps/place/Montevideo,+Uruguay",
  about: "Software Engineer | Backend & AI/ML Development.",
  summary: (
    <>
      Software engineer focused on backend, data engineering, and applied AI. Experience building AI agents with Python, LangGraph, and vector-based retrieval pipelines, along with service development in Node.js/TypeScript.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/26977363?v=4",
  personalWebsiteUrl: "https://spintos.dev/",
  contact: {
    email: "spintos@outlook.es",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/SantiagoPintos",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/santiago-pintos/",
        icon: "linkedin",
      }
    ],
  },
  education: [
    {
      school: "Universidad ORT Uruguay",
      degree: "Computer Science",
      start: "2023",
      end: "current",
    },
  ],
  work: [
    {
      company: "UKG",
      link: "https://www.ukg.com/",
      badges: ["Python", "AI"],
      title: "Associate Software Engineer",
      start: "2024",
      end: "2025",
      description: (
        <>
          AI & Data Engineering team at Great Place To Work
          <ul className="list-inside list-disc">
            <li>Design and development of AI agents.</li>
            <li>Data processing and analysis pipelines.</li>
            <li>Exploration of new technologies and frameworks.</li>
          </ul>
        </>
      ),
    },
    {
      company: "Universidad de Trabajo del Uruguay",
      link: "https://utu.edu.uy",
      badges: ["Linux", "Windows"],
      title: "Lab assistant",
      start: "2020",
      end: "2024",
      description: (
        <>
          Development of management systems, maintenance of network infrastructure and servers, technical support to teachers and students.
          <ul className="list-inside list-disc">
            <li>Maintained network infrastructure and servers.</li>
            <li>Developed management systems for the school.</li>
            <li>Provided technical support to teachers and students.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "Angular",
    "React/Next.js",
    "Node.js",
    "Python",
    "Java",
    "Kotlin",
    ".Net",
    "AI/ML",
    "Design of AI agents",
    "Data Engineering",
  ],
  projects: [
    {
      title: "AiTools",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind",
        "Transformers"
      ],
      description:
        "Web platform with AI models running entirely on the browser (client side)",
      link: {
        label: "github.com",
        href: "https://santiagopintos.github.io/aitools/",
      },
    },
    {
      title: "Email",
      techStack: [
        ".Net",
        "C#",
        "Azure",
      ],
      description:
        "Desktop application to manage emails",
      link: {
        label: "Email",
        href: "https://github.com/santiagopintos/Email",
      },
    },
  ],
  certificates: [
    {
      name: "Checkout Pro",
      date: "2024",
      issuer: "Mercado Libre",
      url: "https://www.mercadopago.com.uy/developers/panel/developer-program/certification/cert_46a59bd63f1111efbb7b8e3c267079e3"
    },
    {
      name: "Foundational C# with Microsoft",
      date: "2024",
      issuer: "Microsoft - freeCodeCamp",
      url: "https://www.freecodecamp.org/certification/fcc5feb4082-0a79-4944-a977-1b0608b421ef/foundational-c-sharp-with-microsoft"
    }
  ],
  awards: [
    {
      title: "Champion",
      date: "2018",
      awarder: "Sumo.uy - Facultad de Ingeniería, Universidad de la República",
      summary: "Robotics competition hosted by Facultad de Ingeniería, UDELAR. Qualifying for the RoboCup world robotics championship held in Sydney the following year.",
      url: "https://2019.robocup.org/"
    },
  ],
} as const;
