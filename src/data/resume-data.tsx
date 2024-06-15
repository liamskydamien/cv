import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Liam Hess",
  initials: "LH",
  location: "Bonn, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Bonn",
  about:
    "Digital Product Manager & Designer.",
  summary:
    "I'm a Product Manager & Designer. I have 2 years of product & project management experience, aswell as 4 years of design experience. During my time I worked together with multiple teams and clients across the globe, while living a nomadic lifestyle.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104833589?v=4",
  personalWebsiteUrl: "https://traveldee.net",
  contact: {
    email: "liam.s.d.hess@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/liamskydamien",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/liam-hess/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Applied Sciences Bonn-Rhein-Sieg (HBRS)",
      degree: "Bachelor's Degree in Business Information Systems",
      start: "2021",
      end: "2024",
    },
    {
      school: "Vietnamese German University (VGU)",
      degree: "Exchange Semester",
      start: "2023",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Zeiss Group",
      link: "https://zeiss.com",
      badges: ["Remote"],
      title: "App Management",
      logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:
        "As an App Manager for Zeiss I supported the Team in various tasks: "
        + "Managing the App Development Team, "
        + "Designing the User Interface for the Zeiss Secacam App & Web-App, "
        + "Managing the App Development Process, "
        + "Took a leading role for various features and projects"
    },
    {
      company: "ZDH-Zert GmbH",
      link: "https://zdh-zert.de",
      badges: ["Hybrid"],
      title: "Working Student: Projectmanagement & Marketing",
      logo: ParabolLogo,
      start: "2022",
      end: "2023",
      description:
        "As a working student at ZDH-Zert I supported the Team in various tasks: "
      + "Supporting the Project-Manager integrating a new Software to automate the business processes, "
      + "While also supporting the Marketing Department by managing and creating a new website for the company and managing the monthly newsletter."
    },
    {
      company: "Freelancing / Selfemployed",
      link: "",
      badges: ["Remote"],
      title: "Webdesign & Development",
      logo: ConsultlyLogo,
      start: "2020",
      end: "2022",
      description:
        "As a freelancing web-designer and developer I created websites for various clients. I created the websites using WordPress CMS."
    },
    {
      company: "VenTrade GmbH",
      link: "https://www.ventrade.de/",
      badges: ["Hybrid"],
      title: "Working Student: Customer Service",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description:
        "As a working student at VenTrade I supported the Customer Service Team. I took care of our customers via email and helped them with problems. I also created a smart ticket process in JIRA to make the process of returning cameras more efficient."
    },
  ],
  skills: [
    "Product Management",
    "Figma",
    "UI/UX Design",
    "Requirements Engineering",
    "Programming (Java, React, TypeScript)"
  ],
  projects: [
    {
      title: "Zeiss Mobile-App",
      techStack: [
        "Lead App-Designer",
        "Feature-/Productowner",
      ],
      description:
        "I designed the User Interface for the Zeiss Secacam App, based on the original Secacam App. I also took a leading role in the development of various features throughout the app.",
      logo: ParabolLogo,
      link: {
        label: "zeiss.com",
        href: "https://play.google.com/store/apps/details?id=de.zeiss.cop.caledonia&hl=en_US",
      },
    },
    {
      title: "Zeiss Web-App",
      techStack: [
        "Lead Designer",
        "Productowner",
        "Projectmanager",
        "QA-Tester"
      ],
      description:
        "I designed the the Zeiss Secacam Web-App. I also lead the development of the Web-App, managed the development process and worked together with a team of 4 highly skilled developers.",
      logo: EvercastLogo,
      link: {
        label: "zeiss.com",
        href: "https://secacam-webapp.zeiss.com/",
      },
    },
    {
      title: "FreedomCalc",
      techStack: [
        "University Project",
        "TypeScript",
        "Financial Planning",
        "React",
        "Tailwind CSS",
      ],
      description: "A financial planning tool based on the concept of lifelines. Coded during my time at VGU. Received the best possible grade 1.0.",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://github.com/liamskydamien/freedom-calc",
      },
    },
    {
      title: "Aldavia",
      techStack: ["University Project", "Java", "Springboot", "Vaadin"],
      description:
        "During my time at HBRS I created together with 5 other students \"Aldavia\" a web-plattform for local companies to recrut students for internships, freelancing jobs and full-time positions.",
      logo: MonitoLogo,
      link: {
        label: "github.com",
        href: "https://github.com/liamskydamien/Aldavia",
      },
    }
  ],
} as const;
