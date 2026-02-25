import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Invictus Promotions | Music Marketing Agency",
  description:
    "Invictus Promotions delivers fearless marketing, PR, and agency services for Irish artists and labels.",
  openGraph: {
    title: "Invictus Promotions",
    description:
      "Unstoppable promotions for unstoppable talent across Ireland's music scene.",
    url: "https://invictus-promotions.local",
    siteName: "Invictus Promotions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invictus Promotions",
    description: "Parketing and agency services for musicians in Ireland.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
