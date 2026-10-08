import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import FirebaseProvider from "./providers/FirebaseProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reinaldo Haynes – Engineering Manager",
  description: "Engineering Manager with 13+ years building products in fintech, digital media, and health tech. Manages teams of up to 11 engineers and brings a staff-level frontend background.",
  keywords: [
    "Reinaldo Haynes",
    "Rey Haynes",
    "Engineering Manager",
    "Engineering Leader",
    "People Management",
    "Team Leadership",
    "Capacity Planning",
    "Staff Frontend Engineer",
    "Senior Frontend Engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "Fintech",
    "Digital Media",
    "Health Tech",
    "Frontend Architecture",
    "Atlanta GA",
    "Resume",
    "Portfolio"
  ],
  authors: [{ name: "Reinaldo Haynes", url: "https://reyhaynes.com" }],
  creator: "Reinaldo Haynes",
  metadataBase: new URL("https://resume.reyhaynes.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://resume.reyhaynes.com",
    title: "Reinaldo Haynes – Engineering Manager",
    description: "Engineering Manager with 13+ years building products in fintech, digital media, and health tech. Manages teams of up to 11 engineers and brings a staff-level frontend background.",
    siteName: "Reinaldo Haynes Resume",
    images: [
      {
        url: "https://reyhaynes.com/logo-large-social.jpg",
        width: 1200,
        height: 630,
        alt: "Reinaldo Haynes - Engineering Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reinaldo Haynes – Engineering Manager",
    description: "Engineering Manager with 13+ years building products in fintech, digital media, and health tech. Manages teams of up to 11 engineers and brings a staff-level frontend background.",
    images: ["https://reyhaynes.com/logo-large-social.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=yes,viewport-fit=cover" />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          src="/theme-script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
