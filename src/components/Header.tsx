"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  BookOpen,
  Sparkles,
  Briefcase,
  Mail,
  MountainSnow,
  Menu as MenuIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { useState, useEffect } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const navItems = [
  { name: "Start", href: "/#home", icon: <Compass size={16} /> },
  { name: "Story", href: "/#about", icon: <BookOpen size={16} /> },
  { name: "Path", href: "/#experience", icon: <Sparkles size={16} /> },
  { name: "Work", href: "/#projects", icon: <Briefcase size={16} /> },
  { name: "Connect", href: "/#contact", icon: <Mail size={16} /> },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: 20,
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 20,
    transition: {
      delay: (4 - i) * 0.12,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

import { usePathname, useRouter } from "next/navigation";

// ... (existing imports)

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Only scroll spy on home page
      if (pathname !== "/") return;

      const sections = navItems.map((item) => item.href.replace("/#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (pathname === "/") {
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        setIsMobileMenuOpen(false);
      }
    } else {
      router.push(href);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/10 bg-background/70 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/#home"
            onClick={(e) => handleNavClick(e, "/#home")}
            className="flex items-center space-x-3 text-lg md:text-xl font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-background text-primary">
              <MountainSnow className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Samuel
              </span>
              <span className="block text-xl font-semibold">Kuria</span>
            </span>
          </Link>

          <div className="flex items-center space-x-2 md:space-x-4">
            <nav className="hidden md:flex items-center space-x-3 lg:space-x-4 nav-pill">
              <TooltipProvider>
                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.href.replace("/#", "") &&
                    pathname === "/";
                  return (
                    <Tooltip key={item.name}>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-colors group ${
                            isActive
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <span className="flex items-center space-x-1.5">
                            {item.icon}
                            <span>{item.name}</span>
                          </span>
                          <span
                            className={`absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-foreground transition-opacity duration-300 ${
                              isActive ? "opacity-100" : "opacity-0"
                            }`}
                          />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Go to {item.name} section</p>
                      </TooltipContent>
                    </Tooltip>
                  );
                })}
              </TooltipProvider>
            </nav>

            <div className="nav-pill">
              <ThemeToggleButton />
            </div>

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-foreground/20 bg-background/70"
                    aria-label="Open menu"
                  >
                    <MenuIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] p-6 bg-background"
                >
                  <SheetHeader className="sr-only">
                    <SheetTitle>Site navigation</SheetTitle>
                    <SheetDescription>
                      Browse the main sections of the portfolio.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="flex flex-col space-y-6 mt-8">
                    <AnimatePresence mode="wait">
                      {navItems.map((item, index) => {
                        const isActive =
                          activeSection === item.href.replace("/#", "") &&
                          pathname === "/";
                        return (
                          <motion.div
                            key={item.name}
                            custom={index}
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="exit"
                          >
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className={`flex items-center space-x-3 py-2 text-sm font-semibold uppercase tracking-[0.25em] transition-colors ${
                                  isActive
                                    ? "text-accent"
                                    : "text-foreground hover:text-accent"
                                }`}
                              >
                                <motion.span
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{
                                    scale: 0.8,
                                    opacity: 0,
                                    transition: {
                                      delay: (4 - index) * 0.12 + 0.05,
                                      duration: 0.6,
                                      ease: [0.4, 0, 0.2, 1],
                                    },
                                  }}
                                >
                                  {item.icon}
                                </motion.span>
                                <span>{item.name}</span>
                              </Link>
                            </SheetClose>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: 20,
                        transition: {
                          delay: 0.1,
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      }}
                      className="pt-4 border-t border-border"
                    >
                      <p className="text-sm text-muted-foreground mb-2">
                        Theme
                      </p>
                      <ThemeToggleButton />
                    </motion.div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
