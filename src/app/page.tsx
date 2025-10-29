import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Samuel Kuria — Fullstack Software Developer (Next.js, React, Nodejs)",
    template: "%s | Samuel Kuria",
  },
  description:
    "I'm Samuel Kuria, a software developer based in Nyeri and Nairobi, Kenya. I build clean, responsive, and user-focused web applications using Next.js, React, and modern frontend tools. View my work and get in touch.",
  keywords: [
    "Samuel Kuria",
    "software developer",
    "fullstack developer",
    "web developer",
    "junior web developer",
    "frontend developer",
    "Next.js developer",
    "React developer",
    "JavaScript developer",
    "portfolio website",
    "Nairobi developer",
    "Kenya web developer",
    "software developer portfolio",
    "frontend engineer",
    "web app developer",
    "personal portfolio",
  ],
  authors: [{ name: "Samuel Kuria" }],
  creator: "Samuel Kuria",
  publisher: "Samuel Kuria",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://samuel-kuria.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samuel-kuria.vercel.app/",
    siteName: "Samuel Kuria Portfolio",
    title: "Samuel Kuria — Fullstack Software Developer",
    description:
      "Explore the portfolio of Samuel Kuria, a fullstack software developer specializing in Next.js, React, and modern web development.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Samuel Kuria Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Kuria — Fullstack Software Developer",
    description:
      "Frontend & full-stack capable developer creating modern web experiences.",
    images: ["/og-image.webp"],
    creator: "@iamsamuelkuria",
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

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        {" "}
        {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
