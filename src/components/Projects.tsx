"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="projects" comment="// things I've shipped" />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className={`group relative flex flex-col rounded-lg border border-line bg-surface p-6 transition-colors hover:border-amber/40 ${
                project.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-xs text-muted">
                  {project.id}
                </span>
                <div className="flex items-center gap-3 text-muted">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                      className="focus-ring transition-colors hover:text-text"
                    >
                      <Github size={16} />
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live site`}
                      className="focus-ring transition-colors hover:text-amber"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-2xl italic text-text">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-ink px-2.5 py-1 font-mono text-[11px] text-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
  comment,
}: {
  index: string;
  title: string;
  comment: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-sm text-line">{index}</span>
      <div>
        <p className="font-mono text-xs text-rose">{comment}</p>
        <h2 className="mt-2 font-display text-4xl italic text-text sm:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}
