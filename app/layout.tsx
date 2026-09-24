import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { StatusRail } from "@/components/experience/chrome/StatusRail";
import { MotionRoot } from "@/components/experience/providers/MotionRoot";
import { PageTransition } from "@/components/experience/providers/PageTransition";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { site } from "@/data/site";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e6dece",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.displayName} | ${site.title}`,
    template: `%s | ${site.displayName}`,
  },
  description: site.description,
  keywords: [
    "Timi Odusanya",
    "Timilehin Odusanya",
    "Senior Full Stack Engineer",
    "Full Stack Engineer",
    "AI Engineer",
    "Software Engineer",
    "React Engineer",
    "Next.js Engineer",
    "Product Engineer",
    "Automation Engineer",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.displayName} - ${site.title}`,
    title: `${site.displayName} | ${site.title}`,
    description: site.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${site.displayName} - ${site.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.displayName} | ${site.title}`,
    description: site.description,
    creator: site.twitter,
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: site.url,
  },
  category: "technology",
  other: {
    "google-site-verification": "pzXnbJA1JFlYbNiLPEX1pjpvSIZP3OjPS0ba_6KYX1Q",
  },
  icons: {
    icon: [{ url: "/profile.png", type: "image/png" }],
    apple: [{ url: "/profile.png", type: "image/png" }],
    shortcut: [{ url: "/profile.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <MotionRoot>
          <PageTransition>
            <StatusRail />
            <main id="main">{children}</main>
            <SiteFooter />
          </PageTransition>
        </MotionRoot>
      </body>
    </html>
  );
}
