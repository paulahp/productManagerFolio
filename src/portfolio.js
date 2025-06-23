/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Paula Carolina",
  title: "Hi all, I'm Paula",
  subTitle: emoji(
    "A passionate Product Manager 🚀 with over 5 years of experience leading cross-functional teams to build impactful software products. Skilled in bridging the gap between business goals and technical execution, driving product strategy, user-centered design, and agile delivery to create solutions that delight users and generate real value."
  ),
  resumeLink: "https://drive.google.com/drive/folders/1mJTnDLlsyxo4r-gcN0Wdk3QtR_cLOBvt?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/paulahp",
  linkedin: "https://www.linkedin.com/in/po-paula-carolina/?locale=en_US",
  gmail: "impaulacarolina@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE PRODUCT MANAGER DRIVING INNOVATION AND BUSINESS VALUE",
  skills: [
    emoji("🚀 Lead cross-functional teams to deliver user-centric products"),
    emoji("🎯 Define product vision, strategy, and roadmap aligned with business goals"),
    emoji("📋 Manage backlog, prioritize features, and refine user stories with agile methodologies"),
    emoji("🤝 Collaborate with stakeholders, designers, and developers to ensure high-quality delivery"),
    emoji("📊 Use data analysis and feedback to continuously improve product experience")
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Postman",
      fontAwesomeClassname: "fas fa-vials"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: false,
  schools: []
};

// Tech Stack
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Product Management & Strategy",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend / User Interface Understanding",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend / APIs",
      progressPercentage: "89%"
    },
    {
      Stack: "Agile & Scrum Methodologies",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Technical Product Owner",
      company: "Jazz Tech",
      companylogo: require("./assets/images/jazzLogo.png"),
      date: "Oct 2022 – Present · 2 yrs 9 mos",
      desc: "At Jazz Tech, a leading fintech that combines technology and banking services, I act as the bridge between technical development and business objectives for financing products. I ensure clear communication and manage the development process to deliver high-value features on time.",
      descBullets: [
        "Leadership in Communication and Alignment: promote transparent information flow across teams, stakeholders, and departments.",
        "Risk and Dependency Management: proactively identify and mitigate risks, ensuring smooth collaboration across teams and projects.",
        "Feedback and Validation: gather and analyze feedback from stakeholders and users, translating it into actionable requirements and validating features.",
        "Backlog Management and Prioritization: effectively prioritize tasks and refine technical details in user stories."
      ]
    },
    {
      role: "Quality Assurance Analyst",
      company: "Softplan",
      companylogo: require("./assets/images/softplanLogo.png"),
      date: "Feb 2021 – Nov 2021 · 10 mos",
      desc: "Softplan is a company specialized in digital solutions for Justice, Civil Construction, Public Management, and Healthcare.",
      descBullets: [
        "Reviewed and analyzed Business Rules and UX prototypes; executed usability and accessibility testing.",
        "Defined test strategies based on user stories using MindMaps.",
        "Planned and executed functional tests, reported and managed bugs.",
        "Wrote database queries using SQL, ORACLE, and DB2.",
        "Automated test scripts using Postman for REST APIs and Cypress with JavaScript.",
        "Conducted Proofs of Concept (PoCs) for technical solutions, including REST APIs and test automation, improving team efficiency."
      ]
    }
  ]
};

// Big Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of the key products and initiatives I led",
  projects: [
    {
      image: require("./assets/images/motorolaLogo.jpg"),
      projectName: "Dimo – Motorola Financing",
      projectDesc: "As the Product Owner, I led the development of the smartphone financing feature within Motorola's digital account, Dimo. Focused on financial inclusion, the product allows users to purchase devices in up to 18 installments with no credit card, fully integrated into the Hello You app.",
      footerLink: [
        {
          name: "Learn more about Dimo",
          url: "https://www.motorola.com.br/dimo"
        }
      ]
    }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "AI Product Specialist - PM3",
      subtitle: "Specialized course by PM3 on AI product development, covering prompt engineering, LLMs, RAGs, and AI strategy through recorded and live sessions with a final capstone project.",
      image: require("./assets/images/pm3Logo.png"),
      imageAlt: "PM3 AI Product Specialist Logo",
      footerLink: [
        {
          name: "Certification in progress",
          url: ""
        },
        {
          name: "More Info",
          url: "https://www.cursospm3.com.br/curso-ai-product-specialist"
        }
      ]
    },
    {
      title: "Software Testing and Quality Program (PQTS)",
      subtitle: "Comprehensive course by Júlio de Lima covering testing fundamentals, automation, exploratory testing, and software quality strategies.",
      image: require("./assets/images/julioLimaLogo.jpg"),
      imageAlt: "PQTS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://programadetestesequalidade.club.hotmart.com/public/user-certificate/107b8951-2546-4113-8d7c-49e7021b41c6/_"
        },
        {
          name: "More Info",
          url: "https://juliodelima.com.br/pqts"
        }
      ]
    },
    {
      title: "Agilizei Bootcamp - Test Automation",
      subtitle: "Hands-on bootcamp focused on web test automation with Cypress and JavaScript, covering best practices in Agile Testing and continuous integration.",
      image: require("./assets/images/agilizeiLogo.jpg"),
      imageAlt: "Agilizei Bootcamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://agilizei-bootcamp.club.hotmart.com/public/user-certificate/0860eaea-bf7f-40f8-97bb-e43c5ce35033/_"
        },
        {
          name: "More Info",
          url: "https://bootcamp.agilizei.com/"
        }
      ]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 48 98817-8758",
  email_address: "impaulacarolina@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
