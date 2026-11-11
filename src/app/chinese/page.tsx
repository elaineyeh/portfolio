import { ResumePage } from "@/components/resume-page";
import { DATA } from "@/data/chinese";

export default function ChineseResumePage() {
  return (
    <ResumePage
      data={DATA}
      language="zh-Hant"
      labels={{
        greeting: "Backend-focused Software Engineer",
        about: "關於",
        experience: "工作經歷",
        freelance: "接案經歷",
        skills: "核心技能",
        education: "學歷",
        projects: "專案",
        projectsEyebrow: "精選專案",
        projectsTitle: "以實際工程能力為核心的作品",
        projectsDescription: "展示後端開發、系統整合、部署與產品維護相關經驗。",
        contactEyebrow: "聯絡方式",
        contactTitle: "保持聯繫",
        contactDescription: <>歡迎透過 <a className="resume-link" href={DATA.contact.social.LinkedIn.url}>LinkedIn</a> 聯絡我討論工作或合作機會。</>,
        present: "目前",
        expand: "展開工作內容",
        collapse: "收合工作內容",
        skillGroups: ["語言與前端", "Backend", "資料庫", "部署與基礎設施", "雲端與協作", "測試與整合"],
        showHeroPositioning: false,
        showHeroDescription: false,
      }}
    />
  );
}
