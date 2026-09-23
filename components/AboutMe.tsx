import {
  ArrowRight,
  BriefcaseBusiness,
  PencilRuler,
  Rocket,
} from "lucide-react";

const aboutStats = [
  {
    value: "5+",
    label: "Years of Industry Experience",
    description: "Building and shipping real-world applications.",
    icon: BriefcaseBusiness,
    iconStyle: "bg-blue-100 text-blue-500",
  },
  {
    value: "25+",
    label: "UX Designs Created",
    description: "From wireframes to high-fidelity prototypes.",
    icon: PencilRuler,
    iconStyle: "bg-cyan-100 text-cyan-500",
  },
  {
    value: "5+",
    label: "Apps Developed & Deployed",
    description: "Live applications used by real users in realtime.",
    icon: Rocket,
    iconStyle: "bg-violet-100 text-violet-500",
  },
];

export default function AboutMe() {
  return (
   <section id="about" className=" relative overflow-hidden border-y border-slate-100 bg-gradient-to-r from-blue-50/50 via-white to-violet-50/50 " >
      <div className=" pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl " />
      <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:px-10 lg:grid-cols-[0.9fr_1.4fr] lg:items-center lg:gap-16 lg:px-16 lg:py-20 " >
        {/* ABOUT CONTENT */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            About{" "}
            <span className="gradient-text">
              Me
            </span>
          </h2>

          {/* Subtitle */}
          <div className="mt-2 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-slate-800" />

           <p className=" text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 " >
              People · Products · Progress
            </p>
          </div>

          {/* Description */}
          <p className=" mt-6 max-w-[470px] text-base leading-7 text-slate-700 md:text-[17px] " >
            I&apos;m a software engineer and product designer passionate
            about building intuitive, modern, and impactful web
            applications. I enjoy turning ideas into real products,
            combining design and development to create seamless user
            experiences.
          </p>

          {/* CTA */}
         <a href="/about" className=" group mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl " >
            Learn More

           <ArrowRight size={16} className=" transition-transform duration-200 group-hover:translate-x-1 " />
          </a>
        </div>

        {/* STAT CARDS */}
       <div className=" relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 " >
          {aboutStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className=" group flex min-h-[230px] flex-col rounded-2xl border border-slate-200/80 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg " >
                {/* Icon */}
                <div className={` flex h-12 w-12 items-center justify-center rounded-full ${stat.iconStyle} `} >
                  <Icon size={23} strokeWidth={2} />
                </div>

                {/* Number */}
                <p className=" mt-5 text-4xl font-bold tracking-tight text-slate-950 " >
                  {stat.value}
                </p>

                {/* Label */}
                <h3 className=" mt-1 max-w-[150px] text-base font-bold leading-5 text-slate-900 " >
                  {stat.label}
                </h3>

                {/* Description */}
                <p className=" mt-2 text-sm leading-5 text-slate-500 " >
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}