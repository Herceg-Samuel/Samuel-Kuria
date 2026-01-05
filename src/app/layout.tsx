import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BackToTop } from "@/components/ui/back-to-top";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Samuel Kuria",
            url: "https://samuel-kuria.vercel.app",
            jobTitle: "Full-Stack Web Developer",
            description:
              "Full-stack web developer specializing in Next.js, React, Node.js and modern UI development.",
            image: "https://samuel-kuria.vercel.app/og-image.webp",
            sameAs: [
              "https://www.linkedin.com/in/samuel-kuria-0594b7345/",
              "https://x.com/iamsamuelkuria",
              "https://github.com/Herceg-Samuel/",
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
          })}
        </script>
      </head>
      <body className={`${inter.className}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">{children}</main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
