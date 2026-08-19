// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to update your portfolio content.
// This is the only file you need to touch to change text,
// projects, skills, and contact info.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Vivek Kumar Sharma",
  role: "Full-Stack Web Developer",
  tagline: "I build fast, reliable products end to end — from database schema to pixel-perfect UI.",
  location: "Delhi, India",
  bio: [
    "I'm a full-stack developer who enjoys taking a product from a blank file to something real people use. Comfortable across the stack — React and Next.js on the front end, Node and databases underneath.",
    "I care about clean architecture, fast load times, and interfaces that feel obvious to use. Currently open to freelance work and full-time roles.",
  ],
  resumeUrl: "#", // put a path like "/resume.pdf" after adding the file to /public
  socials: {
    github: "https://github.com/vivekkshar",
    linkedin: "https://www.linkedin.com/in/vivek-sharma-517499329/",
    email: "vksharma7303@gmail.com",
  },
};

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  href?: string; // live link
  repo?: string; // github repo
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Perplexity Clone– AI Search & Chat Platform",
    description:
      `Architected a full-stack AI search platform with dual Gemini + Mistral LLM integration and dynamic model switching for intelligent, context-aware answers
       Implemented real-time token streaming via Socket.IO for a fluid, chat-like experience that eliminates response wait time.
      Integrated the Tavily API to power live web search, grounding AI answers in current, cited sources from across the web.
      Designed a MongoDB schema to persist multi-turn conversation history and user sessions for contextual dialogue, and
      used Nodemailer for automated email notifications.`,
    stack: ["Node.js", "Socket.IO", "Gemini API", "Mistral API", "Tavily API", "Nodemailer", "MongoDB"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    id: "02",
    title: "Mood Detector– Emotion-Based Music Player",
    description:`Built real-time mood detection via sentiment/facial analysis to dynamically curate and play matching songs.
                Managed global application state with Redux and stored music metadata in MongoDB for a seamless, responsive React
                UI.`,
    stack: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB"],
    href: "#",
    repo: "#",
    featured: true,
  },
  {
    id: "03",
    title: "Mac OS UI Clone– Desktop Simulation in Browser",
    description:
      ` Recreated a pixel-perfect Mac OS desktop experience in the browser, including a draggable window, dock, and menu bar.
        Used Context API for global state management and SCSS modules for modular, maintainable styling`,
    stack: ["Next.js", "Prisma", "tRPC"],
    href: "#",
    repo: "#",
  },
//   {
//     id: "04",
//     title: "Project Four",
//     description:
//       ` Recreated a pixel-perfect Mac OS desktop experience in the browser, including a draggable window, dock, and menu bar.
//         Used Context API for global state management and SCSS modules for modular, maintainable styling`,
//     stack: ["React.js", "Context API", "SCSS"],
//     href: "#",
//     repo: "#",
//   },
];

export type SkillGroup = {
  label: string;
  comment: string; 
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "frontend",
    comment: "// what the user sees",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    label: "backend",
    comment: "// what makes it work",
    items: ["Node.js", "Express", "REST APIs", "tRPC" , "Mongoose"],
  },
  {
    label: "data",
    comment: "// where it lives",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
  },
  {
    label: "tooling",
    comment: "// how it ships",
    items: ["Git", "Docker", "Vercel", "Render", "CI/CD", "Figma", "GitHub", "Postman", "Retrieval-Augmented Generation (RAG)", "Data Structures & Algorithms"],
  },
];
