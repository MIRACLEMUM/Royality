import { useState } from "react";
import type { FC } from "react";
import JoinPopup from "./JoinPopup";

const Hero: FC = () => {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen bg-[#1a0f00] flex flex-col items-center justify-start overflow-hidden pt-32"
      style={{ scrollMarginTop: "8rem" }}
    >
      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-3xl mt-6 text-center px-4">
        {/* TOP TAGLINE ABOVE HERO HEADING */}
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-semibold rounded-full mb-6 animate-fadeSlideDown">
  🚀 Join the Royalty Web3 Community!
</div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-300 leading-snug drop-shadow-lg animate-fadeSlideUp">
          Royalty Ecosystem Your Gateway to Seamless Web3 Services
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed font-semibold animate-fadeSlideUpDelay200">
          We provide premium tools, resources, and design solutions that empower Web3 creators
          to lead, build, and grow in the decentralized world.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 animate-fadeSlideUpDelay400">
          <button
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
            onClick={() => setShowJoin(true)}
          >
            Join community
          </button>

          <button className="border border-orange-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition">
            Announcement
          </button>
        </div>
      </div>

      {/* FADED BACKGROUND LOGO */}
      <img
        src="/assets/logo.png"
        className="absolute bottom-0 w-[500px] opacity-10 select-none pointer-events-none"
        alt="Background Logo"
      />

      {/* RENDER JOIN POPUP */}
      <JoinPopup open={showJoin} onClose={() => setShowJoin(false)} />
    </section>
  );
};

export default Hero;
