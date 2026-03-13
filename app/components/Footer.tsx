import Image from "next/image";
import Link from "next/link";

const QUICK_LINKS = ["Home", "About", "Services", "Team", "Contact"];

const SOCIAL = [
  { label: "Twitter/X",  href: "#", icon: "𝕏" },
  { label: "LinkedIn",   href: "#", icon: "in" },
  { label: "Instagram",  href: "#", icon: "▣" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-black text-white border-t border-white/[0.06]"
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-12">

        {/* ── Brand column ── */}
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-white/10 group-hover:ring-orange-500/40 transition-all">
              <Image src="/logo.png" alt="LogixAI Logo" fill className="object-contain" />
            </div>
            <span className="text-xl font-bold text-white">
              Logi
              <span className="text-orange-400 font-black" style={{ textShadow: "0 0 12px rgba(249,115,22,0.6)" }}>
                x
              </span>
              AI
            </span>
          </Link>

          <p className="text-gray-400 leading-relaxed max-w-xs mb-6">
            Find your X Factor with us. Discover the logic behind every "why"
            and build strong analytical thinking with guidance from IITians.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIAL.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-white/10 hover:border-orange-500/40
                  bg-white/5 hover:bg-orange-500/10 flex items-center justify-center
                  text-gray-400 hover:text-orange-400 font-bold text-sm
                  transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── Quick links ── */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200 rounded" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact ── */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-5">
            Contact
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-orange-400">✉</span>
              <a href="mailto:info@logixai.com" className="hover:text-orange-400 transition-colors">
                info@logixai.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-orange-400">📞</span>
              <a href="tel:+91XXXXXXXXXX" className="hover:text-orange-400 transition-colors">
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-orange-400">📍</span>
              <span>India</span>
            </li>
          </ul>

          {/* Mini CTA */}
          <div className="mt-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <p className="text-sm text-gray-300 mb-3">
              Ready to find your X Factor?
            </p>
            <Link
              href="#contact"
              className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
            >
              Get in touch →
            </Link>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row
          justify-between items-center gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LogixAI. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ by IITians · Discover your{" "}
            <span className="text-orange-500/70 font-bold">X</span>
          </p>
        </div>
      </div>

    </footer>
  );
}