import type { Metadata } from "next";
import { Poppins, Sofia_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import { generateSEO } from "@/lib/seo";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${poppins.variable} ${sofiaSans.variable} antialiased min-h-screen gap-y-10 flex flex-col`}>
        <Header />
        <main className="flex flex-col flex-1 gap-x-10">
          {children}
          <Toaster position="top-center" />
        </main>
        <Footer />
      </body>
    </html>
  );
}
