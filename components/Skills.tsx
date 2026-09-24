import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiDrizzle,
  SiPython,
  SiFigma,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
  SiVercel,
} from "react-icons/si";

import {
  Braces,
  PanelsTopLeft,
  PencilRuler,
  Workflow,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MUI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Drizzle", icon: SiDrizzle, color: "#C5F74F" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "REST APIs", icon: Braces, color: "#8B5CF6" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "UI/UX", icon: PanelsTopLeft, color: "#EC4899" },
      { name: "Prototyping", icon: PencilRuler, color: "#8B5CF6" },
      { name: "Wireframing", icon: Workflow, color: "#6366F1" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Jira", icon: SiJira, color: "#0052CC" },
      { name: "VS Code", icon: Braces, color: "#007ACC" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-slate-200 bg-slate-50/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Skills & Tools
          </h2>

          <div className="mt-2 flex items-center gap-4">
            <div className="h-[2px] w-10 bg-blue-600" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Technologies I work with and enjoy using
            </p>
          </div>
        </div>

{/* Skills */}
<div className="space-y-6">
  {skills.map((group, groupIndex) => (
    <div
      key={group.category}
      className="grid grid-cols-1 gap-3 md:grid-cols-[120px_minmax(0,1fr)] md:items-center"
    >
      {/* Category */}
      <h3 className="text-base font-semibold text-slate-800 md:text-lg">
        {group.category}
      </h3>

      {/* Marquee viewport */}
      <div className="marquee min-w-0 overflow-hidden">
        <div
          className={`
            marquee-track
            flex w-max gap-2.5
            ${
              groupIndex % 2 === 0
                ? "animate-marquee-left"
                : "animate-marquee-right"
            }
          `}
        >
          {/* Duplicate array for seamless looping */}
          {[...group.items, ...group.items].map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="
                  flex shrink-0 items-center gap-2.5
                  rounded-lg border border-slate-200
                  bg-white px-3.5 py-2
                  text-sm font-medium text-slate-700
                  shadow-sm
                  transition-all duration-200
                  hover:border-violet-200
                  hover:shadow-md
                "
              >
                <Icon
                  className="h-[18px] w-[18px]"
                  style={{ color: skill.color }}
                />

                <span className="whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}