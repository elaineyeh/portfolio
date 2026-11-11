import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LanguagesIcon, SquareGanttChartIcon } from "lucide-react";

export const DATA = {
  name: "葉昱彤",
  initials: "Elaine",
  url: "https://elainehub.com",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    "3 年以上後端開發經驗，包含後端 API、Chatbot 與雲端服務相關經驗，以有更多實戰經驗為目標持續學習。",
  summary:
    "具備 Python、Django 後端系統開發經驗，專注於 SaaS 平台、RESTful API 及多租戶系統相關功能開發。熟悉既有系統下的需求分析、功能設計與獨立開發，具備 Django 自動化測試、Node.js 產品整合及 AWS 雲端環境部署維護經驗。此外，亦運用 AI 輔助前端程式碼修改與功能開發，具備跨技術領域的系統整合與維護能力。",
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
      company: "昶懋國際股份有限公司",
      href: "https://www.dhc.com.tw/m/?Lang=zh-tw",
      badges: [],
      location: "Taipei, Taiwan",
      title: "軟體高級工程師",
      logoUrl: "resume/work/dhc.png",
      start: "August 2024",
      end: "Present",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 12px;">
            <strong>後端開發與系統整合</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                在既有 Django SaaS 多租戶架構下，獨立負責功能需求分析、技術設計與開發實作，透過模組化設計支援客戶客製化需求，並降低租戶間的重複程式碼。
              </li>
              <li style="margin-bottom: 8px;">
                開發帳號管理、一次性密碼（OTP）認證及權限控管等核心 API，處理 App 傳入的電池診斷資料及相關業務流程。
              </li>
              <li style="margin-bottom: 8px;">
                開發及維護超過 150 項 Django 後端自動化測試，以單元測試為主，驗證系統功能及多租戶相關邏輯。
              </li>
              <li style="margin-bottom: 8px;">
                規劃並實作資料封存機制，將符合條件的歷史資料由主要資料表移轉至封存資料表，降低主要資料表負載並改善查詢效能。
              </li>
              <li style="margin-bottom: 8px;">
                開發資料統計功能，彙整系統資料並提供統計圖表，支援使用者檢視相關資訊。
              </li>
              <li style="margin-bottom: 8px;">
                在新舊系統轉換期間，實作 Proxy Forward 資料轉送機制，銜接既有系統與新系統的資料傳遞流程。
              </li>
              <li style="margin-bottom: 8px;">
                整合及維護五個客戶專屬的 Node.js 專案，負責 App 電池診斷資料接收流程的錯誤修復與功能更新。
              </li>
              <li style="margin-bottom: 8px;">
                設計、開發及維護內部 SLA 監控系統，計算系統 SLA 達成率並提供 API 查詢監控結果。
              </li>
              <li style="margin-bottom: 8px;">
                運用 AI 輔助進行 Vue.js 前端功能修改與開發，並將修改內容整合至既有系統。
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 12px;">
            <strong>雲端部署與維運（DevOps）</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                建置及維護 AWS SaaS Tenant 執行環境，整合 CloudFront、Route 53、Load Balancer、SNS 及 SES 等服務。
              </li>
              <li style="margin-bottom: 8px;">
                使用 JMeter 執行系統壓力測試，依測試結果調整 AWS 架構及資源配置。
              </li>
              <li style="margin-bottom: 8px;">
                負責 AWS Elastic Beanstalk、Lambda、OpenSearch 及 ElastiCache 等服務的版本升級與維護。
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 8px;">
            <strong>資訊安全與內部管理</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                參與 ISO 27001 資訊安全相關作業，追蹤最新資安漏洞資訊並回報團隊討論，協助盤點及登記特權帳號。
              </li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      company: "矽羽科技有限公司",
      badges: [],
      href: "https://www.sysfeather.com/zh-TW",
      location: "Taipei, Taiwan",
      title: "Python/Django 後端工程師",
      logoUrl: "resume/work/sysfeather.png",
      start: "April 2023",
      end: "July 2024",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 12px;">
            <strong>物流整合平台開發</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                獨立開發 Django 物流整合平台，整合多家物流業者的配送生命週期，統一對外提供 Django REST API，簡化下游系統的物流服務串接。
              </li>
              <li style="margin-bottom: 8px;">
                整合多家物流業者的帳務資料與請款功能，支援業務部門進行對帳及請款作業，減少人工資料整理工作。
              </li>
              <li style="margin-bottom: 8px;">
                導入 Django async/await 非同步處理，將適合非同步執行的作業移出同步處理流程，改善 API 回應時間。
              </li>
              <li style="margin-bottom: 8px;">
                使用 django-q 建立背景排程任務，自動同步物流配送狀態並通知下游系統，降低下游系統狀態更新延遲。
              </li>
              <li style="margin-bottom: 8px;">
                實作密碼重設及電子郵件更新流程的二次驗證機制，強化帳號操作安全性。
              </li>
              <li style="margin-bottom: 8px;">
                使用 Django Template 與 CoreUI 建置內部管理介面。
              </li>
              <li style="margin-bottom: 8px;">
                撰寫 API 技術文件及 HTTP Request 範例，說明 API 使用方式與串接流程，協助前端及其他系統進行整合。
              </li>
            </ul>
          </li>

          <li style="margin-bottom: 8px;">
            <strong>雲端部署與維運（DevOps）</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
              <li style="margin-bottom: 8px;">
                使用 Docker 與 AWS Copilot 建置及部署應用服務，管理 AWS RDS、ECS、ECR、CodePipeline、Route 53 及 ACM 等雲端資源。
              </li>
            </ul>
          </li>
        </ul>
      `,
    },
    {
      company: "龎帝數位資訊有限公司",
      href: "#",
      badges: ["停止營運"],
      location: "Taipei, Taiwan",
      title: "軟體工程師",
      logoUrl: "resume/work/ponddy.png",
      start: "August 2022",
      end: "March 2023",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            與團隊討論及分析系統需求，開發並維護超過 50 支 RESTful API，提供 Web 與 Mobile 應用程式使用，並撰寫 API 文件及串接範例。
          </li>
          <li style="margin-bottom: 8px;">
            參與四項專案的規劃、程式重構及功能開發，涵蓋既有功能調整、第三方服務整合，以及程式碼可維護性與可讀性的改善。
          </li>
          <li style="margin-bottom: 8px;">
            開發中文語言處理功能，使用 Regular Expression 後處理中文斷詞及詞性標記，並透過 Python Requests 擷取華語詞表資料進行統計分析。
          </li>
          <li style="margin-bottom: 8px;">
            維護 12 個基於 Django 的語言學習平台及 2 個內部使用的 Chrome 擴充工具，持續開發新功能、修復使用者回報問題及處理資料異常。
          </li>
          <li style="margin-bottom: 8px;">
            使用 CircleCI 建立 CI/CD 流程，並改善三項既有產品的自動化建置與部署流程。
          </li>
          <li style="margin-bottom: 8px;">
            維護 AWS EC2、S3、Elastic Beanstalk、RDS、SNS 及 SES 等雲端服務，支援既有產品運作與部署需求。
          </li>
        </ul>
      `,
    },
    {
      company: "自由系統股份有限公司",
      href: "https://www.freedom.net.tw/",
      badges: [],
      location: "Taipei, Taiwan",
      title: "實習工程師",
      logoUrl: "resume/work/freedom.png",
      start: "February 2022",
      end: "July 2022",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            為企業客戶提供 IT 技術支援與系統維護，處理硬體、作業系統及軟體問題，並與客戶溝通釐清問題情境及進行故障排除。
          </li>
          <li style="margin-bottom: 8px;">
            協助管理 Microsoft 365（O365）、Active Directory（AD）、檔案伺服器及企業級無線網路。
          </li>
          <li style="margin-bottom: 8px;">
            擔任實習生小組長，協助團隊工作分配、溝通協調及日常管理。
          </li>
        </ul>
      `,
    },
    {
      company: "龎帝數位資訊有限公司",
      href: "#",
      badges: [],
      location: "Taipei, Taiwan",
      title: "軟體實習生",
      logoUrl: "resume/work/ponddy.png",
      start: "June 2020",
      end: "June 2021",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.7;">
          <li style="margin-bottom: 8px;">
            使用 Django REST Framework 與 Django Channels 開發即時互動教學 IRS 系統，完成 22 項功能開發及 98 筆測試。
          </li>
          <li style="margin-bottom: 8px;">
            撰寫 API End-to-End（E2E）自動化測試腳本，並協助維護四項專案的 API 測試。
          </li>
          <li style="margin-bottom: 8px;">
            使用 Docker 容器化服務，並搭配 CircleCI 建立自動化建置與部署流程。
          </li>
          <li style="margin-bottom: 8px;">
            執行產品手動測試、驗證功能流程，並協助帶領新進測試人員進行產品測試。
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
      title: "後端工程師",
      logoUrl: "resume/work/xkernel.png",
      start: "March 2023",
      end: "April 2025",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;">臺灣客語語料庫系統後端開發及日常維運
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">與團隊協作，實作多項 REST API 並維護詳細文件</li>
              <li style="margin-bottom: 8px;">串接 Google reCAPTCHA v3 提升驗證安全性</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">計程車派車系統後端開發與維運：整合上游訂單來源，派發給合作車行或自有司機
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">與團隊協作，實作多項 REST API 並維護詳細文件</li>
              <li style="margin-bottom: 8px;">客製 Django Admin 支援批次更新訂單、指派司機、上下游訂單匯入匯出</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">將既有產品移至 EC2 上</li>
        </ul>
      `,
    }
  ],
  education: [
    {
      school: "國立臺北商業大學",
      href: "https://www.ntub.edu.tw/",
      degree: "二技部  資訊管理系",
      logoUrl: "resume/education/ntub.png",
      badges: ["系排第二名畢業"],
      start: "2020",
      end: "2022",
    },
    {
      school: "國立臺北商業大學",
      href: "https://www.ntub.edu.tw/",
      degree: "五專部  資訊管理系",
      logoUrl: "resume/education/ntub.png",
      badges: ["系排第一名畢業"],
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
        "這是個人 Side Project，結合網頁和 LINE Bot，讓使用者快速記錄消費並隨後補充細節。使用者可透過網頁查看消費分析，Django-q 定時提醒填寫未完成記錄並備份資料至信箱。前端使用 Django Template 和免費模板製作。",
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
        "開發了個人短網址服務作為 Side Project，具備建立、查詢和跳轉短網址的功能。使用 Django Template 和 Bootstrap 打造了簡潔直觀的前端介面。",
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
        "開發線上購書網站，讓會員輕鬆購買書籍。負責資料庫設計、後端及前端開發，使用 Django 並將資料庫部署在 Docker 容器中。實現 RWD 並透過 CI/CD 流程部署至 AWS EC2。",
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
        "開發了一款擁有九大功能的校園機器人，透過有限狀態機引導使用者操作，並支援直覺的敘述句查詢。系統採模組化設計，未來可輕鬆轉換至 LINE Bot 或 Telegram Bot 平台。",
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
