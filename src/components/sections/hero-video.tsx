"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { wordReveal, wordRevealChild, fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";

interface HeroVideoProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: { text: string; href: string };
  videoSrc?: string;
  videoPoster?: string;
  heroImage?: string;
}

export default function HeroVideo({
  headline,
  subheadline,
  ctaText = "Book Your Free Consultation",
  ctaHref = "#lead-form",
  secondaryCta,
  heroImage = "/images/hero-home.webp",
}: HeroVideoProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const words = headline.split(" ");

  // Parallax: image drifts up as you scroll down
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ocean-deepest"
    >
      {/* Curtain overlays */}
      <div
        className="absolute inset-0 z-30 origin-left bg-ocean-deepest pointer-events-none"
        style={{ animation: "curtain-left 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.2s forwards" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-30 origin-right bg-ocean-deepest pointer-events-none"
        style={{ animation: "curtain-right 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.4s forwards" }}
        aria-hidden="true"
      />

      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={heroImage}
          alt=""
          style={{ y: imgY, scale: imgScale }}
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-deepest/90 via-ocean-deepest/70 to-ocean-dark/80" />
      </div>

      {/* Subtle grid/texture overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--cream) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32 text-center" style={{ perspective: "1000px" }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Word-by-word headline */}
          <motion.h1
            variants={wordReveal}
            className="font-display text-cream font-bold leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "var(--text-display)" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordRevealChild}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mt-8 text-cream-muted max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "var(--text-body-lg)" }}
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap justify-center gap-4">
            <a href={ctaHref}>
              <Button variant="cta" size="lg">
                {ctaText}
              </Button>
            </a>
            {secondaryCta && (
              <a href={secondaryCta.href}>
                <Button variant="ghost" size="lg">
                  {secondaryCta.text}
                </Button>
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6 text-cream/30" />
      </motion.div>
    </section>
  );
}
