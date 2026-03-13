"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const CONCEPTS = [
  {
    key:   "Logix",
    icon:  "🧠",
    title: "Logix",
    body:  "Strong logic is the foundation of all great learning. Our programs sharpen reasoning, analytical thinking, and problem-solving skills — building the mental frameworks needed to excel in any field.",
    accent: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    tag:   "Critical Thinking",
  },
  {
    key:   "X",
    icon:  "✦",
    title: "X Factor",
    body:  "The \"X\" represents the hidden potential inside every learner. At LogixAI we help students discover their unique strengths, unlock their capabilities, and realise what makes them extraordinary.",
    accent: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/30",
    tag:   "Your Hidden Potential",
    featured: true,
  },
  {
    key:   "AI",
    icon:  "⚡",
    title: "AI",
    body:  "Artificial Intelligence is reshaping education. LogixAI blends modern AI-driven learning approaches with rigorous conceptual foundations — giving students skills that are relevant today and tomorrow.",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    tag:   "Future-Ready Learning",
  },
];

export default function AboutSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full bg-[#0D0D10] text-white py-28 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section header ── */}
        <div className="text-center mb-16">
          <div className="reveal mb-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">
              Our Philosophy
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black mb-6 tracking-tight">
            What is{" "}
            <span
              className="text-orange-400"
              style={{ textShadow: "0 0 32px rgba(249,115,22,0.4)" }}
            >
              Logi<span className="font-black">x</span>AI
            </span>
            ?
          </h2>
          <p className="reveal reveal-delay-2 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            LogixAI is built on a powerful idea — every student has an{" "}
            <span className="text-orange-400 font-semibold">X Factor</span>{" "}
            waiting to be discovered. We help learners find the logic behind every
            "why" and develop deep analytical thinking, guided by{" "}
            <span className="text-white font-semibold">IITians</span> and
            experienced educators.
          </p>
        </div>

        {/* ── Concept cards ── */}
        <div className="grid md:grid-cols-3 gap-6">
          {CONCEPTS.map(({ key, icon, title, body, accent, border, tag, featured }, i) => (
            <div
              key={key}
              className={`reveal reveal-delay-${i + 1} card-lift relative
                rounded-2xl p-8 border bg-gradient-to-br ${accent} ${border}
                ${featured ? "md:-mt-4 md:mb-4 ring-1 ring-orange-500/30" : ""}
                backdrop-blur-sm overflow-hidden group`}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute top-0 right-6 -translate-y-1/2
                  bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Core Identity
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl
                mb-6 bg-gradient-to-br ${accent} border ${border}
                ${featured ? "ring-1 ring-orange-500/40" : ""}`}
              >
                {icon}
              </div>

              <h3 className={`text-2xl font-bold mb-4 ${featured ? "text-orange-400" : "text-white"}`}>
                {title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">{body}</p>

              {/* Tag */}
              <span className={`inline-block text-xs font-semibold tracking-wide
                uppercase px-3 py-1 rounded-full border
                ${featured
                  ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                  : "bg-white/5 border-white/10 text-gray-400"
                }`}
              >
                {tag}
              </span>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}