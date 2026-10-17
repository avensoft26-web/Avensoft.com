import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

import SplashScreen from "@/components/SplashScreen";
import { assetPath, siteUrl } from "@/lib/basePath";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avensoft Technologies — Software & Cloud Systems",
    template: "%s | Avensoft Technologies",
  },
  description:
    "Architecting mission-critical software systems across India — from native Android applications and AI integrations to high-throughput cloud portals.",
  keywords: [
    "Avensoft",
    "Avensoft India",
    "Avensoft Technologies",
    "Avensoft Technologies India",
    "Software Technologies India",
    "Next.js Development India",
    "Native Android Kotlin",
    "AI & Cloud Systems",
    "SISTec Digital Pass",
    "CHC Koraon OPD Hospital System",
    "DualShield AI",
    "Bhopal Tech Studio",
  ],
  authors: [{ name: "Avensoft Technologies", url: siteUrl }],
  creator: "Avensoft Technologies",
  publisher: "Avensoft Technologies",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Avensoft Technologies",
    title: "Avensoft Technologies — Software & Cloud Systems",
    description:
      "Architecting mission-critical software systems across India — native Android applications, modern AI integrations, and sub-300ms cloud portals.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        secureUrl: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Avensoft Technologies — Software & Cloud Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avensoft Technologies — Software & Cloud Systems",
    description:
      "Architecting mission-critical software systems across India — native Android applications, modern AI integrations, and cloud portals.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@avensoft",
  },
  icons: {
    icon: [
      { url: assetPath("/favicon-light-sys.png?v=5"), media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: assetPath("/favicon.ico?v=5"), media: "(prefers-color-scheme: dark)", type: "image/x-icon" },
    ],
    apple: assetPath("/apple-icon.png?v=2"),
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Avensoft Technologies",
  alternateName: ["Avensoft", "Avensoft India", "Avensoft Technologies India"],
  url: siteUrl,
  logo: `${siteUrl}/AVENSOFT-dark-theme.png`,
  description:
    "Engineering studio architecting mission-critical software systems across India — native Android applications, modern AI integrations, and cloud portals.",
  email: "avensoft26@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: ["https://github.com/avensoft26"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SplashScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
