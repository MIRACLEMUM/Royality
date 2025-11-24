import type { FC } from "react";
import { useState, useEffect } from "react";
import { Twitter } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  telegram?: string;
}

const teamMembers: TeamMember[] = [
  { name: "King AB", role: "Founder/Marketer", image: "/kingAB1.jpg", twitter: "https://t.me/King_MetaX", telegram: "#" },
  { name: "Primo", role: "Manager/ Backend developer", image: "/Primo.jpg", twitter: "https://x.com/primo_Mind", telegram: "https://t.me/Primoeth" },
  { name: "Queen Rose", role: "Social media manager", image: "/Rose.jpg", twitter: "https://x.com/Roseonchain", telegram: "#" },
  { name: "Emmy", role: "Chief Shiller/Chief Raider", image: "/Emmy.jpg", twitter: "https://x.com/Emmy_1001", telegram: "https://t.me/Emmy0024" },
  { name: "Miracle Sunday", role: "Frontend Developer/Web3 Educator", image: "/Miracle.jpg", twitter: "https://x.com/TechGoddess0", telegram: "https://t.me/miracle44444" },
  { name: "Spydex", role: "Director", image: "/spid.jpg", twitter: "https://x.com/spydex_spy", telegram: "#" },
  { name: "Nnenna", role: "UI- UX Designer", image: "/Nne.jpg", twitter: "https://x.com/Nnennayaa_", telegram: "https://t.me/Nnennaya_E" },
  { name: "SMX", role: "Chief trader", image: "/smx.jpg", twitter: "https://x.com/Sleem_mx", telegram: "#" },
  { name: "Wajudjim", role: "Moderator", image: "/wajudjim.jpg", twitter: "https://x.com/wajudjim", telegram: "#" },
  { name: "Mee", role: "Chief Designer", image: "/mee.jpg", twitter: "https://x.com/Jesu_tofunmee", telegram: "#" },
  { name: "Goodness", role: " Blockchain Dev/ Intern ", image: "/goodness.jpg", twitter: "https://x.com/younggee704?s=20", telegram: "#" },
  { name: "Don", role: "Chief designer", image: "/Don.jpg", twitter: "https://x.com/_Don001", telegram: "#" },
  { name: "Carcal", role: "Manager", image: "/Carcal.jpg", twitter: "https://x.com/carcalofweb3", telegram: "#" },
  { name: "Razzy", role: "Director", image: "/razzy.jpg", twitter: "https://x.com/Razzyox", telegram: "#" },
  { name: "Alhagee", role: "Visual strategies", image: "/alhagee.jpg", twitter: "https://x.com/alhagee45", telegram: "#" },
];

const Team: FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // 🚀 FIX: run once without direct setState in effect body
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let membersToShow = teamMembers;
  if (!showAll) {
    if (windowWidth < 640) {
      membersToShow = teamMembers.slice(0, 3); // Mobile
    } else if (windowWidth >= 640 && windowWidth < 1024) {
      membersToShow = teamMembers.slice(0, 6); // Tablet
    }
  }

  const showButton = windowWidth < 1024;

  return (
    <section id="team" className="w-full py-24 px-6 bg-white dark:bg-[#1a0c10] transition-colors">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400">Our Team</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Meet the talented creators powering the Royalty Ecosystem
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {membersToShow.map((member, idx) => (
          <div key={idx} className="relative group flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-orange-400 shadow-lg transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <h3 className="mt-2 text-lg font-semibold text-black dark:text-white">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{member.role}</p>

            <div className="mt-2 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {member.twitter && (
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <Twitter className="w-5 h-5 text-yellow-400" />
                </a>
              )}
              {member.telegram && (
                <a href={member.telegram} target="_blank" rel="noreferrer">
                  <FaTelegramPlane className="w-5 h-5 text-yellow-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {showButton && (
        <div className="mt-6 flex justify-center">
          <button
            className="px-6 py-2 rounded-full bg-orange-500 text-white dark:bg-orange-500 dark:text-white font-semibold hover:bg-orange-600 dark:hover:bg-orange-400 transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Team;
