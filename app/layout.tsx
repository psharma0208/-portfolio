import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: `${site.name} • ${site.role}`,
    template: `%s • ${site.name}`,
  },
  description:
    "Premium developer portfolio for Prashant Kumar Sharma — Java Backend Developer focused on Spring Boot, REST APIs, MySQL, scalable systems, and AI-ready integration.",
  keywords: [
    "Prashant Kumar Sharma",
    "Java Backend Developer",
    "Spring Boot",
    "REST APIs",
    "MySQL",
    "JWT",
    "Redis",
    "AWS",
    "Docker",
    "CI/CD",
    "OpenAI API",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} • ${site.role}`,
    description:
      "Java Backend Developer with 2+ years building production-grade education platforms. Spring Boot, REST APIs, MySQL, security, performance, and AI integration learning.",
    url: "/",
    siteName: site.name,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} portfolio` }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} • ${site.role}`,
    description:
      "Java Backend Developer — Spring Boot, REST APIs, MySQL, scalable systems, AI-ready integration.",
    images: [site.ogImage],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased dark"
    >
      <body className="min-h-full flex flex-col">
        <div className="bg-fx" />
        <ThemeProvider>
          <Loader />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
