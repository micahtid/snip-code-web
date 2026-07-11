import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DocPage, Section } from "@/components/site/DocPage";
import { GITHUB_URL } from "@/components/site/links";

export const metadata: Metadata = {
  title: "Privacy Policy · SnipCode",
  description:
    "How SnipCode handles your data. Short version: it runs entirely in your browser, has no servers or accounts, and collects no analytics.",
  alternates: { canonical: "/privacy" },
};

const link = "font-medium text-sky-600 hover:underline";

/** A shared list style for the bulleted points used throughout the policy. */
function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-slate-300">
      {children}
    </ul>
  );
}

/** The AI providers SnipCode can send data to, but only when a user adds their own key. */
const PROVIDERS: Array<{ name: string; href: string }> = [
  { name: "OpenRouter", href: "https://openrouter.ai/privacy" },
  { name: "Anthropic", href: "https://www.anthropic.com/legal/privacy" },
  { name: "OpenAI", href: "https://openai.com/policies/privacy-policy" },
  { name: "Google (Gemini API)", href: "https://policies.google.com/privacy" },
];

export default function PrivacyPage() {
  return (
    <DocPage
      title="Privacy Policy"
      intro="SnipCode runs entirely inside your browser. It has no servers, no accounts, and no analytics. We never see, collect, or store what you do with it."
      updated="July 10, 2026"
    >
      {/* The short version, up top, in a bordered callout. */}
      <div className="border-l-2 border-sky-500 bg-slate-50 px-5 py-4">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
          The short version
        </p>
        <div className="mt-3 text-[15px] leading-relaxed text-slate-600">
          <Bullets>
            <li>
              SnipCode has no backend. There is no SnipCode server that your data
              passes through.
            </li>
            <li>Everything you snip is processed locally, on your own device.</li>
            <li>
              We collect no analytics, no telemetry, and no record of the pages
              you visit.
            </li>
            <li>
              Your data leaves your browser only when you turn on an optional AI
              or webhook feature, and then it goes straight to the service you
              picked, using your own key.
            </li>
            <li>We do not sell or share your data with anyone.</li>
          </Bullets>
        </div>
      </div>

      <Section id="what" title="What SnipCode does">
        <p>
          SnipCode is a Chrome extension that turns an element on a web page into
          clean code or a structured document. You click an element, and SnipCode
          reads that element and rebuilds it as HTML, React, Tailwind, or Vue,
          along with its colors, fonts, and assets. All of this work happens on
          your device.
        </p>
      </Section>

      <Section id="on-device" title="Data SnipCode handles on your device">
        <p>
          To do its job, SnipCode works with three kinds of information, all of
          which stay on your machine unless you decide otherwise.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              The element you snip.
            </span>{" "}
            When you snip an element, SnipCode reads its markup, text, styles,
            images, and inline SVG so it can rebuild it as code. This is website
            content, and it is used only to produce your output.
          </li>
          <li>
            <span className="font-medium text-slate-900">Saved snippets.</span>{" "}
            SnipCode keeps your recent snips in your history so you can find them
            again. Each saved snippet includes the generated code, the address
            and title of the page you snipped from, and a small thumbnail image.
            History is capped at the 50 most recent snippets, and older ones are
            removed automatically.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Your settings and keys.
            </span>{" "}
            Your preferences and any AI provider keys you add are stored locally.
            SnipCode uses local browser storage only, never the synced kind, so
            none of this is ever copied to a cloud account. Provider keys are
            never written to logs.
          </li>
        </Bullets>
      </Section>

      <Section id="outbound" title="When data leaves your browser">
        <p>
          By default, nothing you snip ever leaves your device. There are exactly
          three features that send data out, and each one is something you turn
          on yourself.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              Optional AI polish, using your own key.
            </span>{" "}
            SnipCode can ask a large language model to refine your output. This
            runs only if you add your own API key in settings. When it runs, the
            snipped content is sent straight from the extension to the AI service
            you chose, signed with your key. SnipCode does not proxy or copy this
            traffic, because there is no SnipCode server in the middle. Supported
            services are OpenRouter, Anthropic, OpenAI, and Google. Whatever you
            send is then handled by that service under its own privacy policy,
            linked below. If you never add a key, this feature never runs and the
            extension works fully offline.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Optional webhook delivery.
            </span>{" "}
            In settings you can turn on webhook delivery and enter a URL of your
            own. When it is on, SnipCode posts your snipped result as JSON to that
            address. The data goes only to the endpoint you supplied.
          </li>
          <li>
            <span className="font-medium text-slate-900">Downloads.</span> When
            you download an asset such as an image, icon, or SVG, the browser
            saves it to your device. If the asset lives on a remote server, the
            browser fetches it from its original source, the same as any normal
            download.
          </li>
        </Bullets>
      </Section>

      <Section id="not-collected" title="What we do not collect">
        <Bullets>
          <li>No analytics, tracking pixels, or telemetry of any kind.</li>
          <li>
            No browsing history. SnipCode does not watch the pages you visit. It
            reads an element only at the moment you choose to snip it.
          </li>
          <li>
            No accounts, names, emails, or passwords. SnipCode has no sign in.
          </li>
          <li>
            No advertising data, and no selling or sharing of data with data
            brokers.
          </li>
        </Bullets>
      </Section>

      <Section id="permissions" title="Permissions, and why each one is needed">
        <p>
          Chrome asks you to approve a set of permissions when you install
          SnipCode. Here is what each one is for.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              Access to the site you are on.
            </span>{" "}
            So SnipCode can read the element you snip on the page you are
            viewing.
          </li>
          <li>
            <span className="font-medium text-slate-900">Scripting.</span> So
            SnipCode can run its capture logic on the current page.
          </li>
          <li>
            <span className="font-medium text-slate-900">Storage.</span> So your
            settings, keys, and saved snippets can be kept locally, with enough
            room for larger snippets.
          </li>
          <li>
            <span className="font-medium text-slate-900">Downloads.</span> So you
            can save assets to your device.
          </li>
          <li>
            <span className="font-medium text-slate-900">Side panel.</span> So
            SnipCode can open in the browser side panel.
          </li>
          <li>
            <span className="font-medium text-slate-900">Debugger.</span> So
            SnipCode can read exact, computed styles for the element you snip,
            which produces much higher fidelity code. SnipCode attaches only to
            the tab you are snipping, only for the moment of the snip, and
            detaches immediately after. It does not record your keystrokes,
            monitor your network, or watch other tabs. Chrome shows its own
            banner while any extension uses this permission.
          </li>
        </Bullets>
      </Section>

      <Section id="retention" title="Keeping and deleting your data">
        <p>
          Because everything is stored locally, you are always in control. Your
          saved snippets are limited to the 50 most recent and roll off
          automatically. You can clear your history at any time from the History
          view, and you can remove your keys and reset your settings from the
          Settings view. Uninstalling SnipCode removes all of its local data from
          your device.
        </p>
      </Section>

      <Section id="third-parties" title="Third-party services">
        <p>
          SnipCode contacts an outside service only when you opt into one of the
          optional features above. When you use AI polish, the service you chose
          receives the content you send, and handles it under its own policy:
        </p>
        <Bullets>
          {PROVIDERS.map((p) => (
            <li key={p.name}>
              {p.name}:{" "}
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                privacy policy
              </a>
            </li>
          ))}
        </Bullets>
        <p>
          When you use webhook delivery, the endpoint you configure receives your
          data. You control that endpoint.
        </p>
      </Section>

      <Section id="children" title="Children">
        <p>
          SnipCode is a developer tool and is not directed at children under 13.
          We do not knowingly collect data from children.
        </p>
      </Section>

      <Section id="commitments" title="Our commitments">
        <p>In plain terms, and to be explicit:</p>
        <Bullets>
          <li>
            We do not sell or transfer your data to third parties, other than the
            optional, user-initiated cases described above.
          </li>
          <li>
            We do not use or transfer your data for any purpose unrelated to
            snipping elements into code.
          </li>
          <li>
            We do not use or transfer your data to determine creditworthiness or
            for lending.
          </li>
        </Bullets>
        <blockquote className="border-l-2 border-slate-300 pl-4 italic text-slate-500">
          The use of information received from Google APIs will adhere to the
          Chrome Web Store User Data Policy, including the Limited Use
          requirements.
        </blockquote>
      </Section>

      <Section id="changes" title="Changes to this policy">
        <p>
          If we change how SnipCode handles data, we will update this page and
          change the date at the top. If a change is significant, we will make it
          clear before it takes effect.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Questions about privacy, or about anything else? Email us at{" "}
          <a href="mailto:tidballmicah@gmail.com" className={link}>
            tidballmicah@gmail.com
          </a>
          , or open an issue on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            GitHub
          </a>
          . We read every message.
        </p>
      </Section>
    </DocPage>
  );
}
