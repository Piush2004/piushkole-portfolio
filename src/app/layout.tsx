import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";
import GlobalBackground from "@/components/layout/GlobalBackground";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: `Premium portfolio of ${profile.name} - ${profile.headline} Specialized in AI Agents, Computer Vision, and Backend Development.`,
  keywords: ["AI Engineer", "Data Scientist", profile.name, "Portfolio", "Machine Learning", "Backend Developer", "React", "Next.js"],
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://piushkole.com",
    title: `${profile.name} | ${profile.role}`,
    description: `Premium portfolio of ${profile.name} - ${profile.headline}`,
    siteName: `${profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: `Specialized in AI Agents, Computer Vision, and Backend Development.`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: 'https://piushkole.com',
    sameAs: [
      profile.socials.linkedin,
      profile.socials.github,
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col relative selection:bg-primary/30 selection:text-white">
        <ClientLayout>
          <GlobalBackground />
          <Navigation />
          <main className="flex-grow w-full z-10 relative">
            {children}
          </main>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
