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
      end: "2010",
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
} as const;
