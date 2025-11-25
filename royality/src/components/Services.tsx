import type { FC } from "react";
import { Users, Wrench, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const servicesData = [
  {
    icon: <Users size={50} className="text-orange-400 mb-4" />,
    title: "Community Management",
    description:
      "We help Web3 brands build, manage, and scale engaged communities across all digital platforms, ensuring trust, activity, and growth.",
  },
  {
    icon: <Wrench size={50} className="text-orange-400 mb-4" />,
    title: "Web3 Tools",
    description:
      "Access premium Web3 tools built to simplify workflows, boost productivity, and give creators the digital power they need.",
  },
  {
    icon: <TrendingUp size={50} className="text-orange-400 mb-4" />,
    title: "Agencies Growth Strategies",
    description:
      "We develop smart growth plans for agencies, helping them scale, expand impact, reach new markets, and unlock long-term success.",
  },
];

const Services: FC = () => {
  return (
    <section
      id="services"
      className="
        w-full py-24 px-6
        bg-white dark:bg-[#0a0a0a]
        transition-colors
      "
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 drop-shadow-lg">
          Our Services
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          We provide powerful, modern Web3-based solutions that help creators,
          agencies, and brands grow with confidence.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,140,0,0.3)",
            }}
            className="
              bg-white dark:bg-[#1b1b1b]
              backdrop-blur-xl
              border border-orange-500/20
              rounded-2xl p-8 
              shadow-[0_0_20px_rgba(255,140,0,0.15)]
              transition
              flex flex-col items-center text-center
            "
          >
            {service.icon}

            <h3 className="text-2xl font-semibold text-black dark:text-white">
              {service.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
