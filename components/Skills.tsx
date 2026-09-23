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
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MUI", icon: SiMui },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Python", icon: SiPython },
      { name: "REST APIs", icon: Braces },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "UI/UX", icon: PanelsTopLeft },
      { name: "Prototyping", icon: PencilRuler },
      { name: "Wireframing", icon: Workflow },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Jira", icon: SiJira },
      { name: "VS Code", icon: Braces },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-slate-200 bg-slate-50/70" >
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
        <div className="space-y-4">
            {skills.map((group) => (
                <div key={group.category} className=" grid grid-cols-1 gap-3 md:grid-cols-[120px_1fr] md:items-center " >
                {/* Category */}
                <h3 className="text-base font-semibold text-slate-800 md:text-lg">
                    {group.category}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div key={skill.name} className=" group flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md " >
                        <Icon className=" h-[18px] w-[18px] text-slate-600 transition-colors group-hover:text-violet-600 " />
                        <span>{skill.name}</span>
                        </div>
                    );
                    })}
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}