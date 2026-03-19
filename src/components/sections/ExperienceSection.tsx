"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/lib/experience";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-exp-card]");
      const markers = gsap.utils.toArray<HTMLElement>("[data-exp-marker]");

      gsap.fromTo(
        "[data-exp-line]",
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "power2.out",
          duration: 1.2,
          scrollTrigger: {
            trigger: "[data-exp-line]",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });

      markers.forEach((marker, index) => {
        gsap.fromTo(
          marker,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: marker,
              start: "top 90%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-shell bg-muted/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker">Timeline</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Work, experiments, and the questions that shaped my approach.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="ink-stamp">Field Log</span>
          </div>
        </motion.div>

        <div className="relative grid gap-12 lg:grid-cols-[140px_1fr]">
          <div className="relative hidden lg:block">
            <div
              data-exp-line
              className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-foreground/20"
            />
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="rounded-full border border-foreground/20 bg-background px-3 py-1 text-[0.6rem] uppercase tracking-[0.35em] text-muted-foreground">
                Timeline
              </div>
            </div>
          </div>

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className="relative lg:pl-10"
                data-exp-card
              >
                <div className="story-paper flex flex-col gap-4 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    <span className="rounded-full border border-foreground/15 bg-background px-3 py-1">
                      {item.dates}
                    </span>
                    <span>Chapter {String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground">
                      {item.org}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-foreground/90 story-dropcap">
                    {item.summary}
                  </p>

                  <ul className="grid gap-2 text-sm md:text-base text-foreground/80">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rounded-xl border border-foreground/10 bg-muted/40 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Curiosity Note
                    </p>
                    <p className="mt-2 text-base text-foreground/80 italic">
                      {item.curiosity}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  data-exp-marker
                  className="absolute -left-4 top-12 hidden h-4 w-4 rounded-full border-2 border-foreground bg-background lg:block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
