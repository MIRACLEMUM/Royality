import type { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CountUp } from "./CountUp";

const About: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      className="
        w-full 
        bg-gradient-to-b 
        from-white/5 dark:from-black 
        via-white/10 dark:via-[#120700] 
        to-white/5 dark:to-black
        py-20 px-6
        flex justify-center
        transition-colors
      "
      ref={ref}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT — LEFT ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-none"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
            About Royalty Ecosystem
          </h2>

          <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
            Royalty Ecosystem is a Web3-powered hub built to empower creators, 
            founders, and businesses by providing premium tools, community 
            management systems, branding solutions, and growth strategies.
          </p>

          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">
            We combine innovation, design, and blockchain-driven systems to help 
            teams scale faster, build trust, and grow their digital presence.
          </p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 grid grid-cols-3 gap-6 text-center"
          >
            <div className="bg-white/10 dark:bg-[#1a1a1a]/60 p-4 rounded-xl border border-orange-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-orange-400">
                {inView && <CountUp end={3} />}+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                Years Experience
              </p>
            </div>

            <div className="bg-white/10 dark:bg-[#1a1a1a]/60 p-4 rounded-xl border border-orange-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-orange-400">
                {inView && <CountUp end={50} />}+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                Projects Delivered
              </p>
            </div>

            <div className="bg-white/10 dark:bg-[#1a1a1a]/60 p-4 rounded-xl border border-orange-500/30 transition-colors">
              <h3 className="text-2xl font-bold text-orange-400">
                {inView && <CountUp end={10000} />}+
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm transition-colors">
                Community Members
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE — RIGHT ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9 }}
          className="relative order-2 md:order-none"
        >
          <div
            className="
              absolute inset-0 
              bg-orange-500/20 
              blur-3xl 
              rounded-3xl 
            "
          />
          <img
            src="/kingab.jpg"
            alt="Royalty Web3 Services"
            className="
              relative z-10 
              rounded-2xl 
              shadow-[0_0_30px_rgba(255,140,0,0.3)] 
              border border-orange-500/30
            "
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
