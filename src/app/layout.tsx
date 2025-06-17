import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from '@/components/ThemeProvider';
import {Header} from '@/components/Header';
import {ScrollProgress} from '@/components/ui/scroll-progress';
import {BackToTop} from '@/components/ui/back-to-top';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Samuel Kuria - Portfolio',
  description: 'Welcome to my portfolio website showcasing my work and skills.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
