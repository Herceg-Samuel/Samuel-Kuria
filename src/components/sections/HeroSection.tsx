"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 pt-28 lg:pt-20 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="mb-8"
        >
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] break-words">
            <span className="block">Samuel</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/70 stroke-foreground mt-2">Kuria</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
             <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-widest border-y-4 border-foreground py-4 inline-block mb-8">
                Samuel Kuria
            </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl font-medium text-foreground leading-tight"
        >
          Web Developer. Choosing <span className="font-black underline decoration-4 underline-offset-4">curiosity</span> as a specialty. Psychology, Philosophy, and pure <span className="italic font-serif">Creativity</span>.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <Button asChild size="lg" className="h-16 px-10 text-xl md:text-2xl font-black uppercase rounded-none border-4 border-foreground bg-foreground text-background hover:bg-background hover:text-foreground hover:border-foreground transition-all duration-300 active:scale-95">
            <Link href="#projects">View Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-16 px-10 text-xl md:text-2xl font-black uppercase rounded-none border-4 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-20"
        >
             <Link href="#about" aria-label="Scroll to About section" className="inline-block hover:scale-110 transition-transform duration-300 p-2">
                <ArrowDown className="h-12 w-12 text-foreground" strokeWidth={3} />
             </Link>
        </motion.div>
      </div>
      
      {/* Background Noise/Grid (Optional visual flair) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </section>
  );
}
