import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import metadataData from "./data/metadata.json";
import { themeInitializerScript } from "./lib/theme-script";
import FirebaseProvider from "./providers/FirebaseProvider";
import type { SiteMetadataData } from "./types/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { metadataBase, ...metadataValues } = metadataData as SiteMetadataData;

export const metadata: Metadata = {
  ...metadataValues,
  metadataBase: new URL(metadataBase),
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
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
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
