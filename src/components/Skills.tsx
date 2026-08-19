"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { SectionHeading } from "./Projects";

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="02" title="skills" comment="// tools I reach for" />

        <div className="mt-14 rounded-lg border border-line bg-surface p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {skills.map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: gi * 0.08 }}
              >
                <p className="font-mono text-xs text-rose">{group.comment}</p>
                <h3 className="mt-1 font-mono text-sm text-cyan">
                  {group.label}: [
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2 pl-4">
                  {group.items.map((item, ii) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.3, delay: gi * 0.08 + ii * 0.04 }}
                      className="rounded-md border border-line bg-ink px-3 py-1.5 font-mono text-[13px] text-text transition-colors hover:border-amber/50 hover:text-amber"
                    >
                      &quot;{item}&quot;
                    </motion.li>
                  ))}
                </ul>
                <p className="mt-2 font-mono text-sm text-cyan">]</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
