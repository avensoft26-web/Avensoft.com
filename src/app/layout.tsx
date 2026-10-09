import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

import SplashScreen from "@/components/SplashScreen";

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
  title: "Avensoft — Deep-Tech Engineering Studio",
  description: "Architecting mission-critical software systems across India.",
  icons: {
    icon: [
      { url: "/Avensoft.com/favicon-light-sys.png?v=5", media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: "/Avensoft.com/favicon.ico?v=5", media: "(prefers-color-scheme: dark)", type: "image/x-icon" },
    ],
    apple: "/Avensoft.com/apple-icon.png?v=2",
  },
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
        <SplashScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
