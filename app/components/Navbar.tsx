"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team",     href: "#team" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4
        flex justify-between items-center transition-all duration-400
        ${scrolled
          ? "bg-black/85 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,0,0,0.5)] border-b border-white/[0.06]"
          : "bg-transparent"
        }`}
    >
      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-orange-500/40 transition-all duration-300">
          <Image src="/logo.png" alt="LogixAI Logo" fill className="object-contain" />
        </div>
        <span className="text-xl font-bold text-white tracking-tight">
          Logi
          {/* The X — special highlight */}
          <span className="relative inline-block">
            <span
              className="text-orange-400 font-black"
              style={{ textShadow: "0 0 16px rgba(249,115,22,0.7)" }}
            >
              x
            </span>
            {/* tiny underline pulse */}
            <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-orange-500 rounded-full opacity-60 animate-pulse" />
          </span>
          AI
        </span>
      </Link>

      {/* ── Desktop links ── */}
      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-300">
        {LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="nav-link hover:text-white transition-colors duration-200 pb-0.5"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ── CTA button ── */}
      <Link
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 btn-glow
          bg-orange-500 hover:bg-orange-600 text-white
          px-5 py-2 rounded-lg text-sm font-semibold"
      >
        Get Started
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {/* ── Mobile hamburger ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
        <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
      </button>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4">
          {LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
            >
              {label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 btn-glow bg-orange-500 text-white text-center py-2.5 rounded-lg font-semibold"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}