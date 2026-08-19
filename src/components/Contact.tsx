"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./Projects";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = `mailto:${profile.socials.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name || "..."}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name} (${form.email})`
  )}`;

  return (
    <section id="contact" className="px-4 py-28 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="03" title="contact" comment="// let's build something" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 grid grid-cols-1 gap-8 rounded-lg border border-line bg-surface p-6 sm:grid-cols-2 sm:p-10"
        >
          <div>
            <p className="font-mono text-sm text-cyan">
              function <span className="text-amber">sayHello</span>() {"{"}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Have a project in mind, or just want to talk shop? My inbox is
              open — I read and reply to everything.
            </p>

            <div className="mt-8 flex flex-col gap-3 font-mono text-sm">
              <a
                href={`mailto:${profile.socials.email}`}
                className="focus-ring flex items-center gap-2 text-text transition-colors hover:text-amber"
              >
                <Mail size={16} /> {profile.socials.email}
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-2 text-text transition-colors hover:text-amber"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-2 text-text transition-colors hover:text-amber"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
            <p className="mt-8 font-mono text-sm text-cyan">{"}"}</p>
          </div>

          <form
            action={mailtoHref}
            method="get"
            className="flex flex-col gap-4"
          >
            <Field
              label="name"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              placeholder="Your Name"
            />
            <Field
              label="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              placeholder="you@example.com"
              type="email"
            />
            <div>
              <label className="font-mono text-xs text-muted">
                message
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="Tell me about your project..."
                className="focus-ring mt-1.5 w-full resize-none rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-text placeholder:text-muted/50"
              />
            </div>
            <button
              type="submit"
              className="focus-ring mt-1 self-start rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              send message →
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-xs text-muted">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="focus-ring mt-1.5 w-full rounded-md border border-line bg-ink px-3 py-2 font-mono text-sm text-text placeholder:text-muted/50"
      />
    </div>
  );
}
