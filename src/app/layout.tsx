import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageWrapper from "@/components/shared/PageWrapper";
import { generateSEO } from "@/lib/seo";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen gap-y-10 flex flex-col`}
      >
        <Header />
        <main className="flex flex-col flex-1 gap-x-10">{children}</main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
