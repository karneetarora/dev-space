'use client'
import AboutMe from '@/components/AboutMe';
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
          <ul className=" mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-violet-200/70 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-md " >
            <li>Build</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-violet-400" />
            <li>Design</li>
            <li aria-hidden="true" className="h-1 w-1 rounded-full bg-pink-400" />
            <li>Impact</li>
          </ul>
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
      <Skills />
      <section id='my-experiences'>
      </section>
      <section id='contact-me'>
      </section>
    </div>
  );
}
