import { useState } from "react";
import type { FC } from "react";
import JoinPopup from "./JoinPopup";

const Hero: FC = () => {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen bg-white/90 dark:bg-[#1a0f00]/90 flex flex-col items-center justify-start overflow-hidden pt-32 transition-colors"
      style={{ scrollMarginTop: "8rem" }}
    >
      
      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-3xl mt-6 text-center px-4">

        {/* TOP TAGLINE */}
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-black dark:text-black font-semibold rounded-full mb-6 animate-fadeSlideDown">
          🚀 Join the Royalty Web3 Community!
        </div>

        {/* HERO HEADING */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 dark:text-orange-300 leading-snug drop-shadow-lg animate-fadeSlideUp">
          Royalty Ecosystem Your Gateway to Seamless Web3 Services
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-semibold">
          We provide premium tools, resources, and design solutions that empower Web3 creators
          to lead, build, and grow in the decentralized world.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          
          {/* JOIN COMMUNITY BUTTON */}
          <button
            className="bg-orange-500 dark:bg-orange-500 text-white dark:text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 dark:hover:bg-orange-400 transition"
            onClick={() => setShowJoin(true)}
          >
            Join community
          </button>

          {/* DIRECT TELEGRAM BUTTON */}
          <a
            href="https://t.me/Royalties_POW"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-orange-400 dark:border-orange-400 text-black dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 dark:hover:bg-orange-400 transition flex items-center justify-center"
          >
            Join Our Channel
          </a>

        </div>
      </div>

      {/* FADED BACKGROUND LOGO */}
      <img
        src="/assets/logo.png"
        className="absolute bottom-0 w-[500px] opacity-30 select-none pointer-events-none"
        alt="Background Logo"
      />

      {/* JOIN POPUP */}
      <JoinPopup open={showJoin} onClose={() => setShowJoin(false)} />
    </section>
  );
};

export default Hero;
