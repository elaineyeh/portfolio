import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, LanguagesIcon, SquareGanttChartIcon } from "lucide-react";

export const DATA = {
  name: "葉昱彤",
  initials: "Elaine",
  url: "https://elainehub.com",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    "擁有超過 2 年的後端開發經驗，專注於後端 API、聊天機器人及雲端服務領域，並持續學習以獲取更多實戰經驗",
  summary:
    "我熱愛學習與嘗試新事物，擅長在過程中取得成就感並樂於分享。具備高度抗壓性，善於溝通協調，並勇於跳脫舒適圈解決問題。",
  avatarUrl: "resume/me.JPG",
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
        <li>Backend
          <ul style="list-style-type: disc; margin-left: 20px;">
            <li>SAAS Cloud
              <ul style="list-style-type: disc; margin-left: 20px;">
                <li>基於 Django-Tenant 架構執行撰寫 114 個整合測試</li>
                <li>開發 11 個後端 API</li>
                <li>封存部分資料表，減輕資料庫負載並優化搜尋時間</li>
                <li>開發多項客製化 Django command，進行資料驗證及文件生成，減少人工操作</li>
              </ul>
            </li>
            <li>維運 5 項既有產品（Node.js）</li>
            <li>開發 GitLab 專案成員清單驗證程式，定時檢測是否需調整專案成員</li>
            <li>設計、開發並維護公司 SLA 系統，檢測內外部系統的 SLA 達成率，並提供 API 查看結果</li>
          </ul>
        </li>
        <li>DevOps
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>規劃並執行 JMeter 壓力測試，調整 AWS 規格以提升性能</li>
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
          <li>Backend
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>與團隊密切合作，討論需求並進行 API 規劃，同時權衡需求與工程難題</li>
              <li>獨立開發一套完整的物流整合系統
                <ul style="list-style-type: disc; margin-left: 20px;">
                  <li>使用 Django REST Framework 整合多家物流 API，以提供下游產品所需 API</li>
                  <li>使用 Django Template 搭配 CoreUI 模板開發 Dashboard</li>
                  <li>實作兩階段驗證功能，應用在忘記密碼和電子郵件更新場景</li>
                  <li>使用 Django-q 排程抓取物流之最新物流資料，更新並通知下游產品</li>
                  <li>使用 Async Task 優化 API 回應時間，有效縮短使用者等待時間</li>
                  <li>整合並實現多家物流帳務功能，以協助業務部門進行對帳和請款，大幅減少人工作業量</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>DevOps
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>為自己開發的 API 撰寫文件，製作 HTTP request 範例，說明流程，加速下游產品串接</li>
              <li>撰寫 Dockerfile 並透過 AWS copilot 進行設置與整合至雲端</li>
              <li>維護 AWS 服務：RDS, ECS, ECR, CodePipeline, Route53, ACM 等</li>
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
          <li>Backend
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>根據需求與團隊進行討論與協作，開發超過 50 支 API 供 Web 和 Mobile 使用，並將其文件化</li>
              <li>規劃、重構與開發四項專案，包括功能開發、第三方服務串接以及提升程式可維護性和可閱讀性</li>
              <li>開發多個 API 的各式功能，除了 CRUD 外的特殊經驗包括:
                <ul style="list-style-type: disc; margin-left: 20px;">
                  <li>使用 Regular Expression 將中文斷詞與詞性進行後處理</li>
                  <li>使用 Requests 爬蟲將華語詞表進行數據統計</li>
                </ul>
              </li>
              <li>日常系統維運公司 12 項 Django 框架專案、2 個 Chrome extension，處理 Bug 回報、新增與優化系統功能，修復系統中的程式與資料錯誤等</li>
            </ul>
          </li>
          <li>DevOps
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>使用 CircleCI 建立 CI/CD 流程，改善 3 項舊有產品 CI/CD 架構</li>
              <li>為自己開發的 API 撰寫文件，製作 HTTP request 範例，說明流程，加速前端開發</li>
              <li>維護 AWS 服務：EC2, S3, Elastic Beanstalk, RDS, SNS, SES 等</li>
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
        <ul style="list-style-type: disc; margin-left: 20px;">
          <li>基礎架構維運管理服務</li>
          <li>軟硬體管理服務
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>客戶技術支援 - 用戶端電腦、伺服器、網路設備</li>
              <li>管理 Microsoft O365、AD、File Server、無線網路等日常維運事項</li>
            </ul>
          </li>
          <li>有效地與客戶溝通，準確理解與定位客戶問題</li>
          <li>擔任實習生小組長</li>
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
          <li>使用 CircleCI 建立 CI/CD 流程，改善舊有產品 CI/CD 架構</li>
          <li>撰寫 Dockerfile 將服務容器化，方便產品部署</li>
          <li>獨立開發 IRS (Interactive Response System) 即時通訊系統
            <ul style="list-style-type: disc; margin-left: 20px;">
              <li>使用 Django REST Framework 與前端完成 22 項功能</li>
              <li>使用 Django Channels 實作 WebSocket 即時通訊系統</li>
              <li>使用 pytest 完成 98 個整合測試</li>
            </ul>
          </li>
          <li>開發公司 E2E API 自動化測試，用 Git 與他人協作</li>
          <li>維護公司 4 項專案</li>
          <li>測試、調整流程並帶領新進測試人員進行產品之手動測試</li>
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
          <li>臺灣客語語料庫系統後端開發及日常維運</li>
          <li>Chitchat 系統後端開發</li>
          <li>將既有產品移至 EC2 上</li>
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
        "PostgreSQL",
        "JavaScript",
        "Gunicorn",
        "Nginx",
        "AWS EC2",
        "LineBot",
      ],
      links: [
        {
          type: "Website",
          href: "http://127.0.0.1:3000/blog/finance",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/resume/project/finance_track.png",
      video:
        "",
    },
    {
      title: "ShortURL",
      href: "#",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "開發了一個個人短網址服務作為 Side Project，具備建立、查詢和跳轉短網址的功能。使用 Django Template 和 Bootstrap 打造了簡潔直觀的前端介面。",
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
      image: "/resume/project/shorturl.png",
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
      image: "/resume/project/book-store.png",
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
      image: "/resume/project/ub.png",
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
