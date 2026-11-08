"use client";

import Link from "next/link";
import { ChevronUp } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#061a3a]
        px-6
        py-6
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* Subtle top glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-px
          w-2/3
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-violet-400/40
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-5
          md:flex-row
        "
      >
        {/* Copyright */}
        <p
          className="
            order-3
            text-center
            text-xs
            text-slate-400
            md:order-1
            md:text-left
          "
        >
          © {new Date().getFullYear()} Karneet Arora. All rights reserved.
        </p>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="
            order-1
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-3
            md:order-2
          "
        >
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                relative
                text-xs
                font-medium
                text-slate-300
                transition-colors
                duration-300

                after:absolute
                after:-bottom-1
                after:left-0
                after:h-px
                after:w-0
                after:bg-gradient-to-r
                after:from-violet-400
                after:to-pink-400
                after:transition-all
                after:duration-300

                hover:text-white
                hover:after:w-full
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="
            group
            order-2
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-white/10
            bg-white/[0.07]
            text-slate-300
            shadow-sm
            backdrop-blur-md
            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-violet-400/40
            hover:bg-white/[0.12]
            hover:text-white
            hover:shadow-[0_6px_20px_rgba(139,92,246,0.20)]

            md:order-3
          "
        >
          <ChevronUp
            size={16}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-0.5
            "
          />
        </button>
      </div>
    </footer>
  );
}