import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

type ResumeExperience = {
  company: string;
  title: string;
  logoUrl: string;
  href?: string;
  badges?: readonly string[];
  start: string;
  end?: string;
  description?: string;
};

type ResumeEducation = {
  school: string;
  degree: string;
  logoUrl: string;
  href?: string;
  badges?: readonly string[];
  start: string;
  end: string;
};

type ResumeProject = {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;
  links?: readonly { icon: React.ReactNode; type: string; href: string }[];
};

type ResumeData = {
  name: string;
  initials: string;
  description: string;
  summary: string;
  avatarUrl: string;
  location: string;
  skills: readonly (readonly string[])[];
  contact: {
    email: string;
    social: {
      LinkedIn: { url: string };
      GitHub: { url: string };
    };
  };
  work: readonly ResumeExperience[];
  freelance: readonly ResumeExperience[];
  education: readonly ResumeEducation[];
  projects: readonly ResumeProject[];
};

export interface ResumeLabels {
  greeting: string;
  about: string;
  experience: string;
  freelance: string;
  skills: string;
  education: string;
  projects: string;
  projectsEyebrow: string;
  projectsTitle: string;
  projectsDescription: string;
  contactEyebrow: string;
  contactTitle: string;
  contactDescription: React.ReactNode;
  present: string;
  expand: string;
  collapse: string;
  skillGroups: string[];
  showHeroPositioning?: boolean;
  showHeroDescription?: boolean;
}

interface ResumePageProps {
  data: ResumeData;
  labels: ResumeLabels;
  language?: "en" | "zh-Hant";
}

function periodLabel(start: string, end: string | undefined, present: string) {
  if (!start && !end) return "";
  if (!end || end === "Present") return `${start} - ${present}`;
  if (!start) return end;
  return `${start} - ${end}`;
}

export function ResumePage({ data, labels, language = "en" }: ResumePageProps) {
  return (
    <main lang={language} className="resume-page flex min-h-[100dvh] flex-col gap-16 print:gap-8">
      <section id="hero" className="resume-section">
        <div className="flex items-start justify-between gap-8">
          <div className="min-w-0 space-y-5">
            <BlurFade delay={BLUR_FADE_DELAY}>
              {labels.showHeroPositioning !== false && (
                <p className="text-sm font-medium text-muted-foreground">{labels.greeting}</p>
              )}
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{data.name}</h1>
              {labels.showHeroDescription !== false && (
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {data.description}
                </p>
              )}
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY}>
            <Avatar className="size-20 shrink-0 border sm:size-28 print:size-20">
              <AvatarImage alt={data.name} src={data.avatarUrl} />
              <AvatarFallback>{data.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
        <div
          className={`flex flex-wrap gap-x-4 gap-y-3 text-sm text-muted-foreground ${
            labels.showHeroDescription === false
              ? "mt-1"
              : "mt-8 border-t pt-4"
          }`}
        >
          <span>{data.location}</span>
          <a className="resume-link" href={`mailto:${data.contact.email}`}>
            {data.contact.email}
          </a>
          <a className="resume-link" href={data.contact.social.LinkedIn.url} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="resume-link" href={data.contact.social.GitHub.url} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <section id="about" className="resume-section">
        <h2 className="resume-heading">{labels.about}</h2>
        <Markdown className="prose max-w-none text-sm leading-7 text-muted-foreground dark:prose-invert">
          {data.summary}
        </Markdown>
      </section>

      <section id="skills" className="resume-section">
        <h2 className="resume-heading">{labels.skills}</h2>
        <div className="flex flex-col gap-3">
          {data.skills.map((skills, index) => (
            <div key={index} className="flex flex-col gap-2 sm:flex-row sm:items-start">
              <h3 className="w-48 shrink-0 pt-0.5 text-xs font-medium text-muted-foreground">
                {labels.skillGroups[index] ?? "Skills"}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => <Badge key={skill} variant="secondary" className="font-normal">{skill}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExperienceSection title={labels.experience} items={data.work} labels={labels} />
      <ExperienceSection title={labels.freelance} items={data.freelance} labels={labels} />

      <section id="education" className="resume-section">
        <h2 className="resume-heading">{labels.education}</h2>
        <div className="space-y-3">
          {data.education.map((education) => (
            <ResumeCard
              key={education.school + education.start}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              href={education.href}
              badges={education.badges}
              period={periodLabel(education.start, education.end, labels.present)}
            />
          ))}
        </div>
      </section>

      <section id="projects" className="resume-section">
        <div className="mb-6 space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{labels.projectsEyebrow}</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{labels.projectsTitle}</h2>
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{labels.projectsDescription}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.projects.map((project) => (
            <ProjectCard key={project.title} {...project} tags={project.technologies} />
          ))}
        </div>
      </section>

      <section id="contact" className="resume-section border-t pt-8 print:hidden">
        <p className="text-sm font-medium text-muted-foreground">{labels.contactEyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">{labels.contactTitle}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{labels.contactDescription}</p>
      </section>
    </main>
  );
}

function ExperienceSection({ title, items, labels }: { title: string; items: readonly ResumeExperience[]; labels: ResumeLabels }) {
  return (
    <section id={title === labels.experience ? "experience" : "freelance"} className="resume-section">
      <h2 className="resume-heading">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <ResumeCard
            key={item.company + item.start + item.title}
            logoUrl={item.logoUrl}
            altText={item.company}
            title={item.company}
            subtitle={item.title}
            href={item.href}
            badges={item.badges}
            period={periodLabel(item.start, item.end, labels.present)}
            description={item.description}
            expandLabel={labels.expand}
            collapseLabel={labels.collapse}
          />
        ))}
      </div>
    </section>
  );
}
