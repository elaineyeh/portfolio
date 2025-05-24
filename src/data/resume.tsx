import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LanguagesIcon, SquareGanttChartIcon} from "lucide-react";

export const DATA = {
  name: "Elaine Yeh",
  initials: "Elaine",
  url: "https://elainehub.com",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    "Over 3 years of backend development experience, specializing in backend APIs, Chatbots, and cloud services.",
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
      "Django",
      "Django REST Framework",
      "django-tenants"
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
      "Gunicorn",
      "Nginx",
    ],
    [
      "AWS",
      "Linux",
      "Git",
      "CircleCI",
      "Jira"
    ],
    [
      "Automated Testing",
      "Websocket",
      "Swagger"
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
        navbar: false,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/%E6%98%B1%E5%BD%A4-%E8%91%89-66335933a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
      title: "Senior Software Engineer",
      logoUrl: "resume/work/dhc.png",
      start: "August 2024",
      end: "Present",
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">SaaS Multi-Tenant Platform Development
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">Architected and implemented a scalable, tenant-isolated SaaS platform in Django for receiving battery diagnostics from mobile apps. Designed the system with pluggable modules to support client-specific features and reduce code duplication across tenants.</li>
                  <li style="margin-bottom: 6px;">Developed APIs for core functionalities including account management, OTP authentication, and data access segregation.</li>
                  <li style="margin-bottom: 6px;">Wrote over 150 integration tests to ensure system stability under Django-Tenant architecture.</li>
                  <li style="margin-bottom: 6px;">Implemented a data archiving mechanism for legacy records to reduce database load and improve query performance.</li>
                  <li style="margin-bottom: 6px;">Developed custom Django management commands to validate data and generate documents automatically, reducing manual workload.</li>
                </ul>
              </li>
              <li style="margin-bottom: 8px;">Maintained five client-specific Node.js products for receiving battery diagnostics from mobile apps, providing bug fixes and incremental feature updates.</li>
              <li style="margin-bottom: 8px;">Developed a GitLab project audit tool to validate member permissions regularly.</li>
              <li style="margin-bottom: 8px;">Built and maintained an internal SLA monitoring system and provided APIs for internal and external systems to retrieve SLA results.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Executed JMeter performance tests and optimized AWS resource configurations.</li>
              <li style="margin-bottom: 8px;">Set up and deployed a SaaS environment with Elastic Beanstalk, CloudFront, Route 53, ALB, SNS, and SES.</li>
            </ul>
          </li>
        </ul>
      `,
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Collaborated closely with the team to translate requirements into scalable API designs and architecture decisions.</li>
              <li style="margin-bottom: 8px;">Independently built an logistics-integration platform:
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">Mapped the life-cycles of multiple carriers and unified them with Django REST Framework APIs consumed by downstream products.</li>
                  <li style="margin-bottom: 6px;">Delivered an internal dashboard with Django Template + CoreUI.</li>
                  <li style="margin-bottom: 6px;">Added two-step verification for password-reset and email-update flows.</li>
                  <li style="margin-bottom: 6px;">Employed Django-q scheduled jobs to sync carrier statuses and push instant updates, cutting lost-order / delay risk.</li>
                  <li style="margin-bottom: 6px;">Introduced async tasks that reduced API latency and improved user experience.</li>
                  <li style="margin-bottom: 6px;">Integrated multi-carrier billing Functions, automating reconciliation and invoicing and saving significant manual effort for the sales team.</li>
                  <li style="margin-bottom: 6px;">Wrote comprehensive API docs and request samples to speed up third-party integration.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Containerized services with Docker and deployed via AWS Copilot; managed RDS, ECS, ECR, CodePipeline, Route 53, ACM.</li>
            </ul>
          </li>
        </ul>
      `,
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Collaborated with the team to design and develop over 50 APIs for both web and mobile platforms, with complete documentation.</li>
              <li style="margin-bottom: 8px;">Planned, refactored, and implemented features across four projects, including third-party service integration and improving code maintainability and readability.</li>
              <li style="margin-bottom: 8px;">Developed various API features beyond CRUD, such as:
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">Used regular expressions to post-process Chinese word segmentation and part-of-speech tagging.</li>
                  <li style="margin-bottom: 6px;">Built web crawlers with requests to analyze Mandarin word lists and generate statistical summaries.</li>
                </ul>
              </li>
              <li style="margin-bottom: 8px;">Developed and maintained 12 Django-based language learning platforms and 2 internal-use Chrome extensions, delivering new features while resolving user-reported issues and fixing data inconsistencies.</li>
              <li style="margin-bottom: 8px;">Wrote API documentation and sample HTTP requests for the frontend team, streamlining development and integration.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Established CI/CD pipelines using CircleCI and revamped legacy pipelines for three older products.</li>
              <li style="margin-bottom: 8px;">Maintained AWS services including EC2, S3, Elastic Beanstalk, RDS, SNS, and SES.</li>
            </ul>
          </li>
        </ul>
      `,
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
          <li style="margin-bottom: 10px;">Provided IT support and system maintenance for client environments, including hardware, OS, and software troubleshooting.</li>
          <li style="margin-bottom: 10px;">Managed O365, Active Directory, file servers, and enterprise-level wireless networks.</li>
          <li style="margin-bottom: 10px;">Communicated directly with clients to understand and resolve technical issues.</li>
          <li style="margin-bottom: 10px;">Led intern team in coordination tasks.</li>
        </ul>
      `,
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Built a real-time Interactive Response System (IRS) — a live Q&A tool used by teachers in classrooms — using Django REST Framework and Django Channels, implementing 22 features with 98 tests.</li>
              <li style="margin-bottom: 8px;">Developed E2E API automation test scripts and maintained four projects.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">Used Docker and CircleCI to containerize services and streamline CI/CD processes.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">Led manual testing efforts and trained junior testers in testing tools and flows.</li>
        </ul>
      `,
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
          <li style="margin-bottom: 10px;">Developed and maintained backend services for a Taiwanese Hakka language corpus system
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">Collaborated with the team to implement multiple Web APIs and maintain comprehensive documentation</li>
              <li style="margin-bottom: 8px;">Integrated Google reCAPTCHA v3 to enhance security during user verification</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">Developed backend APIs for an English-speaking learning system.</li>
          <li style="margin-bottom: 10px;">Maintained and enhanced a taxi dispatch system that receives and consolidates order information from upstream vendors, then assigns orders to downstream partners or in-house taxi drivers
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">Developed and documented multiple Web APIs based on team requirements</li>
              <li style="margin-bottom: 8px;">Customized Django Admin interfaces to support bulk driver assignment and order import/export from upstream vendors</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">Migrated legacy products to AWS EC2 for improved deployment and scalability</li>
        </ul>

      `,
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
        "HTML",
        "CSS",
        "JavaScript",
        "Gunicorn",
        "Nginx",
        "AWS EC2",
        "AWS Route53",
        "LineBot",
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
        "HTML",
        "CSS",
        "JavaScript",
        "Nginx",
        "AWS EC2",
        "AWS ECR",
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
        "HTML",
        "CSS",
        "JavaScript",
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
