import { ResumePage } from "@/components/resume-page";
import { DATA } from "@/data/resume";

export default function Page() {
  return (
    <ResumePage
      data={DATA}
      labels={{
        greeting: "Backend-focused Software Engineer",
        about: "About",
        experience: "Work Experience",
        freelance: "Freelance Experience",
        skills: "Core Skills",
        education: "Education",
        projects: "Projects",
        projectsEyebrow: "Selected Projects",
        projectsTitle: "Engineering work and product experiments",
        projectsDescription: "Selected work across backend development, system integration, deployment, and product maintenance.",
        contactEyebrow: "Contact",
        contactTitle: "Get in touch",
        contactDescription: <>You can reach me through <a className="resume-link" href={DATA.contact.social.LinkedIn.url}>LinkedIn</a> to discuss work or collaboration opportunities.</>,
        present: "Present",
        expand: "Expand experience",
        collapse: "Collapse experience",
        skillGroups: ["Languages & Frontend", "Backend", "Databases", "Deployment & Infrastructure", "Cloud & Collaboration", "Testing & Integration"],
        showHeroPositioning: false,
        showHeroDescription: false,
      }}
    />
  );
}
