"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";

function useTypewriter(text: string, speed = 38, startDelay = 300) {
  const [output, setOutput] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}

export default function Hero() {
  const codeLine = `const developer = introduce("${profile.name}");`;
  const { output, done } = useTypewriter(codeLine);

  return (
    <section
      id="intro"
      className="relative flex min-h-screen flex-col justify-center px-4 pt-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-sm text-muted"
        >
          <span className="text-rose">{"//"}</span> welcome to my portfolio
        </motion.p>

        <div className="mb-8 min-h-[1.5rem] font-mono text-sm text-cyan sm:text-base">
          {output}
          <span
            className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-amber ${
              done ? "animate-blink" : ""
            }`}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-[13vw] italic leading-[0.95] text-text sm:text-7xl md:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-3"
        >
          <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-amber">
            {profile.role}
          </span>
          <span className="font-mono text-xs text-muted">
            {profile.location}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="focus-ring rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            view projects →
          </a>
          <a
            href="#contact"
            className="focus-ring rounded-md border border-line px-5 py-2.5 font-mono text-sm text-text transition-colors hover:border-amber/60 hover:text-amber"
          >
            get in touch
          </a>

          <div className="ml-1 flex items-center gap-4 text-muted">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="focus-ring transition-colors hover:text-text"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="focus-ring transition-colors hover:text-text"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              aria-label="Email"
              className="focus-ring transition-colors hover:text-text"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#projects"
        aria-label="Scroll to projects"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
