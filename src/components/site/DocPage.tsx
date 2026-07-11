import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { SiteFooter } from "./SiteFooter";

/**
 * Shared shell for text-heavy pages such as Privacy and Support.
 * Renders the site nav, a titled header, the page body, and the site footer,
 * all inside the same narrow reading column.
 */
export function DocPage({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Nav />
      <main className="mx-auto w-full max-w-3xl px-5 py-20 sm:py-24">
        <header>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{intro}</p>
          {updated && (
            <p className="mt-4 text-sm text-slate-400">Last updated {updated}</p>
          )}
        </header>
        <div className="mt-14 space-y-12">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

/** One titled section within a DocPage. The id makes each section directly linkable. */
export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-600">
        {children}
      </div>
    </section>
  );
}
