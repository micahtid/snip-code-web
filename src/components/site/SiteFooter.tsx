import { GITHUB_URL } from "./links";

/** Shared site footer: copyright plus the Privacy, Support, GitHub, and Contact links. */
export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <span className="text-[13px] text-slate-400">
          © 2026 SnipCode · MIT Licensed
        </span>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] font-medium text-slate-600">
          <a href="/privacy" className="hover:underline">
            Privacy
          </a>
          <a href="/support" className="hover:underline">
            Support
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
          <a href="mailto:tidballmicah@gmail.com" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
