import { Copyright } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-foreground/10 bg-background/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 text-muted-foreground">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="section-kicker">Colophon</p>
          <p className="text-base text-foreground/80">
            Crafted with curiosity, clarity, and a quiet love for detail.
          </p>
          <div className="flex items-center justify-center space-x-1 text-sm">
            <Copyright size={16} />
            <p>
              {currentYear} Samuel Kuria. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
