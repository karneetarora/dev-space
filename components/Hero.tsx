"use client";

import { useEffect, useState } from "react";

const taglines = ['Design.', 'Develop.', 'Deploy.'];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTagline = taglines[taglineIndex];

    let delay = isDeleting ? 55 : 100;

    // Word has finished typing
    if (!isDeleting && displayedText === currentTagline) {
      delay = 1600;
    }

    // Word has finished deleting
    if (isDeleting && displayedText === "") {
      delay = 350;
    }

    const timeout = setTimeout(() => {
      // Start deleting after full word is displayed
      if (!isDeleting && displayedText === currentTagline) {
        setIsDeleting(true);
        return;
      }

      // Move to next word after deletion
      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % taglines.length);
        return;
      }

      // Delete one character
      if (isDeleting) {
        setDisplayedText(
          currentTagline.substring(0, displayedText.length - 1)
        );
      }

      // Type one character
      else {
        setDisplayedText(
          currentTagline.substring(0, displayedText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, taglineIndex]);

  return (
    <h1 className="tag-line text-5xl font-bold leading-[1.05] md:text-6xl">
      Hi, I&apos;m AK.
      <br />
      <span className="lg:text-8xl">I{" "}</span>
        <span className="gradient-text tracking-[0.04em] lg:text-8xl">
        {displayedText}
        </span>
      <span className="typewriter-cursor lg:text-8xl" aria-hidden="true">
        |
      </span>
    </h1>
  );
}