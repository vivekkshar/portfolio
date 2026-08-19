import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-8 sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 font-mono text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-line">
          built with next.js · framer-motion · tailwind
        </p>
      </div>
    </footer>
  );
}
