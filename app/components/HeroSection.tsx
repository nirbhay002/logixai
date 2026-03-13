"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { number: "500+", label: "Students Enrolled" },
  { number: "5",    label: "IIT Graduates" },
  { number: "4",    label: "Core Programs" },
  { number: "98%",  label: "Satisfaction Rate" },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Stagger the hero text in on mount
  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".hero-reveal");
    items?.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 150 + i * 130);
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#09090B] hero-grid text-white flex flex-col overflow-hidden">

      {/* ── Ambient glow blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-orange-600/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-orange-500/8 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-500/6 blur-[80px]" />
      </div>

      {/* ── Main content ── */}
      <div
        ref={containerRef}
        className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-16
          grid md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT */}
        <div className="flex flex-col gap-6">

          {/* Badge */}
          <div className="hero-reveal reveal">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase
              bg-orange-500/10 border border-orange-500/20 text-orange-400
              px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Founded by IITians
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-reveal reveal reveal-delay-1 text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
            Find Your{" "}
            <span className="relative inline-block">
              <span className="gradient-text">X Factor</span>
              {/* Underline swoosh */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q50 2 100 6 Q150 10 200 4"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>
            <br />
            <span className="text-white">With Us</span>
          </h1>

          {/* Sub-taglines */}
          <div className="hero-reveal reveal reveal-delay-2 flex flex-col gap-2">
            <p className="text-lg text-gray-300 font-medium">
              🔍 Find the logic behind every{" "}
              <span className="text-orange-400 font-semibold">"why"</span>
            </p>
            <p className="text-lg text-gray-300 font-medium">
              🎓 Learn directly with{" "}
              <span className="text-white font-semibold">IITians</span>
            </p>
            <p className="text-lg text-gray-300 font-medium">
              🤖 AI-powered learning for the{" "}
              <span className="text-white font-semibold">future-ready mind</span>
            </p>
          </div>

          {/* CTAs */}
          <div className="hero-reveal reveal reveal-delay-3 flex flex-wrap gap-4 mt-2">
            <Link
              href="#services"
              className="btn-glow bg-orange-500 hover:bg-orange-600 text-white
                px-7 py-3.5 rounded-xl font-semibold text-base"
            >
              Explore Programs
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-2 text-gray-300 hover:text-white
                border border-white/10 hover:border-white/25
                px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-200"
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

        </div>

        {/* RIGHT – hero image with floating badge */}
        <div className="hero-reveal reveal reveal-delay-2 relative flex justify-center items-center">
          {/* Glow ring behind image */}
          <div className="absolute w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative z-10">
            <Image
              src="/hero-image.png"
              alt="LogixAI Hero Illustration"
              width={560}
              height={560}
              priority
              className="drop-shadow-2xl"
            />
          </div>

          {/* Floating badge */}
          <div className="float-badge absolute -bottom-4 -left-4 md:left-4
            bg-[#18181B] border border-white/10 rounded-2xl px-5 py-3
            flex items-center gap-3 shadow-2xl">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25
              flex items-center justify-center text-orange-400 text-xl font-black">
              X
            </div>
            <div>
              <p className="text-white font-semibold text-sm">X Factor Unlocked</p>
              <p className="text-gray-400 text-xs">Discover your hidden potential</p>
            </div>
          </div>
        </div>

      </div>

      {/* ── Stats bar ── */}
      {/* <div className="relative z-10 w-full border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8
          grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ number, label }, i) => (
            <div key={i} className="flex flex-col items-center md:items-start gap-1">
              <span className="stat-number text-3xl font-black">{number}</span>
              <span className="text-gray-400 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div> */}

    </section>
  );
}