"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { id: "intro", label: "intro.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "skills", label: "skills.tsx" },
  { id: "contact", label: "contact.tsx" },
];

export default function Nav() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 sm:px-8">
        {tabs.map((tab) => {
          const isActive = active === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="focus-ring relative shrink-0 px-4 py-3.5 font-mono text-[13px] transition-colors"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={
                  isActive ? "text-text" : "text-muted hover:text-text/80"
                }
              >
                <span className={isActive ? "text-amber" : "text-muted/60"}>
                  {isActive ? "● " : "○ "}
                </span>
                {tab.label}
              </span>
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-3 -bottom-px h-[2px] bg-amber"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
