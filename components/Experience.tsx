import {
  Building2,
  BriefcaseBusiness,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    period: "2021 – Present",
    title: "Application Developer",
    company: "Company Name",
    location: "Location",
    type: "work",
    icon: Building2,
    iconClass: "experience-icon-blue",
    bullets: [
      "Design and develop responsive web applications using React, Next.js, and TypeScript.",
      "Collaborate with cross-functional teams to deliver scalable solutions.",
      "Lead UI/UX design efforts and create prototypes in Figma.",
      "Participate in code reviews and contribute to engineering best practices.",
    ],
  },
  {
    id: 2,
    period: "2019 – 2021",
    title: "Application Developer Intern",
    company: "Company Name",
    location: "Location",
    type: "work",
    icon: BriefcaseBusiness,
    iconClass: "experience-icon-pink",
    bullets: [
      "Developed and maintained internal tools and enterprise applications.",
      "Worked with legacy systems and modernized existing workflows.",
      "Collaborated with team members using Agile methodologies.",
    ],
  },
  {
    id: 3,
    period: "Education",
    title: "Bachelor's Degree in Computer Science",
    company: "University Name",
    location: "Graduation Year",
    type: "education",
    icon: GraduationCap,
    iconClass: "experience-icon-yellow",
    bullets: [
      "Relevant coursework or academic highlights.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-white
        px-6
        py-20
        md:px-10
        lg:px-16
        lg:py-24
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="mb-12">
          <h2
            className="
              text-4xl
              font-bold
              tracking-tight
              text-[#071a3d]
              sm:text-5xl
            "
          >
            Experience
          </h2>

          <div className="mt-3 flex items-center gap-5">
            <div
              className="
                h-[3px]
                w-10
                rounded-full
                bg-[#164ea6]
              "
            />

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-400
              "
            >
              My Professional Journey
            </p>
          </div>
        </div>

        {/* =========================================
            TIMELINE
        ========================================== */}
        <div className="relative">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isLast = index === experiences.length - 1;

            return (
              <div
                key={experience.id}
                className="
                  experience-row
                  relative
                  grid
                  grid-cols-1
                  md:grid-cols-[150px_40px_1fr]
                  lg:grid-cols-[160px_55px_1fr]
                "
              >
                {/* =================================
                    DATE / PERIOD
                ================================== */}
                <div
                  className="
                    pb-3
                    md:pb-0
                    md:pt-6
                  "
                >
                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-500
                      md:text-base
                    "
                  >
                    {experience.period}
                  </p>
                </div>

                {/* =================================
                    TIMELINE
                ================================== */}
                <div
                  className="
                    relative
                    hidden
                    justify-center
                    md:flex
                  "
                >
                  {/* Vertical line */}
                  {!isLast && (
                    <div
                      className="
                        absolute
                        left-1/2
                        top-7
                        h-full
                        w-px
                        -translate-x-1/2
                        bg-gradient-to-b
                        from-blue-300
                        via-blue-200
                        to-blue-100
                      "
                    />
                  )}

                  {/* Dot */}
                  <div
                    className="
                      relative
                      z-10
                      mt-[26px]
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-blue-100
                      bg-[#1758b5]
                      shadow-[0_0_0_4px_rgba(219,234,254,0.6)]
                    "
                  />
                </div>

                {/* =================================
                    EXPERIENCE CARD
                ================================== */}
                <article
                  className={`
                    experience-card
                    ${!isLast ? "mb-4" : ""}
                  `}
                >
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                    "
                  >
                    {/* Icon */}
                    <div
                      className={`
                        ${experience.iconClass}
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                      `}
                    >
                      <Icon
                        size={25}
                        strokeWidth={2}
                        className="text-[#1260b8]"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          text-lg
                          font-bold
                          leading-tight
                          text-[#071a3d]
                          sm:text-xl
                        "
                      >
                        {experience.title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-medium
                          text-slate-500
                        "
                      >
                        {experience.company}

                        <span
                          aria-hidden="true"
                          className="mx-2 text-slate-300"
                        >
                          |
                        </span>

                        {experience.location}
                      </p>

                      {/* Bullets */}
                      {experience.bullets.length > 0 && (
                        <ul
                          className="
                            mt-2
                            space-y-1
                            pl-5
                            text-sm
                            leading-relaxed
                            text-slate-600
                            marker:text-slate-500
                          "
                        >
                          {experience.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="list-disc"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}