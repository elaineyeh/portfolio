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
    "熱愛學習與嘗試新事物，享受過程中所帶來的成就感，並樂於分享。具備高度抗壓性，勇於跳脫舒適圈嘗試新事物，善於溝通與協調解決問題。",
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
      description:`
      <ul style="list-style-type: disc; margin-left: 20px;">
        <li style="margin-bottom: 10px;"><strong>Backend</strong>
          <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
            <li style="margin-bottom: 8px;">SaaS 多租戶平台開發
              <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                <li style="margin-bottom: 6px;">設計並實作可擴展的 Django 多租戶 SaaS 架構，接收來 APP 的電池診斷紀錄，模組化系統設計支援客製功能並降低租戶間重複碼</li>
                <li style="margin-bottom: 6px;">開發 API 包含帳號管理、一次性密碼（OTP）認證及資料存取隔離等核心功能</li>
                <li style="margin-bottom: 6px;">基於 Django-Tenant 架構執行撰寫超過 150 個整合測試</li>
                <li style="margin-bottom: 6px;">規劃並實作資料封存機制，定期封存舊資料，減輕資料庫負載並提升查詢效能</li>
                <li style="margin-bottom: 6px;">開發客製化 Django command 工具，進行資料驗證及文件生成，降低人工操作錯誤率</li>
              </ul>
            </li>
            <li style="margin-bottom: 8px;">維護五個客戶專屬的 Node.js 專案，用於接收來自行動應用程式的電池診斷資料，並進行錯誤修復與功能更新。</li>
            <li style="margin-bottom: 8px;">開發 GitLab 專案成員自動驗證工具，定時檢測異常帳號，確保專案權限安全</li>
            <li style="margin-bottom: 8px;">設計、開發並維護內部 SLA 系統，檢測系統的 SLA 達成率，並提供 API 查看結果</li>
          </ul>
        </li>
        <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">執行 JMeter 壓力測試，優化 AWS 架構與資源配置</li>
              <li style="margin-bottom: 8px;">架設 SaaS Tenant 環境，整合 CloudFront、Route 53、Load Balancer、SNS、SES</li>
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">與團隊密切合作，將需求轉換為可擴展的 API 設計與決策</li>
              <li style="margin-bottom: 8px;">獨立開發物流整合平台
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">統整多家物流業者的配送生命週期，提供下游服務一致的 Django REST API</li>
                  <li style="margin-bottom: 6px;">使用 Django Template 搭配 CoreUI 建立內部管理介面</li>
                  <li style="margin-bottom: 6px;">實作密碼重設與信箱更新流程的二次驗證機制</li>
                  <li style="margin-bottom: 6px;">使用 Django-q 實作排程任務，自動同步物流狀態，並即時通知下游系統，有效降低漏單與延遲風險</li>
                  <li style="margin-bottom: 6px;">使用 Async Task 優化 API 回應時間，有效縮短使用者等待時間</li>
                  <li style="margin-bottom: 6px;">整合並實現多家物流帳務功能，以協助業務部門進行對帳和請款，大幅減少人工作業量</li>
                  <li style="margin-bottom: 6px;">撰寫詳細 API 文件與範例，加速其他系統整合效率</li>
                </ul>
              </li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">使用 Docker 與 AWS Copilot 部署服務，管理 RDS、ECS、ECR、CodePipeline、Route 53、ACM</li>
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
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">根據需求與團隊進行討論與協作，開發超過 50 支 API 供 Web 和 Mobile 使用，並將其文件化</li>
              <li style="margin-bottom: 8px;">規劃、重構與開發四項專案，包括功能開發、第三方服務串接以及提升程式可維護性和可閱讀性</li>
              <li style="margin-bottom: 8px;">除 CRUD 外，亦開發多項 API 功能，包括：
                <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
                  <li style="margin-bottom: 6px;">使用 Regular Expression 將中文斷詞與詞性進行後處理</li>
                  <li style="margin-bottom: 6px;">使用 Requests 爬蟲將華語詞表進行數據統計</li>
                </ul>
              </li>
              <li style="margin-bottom: 8px;">開發與維護 12 個語言學習平台（基於 Django）及 2 個內部使用的 Chrome 擴充工具，持續推出新功能，並解決使用者回報問題與資料異常</li>
              <li style="margin-bottom: 8px;">為自己開發的 API 撰寫文件，製作 HTTP request 範例，說明流程，加速前端開發</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">使用 CircleCI 建立 CI/CD 流程，改善 3 項舊有產品 CI/CD 架構</li>
              <li style="margin-bottom: 8px;">維護 AWS EC2、S3、Elastic Beanstalk、RDS、SNS、SES 等服務</li>
            </ul>
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
      description:`
        <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
          <li style="margin-bottom: 10px;">為企業客戶提供 IT 支援與系統維護，處理硬體、作業系統、軟體問題</li>
          <li style="margin-bottom: 10px;">管理 O365、AD、檔案伺服器與企業級無線網路</li>
          <li style="margin-bottom: 10px;">有效地與客戶溝通，準確理解與定位客戶問題</li>
          <li style="margin-bottom: 10px;">擔任實習生小組長，協助實習生團隊協作與管理</li>
        </ul>
      `,
    },
    {
      company: "Ponddy Education Taiwan Ltd.",
      href: "#",
      badges: [],
      location: "Taipei, Taiwan",
      title: "軟體實習生",
      logoUrl: "resume/work/ponddy.png",
      start: "June 2020",
      end: "June 2021",
      description:`
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;"><strong>Backend</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">使用 Django REST Framework 與 Channels 開發即時互動教學 IRS 系統，完成 22 項功能與 98 筆測試</li>
              <li style="margin-bottom: 8px;">撰寫 E2E API 自動測試腳本，維護四項專案</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;"><strong>DevOps</strong>
            <ul style="list-style-type: disc; margin-left: 20px; line-height: 1.6;">
              <li style="margin-bottom: 8px;">使用 Docker 與 CircleCI 建立服務容器與自動化部署流程</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">測試、調整流程並帶領新進測試人員進行產品之手動測試</li>
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
      start: "",
      end: "",
      description: `
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li style="margin-bottom: 10px;">臺灣客語語料庫系統後端開發及日常維運
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">與團隊協作，實作多項 Web API 並維護詳細文件</li>
              <li style="margin-bottom: 8px;">串接 Google reCAPTCHA v3 提升驗證安全性</li>
            </ul>
          </li>
          <li style="margin-bottom: 10px;">英文口說學習系統後端開發</li>
          <li style="margin-bottom: 10px;">計程車派車系統後端開發與維運：整合上游訂單來源，派發給合作車行或自有司機
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li style="margin-bottom: 8px;">與團隊協作，實作多項 Web API 並維護詳細文件</li>
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
