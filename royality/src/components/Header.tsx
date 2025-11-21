import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-[#0b0c10]/80 backdrop-blur-lg border-b border-black/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="flex items-center group cursor-pointer">
          <img
            src="/assets/logo.png"
            alt="Royalty Logo"
            className="w-16 h-16 object-contain block transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 drop-shadow-lg -ml-3 group-hover:scale-105 transition-transform duration-300">
            Royalty
          </h1>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 text-black/90 dark:text-white/90 text-sm font-medium">
          <a href="#about" className="hover:text-orange-500 dark:hover:text-yellow-400 transition">About</a>
          <a href="#team" className="hover:text-orange-500 dark:hover:text-yellow-400 transition">Team</a>
          <a href="#announcement" className="hover:text-orange-500 dark:hover:text-yellow-400 transition">Announcement</a>
          <a href="#faq" className="hover:text-orange-500 dark:hover:text-yellow-400 transition">FAQ</a>
          <a href="#contact" className="hover:text-orange-500 dark:hover:text-yellow-400 transition">Contact</a>
        </nav>

        {/* Desktop CTA + Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#about"
            className="px-4 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 dark:bg-orange-500 dark:hover:bg-orange-400 transition"
          >
            Learn More
          </a>

          {/* 💡 iOS Toggle Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              w-12 h-6 rounded-full flex items-center 
              transition-all duration-300
              p-1 relative
              bg-gray-300 dark:bg-gray-600
            "
          >
            <span
              className={`
                h-5 w-5 rounded-full bg-white shadow 
                transform transition-all duration-300
                ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
              `}
            />
          </button>
        </div>

        {/* Mobile menu button + toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition"
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>

          {/* Mobile iOS toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="
              w-11 h-6 rounded-full flex items-center 
              transition-all duration-300 p-1
              bg-gray-300 dark:bg-gray-600
            "
          >
            <span
              className={`
                h-5 w-5 rounded-full bg-white shadow 
                transform transition-all duration-300
                ${theme === "dark" ? "translate-x-5" : "translate-x-0"}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white/95 dark:bg-[#0b0c10]/95 border-t border-black/5 dark:border-white/5 transform origin-top transition-all ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3">
          <a href="#about" onClick={() => setOpen(false)} className="block text-black/90 dark:text-white/90 py-2 hover:text-orange-500 dark:hover:text-yellow-400 transition">About</a>
          <a href="#team" onClick={() => setOpen(false)} className="block text-black/90 dark:text-white/90 py-2 hover:text-orange-500 dark:hover:text-yellow-400 transition">Team</a>
          <a href="#announcement" onClick={() => setOpen(false)} className="block text-black/90 dark:text-white/90 py-2 hover:text-orange-500 dark:hover:text-yellow-400 transition">Announcement</a>
          <a href="#faq" onClick={() => setOpen(false)} className="block text-black/90 dark:text-white/90 py-2 hover:text-orange-500 dark:hover:text-yellow-400 transition">FAQ</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block text-black/90 dark:text-white/90 py-2 hover:text-orange-500 dark:hover:text-yellow-400 transition">Contact</a>

          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block px-4 py-2 rounded-lg bg-amber-400 dark:bg-orange-500 text-black font-semibold text-center hover:bg-amber-300 dark:hover:bg-orange-400 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
}
