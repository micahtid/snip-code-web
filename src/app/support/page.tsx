import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DocPage, Section } from "@/components/site/DocPage";
import { STORE_URL, GITHUB_URL } from "@/components/site/links";

export const metadata: Metadata = {
  title: "Support · SnipCode",
  description:
    "Get help with SnipCode: a quick start guide, answers to common questions, troubleshooting steps, and how to reach a human.",
  alternates: { canonical: "/support" },
};

const link = "font-medium text-sky-600 hover:underline";

/** One question-and-answer pair in the FAQ. */
function Faq({ q, children }: { q: string; children: ReactNode }) {
  return (
    <div>
      <p className="font-medium text-slate-900">{q}</p>
      <p className="mt-1.5">{children}</p>
    </div>
  );
}

export default function SupportPage() {
  return (
    <DocPage
      title="Support"
      intro="Need a hand with SnipCode? Start here. Most answers are below, and you can always reach a human."
    >
      <Section id="getting-started" title="Getting Started">
        <p>No account, no setup. From install to your first snip takes four steps.</p>
        <ol className="list-decimal space-y-2 pl-5 marker:text-slate-400">
          <li>
            Install SnipCode from the{" "}
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              Chrome Web Store
            </a>
            .
          </li>
          <li>Pin it, then click the toolbar icon to open the side panel.</li>
          <li>Click Capture, then hover and click any element.</li>
          <li>Copy the code, or switch between HTML, React, Tailwind, and Vue.</li>
        </ol>
      </Section>

      <Section id="faq" title="Frequently Asked Questions">
        <div className="space-y-6">
          <Faq q="Do I need an account?">
            No. Install it and start snipping. There is no sign in.
          </Faq>
          <Faq q="Is it free?">
            Yes. SnipCode is free and open source under the MIT license.
          </Faq>
          <Faq q="Does my data leave my browser?">
            Not unless you choose to. Core snipping runs entirely on your device.
            Data leaves only when you turn on the optional AI or webhook features.
            The{" "}
            <a href="/privacy" className={link}>
              Privacy Policy
            </a>{" "}
            covers exactly what happens and when.
          </Faq>
          <Faq q="Do I need an API key?">
            No. Every core feature works offline with no key, from snipping elements
            into code to extracting colors, fonts, and assets. A key is needed only
            for the optional AI polish that refines the output.
          </Faq>
          <Faq q="Which AI providers can I use?">
            OpenRouter, Anthropic, OpenAI, and Google. You add your own key in
            Settings, and it stays local to your device.
          </Faq>
          <Faq q="Why does SnipCode ask for the debugger permission?">
            To read exact, computed styles for the element you snip, which makes the
            code far more accurate. It attaches only to the tab you are snipping,
            only for that moment, and never records keystrokes or network activity.
            Chrome shows a banner whenever it is in use. More detail is in the{" "}
            <a href="/privacy" className={link}>
              Privacy Policy
            </a>
            .
          </Faq>
          <Faq q="How many snippets does it keep?">
            Your 50 most recent, stored locally. Older ones roll off automatically,
            and you can clear them anytime from History.
          </Faq>
          <Faq q="Which browsers are supported?">
            Chrome 122 and later, and Chromium-based browsers such as Edge, Brave,
            and Arc.
          </Faq>
        </div>
      </Section>

      <Section id="troubleshooting" title="Troubleshooting">
        <div className="space-y-6">
          <Faq q="The extension will not open on a page.">
            Some pages are off limits to every extension, including the Chrome Web
            Store, the new tab page, and internal Chrome pages. Try a normal website
            instead.
          </Faq>
          <Faq q="Snipping does nothing, or the output looks off.">
            Reload the page and try again. If you have DevTools open, close it, since
            it can conflict with the styling read. Make sure you are on Chrome 122 or
            later.
          </Faq>
          <Faq q="The AI polish did not run.">
            Confirm you added a valid key in Settings and picked a provider. Use the
            Test key button to check it. If a request fails, SnipCode quietly falls
            back to its normal output.
          </Faq>
          <Faq q="My snippet did not save.">
            History keeps the 50 most recent snips. At the limit, the oldest is
            removed to make room.
          </Faq>
        </div>
      </Section>

      <Section id="feedback" title="Report A Bug Or Request A Feature">
        <p>
          Found something broken, or have an idea? Open an issue on{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={link}
          >
            GitHub
          </a>{" "}
          and we will take a look. Clear steps to reproduce a bug help us fix it
          faster.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p>
          Reach us directly at{" "}
          <a href="mailto:micahtid@gmail.com" className={link}>
            micahtid@gmail.com
          </a>
          . We read every message and aim to reply within a couple of business days.
        </p>
      </Section>
    </DocPage>
  );
}
