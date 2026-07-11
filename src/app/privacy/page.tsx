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
      intro="SnipCode runs entirely in your browser. It has no servers, no accounts, and no analytics. We never see, collect, or store what you do with it."
      updated="July 10, 2026"
    >
      <Section id="what" title="What SnipCode Does">
        <p>
          SnipCode is a Chrome extension that turns any element on a web page into
          clean code or a structured document. You click an element, and it
          rebuilds that element as HTML, React, Tailwind, or Vue, along with its
          colors, fonts, and assets. All of this happens on your device.
        </p>
      </Section>

      <Section id="on-device" title="Data SnipCode Handles On Your Device">
        <p>
          SnipCode works with three kinds of information. All of it stays on your
          device unless you choose otherwise.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              The element you snip.
            </span>{" "}
            SnipCode reads its markup, text, styles, images, and inline SVG so it
            can rebuild it as code. This is website content, used only to produce
            your output.
          </li>
          <li>
            <span className="font-medium text-slate-900">Saved snippets.</span>{" "}
            SnipCode keeps your recent snips in your history. Each one includes the
            generated code, the address and title of the page you snipped from, and
            a small thumbnail. History holds the 50 most recent, and older ones are
            removed automatically.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Your settings and keys.
            </span>{" "}
            Your preferences and any AI provider keys are stored in your browser&apos;s
            local storage only, never the synced kind. So none of it reaches a
            cloud account, and keys are never written to logs.
          </li>
        </Bullets>
      </Section>

      <Section id="outbound" title="When Data Leaves Your Browser">
        <p>
          By default, nothing you snip leaves your browser. Exactly three features
          can send data out, and you turn on each one yourself.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              Optional AI polish, using your own key.
            </span>{" "}
            SnipCode can ask an AI to refine your output. It runs only if you add
            your own API key in Settings. Then the snipped content goes straight
            from the extension to the service you chose, signed with your key.
            SnipCode does not proxy or copy this traffic, because there is no server
            of ours in the middle. Supported services are OpenRouter, Anthropic,
            OpenAI, and Google, and each handles your data under its own privacy
            policy, linked below. Without a key, this never runs and SnipCode works
            fully offline.
          </li>
          <li>
            <span className="font-medium text-slate-900">
              Optional webhook delivery.
            </span>{" "}
            Turn it on in Settings and enter a URL of your own. SnipCode then posts
            your snipped result as JSON to that address, and nowhere else.
          </li>
          <li>
            <span className="font-medium text-slate-900">Downloads.</span> When you
            download an asset such as an image, icon, or SVG, your browser saves it
            to your device. If the asset is remote, your browser fetches it from its
            source, like any normal download.
          </li>
        </Bullets>
      </Section>

      <Section id="not-collected" title="What We Do Not Collect">
        <Bullets>
          <li>No analytics, tracking pixels, or telemetry of any kind.</li>
          <li>
            No browsing history. SnipCode does not watch the pages you visit. It
            reads an element only when you choose to snip it.
          </li>
          <li>
            No accounts, names, emails, or passwords. SnipCode has no sign in.
          </li>
          <li>No advertising data, and no selling or sharing with data brokers.</li>
        </Bullets>
      </Section>

      <Section id="permissions" title="Permissions, And Why Each One Is Needed">
        <p>
          Chrome asks you to approve a few permissions when you install SnipCode.
          Here is what each is for.
        </p>
        <Bullets>
          <li>
            <span className="font-medium text-slate-900">
              Access to the site you are on.
            </span>{" "}
            So SnipCode can read the element you snip on the current page.
          </li>
          <li>
            <span className="font-medium text-slate-900">Scripting.</span> So
            SnipCode can run its capture logic on the current page.
          </li>
          <li>
            <span className="font-medium text-slate-900">Storage.</span> So your
            settings, keys, and saved snippets can be kept locally, with room for
            larger snippets.
          </li>
          <li>
            <span className="font-medium text-slate-900">Downloads.</span> So you
            can save assets to your device.
          </li>
          <li>
            <span className="font-medium text-slate-900">Side panel.</span> So
            SnipCode can open in the browser&apos;s side panel.
          </li>
          <li>
            <span className="font-medium text-slate-900">Debugger.</span> So
            SnipCode can read exact, computed styles for the element you snip, which
            makes the code far more accurate. It attaches only to the tab you are
            snipping, only for that moment, then detaches. It does not record
            keystrokes, monitor your network, or watch other tabs. Chrome shows its
            own banner whenever any extension uses this permission.
          </li>
        </Bullets>
      </Section>

      <Section id="retention" title="Keeping And Deleting Your Data">
        <p>
          Because everything is stored locally, you are always in control. Saved
          snippets are limited to the 50 most recent and roll off automatically.
          You can clear your history anytime from History, and remove your keys and
          reset your settings in Settings. Uninstalling SnipCode removes all of its
          local data from your device.
        </p>
      </Section>

      <Section id="third-parties" title="Third-Party Services">
        <p>
          SnipCode contacts an outside service only when you turn on one of the
          optional features above. With AI polish, the service you chose receives
          what you send and handles it under its own policy:
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
                Privacy Policy
              </a>
            </li>
          ))}
        </Bullets>
        <p>
          With webhook delivery, the endpoint you configure receives your data. You
          control that endpoint.
        </p>
      </Section>

      <Section id="children" title="Children">
        <p>
          SnipCode is a developer tool and is not directed at children under 13. We
          do not knowingly collect data from children.
        </p>
      </Section>

      <Section id="commitments" title="Our Commitments">
        <p>To be explicit:</p>
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
        <p>
          The use of information received from Google APIs will adhere to the Chrome
          Web Store User Data Policy, including the Limited Use requirements.
        </p>
      </Section>

      <Section id="changes" title="Changes To This Policy">
        <p>
          If we change how SnipCode handles data, we will update this page and
          change the date at the top. If a change is significant, we will make it
          clear before it takes effect.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Questions about privacy, or anything else? Email us at{" "}
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
