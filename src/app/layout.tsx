import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Omotola Oginni - Product Designer",
  description: "A thoughtful product designer who combines visual craft, strategic UX thinking, and scalable systems design to create impactful digital experiences.",
  keywords: ["product design", "UX design", "design systems", "fintech", "creator economy", "portfolio", "Omotola Oginni"],
  authors: [{ name: "Omotola Oginni" }],
  openGraph: {
    title: "Omotola Oginni - Product Designer",
    description: "A thoughtful product designer who combines visual craft, strategic UX thinking, and scalable systems design to create impactful digital experiences.",
    url: "https://omotola.com",
    siteName: "Omotola Oginni Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omotola Oginni - Product Designer",
    description: "A thoughtful product designer who combines visual craft, strategic UX thinking, and scalable systems design to create impactful digital experiences.",
  },
  icons: {
    icon: '/logo-icon.svg',
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${onest.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={onest.className} suppressHydrationWarning>
        <Navbar />
        <main className="page-container">
          {children}
        </main>
        <Footer />
        <CustomCursor />
      </body>
    </html>
  );
}
