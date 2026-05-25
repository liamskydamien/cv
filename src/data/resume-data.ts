import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Liam Hess",
  initials: "LH",
  location: "Bonn, Germany",
  locationLink: "https://www.google.com/maps/place/Bonn",
  about: "Product Owner who thinks in products, designs in Figma, and builds with code.",
  summary:
    "Product Owner with 3+ years at ZEISS Group, shipping features to 200,000+ users across mobile and web. Grown from Designer to PO, I sit at the intersection of sharp UX, solid engineering, and a deep understanding of the people using the product. My background across business informatics, frontend development, and design lets me work fluently across disciplines — from roadmap to Figma to code. I've led cross-functional teams spanning 6+ countries, managed full product roadmaps, run user research, and still jump into Figma and code when it counts.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104833589?v=4",
  personalWebsiteUrl: "https://liamhess.com",
  contact: {
    email: "liam@liamhess.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/liamskydamien",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/liam-hess/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Hochschule Bonn-Rhein-Sieg",
      degree: "Bachelor of Science, Business Information Systems — Grade 1.2, top 20 graduate in the program's 10-year history",
      start: "2021",
      end: "2024",
    },
    {
      school: "Vietnamese-German University",
      degree: "Exchange Semester, Business Administration & Computer Science — Grade 1.1, DAAD PROMOS Scholar",
      start: "2023",
      end: "2024",
    },
    {
      school: "Rheinische Friedrich-Wilhelms-Universität Bonn",
      degree: "Bachelor of Arts (incomplete), Asian Studies / Sinology",
      start: "2020",
      end: "2021",
    },
    {
      school: "Gymnasium am Ölberg",
      degree: "Abitur — Grade 2.0",
      start: "2012",
      end: "2020",
    },
  ],
  work: [
    {
      company: "ZEISS Group",
      link: "https://www.zeiss.com",
      badges: ["Remote", "Mobile", "Web", "Product Management", "UX"],
      title: "Product Owner — ZEISS Secacam App",
      start: "2024",
      end: null,
      description:
        "Responsible for the development roadmap of the ZEISS Secacam Mobile & Web App — the digital interface for ZEISS trail cameras — with a combined user base of 200,000+. Managing frontend development teams, aligning stakeholders across multiple teams, and driving the product from concept to release.",
      highlights: [
        "Shipping features to 200,000+ users across mobile and web",
        "Leading frontend development teams",
        "Aligning stakeholders across multiple teams",
        "Driving the product from concept to release",
      ],
    },
    {
      company: "ZEISS Group",
      link: "https://www.zeiss.com",
      badges: ["Part-time", "Figma", "UX", "Mobile", "Proxy PO"],
      title: "Designer & App Manager",
      start: "2023",
      end: "2024",
      description:
        "Working student supporting the ZEISS Secacam App from the ground up. Designed the full app UI, wrote PRDs and feature concepts, and later became Proxy Product Owner for the web development team of 4 developers.",
      highlights: [
        "Designing the full app UI",
        "Writing PRDs and feature concepts",
        "Becoming Proxy Product Owner for the web development team of 4 developers",
      ],
    },
    {
      company: "ZDH-ZERT GmbH",
      link: "https://www.zdh-zert.de",
      badges: ["Part-time", "Hybrid", "WordPress", "UX", "Newsletter"],
      title: "Webdesign and Marketing",
      start: "2022",
      end: "2023",
      description:
        "Led the redesign of the company website from concept to launch. Managed the newsletter end-to-end from content creation through to analytics. Supported automating the certification process by building automatic form inputs for certificates.",
    },
    {
      company: "Freelance",
      link: "https://liamhess.com",
      badges: ["Remote", "Freelance", "WordPress", "Figma", "E-Commerce"],
      title: "Freelance Web Designer & Developer",
      start: "2021",
      end: "2023",
      description:
        "Designed and built custom websites for four clients across different industries, from concept to deployment — starting with a fully functional e-commerce store. Managed requirements, design, and implementation end-to-end while studying.",
    },
    {
      company: "Carl Zeiss Consumer Products GmbH",
      link: "https://www.zeiss.com",
      badges: ["Remote", "Part-time", "JIRA", "CRM", "Amazon"],
      title: "Customer Service",
      start: "2020",
      end: "2022",
      description:
        "Supported customer service operations, Amazon channel management, and internal process improvement. Built an internal problem-tracking process in JIRA that streamlined issue resolution and improved response times across the team.",
    },
    {
      company: "Tops.net",
      link: "https://tops.net",
      badges: ["On Site", "Internship", "HTML", "SQL"],
      title: "Web Development Intern",
      start: "2018",
      end: "2018",
      description:
        "School internship providing first hands-on exposure to web development — building simple websites and working with databases.",
    },
  ],
  skills: [
    "Product Management",
    "UX Design",
    "Figma",
    "React Native",
    "React.js",
    "TypeScript",
    "Next.js",
    "JIRA",
    "Confluence",
    "Roadmap Management",
    "Stakeholder Management",
    "User Research",
    "SCRUM",
    "Localisation",
    "Java",
    "Spring Boot",
    "SQL",
  ],
  projects: [
    {
      title: "Dynamic Localisation System (Bachelor's Thesis)",
      techStack: ["Unleash", "Lokalise", "Feature Flags", "React Native"],
      description:
        "Developed a dynamic localisation system for the ZEISS Secacam Mobile App enabling real-time UI and feature adaptation per region without a new App Store or Play Store release. Grade: 1.2.",
    },
    {
      title: "Freedom Calc",
      techStack: ["TypeScript", "React.js", "Financial Modelling"],
      description:
        "Web-based financial freedom calculator built with two Vietnamese students during exchange semester. Visualises wealth growth vs. life costs over time and generates an optimised asset portfolio based on Markowitz Portfolio Theory.",
      link: {
        label: "github.com/liamskydamien/freedom-calc",
        href: "https://github.com/liamskydamien/freedom-calc",
      },
    },
    {
      title: "Aldavia — Student Job Platform",
      techStack: ["Spring Boot", "Java", "Vaadin", "JPA", "SCRUM"],
      description:
        "Student job platform built for HBRS as part of the Software Engineering 2 module. Delivered in two sprints with a team of six as Product Owner Proxy, Software Architect, and Programmer. Grade: 1.0.",
      link: {
        label: "github.com/liamskydamien/Aldavia",
        href: "https://github.com/liamskydamien/Aldavia",
      },
    },
    {
      title: "IW-Junior Bundeswettbewerb — Voting App",
      techStack: ["Figma", "Design Thinking", "Mobile"],
      description:
        "Designed a digital engagement layer for a national student company competition: a voting app where event guests could virtually invest in participating startups. Delivered as a fully interactive Figma prototype.",
    },
  ],
} as const;