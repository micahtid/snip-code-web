import { Nav } from "@/components/site/Nav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LiveTimer } from "@/components/site/LiveTimer";
import { GradientSpotlight } from "@/components/site/GradientSpotlight";
import { VideoPlaceholder } from "@/components/site/VideoPlaceholder";
import { STORE_URL, GITHUB_URL, SITE_URL } from "@/components/site/links";
import { FaHtml5, FaReact, FaVuejs, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import type { ReactNode } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "SnipCode",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Chrome",
      browserRequirements: "Requires Google Chrome",
      softwareVersion: "2.0.0",
      url: SITE_URL,
      description:
        "Free Chrome extension that turns any element on any website into clean HTML, React, Tailwind, or Vue code, and extracts the page's design system, colors, and assets. Runs 100% in your browser.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Snip any element to clean HTML, React, Tailwind, or Vue code",
        "Extract a page's design system as a schema",
        "Download images, backgrounds, favicons, and inline SVGs",
        "Pull the page's real color palette",
      ],
    },
    { "@type": "WebSite", name: "SnipCode", url: SITE_URL },
  ],
};

const FRAMEWORKS = [
  { Icon: FaHtml5, label: "HTML" },
  { Icon: FaCss3Alt, label: "CSS" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: FaReact, label: "React" },
  { Icon: FaVuejs, label: "Vue" },
];

const TRUST = [
  { title: "Runs 100% Locally", body: "Nothing you snip leaves your browser." },
  { title: "No Account Needed", body: "Install it and start snipping instantly." },
  { title: "Free And Open Source", body: "MIT licensed, bring your own AI key." },
];

// Feature titles: mostly Figtree, with a few accented words (rendered via <Accent>).
const FEATURES = [
  {
    key: "schema",
    title: (
      <>
        Export the page&apos;s <Accent>design system</Accent>
      </>
    ),
    body: "Colors, fonts, spacing, and components, all captured as clean JSON. Hand it to an AI and it can build new pages in the exact same style.",
    video: "/feature-schema.mp4",
    aspect: "1212 / 720",
  },
  {
    key: "assets",
    title: (
      <>
        Grab the page&apos;s <Accent>assets</Accent>
      </>
    ),
    body: "Every image, icon, background, and logo, collected in one place. Download any of them in a single click.",
    video: "/feature-assets.mp4",
    aspect: "1202 / 714",
  },
  {
    key: "colors",
    title: (
      <>
        Pull the page&apos;s <Accent>color palette</Accent>
      </>
    ),
    body: "Every color, ranked by how often it appears. Copy any of them in a single click.",
    video: "/feature-colors.mp4",
    aspect: "1212 / 720",
  },
];

const ACCENT_FONT = '"Times New Roman", Times, serif';

function Accent({ children }: { children: ReactNode }) {
  return (
    <span className="font-normal italic" style={{ fontFamily: ACCENT_FONT }}>
      {children}
    </span>
  );
}

function FeatureRow({
  title,
  body,
  video,
  aspect,
  flip = false,
}: {
  title: ReactNode;
  body: string;
  video: string;
  aspect: string;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={`text-center lg:text-left ${flip ? "lg:order-2" : ""}`}>
        <h3 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h3>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-slate-600 lg:mx-0">
          {body}
        </p>
      </div>
      <div className={flip ? "lg:order-1" : ""}>
        <VideoPlaceholder src={video} aspect={aspect} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div id="top" className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />

      <main>
      {/* ============================= HERO ============================= */}
      <section data-hero className="relative overflow-hidden">
        <GradientSpotlight
          cloudTop="37%"
          cloudHeight="26%"
          gradientOverlay="linear-gradient(to bottom, #95c2f2 0%, #b0d1f5 34%, #d9e9f9 54%, #ffffff 63%)"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-28 pt-20 text-center sm:pt-24">
          <LiveTimer />

          <h1 className="hero-text-shadow mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl">
            Snip Any Website Element Into{" "}
            <span
              className="font-normal italic text-white"
              style={{ fontFamily: ACCENT_FONT }}
            >
              Clean Code
            </span>
          </h1>

          <p className="hero-text-shadow mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/95">
            Click any element and copy it as clean HTML, React, Tailwind, or Vue.
            Right in your browser.
          </p>

          <div className="mx-auto mt-9 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 py-4 text-center text-base font-semibold sm:w-auto"
            >
              Add to Chrome
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full px-7 py-4 text-center text-base font-semibold sm:w-auto"
            >
              Star on GitHub
            </a>
          </div>

          {/* Hero demo video: same framed style as the feature videos below */}
          <div className="mx-auto mt-16 w-full max-w-4xl">
            <VideoPlaceholder src="/hero-demo.mp4" aspect="1202 / 714" />
          </div>

          {/* Frameworks: below the video, monochrome, no labels */}
          <div className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              In your favorite framework
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-slate-400">
              {FRAMEWORKS.map(({ Icon, label }) => (
                <Icon key={label} size={30} aria-label={label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TRUST STRIP ========================= */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-slate-200 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {TRUST.map((t) => (
            <div key={t.title} className="px-8 py-12 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= FEATURES ========================= */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Everything The Page Is Made Of
          </h2>
        </div>

        <div className="mt-24 space-y-24 sm:space-y-28">
          {FEATURES.map((f, i) => (
            <FeatureRow key={f.key} title={f.title} body={f.body} video={f.video} aspect={f.aspect} flip={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="relative overflow-hidden border-t border-slate-200">
        <GradientSpotlight cloudTop="calc(50% + 20px)" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-24 pt-20 text-center sm:pb-32 sm:pt-24">
          <h2 className="hero-text-shadow text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
            Start{" "}
            <span className="font-normal italic" style={{ fontFamily: ACCENT_FONT }}>
              Snipping
            </span>{" "}
            Now
          </h2>
          <p className="hero-text-shadow mx-auto mt-6 max-w-md text-lg leading-relaxed text-white/95">
            The whole web is your component library.
          </p>
          <div className="mx-auto mt-9 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full px-7 py-4 text-center text-base font-semibold sm:w-auto"
            >
              Add to Chrome
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full px-7 py-4 text-center text-base font-semibold sm:w-auto"
            >
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* ========================= FOOTER ========================= */}
      <SiteFooter />
    </div>
  );
}
