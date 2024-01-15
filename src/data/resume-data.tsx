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
  name: "Akshat Mittal",
  initials: "AM",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/San+Francisco,+CA/@37.7576928,-122.4787994,13z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu",
  about:
    "Engineering @ Poly",
  summary:
    "After graduating from UC San Diego with a B.S. in Math and Computer Science in December 2023, I have joined Poly as a SWE (ML Ops) intern. My past experiences include Amazon (ads to be specific) and smaller supply chain orgs.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",

  education: [
    {
      school: "Univesity of California, San Diego",
      degree: "Bachelor's of Science in Mathematics and Computer Science with a minor in Supply Chain Management",
      start: "09/2019",
      end: "12/2023",
    },
  ],

  classes: [
    "Computer Systems",
    "Advanced Data Structures",
    "Data Science in Practice",
    "Statistical Methods",
    "Algo Design and Analysis",
    "Programming Languages",
    "Numerical Analysis",
    "Supervised Machine Learning",
    "Software Engineering",
    "Modern Algebra",
    "Modern Cryptography",
    "Web Client Languages",
    "Mathematical Reasoning",
    "Modern Applied Algebra",
    "Theory of Computability",
    "Implementation of Data Structures",
    "Advanced Probability",
    "Graph Theory",
    "Multivariable Calculus",
    "Vector Calculus",
    "Linear Algebra",
    "Microeconomics",
    "Econometrics",
    "Game Theory",
    "Making of the Modern World",
    "Innovation and Tech Strategy",
    "Accounting",
    "Business Project Management",
    "Negotiations",
    "Asian Art",
    "East Asian Thought in Comparative Perspective",
    "Contemporary South Asia",
    "Minds and Brain"
  ],
  
  contact: {
    email: "a1mittal@ucsd.edu",
    tel: "6199958469",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AkshatMittal7",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshatmittal15/",
        icon: LinkedInIcon,
      },
      /*
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
      */
    ],
  }, 
  work: [
    {
      company: "Poly",
      link: "https://withpoly.com/",
      badges: ["San Francisco, CA"],
      title: "Software Engineering (ML Ops) Intern",
      logo: ParabolLogo,
      start: "01/2024",
      end: "Present",
      description:
        "Working on building the future of cloud storage!",
      tech: ["Rust", "Python", "Typescript"]
    },

    {
      company: "Amazon",
      link: "https://www.amazon.com/",
      badges: ["New York, NY"],
      title: "Software Developement Engineer Intern",
      logo: ParabolLogo,
      start: "06/2022",
      end: "09/2022",
      description:
        "As a part of the Firebird team within Amazon Ads, I developed a web tool that streamlined the diagnostics for sponsored product widgets on Amazon.com. This tool autonomously collected detailed request and response data during page loads, organized it into JSON files, and uploaded it to an AWS S3 bucket. Leveraging the Harmony platform, an internal Amazon tool, I crafted an application to retrieve these JSON documents and consolidate them into an audit interface. To round off this ecosystem, I integrated a Tampermonkey script button on Amazon.com, enabling a quick transition for users to this audit interface.",
      tech: ["JS","AWS", "Java", "React", "Node.js","HTML/CSS", "Docker/Containerization","CI/CD","Tampermonkey","Harmony","Amazon CloudFront","Amazon IAM","Amazon CloudWatch","Webhooks"],
    },

    {
      company: "AJMS Global Consulting",
      link: "https://www.ajmsglobal.com/",
      badges: ["Dubai UAE"],
      title: "Research Intern",
      logo: ClevertechLogo,
      start: "07/2021",
      end: "09/2021",
      description:
        "As the lead of the research team, I orchestrated a comprehensive study on the viability of Islamic Finance in today's financial landscape. This entailed an extensive analysis of key metrics within Islamic banks, such as capital adequacy and earning strength. Through the application of advanced regression and graphical analysis, we uncovered a notable trend: the enhancement of asset quality in Islamic Finance. This breakthrough was a result of meticulous data interpretation and strategic use of analytical tools.",
      tech: ["Data Analysis", "Regression and Graphical Analysis", "Financial Analysis", "Statistical Software"],
    },
    {
      company: "UC San Diego",
      link: "https://ucsd.edu/",
      badges: ["La Jolla, CA"],
      title: "Supplemental Instruction Leader",
      logo: JojoMobileLogo,
      start: "09/2021",
      end: "03/2022",
      description:
        "As a leader in discussion sessions for Math 20B and Math 20C, alongside a graduate student TA, I collaborated with various professors to enhance the learning experience. My responsibilities included designing and developing worksheets, as well as guiding students through these during weekly sessions. This hands-on approach and commitment to student understanding were reflected in the impressive 95% positive feedback I received from the students, underscoring the effectiveness of my teaching and support methods.",
      tech: ["Leadership and Collaboration", "Curriculum Development", "Teaching and Mentorship", "Communication"],
    },
    {
      company: "Undergrad. Economics Society",
      link: "https://ues.ucsd.edu/",
      badges: ["La Jolla, CA"],
      title: "VP Tech Ops",
      logo: NSNLogo,
      start: "09/2020",
      end: "06/2021",
      description: "I designed and implemented a novel Python course that uniquely intertwined programming concepts with economics and finance. This innovative approach resonated with our audience, successfully engaging 90% of our members. Furthermore, I played a pivotal role in increasing applications by 50% compared to the previous cycle. This was achieved through a strategic redesign of our recruiting process, coupled with active engagement in recruitment activities. My efforts not only enhanced the course's appeal but also significantly boosted participation and interest in our program.",
      tech: ["Recruitment and Marketing", "Curriculum Development", "Communicatio and Outreach"],
    },
  ],
  skills: [
    "Python",
    "Java",
    "C/C++",
    "C#",
    "Objective-C",
    "Go",
    "R",
    "MATLAB",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "AngularJS",
    "Spring",
    "NestJS",
    "Node.js",
    "MongoDB",
    "FastAPI",
    "TCP/IP",
    "RESTful API",
    "Swift",
    "UIKit",
    "SwiftUI",
    "Core Data",
    "Core Animation",
    "Core Graphics",
    "CocoaPods",
    "Kotlin",
    "Android SDK",
    "Android Studio",
    "Gradle",
    "XML",
    "Git",
    "Google Cloud Platform",
    "VS Code",
    "PyCharm",
    "IntelliJ",
    "Unity",
    "SQL",
    "Wireshark",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "PyQt",
    "AWS",
    "Docker",
    "Kubernetes"
  ],

  Societies: [
    "Lumnus Consulting",
    "Undergrad Economics Society",
    "Pi Kappa Phi Fraternity",
    "Poker Club",
    "ACM",
    "Surf Club",
    "Undergrad Investment Society"
  ],

  projects: [
    {
      title: "Social Compass",
      techStack: [
        "Android Studio",
        "Java"
      ],
      description: "Android application facilitating real-time location tracking among friends through unique custom alphanumeric codes. Integrates location services to sync user positions with a SQL server and boasts a user-friendly interface featuring map navigation, dynamic friend icons, and live location update timestamps.",
      logo: ConsultlyLogo,
      link: {
        label: "social compass github",
        href: "https://github.com/CSE-110-Winter-2023/cse-110-project-cse-110-team-31",
      },
    },
    {
      title: "Used Car Valuation Algorithm",
      techStack: ["Python","Pandas"],
      description:
        "Machine Learning algorithm that ascertains the market value of pre-owned vehicles, utilizing a dataset encompassing diverse specifications. Techniques include applying regression models and gauging their performance using metrics like Mean Squared Error (MSE) and r-squared score. RandomForest and Bagging Regressors indicate a remarkable 93% accuracy.",
      logo: MonitoLogo,
      link: {
        label: "another github",
        href: "https://github.com/AkshatMittal7/Car-Prediction-Project",
      },
    },
    {
      title: "Social Impact Analysis on Admissions and Police Calls",
      techStack: ["Python","Jupyter Notebook"],
      description:
        "Utilized Python's Pandas module to analyze gender discrimination in college admissions and COVID-19's impact on police call patterns in San Diego. Scrutinized enrollment trends with statistical tests, revealing shifts in admission standards, and applied data visualization to quantify and explain changes in police call types during the pandemic.",
      logo: JarockiMeLogo,
      link: {
        label: "one more",
        href: "https://github.com/AkshatMittal7/SDPD-and-College-Project/commit/573f327930f267c32ec89aedc0a537e420101536",
      },
    }
  ],
} as const;
