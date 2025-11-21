import type { FC } from "react";
import { Users, Wrench, TrendingUp } from "lucide-react";

const Services: FC = () => {
  return (
    <section
      id="services"
      className="w-full py-24 px-6 bg-white dark:bg-black relative transition-colors"
    >
      {/* TITLE */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 drop-shadow-lg">
          Our Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg max-w-2xl mx-auto transition-colors">
          We provide powerful, modern Web3-based solutions that help creators,
          agencies, and brands grow with confidence.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* SERVICE 1 */}
        <div className="
          bg-white/10 dark:bg-[#1a1a1a]/60
          backdrop-blur-xl
          border border-orange-500/20
          rounded-2xl p-8 
          shadow-[0_0_20px_rgba(255,140,0,0.15)]
          hover:shadow-[0_0_30px_rgba(255,140,0,0.3)]
          hover:border-orange-400/40
          transition
          flex flex-col items-center text-center
        ">
          <Users size={50} className="text-orange-400 mb-4" />
          <h3 className="text-2xl font-semibold text-black dark:text-white transition-colors">
            Community Management
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed transition-colors">
            We help Web3 brands build, manage, and scale engaged communities
            across all digital platforms, ensuring trust, activity, and growth.
          </p>
        </div>

        {/* SERVICE 2 */}
        <div className="
          bg-white/10 dark:bg-[#1a1a1a]/60
          backdrop-blur-xl
          border border-orange-500/20
          rounded-2xl p-8 
          shadow-[0_0_20px_rgba(255,140,0,0.15)]
          hover:shadow-[0_0_30px_rgba(255,140,0,0.3)]
          hover:border-orange-400/40
          transition
          flex flex-col items-center text-center
        ">
          <Wrench size={50} className="text-orange-400 mb-4" />
          <h3 className="text-2xl font-semibold text-black dark:text-white transition-colors">
            Web3 Tools
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed transition-colors">
            Access premium Web3 tools built to simplify workflows,
            boost productivity, and give creators the digital power they need.
          </p>
        </div>

        {/* SERVICE 3 */}
        <div className="
          bg-white/10 dark:bg-[#1a1a1a]/60
          backdrop-blur-xl
          border border-orange-500/20
          rounded-2xl p-8 
          shadow-[0_0_20px_rgba(255,140,0,0.15)]
          hover:shadow-[0_0_30px_rgba(255,140,0,0.3)]
          hover:border-orange-400/40
          transition
          flex flex-col items-center text-center
        ">
          <TrendingUp size={50} className="text-orange-400 mb-4" />
          <h3 className="text-2xl font-semibold text-black dark:text-white transition-colors">
            Agencies Growth Strategies
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-4 leading-relaxed transition-colors">
            We develop smart growth plans for agencies, helping them scale,
            expand impact, reach new markets, and unlock long-term success.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Services;
