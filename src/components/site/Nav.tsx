import { STORE_URL } from "./links";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a
          href="/"
          className="text-[17px] font-semibold tracking-tight text-slate-900"
        >
          SnipCode
        </a>

        <a
          href={STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-4 py-2 text-sm font-semibold"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
