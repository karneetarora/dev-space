'use client'
import { useEffect, useState } from 'react';
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
      <section id="hero">
        <p className="tag-line"><span>{tagline}</span>.</p>
      </section>
      <section id='selected-work'>
      </section>
      <section id='about-me'>
      </section>
      <section id='skills'>
      </section>
      <section id='my-experiences'>
      </section>
      <section id='contact-me'>
      </section>
    </div>
  );
}
