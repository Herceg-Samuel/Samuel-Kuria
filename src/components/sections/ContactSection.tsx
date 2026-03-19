
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, Send, Phone, Twitter, Instagram, Loader2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";


export function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error Sending Message",
          description: result.message || "An unknown error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-shell bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Start a Conversation</h2>
          <p className="section-subtitle">
            Whether it is a project, a collaboration, or a curious question, I am
            always open to thoughtful ideas.
          </p>
          <div className="mt-6 flex justify-center">
            <span className="ink-stamp">Open Line</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="paper-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Send a note</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="What should I call you?"
                      required
                      className="mt-2 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-base">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="mt-2 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-base">Your message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about the idea, the problem, or the experiment."
                      rows={5}
                      required
                      className="mt-2 text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full border border-foreground/30 bg-foreground text-background text-sm uppercase tracking-[0.25em] py-3 hover:bg-background hover:text-foreground"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-5 w-5" />
                    )}
                    {isLoading ? "Sending..." : "Send Note"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-6 pt-4 lg:pt-0"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Direct lines</h3>
              <p className="text-base md:text-lg text-foreground/90">
                Prefer a direct route? These are the best ways to reach me.
              </p>
            </div>
            
            <div className="space-y-5">
              <Link href="mailto:iamsamuelkuria@gmail.com" className="flex items-center space-x-3 group text-base md:text-lg transition-colors text-foreground hover:opacity-80">
                <div className="p-2.5 bg-foreground text-background rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-medium">iamsamuelkuria@gmail.com</span>
              </Link>
              
              <div className="flex items-center space-x-3 group text-base md:text-lg text-foreground">
                 <div className="p-2.5 bg-foreground text-background rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <span className="font-medium">+254711108263</span>
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground mb-3">
                  Or say hello on social media:
                </p>
                <div className="flex items-center space-x-4 mt-2">
                  <Link href="https://www.linkedin.com/in/samuel-kuria-0594b7345" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group">
                    <div className="p-2.5 bg-foreground text-background rounded-full group-hover:scale-110 transition-transform duration-200 ease-in-out">
                      <Linkedin className="h-6 w-6" />
                    </div>
                  </Link>
                  
                  <Link href="https://x.com/iamsamuelkuria" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter) Profile" className="group">
                    <div className="p-2.5 bg-foreground text-background rounded-full group-hover:scale-110 transition-transform duration-200 ease-in-out">
                      <Twitter className="h-6 w-6" />
                    </div>
                  </Link>

                  <Link href="https://www.instagram.com/herceg_samuel/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="group">
                    <div className="p-2.5 bg-foreground text-background rounded-full group-hover:scale-110 transition-transform duration-200 ease-in-out">
                      <Instagram className="h-6 w-6" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
