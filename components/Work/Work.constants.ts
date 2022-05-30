import { WorkExperience } from "./Work.types";

export const WORK_EXPERIENCES: WorkExperience[] = [
    {
        role: "Software Engineer Intern",
        company: "Shopee",
        companyLink: "https://shopee.sg/",
        duration: "May 2022 - Present",
        responsibilities: [
            "Developed a full-stack application with authentication with React for the entry task where I learnt how to implement session cookies, configure webpack manually, and understand Redux on a deeper level",
            "Implemented features and bug fixes with thorough code review where I familiarized myself with best practices and types of abstractions utilized",
        ],
        technologies: ["React", "TypeScript", "SCSS"],
    },
    {
        role: "Software Engineer Intern",
        company: "Ethlas",
        companyLink: "https://ethlas.com/",
        duration: "February 2022 - April 2022",
        responsibilities: [
            "Developed end to end growth tactic features with Next.js, Tailwind CSS and Firebase to grow the userbase and improve the user experience",
            "Collaborated with smart contract engineers to build features that interacted with the Polygon chain using web3",
            "Spearheaded the large-scale refactoring and documentation of the codebase to improve maintainability",
            "Implemented anti-cheat functionality across multiple Unity games to prevent abuse",
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
        role: "Software Engineer",
        company: "CCSGP",
        companyLink: "https://volunteer.comp.nus.edu.sg/",
        duration: "October - February 2022",
        responsibilities: [
            "Designed and developed the entire volunteer job board website's front end",
            "Abstracted reusable components and custom hooks with thorough documentation to ensure scalability",
            "Deployed the platform on a NUS School of Computing Virtual Machine using Nginx and PM2",
            "An extension of my CP2106 Orbital project that won 2 awards: Judges' Choice and Top CCSGP Project",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Postgresql",
            "Firebase",
            "PM2",
            "Nginx",
            "Figma",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "MatcHub",
        companyLink: "https://matchub.co/",
        duration: "November - December 2021",
        responsibilities: [
            "Initiated and undertook the migration of over 80% of the codebase from JavaScript to TypeScript by establishing a long-term type hierarchy that reduced numerous typed bugs",
            "Restructured the front-end components to make the site responsive on mobile screens",
            "Refactored components to increase reusability and standardized designs across pages",
        ],
        technologies: ["React", "TypeScript", "Material UI", "SCSS", "Django"],
    },

    {
        role: "Tech Lead and Software Engineer",
        company: "GreenPins",
        companyLink: "https://greenpins.sg/",
        duration: "July - September 2021",
        responsibilities: [
            "Led a team of 6 to design and develop a search engine web app based on client’s requirements",
            "Collaborated with the back-end and infra engineers to design the database and deploy the website",
            "Designed the mockups for the desktop and mobile view using Figma to handover to developers",
        ],
        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Firebase",
            "Figma",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "vibefam",
        companyLink: "https://vibefam.com/",
        duration: "May - July 2021",
        responsibilities: [
            "Revamped the web app with over 200 monthly viewers by revising the site's responsiveness across all device screens",
            "Designed and developed the layout of blog content to improve engagement and increase traffic",
            "Implemented the page detailing offerings of the organization to increase conversion rates",
        ],
        technologies: ["React", "Styled Components", "CSS"],
    },
];
