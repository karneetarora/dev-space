'use client'
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import GetInTouch from '@/components/GetInTouch';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import Skills from '@/components/Skills';
import { githubLink, linkedinLink } from '@/lib/constants';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
export default function Home() {

  const taglineWords = ['Design', 'Develop', 'Deploy' ]; 
  const [tagline, setTagline] = useState(taglineWords[0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTagline((current) => {
        const index = taglineWords.indexOf(current);
        return taglineWords[(index + 1) % taglineWords.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="hero" className=" hero-gradient relative overflow-hidden flex flex-col gap-10 px-6 py-8 md:px-10 lg:h-screen lg:flex-row lg:flex-wrap lg:flex-start lg:items-center lg:px-16 xl:px-24 " >
        <nav className='flex flex-row justify-between items-center lg:w-full'>
          <div className="logo min-w-[24px] min-h-[24px] bg-slate-500 rounded-md" />
          <ul className="flex flex-row gap-4 md:gap-8">
            <li className='nav-link'><a href="#hero">Home</a></li>
            <li className='nav-link'><a href="#selected-work">Projects</a></li>
            <li className='nav-link'><a href="#about-me">About Me</a></li>
            <li className='nav-link'><a href="#contact-me">Get in Touch</a></li>
            <li className='nav-link'><a href="">Resume</a></li>
          </ul>
        </nav>
        <div className="gradient-bubble bubble-one" />
        <div className="gradient-bubble bubble-two" />
        <div className="gradient-bubble bubble-three" />
        <div className="gradient-bubble bubble-four" />
        <div className="flex flex-1 flex-col items-start gap-1 relative z-10 md:gap-2">
<div
  className="
    group
    relative
    mb-5
    w-fit
    rounded-full
    bg-gradient-to-r
    from-violet-400/80
    via-fuchsia-300/70
    to-cyan-300/80
    p-[1px]
    shadow-[0_6px_22px_rgba(139,92,246,0.14)]
    transition-all
    duration-300
    hover:shadow-[0_8px_28px_rgba(139,92,246,0.22)]
  "
>
  <ul
    className="
      relative
      inline-flex
      items-center
      gap-2
      overflow-hidden
      rounded-full
      bg-white/80
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.18em]
      text-slate-600
      backdrop-blur-xl
    "
  >
    {/* Gloss / shine */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-x-2
        top-[1px]
        h-[45%]
        rounded-full
        bg-gradient-to-b
        from-white/90
        via-white/35
        to-transparent
      "
    />

    {/* Soft inner glow */}
    <span
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        rounded-full
        shadow-[inset_0_1px_0_rgba(255,255,255,0.95)]
      "
    />

    <li className="relative z-10">Build</li>

    <li
      aria-hidden="true"
      className="
        relative
        z-10
        h-1
        w-1
        rounded-full
        bg-violet-400
        shadow-[0_0_6px_rgba(167,139,250,0.8)]
      "
    />

    <li className="relative z-10">Design</li>

    <li
      aria-hidden="true"
      className="
        relative
        z-10
        h-1
        w-1
        rounded-full
        bg-pink-400
        shadow-[0_0_6px_rgba(244,114,182,0.8)]
      "
    />

    <li className="relative z-10">Impact</li>
  </ul>
</div>
          {/* <h1 className="tag-line text-5xl font-bold leading-[1.05] md:text-6xl">
            Hi, Im AK. <br/>I <span className="gradient-text lg:text-8xl">{tagline}</span>.
          </h1> */}
          <Hero />
         <div className="mt-5 lg:max-w-[480px]">
            <h2 className="text-xl font-semibold md:text-2xl">
              Full-Stack Developer & Product Designer
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              I turn ideas into real products — combining clean design,
              modern tech, and great user experiences.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-4 md:gap-12 lg:gap-20">
            <button className="btn-primary">
              View My Work
            </button>
            <button className="rounded-lg border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-50">
              Get in Touch
            </button>
          </div>
          <div className="social-links mt-8 flex flex-row flex-wrap gap-4 text-sm md:gap-12 lg:gap-16">
           <a href={linkedinLink} target="_blank" rel="noopener noreferrer"
            className=" group flex items-center gap-2 text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-blue-600 hover:underline "
            >
            <FaLinkedinIn size={17} className=" transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] " />
            LinkedIn
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer"
              className=" group flex items-center gap-2 text-sm font-medium text-slate-600 underline-offset-4 transition hover:text-violet-600 hover:underline "
            >
              <FaGithub size={18} className=" transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] " />
              GitHub
            </a>
            <a href="mailto:your@email.com" className="flex items-center gap-2 text-sm font-medium text-slate-600 transition underline-offset-4 hover:text-pink-600 hover:underline" >
              <Mail size={18} strokeWidth={1.8} className='transition-transform duration-500 ease-in-out hover:rotate-360'/>
              Email
            </a>
          </div>
        </div>
        <div className="hero-img flex flex-1 items-center justify-center relative z-10 lg:justify-end">
          <Image alt="Laptop displaying portfolio resting on a rock" src="/laptop-rock-hero.png" width={900} height={700} priority className=" h-auto w-full max-w-[700px] object-contain " />
        </div>
      </section>
      <SelectedWork />
      <AboutMe />
      <Experience />
      <Skills />
      <GetInTouch />
    </div>
  );
}
