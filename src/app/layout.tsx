import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/components/site/links";
import "./globals.css";

const TITLE = "SnipCode: Snip any website element into clean code";
const DESCRIPTION =
  "Free Chrome extension that turns any element on any website into clean HTML, React, Tailwind, or Vue code. Extract the design system, colors, and assets, 100% in your browser.";

// Figtree: the main UI font. Capped at semibold (600) per the design.
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SnipCode",
  description: DESCRIPTION,
  applicationName: "SnipCode",
  category: "DeveloperTools",
  keywords: [
    "snip to code",
    "website element to code",
    "copy element as code",
    "HTML to React",
    "HTML to Tailwind",
    "CSS extractor",
    "extract design tokens",
    "extract colors from website",
    "element to JSX",
    "Chrome extension",
    "inspect element export code",
  ],
  authors: [{ name: "SnipCode" }],
  creator: "SnipCode",
  alternates: { canonical: "/" },
  icons: {
    apple: "/logo128.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "SnipCode",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/logo128.png", width: 128, height: 128, alt: "SnipCode" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo128.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${figtree.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col overflow-x-hidden bg-white text-slate-900"
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
