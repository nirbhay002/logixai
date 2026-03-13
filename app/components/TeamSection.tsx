"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Member = {
  name: string;
  institute: string;
  role: string;
  img: string;
  initials: string;
  gradient: string;
};

const TEAM: Member[] = [
  {
    name:      "Aryesh Rai",
    institute: "IIT Delhi",
    role:      "Co-Founder & Lead Mentor",
    img:       "/team/aryesh.jpg",
    initials:  "AR",
    gradient:  "from-orange-500 to-amber-400",
  },
  {
    name:      "Nirbhay Gupta",
    institute: "IIT Delhi",
    role:      "Co-Founder & Academic Head",
    img:       "/team/nirbhay.jpg",
    initials:  "NG",
    gradient:  "from-blue-500 to-indigo-400",
  },
  {
    name:      "Arun Kumar",
    institute: "IIT Jodhpur",
    role:      "Curriculum Lead",
    img:       "/team/arun.jpg",
    initials:  "AK",
    gradient:  "from-violet-500 to-purple-400",
  },
  {
    name:      "Shubham Singh",
    institute: "IIIT Kanpur",
    role:      "Technology Lead",
    img:       "/team/shubham.jpg",
    initials:  "SS",
    gradient:  "from-emerald-500 to-teal-400",
  },
  {
    name:      "Laxmi Devi",
    institute: "IIT Madras",
    role:      "Research & Development",
    img:       "/team/laxmi.jpg",
    initials:  "LD",
    gradient:  "from-rose-500 to-pink-400",
  },
];

function MemberCard({ member, delay }: { member: Member; delay: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`reveal reveal-delay-${delay} group flex flex-col items-center text-center`}>

      {/* Avatar container with animated ring */}
      <div className="relative mb-5">
        {/* Spinning gradient ring */}
        <div className={`avatar-ring absolute -inset-1 rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

        {/* Static ring */}
        <div className={`absolute -inset-0.5 rounded-full bg-gradient-to-r ${member.gradient} opacity-25`} />

        {/* Photo or Initials fallback */}
        <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#18181B]">
          {!imgError ? (
            <Image
              src={member.img}
              alt={member.name}
              fill
              className="object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Gradient initials fallback */
            <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
              <span className="text-2xl font-black text-white tracking-wider">
                {member.initials}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-200">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-xs text-gray-400 mb-2 font-medium">{member.role}</p>

      {/* Institute badge */}
      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full
        bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent
        border border-white/10`}
        style={{ WebkitTextFillColor: "transparent" }}
      >
        <span className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
          {member.institute}
        </span>
      </span>
    </div>
  );
}

export default function TeamSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="team"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="w-full bg-[#09090B] text-white py-28 px-6 md:px-10 relative overflow-hidden"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px] rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal mb-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-orange-400">
              The People Behind LogixAI
            </span>
          </div>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-black mb-5 tracking-tight">
            Meet Our Team
          </h2>
          <p className="reveal reveal-delay-2 text-gray-400 text-lg max-w-xl mx-auto">
            A group of IIT and IIIT graduates united by one mission — helping
            every student discover their X Factor.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {TEAM.map((member, i) => (
            <MemberCard key={member.name} member={member} delay={i + 1} />
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <div className="reveal mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Want to join our growing team?{" "}
            <a href="mailto:info@logixai.com" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
              Reach out →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}