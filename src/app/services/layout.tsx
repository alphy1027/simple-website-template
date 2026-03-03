import PageWrapper from "@/components/shared/PageWrapper";
import { generateSEO } from "@/lib/seo";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = generateSEO({
  title: "Services",
  description: "We provide web development services to global clients",
  url: "/services",
});

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <PageWrapper>{children}</PageWrapper>;
}
