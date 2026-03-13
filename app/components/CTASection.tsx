"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTASection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full py-28 px-6 md:px-10 relative overflow-hidden bg-[#0D0D10]"
    >
      {/* Inner CTA card */}
      <div className="max-w-4xl mx-auto relative">

        {/* Card */}
        <div className="relative rounded-3xl overflow-hidden border border-orange-500/20">

          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-orange-500/10 to-amber-500/5" />

          {/* Animated glow blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-amber-500/15 blur-3xl" />
          </div>

          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8 md:px-16">

            {/* Big X decoration */}
            <div
              className="reveal text-[120px] font-black leading-none mb-2 select-none"
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.15), rgba(251,191,36,0.08))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "none",
              }}
            >
              X
            </div>

            <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black text-white mb-5 -mt-8 tracking-tight">
              Ready to Discover{" "}
              <span className="gradient-text">Your X Factor?</span>
            </h2>

            <p className="reveal reveal-delay-2 text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join LogixAI and learn the logic behind every "why" — guided by
              IITians and powered by AI. Your potential is waiting.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-glow bg-orange-500 hover:bg-orange-600 text-white
                px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_24px_rgba(249,115,22,0.3)]">
                Join LogixAI Today
              </button>
              <a
                href="mailto:info@logixai.com"
                className="flex items-center justify-center gap-2 border border-white/15
                  hover:border-white/30 text-gray-300 hover:text-white
                  px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                📩 Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}