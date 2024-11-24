import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LanguagesIcon, SquareGanttChartIcon} from "lucide-react";

export const DATA = {
  name: "Elaine Yeh",
  initials: "Elaine",
  url: "https://elainehub.com",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    "Over 2 years of backend development experience, specializing in backend APIs, Chatbots, and cloud services.",
  summary:
    "I am passionate about learning and exploring new things, enjoying the sense of achievement throughout the process, and eager to share knowledge. I thrive under pressure, excel in communication and collaboration, and am not afraid to step out of my comfort zone to solve challenges.",
  avatarUrl: "resume/me.jpg",
  skills: [
    [
      "Python",
      "CSS",
      "JavaScript",
      "HTML",
      "Markdown"
    ],
    [
      "Django"
    ],
    [
      "Automated Testing",
      "Gunicorn",
      "Nginx",
      "CircleCI",
      "Swagger",
      "Websocket"
    ],
    [
      "PostgreSQL",
      "MySQL",
      "Redis"
    ],
    [
      "Docker",
      "Dockerfile",
      "Docker Compose",
      "AWS",
      "Linux",
      "Git",
      "Jira"
    ],
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/chinese", icon: LanguagesIcon, label: "Chinese" },
    { href: "/blog", icon: NotebookIcon, label: "Note"},
  ],
  contact: {
    email: "elaine81206@gmail.com",
    tel: "+886978540921",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/elaineyeh",
        icon: Icons.github,
        navbar: true,
      },
      GitLab: {
        name: "GitLub",
        url: "https://gitlab.com/elaineyeh",
        icon: Icons.gitlab,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:elaine81206@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      CakeResume: {
        name: "CakeResume",
        url: "https://www.cakeresume.com/s--1DiXuySTXZa-bHugHfKRUQ--/elaineyeh",
        icon: SquareGanttChartIcon,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "DHC Specialty Corp.",
      href: "https://www.dhc.com.tw/m/?Lang=en",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Software Senior Engineer",
      logoUrl: "resume/work/dhc.png",
      start: "August 2024",
      end: "Present",
      description:
        "In backend development, I performed 114 integration tests using the Django-Tenant architecture and developed 11 APIs. I optimized database performance by archiving tables and created custom Django commands for data validation and document generation, reducing manual tasks. I also maintained 5 Node.js products, developed a GitLab member validation program, and designed the company’s SLA system to monitor compliance and provide API access to results. <br>For DevOps, I planned and executed JMeter stress tests and optimized AWS configurations to improve performance.",
    },
    {
      company: "Sysfeather Co.",
      badges: [],
      href: "https://www.sysfeather.com/zh-TW",
      location: "Taipei, Taiwan",
      title: "Python/Django Backend Engineer",
      logoUrl: "resume/work/sysfeather.png",
      start: "April 2023",
      end: "July 2024",
      description:
        "In backend development, I independently developed a logistics integration system using Django REST Framework, integrating multiple logistics APIs and creating a Dashboard. I implemented two-step verification, optimized API response times, and reduced manual work. <br>For DevOps, I wrote API documentation and Dockerfiles, used AWS Copilot for cloud setup, and maintained AWS services like RDS and ECS.",
    },
    {
      company: "Ponddy Education Taiwan Ltd.",
      href: "#",
      badges: ["Ceased Operations"],
      location: "Taipei, Taiwan",
      title: "Software Engineer",
      logoUrl: "resume/work/ponddy.png",
      start: "August 2022",
      end: "March 2023",
      description:
        "In backend development, collaborated with the team to develop and document over 50 APIs for Web and Mobile applications, including feature development, third-party service integration, and system maintenance. Involved in planning and refactoring four projects, with experience in using Regular Expressions for Chinese word segmentation, utilizing Requests for data statistics, and managing 12 Django projects and 2 Chrome extensions for bug fixing and system enhancements. <br>In DevOps, established and optimized CI/CD processes using CircleCI, maintained AWS services such as EC2, S3, and Elastic Beanstalk, and created comprehensive API documentation to facilitate frontend development.",
    },
    {
      company: "Freedom Systems Inc.",
      href: "https://www.freedom.net.tw/en/",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Trainee Engineer",
      logoUrl: "resume/work/freedom.png",
      start: "February 2022",
      end: "July 2022",
      description:
        "Managed infrastructure and hardware/software, providing technical support and maintaining systems like Microsoft O365. Excelled in client communication and problem-solving, and led an intern team.",
    },
    {
      company: "Ponddy Education Taiwan Ltd.",
      href: "#",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Software Intern",
      logoUrl: "resume/work/ponddy.png",
      start: "June 2020",
      end: "June 2021",
      description:
        "Led the establishment and optimization of CI/CD processes, containerized services, and independently developed the IRS communication system with 22 features and 98 Integration tests. Collaborated on Integration API testing and maintained multiple projects while guiding testers through manual testing.",
    },
  ],
  freelance: [
    {
      company: "Xkernel",
      href: "",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Backend Engineer",
      logoUrl: "resume/work/xkernel.png",
      start: "",
      end: "",
      description:
        "I developed and maintained the backend system for the Taiwan Hakka Language Corpus, contributed to the backend development of the Chitchat system, and migrated existing products to EC2 to enhance scalability and performance.",
    }
  ],
  education: [
    {
      school: "National Taipei University of Business",
      href: "https://www.ntub.edu.tw/",
      degree: "Bachelor's Degree of Information Management (2-Year Technical Program)",
      logoUrl: "resume/education/ntub.png",
      badges: ["Second in Class"],
      start: "2020",
      end: "2022",
    },
    {
      school: "National Taipei University of Business",
      href: "https://www.ntub.edu.tw/",
      degree: "Associate Degree of Information Management (5-Year Junior College Program)",
      logoUrl: "resume/education/ntub.png",
      badges: ["First in Class"],
      start: "2015",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Finance Track",
      href: "#",
      dates: "Sep 2023 - Jan 2024",
      active: true,
      description:
        "This personal side project integrates a website and LINE Bot for quick expense logging with later detail completion. Users can view analysis online, while Django-q handles reminders and database backups via email. The frontend is built with Django Template and a free template.",
      technologies: [
        "Django",
        "Django-q",
        "Docker Compose",
        "PostgreSQL",
        "JavaScript",
        "Gunicorn",
        "Nginx",
        "AWS EC2",
        "Line Bot",
      ],
      links: [
        {
          type: "Website",
          href: "https://elaineyeh.github.io/portfolio/blog/finance",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "resume/project/finance_track.png",
      video:
        "",
    },
    {
      title: "ShortURL",
      href: "#",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "Developed a personal URL shortening service as a side project, featuring the creation, querying, and redirection of short URLs. Utilized Django Template and Bootstrap for a clean and intuitive frontend interface.",
      technologies: [
        "Django",
        "Docker Compose",
        "PostgreSQL",
        "Bootstrap",
        "Nginx",
        "AWS EC2",
        "AWS ECS",
        "AWS CodePipeline",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/elaineyeh/shorturl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "resume/project/shorturl.png",
      video: "",
    },
    {
      title: "Book",
      href: "#",
      dates: "Jun 2018 - Apr 2024",
      active: false,
      description:
        "Developed an online bookstore for members to purchase books easily. Handled database design, backend, and front-end development using Django, with the database in Docker containers. Implemented RWD for a user-friendly interface and deployed the project to AWS EC2 via a CI/CD pipeline.",
      technologies: [
        "Django",
        "Docker Compose",
        "PostgreSQL",
        "Bootstrap",
        "Gunicorn",
        "Nginx",
        "CircleCI",
        "AWS EC2",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/elaineyeh/Book-store",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "resume/project/book-store.png",
      video: "",
    },
    {
      title: "UB 醬",
      href: "#",
      dates: "Jun 2021 - Nov 2021",
      active: false,
      description:
        "Developed a campus bot with nine key features, guiding users through a finite state machine and supporting intuitive natural language queries. The system is modularly designed, allowing for easy adaptation to platforms like LINE Bot or Telegram Bot in the future.",
      technologies: [
        "Django",
        "FastAPI",
        "PostgreSQL",
        "AWS EC2",
        "Messenger Bot"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/elaineyeh/NTUB-fbbot",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Video",
          href: "https://drive.google.com/file/d/1MttpRc3DLF68H1Gsnt9_kTBdNH6RaUey/view",
          icon: <Icons.film className="size-3" />,
        },
      ],
      image: "resume/project/ub.png",
      video: "",
    },
  ],
  hackathons: [
    // {
    //   title: "",
    //   dates: "",
    //   location: "",
    //   description:
    //     "",
    //   image:
    //     "",
    //   mlh: "",
    //   links: [],
    // },
  ],
} as const;
