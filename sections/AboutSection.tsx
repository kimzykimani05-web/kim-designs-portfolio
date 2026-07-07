"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Sparkles, MapPin, ArrowRight, Compass, Eye, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 lg:py-32 bg-dark-secondary overflow-hidden"
    >
      {/* Section dividers + ambient glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full pointer-events-none opacity-50"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(0,198,255,0.14), rgba(59,130,246,0.06), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-32 right-0 w-[30rem] h-[30rem] rounded-full pointer-events-none opacity-40"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.12), rgba(59,130,246,0.05), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 lg:items-start">
          {/* Left: Premium Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5 xl:col-span-5 lg:self-stretch"
          >
            <PortraitCard />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 space-y-7 sm:space-y-9"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs sm:text-sm font-semibold mb-5 sm:mb-6 border border-brand-cyan/20">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                About Me
              </span>
              <h2 className="section-heading text-left lg:text-left !text-balance !mx-0 !max-w-none">
                Designing Brands That{" "}
                <span className="gradient-text-alt">Earn Attention</span> &amp;
                Build Trust
              </h2>
            </div>

            {/* Step 3 — Optimized introduction */}
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-light-secondary leading-relaxed max-w-2xl">
              <p>
                I help Kenyan businesses and entrepreneurs build brand
                identities, motion graphics, and digital experiences that turn
                attention into trust.
              </p>
              <p className="text-light-muted">
                Every project is strategy-led — designed to look exceptional and
                perform even better.
              </p>
            </div>

            {/* Step 6 — Design Philosophy */}
            <DesignPhilosophy />

            {/* Step 4 — Premium signature profile card */}
            <SignatureCard />

            {/* Step 5 — Statistics */}
            <StatsGrid />

            {/* CTA */}
            <div className="pt-1 sm:pt-2">
              <Link href="#contact" className="btn-premium w-full sm:w-auto">
                Let&apos;s Work Together
                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------------------------------------------
   Step 1 — Premium portrait treatment
----------------------------------------------------------------- */
const PortraitCard = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <motion.div ref={ref} className="relative">
      {/* Ambient glow behind card */}
      <div
        className="absolute inset-0 -z-10 rounded-[2rem] opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(0,198,255,0.22), rgba(59,130,246,0.08), transparent 65%)",
          filter: "blur(40px)",
          transform: "translateY(8%) scale(1.05)",
        }}
      />

      <motion.div
        style={{ y }}
        className="animate-float-medium"
      >
        <div className="group relative rounded-[2rem] p-[1.5px] bg-gradient-to-br from-brand-cyan/50 via-brand-blue/15 to-brand-purple/50 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7),0_0_60px_-20px_rgba(0,198,255,0.35)] transition-transform duration-500 hover:-translate-y-2">
          <div className="relative w-full rounded-[calc(2rem-1.5px)] overflow-hidden border border-white/10 bg-dark-primary shadow-2xl shadow-black/40">
            <div
              className="relative w-full min-h-[320px] sm:min-h-[440px] lg:min-h-[560px]"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/my-profile-image.png"
                alt="James Kimani - Brand Designer & Motion Graphics Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 512px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Premium gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/85 via-dark-primary/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-purple/10 pointer-events-none mix-blend-screen"></div>
            </div>

            {/* Floating glass caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
              <div className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3 backdrop-blur-xl bg-white/[0.06] border border-white/10">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm text-light-muted font-medium">
                    Creative Director
                  </p>
                  <p className="text-sm sm:text-base font-bold text-light-primary truncate">
                    James Kimani
                  </p>
                </div>
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-cyan shadow-[0_0_12px_rgba(0,198,255,0.9)]"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ----------------------------------------------------------------
   Step 4 — Premium signature profile card
----------------------------------------------------------------- */
const SignatureCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.25 }}
    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden card-hover glass-card"
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-r from-brand-cyan/10 via-transparent to-brand-purple/10"></div>
    <div className="relative flex items-center p-5 sm:p-6">
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 border border-white/10">
        <Image
          src="/my-logo.png"
          alt="Kim Designs Logo"
          fill
          sizes="64px"
          className="object-contain p-2"
        />
      </div>
      <div className="ml-4 sm:ml-6 min-w-0">
        <h3 className="text-lg sm:text-xl font-bold text-light-primary mb-0.5">
          James Kimani
        </h3>
        <p className="text-xs sm:text-sm text-brand-cyan font-semibold">
          Brand Designer &amp; Motion Graphics Specialist
        </p>
        <p className="flex items-center gap-1.5 text-xs sm:text-sm text-light-muted mt-1.5">
          <MapPin className="h-3.5 w-3.5 text-brand-blue" aria-hidden="true" />
          Nairobi, Kenya
        </p>
      </div>
    </div>
  </motion.div>
);

/* ----------------------------------------------------------------
   Step 5 — Statistics with count-up
----------------------------------------------------------------- */
const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const StatsGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-1">
    {stats.map((stat, i) => (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
        className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center card-hover glass-card overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <p className="text-2xl sm:text-3xl font-extrabold text-light-primary mb-1.5 tracking-tight">
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </p>
        <p className="text-xs sm:text-sm text-light-muted">{stat.label}</p>
      </motion.div>
    ))}
  </div>
);

const AnimatedCounter = ({
  value,
  suffix,
  duration = 2.2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const totalSteps = 60;
    const stepTime = (duration * 1000) / totalSteps;
    const increment = value / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      {count}
      {suffix || ""}
    </span>
  );
};

/* ----------------------------------------------------------------
   Step 6 — Design Philosophy
----------------------------------------------------------------- */
const principles = [
  {
    num: "01",
    icon: Compass,
    title: "Strategy First",
    desc: "Every design decision should support a business goal.",
  },
  {
    num: "02",
    icon: Eye,
    title: "Meaningful Visuals",
    desc: "Creating designs that communicate, not just decorate.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Lasting Impact",
    desc: "Building identities people remember.",
  },
];

const DesignPhilosophy = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="relative"
  >
    <div className="flex items-center gap-3 mb-4 sm:mb-5">
      <span className="h-px w-8 bg-gradient-to-r from-brand-cyan to-transparent"></span>
      <h3 className="text-sm sm:text-base font-semibold uppercase tracking-[0.18em] text-light-muted">
        My Design Philosophy
      </h3>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
      {principles.map((p, i) => {
        const Icon = p.icon;
        return (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
            className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-5 card-hover glass border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,198,255,0.15) 0%, rgba(139,92,246,0.1) 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <Icon className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold text-brand-cyan/80 font-mono">
                {p.num}
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-light-primary mb-1.5">
              {p.title}
            </h4>
            <p className="text-xs sm:text-sm text-light-muted leading-relaxed">
              {p.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

export default AboutSection;
