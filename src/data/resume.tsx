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
    "Experienced in Python and Django backend development, with a focus on SaaS platforms, RESTful APIs, and multi-tenant systems. Skilled in analyzing requirements, designing features, and independently developing functionality within existing systems. Experienced in Django automated testing, Node.js product integration, and AWS cloud deployment and maintenance. Also leverage AI-assisted tools for frontend code modifications and feature development, with the ability to integrate and maintain systems across different technology stacks.",
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
      href: "https://www.dhc.com.tw/m/?Lang=zh-tw",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Senior Software Engineer",
      logoUrl: "resume/work/dhc.png",
      start: "August 2024",
      end: "Present",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 12px;">
            <strong>Backend Development & System Integration</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                Independently handle feature requirement analysis, technical design, and implementation within an existing Django-based multi-tenant SaaS architecture. Apply modular design to support client-specific customization and reduce code duplication across tenants.
              </li>
              <li style="margin-bottom: 8px;">
                Develop core APIs for account management, one-time password (OTP) authentication, and access control, handling battery diagnostic data submitted by App and related business workflows.
              </li>
              <li style="margin-bottom: 8px;">
                Develop and maintain over 150 Django backend automated tests, primarily unit tests, to validate system functionality and multi-tenant logic.
              </li>
              <li style="margin-bottom: 8px;">
                Design and implement a data archiving mechanism to migrate eligible historical records from primary tables to archive tables, reducing the workload on primary tables and improving query performance.
              </li>
              <li style="margin-bottom: 8px;">
                Develop data analytics features to aggregate system data and provide statistical charts for users to review relevant information.
              </li>
              <li style="margin-bottom: 8px;">
                Implement a Proxy Forward mechanism during the legacy-to-new system migration to facilitate data transmission between existing and new systems.
              </li>
              <li style="margin-bottom: 8px;">
                Integrate and maintain five client-specific Node.js projects, handling bug fixes and feature updates for App battery diagnostic data ingestion workflows.
              </li>
              <li style="margin-bottom: 8px;">
                Design, develop, and maintain an internal SLA monitoring system to calculate SLA compliance rates and provide APIs for querying monitoring results.
              </li>
              <li style="margin-bottom: 8px;">
                Leverage AI-assisted development tools to modify and develop Vue.js frontend features, integrating the changes into existing systems.
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 12px;">
            <strong>Cloud Deployment & Operations (DevOps)</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                Build and maintain AWS infrastructure for a multi-tenant SaaS platform, integrating services such as Elastic Beanstalk, RDS, CloudFront, Route 53, SNS, and SES.
              </li>
              <li style="margin-bottom: 8px;">
                Conduct system load testing using JMeter and optimize AWS architecture and resource allocation based on test results.
              </li>
              <li style="margin-bottom: 8px;">
                Manage version upgrades and maintenance for AWS services, including Elastic Beanstalk, Lambda, OpenSearch, and ElastiCache.
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 8px;">
            <strong>Information Security & Internal Operations</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                Participate in ISO 27001-related information security activities, monitor emerging security vulnerabilities, report findings for team discussion, and assist with privileged account inventory and registration.
              </li>
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
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 12px;">
            <strong>Logistics Integration Platform Development</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                Independently developed a Django-based logistics integration platform that unified the delivery lifecycles of multiple logistics providers and exposed standardized Django REST APIs, simplifying logistics service integration for downstream systems.
              </li>
              <li style="margin-bottom: 8px;">
                Integrated billing data and payment request workflows from multiple logistics providers, supporting the business team with reconciliation and payment processing while reducing manual data preparation.
              </li>
              <li style="margin-bottom: 8px;">
                Implemented asynchronous processing using Python's async/await syntax in Django, improving API response times by moving suitable operations out of synchronous request workflows.
              </li>
              <li style="margin-bottom: 8px;">
                Implemented background scheduled tasks using django-q to automatically synchronize shipment statuses and notify downstream systems, reducing status update delays.
              </li>
              <li style="margin-bottom: 8px;">
                Implemented secondary verification mechanisms for password reset and email address update workflows to enhance account security.
              </li>
              <li style="margin-bottom: 8px;">
                Built an internal administration interface using Django Templates and CoreUI.
              </li>
              <li style="margin-bottom: 8px;">
                Created API documentation and HTTP request examples to explain API usage and integration workflows, facilitating integration by frontend developers and other systems.
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 8px;">
            <strong>Cloud Deployment & Operations (DevOps)</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                Built and deployed application services using Docker and AWS Copilot, and managed cloud resources including AWS RDS, ECS, ECR, CodePipeline, Route 53, and ACM.
              </li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      company: "Ponddy Education Taiwan Ltd.",
      href: "#",
      badges: ["Out of Business"],
      location: "Taipei, Taiwan",
      title: "Software Engineer",
      logoUrl: "resume/work/ponddy.png",
      start: "August 2022",
      end: "March 2023",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            Collaborated with the team to analyze system requirements and developed and maintained over 50 RESTful APIs for web and App, including API documentation and integration examples.
          </li>
          <li style="margin-bottom: 8px;">
            Participated in the planning, refactoring, and feature development of four projects, covering existing feature enhancements, third-party service integrations, and improvements to code maintainability and readability.
          </li>
          <li style="margin-bottom: 8px;">
            Developed Chinese language processing features using regular expressions to post-process Chinese word segmentation results and part-of-speech tags, and used Python Requests to retrieve Chinese vocabulary data for statistical analysis.
          </li>
          <li style="margin-bottom: 8px;">
            Maintained 12 Django-based language learning platforms and two internal Chrome extensions, developing new features, resolving user-reported issues, and handling data inconsistencies.
          </li>
          <li style="margin-bottom: 8px;">
            Established CI/CD pipelines using CircleCI and improved automated build and deployment workflows for three existing products.
          </li>
          <li style="margin-bottom: 8px;">
            Maintained AWS services including EC2, S3, Elastic Beanstalk, RDS, SNS, and SES to support existing product operations and deployment requirements.
          </li>
        </ul>
      `,
    },
    {
      company: "Freedom Systems Inc.",
      href: "https://www.freedom.net.tw/",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Engineering Intern",
      logoUrl: "resume/work/freedom.png",
      start: "February 2022",
      end: "July 2022",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            Provided IT support and system maintenance for enterprise clients, troubleshooting hardware, operating system, and software issues, and communicating with clients to identify problems and perform initial diagnostics.
          </li>
          <li style="margin-bottom: 8px;">
            Assisted in managing Microsoft 365 (O365), Active Directory (AD), file servers, and enterprise wireless networks.
          </li>
          <li style="margin-bottom: 8px;">
            Served as an intern team leader, assisting with task allocation, team coordination, and daily operations.
          </li>
        </ul>
      `,
    },
    {
      company: "Ponddy Education Taiwan Ltd.",
      href: "#",
      badges: [],
      location: "Taipei, Taiwan",
      title: "Software Engineering Intern",
      logoUrl: "resume/work/ponddy.png",
      start: "June 2020",
      end: "June 2021",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            Developed a real-time interactive response system (IRS) using Django REST Framework and Django Channels, delivering 22 features and 98 test cases.
          </li>
          <li style="margin-bottom: 8px;">
            Developed API End-to-End (E2E) automated test scripts and assisted in maintaining API tests across four projects.
          </li>
          <li style="margin-bottom: 8px;">
            Containerized services using Docker and established automated build and deployment pipelines with CircleCI.
          </li>
          <li style="margin-bottom: 8px;">
            Performed manual product testing and feature workflow validation, and assisted in guiding new testers through product testing.
          </li>
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
      start: "March 2023",
      end: "April 2025",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;">Backend Development and Maintenance for the Taiwan Hakka Corpus System
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">Collaborated with the team to implement multiple REST APIs and maintain comprehensive documentation.</li>
              <li style="margin-bottom: 8px;">Integrated Google reCAPTCHA v3 to enhance verification security.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">Backend Development and Maintenance for a Taxi Dispatch System: Integrated upstream order sources and dispatched orders to partner taxi companies or in-house drivers.
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">Collaborated with the team to implement multiple REST APIs and maintain comprehensive documentation.</li>
              <li style="margin-bottom: 8px;">Customized Django Admin to support bulk order updates, driver assignment, and import/export of upstream and downstream orders.</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">Migrated an existing product to an AWS EC2 instance.</li>
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
