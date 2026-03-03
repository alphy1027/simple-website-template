interface SiteConfig {
  name: string;
  description: string;
  siteUrl: string;
  phone: string;
  email: string;
  address: string;
  ogImage: string;
  socialLinks: {
    twitter: string;
    facebook: string;
    tiktok: string;
    whatsapp: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Scripttag Web Solutions",
  description: "Building web for the future",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  phone: "+254...",
  email: "",
  address: "",
  ogImage: "",
  socialLinks: {
    twitter: "",
    facebook: "",
    tiktok: "",
    whatsapp: "",
  },
};
