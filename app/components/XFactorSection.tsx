"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import AnimatedX from "./AnimatedX";

const POINTS = [
  { icon: "🔍", text: "Find the logic behind every \"why\"" },
  { icon: "🎓", text: "Learn directly from IITians" },
  { icon: "🧩", text: "Develop deep analytical thinking" },
  { icon: "✦",  text: "Discover your unique X Factor" },
  { icon: "🤖", text: "Harness AI-powered learning tools" },
];

export default function XFactorSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full bg-[#09090B] text-white py-28 px-6 md:px-10 relative overflow-hidden"
    >
      {/* ── Background decoration ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full bg-orange-600/6 blur-[120px]" />
        {/* Dot grid pattern (right side) */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(249,115,22,0.3) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: Animated X ── */}
        <div className="reveal flex justify-center items-center relative">
          {/* Outer glowing ring */}
          <div className="absolute w-64 h-64 rounded-full border border-orange-500/10 animate-spin"
            style={{ animationDuration: "20s" }} />
          <div className="absolute w-80 h-80 rounded-full border border-orange-500/5 animate-spin"
            style={{ animationDuration: "35s", animationDirection: "reverse" }} />

          <AnimatedX size={260} />
        </div>

        {/* ── RIGHT: Content ── */}
        <div>
          <div className="reveal mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">
              The LogixAI Edge
            </span>
          </div>

          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black mb-6 leading-tight">
            Discover Your{" "}
            <span
              className="text-orange-400 font-black"
              style={{ textShadow: "0 0 40px rgba(249,115,22,0.5)" }}
            >
              X
            </span>
          </h2>

          <p className="reveal reveal-delay-2 text-gray-400 mb-8 text-lg leading-relaxed">
            At LogixAI, the{" "}
            <span
              className="text-orange-400 font-bold text-xl"
              style={{ textShadow: "0 0 20px rgba(249,115,22,0.5)" }}
            >
              "X"
            </span>{" "}
            represents the hidden potential inside every learner. Our goal is
            to help students uncover their strengths, build strong logical
            thinking, and develop the skills needed to thrive in an AI-powered world.
          </p>

          <ul className="space-y-4">
            {POINTS.map(({ icon, text }, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${i + 2} flex items-center gap-4
                  p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]
                  hover:border-orange-500/30 hover:bg-orange-500/[0.04]
                  transition-all duration-300 group cursor-default`}
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500/10
                  border border-orange-500/20 flex items-center justify-center text-lg
                  group-hover:bg-orange-500/20 transition-colors duration-300">
                  {icon}
                </span>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}