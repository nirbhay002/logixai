"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const SERVICES = [
  {
    icon: "🎓",
    title: "IITian Mentorship",
    body: "Learn directly from IIT graduates who guide students with strong conceptual clarity, real-world problem solving, and exam strategies that actually work.",
    tag: "1-on-1 & Group",
    color: "from-blue-500/15 to-indigo-500/5",
    border: "border-blue-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(99,102,241,0.15)]",
  },
  {
    icon: "🏫",
    title: "University Faculty Support",
    body: "LogixAI provides qualified, IIT-trained faculty members to universities and institutions, elevating the standard of teaching and student outcomes.",
    tag: "Institutional",
    color: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]",
  },
  {
    icon: "🧠",
    title: "Logical Thinking Programs",
    body: "Specially designed curriculum to strengthen reasoning, analytical thinking, and deep conceptual understanding — the foundation of all academic success.",
    tag: "Core Program",
    color: "from-orange-500/15 to-amber-500/5",
    border: "border-orange-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]",
  },
  {
    icon: "⚡",
    title: "AI-Driven Learning",
    body: "Modern AI-based learning techniques that personalise the experience for each student — understanding complex ideas faster, smarter, and more effectively.",
    tag: "Future-Ready",
    color: "from-emerald-500/15 to-teal-500/5",
    border: "border-emerald-500/20",
    glow: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
  },
];

export default function ServicesSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full bg-[#0D0D10] text-white py-28 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2
        w-[700px] h-[300px] bg-orange-600/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">
              What We Offer
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black mb-5 tracking-tight">
            Our Services
          </h2>
          <p className="reveal reveal-delay-2 text-gray-400 text-lg max-w-xl mx-auto">
            From mentorship to AI-driven tools — everything you need to
            discover your X Factor and go beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon, title, body, tag, color, border, glow }, i) => (
            <div
              key={title}
              className={`reveal reveal-delay-${i + 1} group relative rounded-2xl p-7
                border bg-gradient-to-br ${color} ${border}
                card-lift ${glow} transition-all duration-300 overflow-hidden`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl border ${border} bg-white/5
                flex items-center justify-center text-2xl mb-6
                group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{body}</p>

              {/* Tag */}
              <span className={`inline-block text-xs font-semibold tracking-wide
                uppercase px-3 py-1 rounded-full border ${border} bg-white/5 text-gray-300`}>
                {tag}
              </span>

              {/* Arrow on hover */}
              <div className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100
                translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-orange-400">
                →
              </div>

              {/* Subtle overlay */}
              <div className="absolute inset-0 rounded-2xl bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}