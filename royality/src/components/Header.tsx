import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0b0c10]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
  <img
    src="/assets/logo.png"
    alt="Royalty Logo"
    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105"
  />
  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-lg -ml- group-hover:scale-105 transition-transform duration-300">
    Royalty
  </h1>
</a>


        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white/90 text-sm font-medium">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#team" className="hover:text-white transition">Team</a>
          <a href="#announcement" className="hover:text-white transition">Announcement</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA / desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#about"
            className="px-4 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition"
          >
            Learn More
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-white hover:bg-white/5 transition"
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0b0c10]/95 border-t border-white/5 transform origin-top transition-all ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3">
          <a href="#about" onClick={() => setOpen(false)} className="block text-white/90 py-2">About</a>
          <a href="#team" onClick={() => setOpen(false)} className="block text-white/90 py-2">Team</a>
          <a href="#announcement" onClick={() => setOpen(false)} className="block text-white/90 py-2">Announcement</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-white/90 py-2">FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-white/90 py-2">Contact</a>
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block px-4 py-2 rounded-lg bg-amber-400 text-black font-semibold text-center"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}