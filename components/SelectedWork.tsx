"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Jewelry Invoice System",
    description:
      "A full-stack POS and invoice application designed for a local jewelry business. Built to simplify customer management, invoicing, payments, inventory, and business reporting.",
    image: "/projects/jewelry-invoice-system.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
      "MUI",
    ],
    href: "/projects/jewelry-invoice-system",
  },
  {
    title: "FinLume",
    description:
      "A financial analysis platform designed to help users research investments, explore market data, compare financial metrics, and understand historical performance.",
    image: "/projects/finlume.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    href: "/projects/finlume",
  },
  {
    title: "Project Three",
    description:
      "A brief description explaining the problem, the solution, and the role I played in designing and developing the application.",
    image: "/projects/project-three.png",
    technologies: ["React", "TypeScript", "Node.js"],
    href: "/projects/project-three",
  },
];

export default function SelectedWork() {
  const [currentProject, setCurrentProject] = useState(0);

  const project = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setCurrentProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <section id="projects" className=" relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16 lg:py-24 " >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className=" text-3xl font-bold tracking-tight text-slate-950 md:text-4xl " >
            Selected{" "}
            <span className="gradient-text">
              Work
            </span>
          </h2>

         <p className=" mt-3 text-sm leading-6 text-slate-500 md:text-base " >
            A few projects I&apos;ve designed and built. Each one reflects a
            different problem, set of challenges, and lessons learned.
          </p>
        </div>


        {/* PROJECT */}
       <div className=" relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-14 " >

          {/* PREVIOUS */}
          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="
              absolute
              left-0 top-1/2
              z-20
              hidden
              h-12 w-12
              -translate-x-16
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border border-slate-200
              bg-white
              text-slate-800
              shadow-md
              transition-all
              duration-200
              hover:-translate-x-[68px]
              hover:bg-slate-950
              hover:text-white
              hover:shadow-lg
              xl:flex
            "
          >
            <ArrowLeft size={21} />
          </button>


          {/* PROJECT IMAGE */}
          <div>
            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border border-slate-200
                bg-gradient-to-br
                from-blue-100
                via-violet-100
                to-pink-100
                p-2
                shadow-sm
              "
            >
              <div className="overflow-hidden rounded-xl bg-white">
                <Image key={project.image} src={project.image} alt={`${project.title} application`} width={1100} height={700}
                  className=" aspect-[16/10] h-auto w-full object-cover "
                />
              </div>
            </div>


            {/* PAGINATION */}
            <div className="mt-5 flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  aria-label={`View project ${index + 1}`}
                  className={`
                    h-2.5
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      index === currentProject
                        ? "w-6 bg-slate-900"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }
                  `}
                />
              ))}
            </div>
          </div>


          {/* PROJECT DETAILS */}
          <div className="relative">

            {/* COUNTER */}
            <p className=" mb-6 text-sm font-semibold tracking-wide text-slate-500 lg:absolute lg:-top-12 lg:right-0 " >
              {String(currentProject + 1).padStart(2, "0")}
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </p>


            {/* TITLE */}
           <h3 className=" text-2xl font-bold tracking-tight text-slate-950 md:text-3xl " >
              {project.title}
            </h3>


            {/* DESCRIPTION */}
           <p className=" mt-4 max-w-lg text-base leading-7 text-slate-600 " >
              {project.description}
            </p>


            {/* TECHNOLOGIES */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className=" rounded-lg border border-blue-100 bg-blue-50/70 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm "
                >
                  {technology}
                </span>
              ))}
            </div>


            {/* READ MORE */}
            <a
              href={project.href}
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-slate-950
                px-5 py-3
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-slate-900/10
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-slate-800
                hover:shadow-xl
              "
            >
              Read More

              <ArrowRight size={16} className=" transition-transform duration-200 group-hover:translate-x-1 " />
            </a>
          </div>


          {/* NEXT */}
          <button
            onClick={nextProject}
            aria-label="Next project"
            className="
              absolute
              right-0 top-1/2
              z-20
              hidden
              h-12 w-12
              translate-x-16
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border border-slate-200
              bg-white
              text-slate-800
              shadow-md
              transition-all
              duration-200
              hover:translate-x-[68px]
              hover:bg-slate-950
              hover:text-white
              hover:shadow-lg
              xl:flex
            "
          >
            <ArrowRight size={21} />
          </button>
        </div>


        {/* MOBILE NAVIGATION */}
        <div className="mt-8 flex justify-center gap-3 xl:hidden">
          <button
            onClick={previousProject}
            aria-label="Previous project"
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-slate-200
              bg-white
              shadow-sm
              transition
              hover:bg-slate-950
              hover:text-white
            "
          >
            <ArrowLeft size={19} />
          </button>

          <button
            onClick={nextProject}
            aria-label="Next project"
            className=" flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:bg-slate-950 hover:text-white " 
            >
            <ArrowRight size={19} />
          </button>
        </div>

      </div>
    </section>
  );
}