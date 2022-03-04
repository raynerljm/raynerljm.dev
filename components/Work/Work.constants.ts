import { WorkExperience } from "./Work.types";

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    role: "Software Engineer Intern",
    company: "Ethlas",
    companyLink: "https://ethlas.com/",
    duration: "February 2022 - Present",
    responsibilities: [
      "Initiated and spearheaded the large-scale refactoring and documentation of the web app's codebase as well as a migration from JavaScript to TypeScript to improve maintainability",
      "Developed a main feature of private tournaments as a growth tactic that increased the userbase by XX%",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Unity",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "MatcHub",
    companyLink: "https://matchub.co/",
    duration: "November - December 2022",
    responsibilities: [
      "Initiated and undertook the migration of over 80% of the codebase from JavaScript to TypeScript by establishing a long-term type hierarchy that reduced numerous typed bugs",
      "Restructured the front-end components to make the site responsive on mobile screens",
      "Refactored components to increase reusability and standardized designs across pages",
    ],
    technologies: ["TypeScript", "React", "Material UI", "SCSS", "Django"],
  },
  {
    role: "Software Engineer",
    company: "CCSGP",
    companyLink: "https://volunteer.comp.nus.edu.sg/",
    duration: "November - December 2022",
    responsibilities: [],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Tech Lead and Software Engineer",
    company: "GreenPins",
    companyLink: "https://greenpins.sg/",
    duration: "July - September 2021",
    responsibilities: [],
    technologies: ["Next.js"],
  },
  {
    role: "Software Engineer Intern",
    company: "vibefam",
    companyLink: "https://vibefam.com/",
    duration: "May - July 2021",
    responsibilities: [],
    technologies: ["React"],
  },
];
