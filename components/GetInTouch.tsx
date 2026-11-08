import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaArrowRight,
} from "react-icons/fa6";

export default function GetInTouch() {
  return (
    <section id="contact" className=" contact-section relative isolate px-6 py-16 text-white md:px-10 lg:px-16 lg:py-20 " >
      {/* =====================================================
          OVERLAPPING TOP BUBBLE
          Kept outside of the overflow-hidden container so it
          can extend into the previous section.
      ====================================================== */}
     <div className="contact-bubble contact-bubble-left-top" aria-hidden="true" />

      {/* =====================================================
          CLIPPED DECORATIVE BACKGROUND
      ====================================================== */}
      <div className=" pointer-events-none absolute inset-0 overflow-hidden " aria-hidden="true" >
        <div className="contact-bubble contact-bubble-left-bottom" />
        <div className="contact-bubble contact-bubble-right-bottom" />

        {/* Background glow */}
        <div className=" absolute bottom-[-180px] left-1/2 h-[350px] w-[650px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-[100px] " />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
     <div className=" relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 " >
        {/* ===================================================
            LEFT SIDE
        ==================================================== */}
        <div className="relative flex flex-col md:gap-4">
          {/* Label */}
         <div className=" group relative mb-5 w-fit rounded-full bg-gradient-to-r from-violet-400/90 via-fuchsia-400/80 to-cyan-300/90 p-[1px] shadow-[0_6px_22px_rgba(139,92,246,0.20)] transition-all duration-300 hover:shadow-[0_8px_28px_rgba(139,92,246,0.30)] lg:mb-8" >
  <span
    className="
      relative
      inline-flex
      overflow-hidden
      rounded-full
      bg-[#10265c]/90
      px-4
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[0.2em]
      text-blue-100
      backdrop-blur-xl
    "
  >
    {/* Gloss */}
   <span aria-hidden="true" className=" pointer-events-none absolute inset-x-2 top-[1px] h-[45%] rounded-full bg-gradient-to-b from-white/30 via-white/10 to-transparent " />

    {/* Inner highlight */}
   <span aria-hidden="true" className=" pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] " />

    <span className="relative z-10">
      Let&apos;s Connect
    </span>
  </span>
</div>

          {/* Heading */}
         <h2 className=" text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl " >
            Get{" "}
            <span className=" bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent " >
              in Touch
            </span>
          </h2>

          {/* Description */}
         <p className=" mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base " >
            I&apos;m always open to new opportunities, interesting projects,
            collaborations, or just connecting and chatting about tech.
          </p>

          {/* Contact Links */}
          <div className=" mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm text-blue-100/90 lg:mt-12 lg:gap-x-12" >
          
            {/* LinkedIn */}
           <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer" className=" group flex items-center gap-2.5 transition-colors duration-300 hover:underline hover:text-blue-300 " >
              <FaLinkedinIn size={16} className=" transition-transform duration-500 ease-in-out group-hover:rotate-[360deg] " />

              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="YOUR_GITHUB_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                hover:underline

                gap-2.5
                transition-colors
                duration-300
                hover:text-violet-300
              "
            >
              <FaGithub
                size={16}
                className="
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:rotate-[360deg]
                "
              />

              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}
        <div className="relative">
          {/* Contact Form */}
          <form
            className="
              relative
              z-10
              rounded-2xl
              border
              border-white/15
              bg-white/[0.07]
              p-5
              shadow-2xl
              shadow-black/10
              backdrop-blur-xl
              sm:p-6
              xl:mr-24
            "
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="contact-input"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-4">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                className="contact-input"
              />
            </div>

            {/* Message */}
            <div className="mt-4">
              <label htmlFor="message" className="sr-only">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Message"
                className="contact-input resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-5 flex justify-end">
              <button
                type="submit"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-900
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-slate-50
                  hover:shadow-xl
                  active:translate-y-0
                "
              >
                Send Message

                <FaArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </div>
          </form>

          {/* =================================================
              HANDWRITTEN NOTE
          ================================================== */}
          <div
            className="
              absolute
              right-[-10px]
              top-1/2
              hidden
              -translate-y-1/2
              rotate-[-6deg]
              flex-col
              items-center
              text-center
              xl:flex
            "
            aria-hidden="true"
          >
            <p
              className="
                font-serif
                text-lg
                italic
                leading-6
                text-white/80
              "
            >
              Good
              <br />
              Ideas
              <br />
              Start
              <br />
              Here.
            </p>

            {/* Arrow */}
            <svg
              width="70"
              height="55"
              viewBox="0 0 70 55"
              fill="none"
              className="mt-2 text-white/60"
            >
              <path
                d="M61 4C61 21 52 33 37 37C27 40 18 38 10 34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M17 27L9 34L17 40"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}