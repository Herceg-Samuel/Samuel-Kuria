"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, UserCircle, Briefcase, Mail, MountainSnow, Zap, Menu as MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { useState, useEffect } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const navItems = [
  { name: "Home", href: "#home", icon: <HomeIcon size={18} /> },
  { name: "About", href: "#about", icon: <UserCircle size={18} /> },
  { name: "Skills", href: "#skills", icon: <Zap size={18} /> },
  { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
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

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-accent transition-colors">
            <MountainSnow className="h-8 w-8 text-primary" />
            <span>Samuel Kuria</span>
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <TooltipProvider>
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <Tooltip key={item.name}>
                      <TooltipTrigger asChild>
                        <Link
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`relative px-3 py-2 text-sm font-medium transition-colors group ${
                            isActive 
                              ? "text-accent" 
                              : "text-foreground hover:text-accent"
                          }`}
                        >
                          <span className="flex items-center space-x-1.5">
                            {item.icon}
                            <span>{item.name}</span>
                          </span>
                          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform ${
                            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          } transition-transform duration-300 ease-out`}></span>
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

            <ThemeToggleButton />

            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MenuIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[280px] p-6 bg-background"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    <AnimatePresence mode="wait">
                      {navItems.map((item, index) => {
                        const isActive = activeSection === item.href.substring(1);
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
                                className={`flex items-center space-x-3 py-2 text-lg font-medium transition-colors ${
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
                                      ease: [0.4, 0, 0.2, 1]
                                    }
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
                          ease: [0.4, 0, 0.2, 1]
                        }
                      }}
                      className="pt-4 border-t border-border"
                    >
                      <p className="text-sm text-muted-foreground mb-2">Theme</p>
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
