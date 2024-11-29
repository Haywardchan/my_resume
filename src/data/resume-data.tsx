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
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Chan Ming Hei,  Hayward",
  initials: "HC",
  location: "HKUST, Hong Kong",
  locationLink: "https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%A7%91%E6%8A%80%E5%A4%A7%E5%AD%B8/@22.3374896,114.260824,17z/data=!3m1!4b1!4m6!3m5!1s0x3404046bc19c7e15:0x2bedd58f9cf841be!8m2!3d22.3374847!4d114.2633989!16zL20vMDFucHYz?entry=ttu",
  about:
    "Computer Science Undergraduate that aims to become a Software Engineer for social good. \
    Passionate about learning new technologies, practices and methodologies through hands-on experience.",
  avatarUrl: "/Avatar.jpeg",
  // personalWebsiteUrl: "",
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/HaywardChan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ming-hei-chan-58759b266/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Hong Kong University of Science and Technology",
      degree: "Bachelor's Degree in Computer Science with an extended major in Artificial Intelligence and a minor in Mathematics",
      start: "2021",
      end: "2025",
      status: ["Pursuing", "Year 4"],
    },
  ],
  work: [
    {
      company: "Google Developer Group On Campus HKUST",
      link: "https://gdg.community.dev/gdg-on-campus-hong-kong-university-of-science-and-technology-hong-kong-hong-kong/",
      badges: ["Core Member"],
      title: "Technical Core Member",
      logo: ConsultlyLogo,
      start: "Nov 2024",
      end: null,
      description:
        "",
    },
    {
      company: "FireAlert Limited",
      link: "https://firealert.com.hk/",
      badges: ["Full Time", "Internship"],
      title: "AIoT Web/App Developer",
      logo: ConsultlyLogo,
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Utilization of RAG and Generative AI for Financial Asset Management.\
        Built a fully deployed Web/ App using React Native, and the latest LLM and AI Agent frameworks. \
        Redux and Tailwindcss are used to support centralized state management and advanced styling.\
        Integrated backend servers with Express.js, and Flask, and connected RestAPIs between applications.\
        Integrated PostgreSQL for data storage with Redis for data caching.",
    },
    {
      company: "USThing",
      link: "https://usthing.xyz/",
      badges: ["Member"],
      title: "App Developer",
      logo: ParabolLogo,
      start: "Apr 2024",
      end: null,
      description:
        "Rebuilt the latest version of all-in-one HKUST application for university students in React Native with mobile application development experts.",
    },
    {
      company: "TradeMonday",
      link: "https://trademonday.com/",
      badges: ["Full Time", "Internship"],
      title: "Data Analyst",
      logo: ClevertechLogo,
      start: "Jun 2023",
      end: "Sep 2023",
      description:
        "Created An fully automated ETL workflow from scraping to analyzing Ikea products and AWS cloud management, \
        including product pricing comparison with other competitor companies.\
        Besides, a fully functional dashboard is created in powerBI to display data insights.",
    },
  ],
  skills: [{
    title: "Programming Language",
    variant: "default",
    badges: [
      "Python",
      "TypeScript",
      "React Native",
      "C",
      "C++",
      "Scala",
      "Kotlin",
      "Dart",
      "HTML",
      "CSS",
      "Java",
      "Git CLI",
    ]
  },
  {
    title: "Frameworks",
    variant: "default",
    badges: [
      "React.js",
      "Bootstrap",
      "React Native",
      "Tailwindcss",
      "Node.js",
      "Next.js",
      "Shadcn",
      "Flutter",
      "Express.js",
      "nginx",
      "crewAI",
      "RestAPI",
    ]
  },
  {
    title: "Libraries",
    variant: "default",
    badges: [
      "Keras",
      "Tensorflow",
      "Pytorch",
      "Beautiful Soup",
      "Flask",
      "Requests",
      "Numpy",
      "Pandas",
      "Gifted Charts",
    ]
  },
  {
    title: "Database/ Cloud",
    variant: "default",
    badges: [
      "PostgreSQL",
      "Redis",
      "AWS S3 Buckets",
      "AWS EC2",
      "GitHub",
      "AWS Cloud Practitioner"
    ]
  },
  ],
  projects: [
    {
      title: "My Resume 2.0",
      techStack: [
        "Side Project",
        "Web",
        "TypeScript",
        "React",
        "Node.js",
        "Shadcn",
        "Tailwind CSS",
        "Next.js",
        "Vercel",
      ],
      description:
        "The resume page built to showcase my side projects, experience and expertise in application development and machine learning",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/Haywardchan/my_resume",
      },
      status: "completed"
    },
    {
      title: "Todo Assistant",
      techStack: [
        "Side Project",
        "Web",
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "MySQL",
        "Vercel",
        "OAuth",
        "GCP",
        "Railway"
      ],
      description:
        "The Todo Assistant is a simple web application that allows users to create and manage their tasks. \
        It is a great tool for anyone who needs to stay organized and keep track of their daily tasks.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://web-production-946d.up.railway.app/",
      },
      status: "completed"
    },
    {
      title: "FinanceGPT",
      techStack: [
        "Full Stack",
        "TypeScript",
        "React Native",
        "Node.js",
        "RestAPI",
        "Flask",
        "Express.js",
        "CrewAI",
        "GenAI",
        "Llama3",
        "Ollama",
        "RAG",
      ],
      description:
        "All in one Financial Asset Management Application for Financial Advices, \
        all-rounded monitoring of stock risk, return and more",
      logo: EvercastLogo,
      link: {
        label: "FinanceGPT",
        href: "https://github.com/Haywardchan/FinanceGPT",
      },
      status: "completed"
    },
    {
      title: "MIP Drone Search",
      techStack: [
        "In Progress",
      ],
      description: "Utilize IoT technology to efficiently search for missing MIPs \
      (Mentally Incapacitated Persons). \
      The project won Gold Award in ICT award 2022, and currently serving more than 3000 families.",
      logo: ConsultlyLogo,
      link: {
        label: "searchmissing",
        href: "https://eek123.ust.hk/searchmissing/",
      },
      status: "In Progress"
    },
    {
      title: "USThing App",
      techStack: [
        "Team Project", 
        "App", 
        "GitHub",
        "React Native", 
        "TypeScript", 
        "Ignite", 
        "MobX State Tree",
      ],
      description:
        "USThing is a student-developed all-in-one app for HKUST. \
        The team consists of passionate and talented students who work towards continually improving the app and the HKUST student community.",
      logo: MonitoLogo,
      link: {
        label: "USThing",
        href: "https://usthing.xyz/",
      },
      status: "completed"
    },
    {
      title: "DSE Neuron",
      techStack: [
        "Flutter", 
        "Python", 
        "Scraping", 
        "Beautiful Soup",   
      ],
      description:
        "An App for Hong Kong's Secondary School Students. Aims to predict university admission \
        using predicted grades and provides university admission insights.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/Haywardchan/Flutter-Applications",
      },
      status: "In Progress"
    },
    {
      title: "Expenses Tracker",
      techStack: [
        "Team Project", 
        "App", 
        "JetPack Compose",
        "Android Studio", 
        "Kotlin", 
        "Room database", 
      ],
      description:
        "A comprehensive expense-tracking solution for individuals and groups within an activity \
        that lets users record their expenses and facilitates group payments by simplifying debt calculations. ",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/Haywardchan/Budgeting_Android_App",
      },
      status: "completed"
    },
    {
      title: "Cathay Hackathon",
      techStack: [
        "FlutterFlow", 
        "Canva", 
        "Python", 
        "Firebase",  
        "Pitching",  
      ],
      description:
        "Joined the Cathay Hackathon as the 20 finalists. Built a flight prediction application including front and backend within 24 Hours",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/xones267/hack",
      },
      status: "completed"
    },
    {
      title: "Flask Market",
      techStack: [
        "Flask", 
        "Python", 
        "Jinja", 
        "BootStrap",    
      ],
      description:
        "Built a flask market application including routings and log in system. Tried to extend that into a smart home system.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/Haywardchan/Flask_Market",
      },
      status: "completed"
    },
      {
        title: "My Resume 1.0",
        techStack: [
          "Web", 
          "Vue.js", 
          "HTML", 
          "CSS",  
        ],
        description:
          "Built a resume website as an instragram biography without any frameworks and hosted over google drive (Service ended)",
        logo: MonitoLogo,
        link: {
          label: "GitHub",
          href: "https://github.com/Haywardchan/instagram_bio_project",
        },
        status: "completed"
      },
    ],
    courses: [
    {
      title: "Comp2012H",
      techStack: [
        "Programming Assignments", 
        "C++", 
        "Pointers", 
        "Algorithms", 
        "OOP", 
        "Data Structures", 
      ],
      description:
        "Insanely Hard and Tough course for Honors students who graded A or above in Comp1021. \
        11 Programming Assignments in total, each cost for more than 10+ Hours to complete.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/Haywardchan/Comp2012H",
      },
      status: "completed"
    },
    {
      title: "Comp3031",
      techStack: [
        "Scala", 
        "Programming Assignments", 
        "Data Structures", 
        "Algorithms", 
        "OOP", 
      ],
      description:
        "Intense programming paradigm course for programming manics. \
        With 4 ridiculously hard Programming Assignments of which the mean score is around 6/10.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/Haywardchan/Functional_Programming",
      },
      status: "completed"
    },
    {
      title: "Comp3111H",
      techStack: [
        "Scala", 
        "Programming Assignments", 
        "Data Structures", 
        "Algorithms", 
        "OOP", 
      ],
      description:
        "Software Engineering course for Honors students who graded A- or above in Comp2012(H). \
        In a team of 3, we built a maze game with Software Engineering practices using Java.",
      logo: MonitoLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/dkng27/Comp3111F23G26",
      },
      status: "completed"
    },
  ]
} as const;
