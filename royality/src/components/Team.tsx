import type { FC } from "react";
import { useState } from "react";
import { Twitter } from "lucide-react";
import { FaTelegramPlane } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  twitter?: string;
  telegram?: string;
}

// Example 15 members
const teamMembers: TeamMember[] = [
  { name: "Alice", role: "Designer", image: "/public/kingab.jpg", twitter: "#", telegram: "#" },
  { name: "Bob", role: "Developer", image: "/team/bob.jpg", twitter: "#", telegram: "#" },
  { name: "Charlie", role: "Community", image: "/team/charlie.jpg", twitter: "#", telegram: "#" },
  { name: "David", role: "Marketing", image: "/team/david.jpg", twitter: "#", telegram: "#" },
  { name: "Eva", role: "Manager", image: "/team/eva.jpg", twitter: "#", telegram: "#" },
  { name: "Frank", role: "Engineer", image: "/team/frank.jpg", twitter: "#", telegram: "#" },
  { name: "Grace", role: "Support", image: "/team/grace.jpg", twitter: "#", telegram: "#" },
  { name: "Hannah", role: "Developer", image: "/team/hannah.jpg", twitter: "#", telegram: "#" },
  { name: "Ian", role: "Designer", image: "/team/ian.jpg", twitter: "#", telegram: "#" },
  { name: "Jack", role: "Community", image: "/team/jack.jpg", twitter: "#", telegram: "#" },
  { name: "Kate", role: "Marketing", image: "/team/kate.jpg", twitter: "#", telegram: "#" },
  { name: "Leo", role: "Manager", image: "/team/leo.jpg", twitter: "#", telegram: "#" },
  { name: "Mia", role: "Engineer", image: "/team/mia.jpg", twitter: "#", telegram: "#" },
  { name: "Nina", role: "Support", image: "/team/nina.jpg", twitter: "#", telegram: "#" },
  { name: "Oscar", role: "Developer", image: "/team/oscar.jpg", twitter: "#", telegram: "#" },
];

const Team: FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="team"
      className="w-full py-24 px-6 bg-white dark:bg-[#1a0c10] transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400">Our Team</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Meet the talented creators powering the Royalty Ecosystem
        </p>
      </div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {(showAll || window.innerWidth >= 768 ? teamMembers : teamMembers.slice(0, 3)).map((member, idx) => (
          <div
            key={idx}
            className="relative group flex flex-col items-center text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-orange-400 shadow-lg transition-transform group-hover:scale-105"
              loading="lazy"
            />
            <h3 className="mt-2 text-lg font-semibold text-black dark:text-white">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{member.role}</p>

            {/* SOCIAL ICONS ON HOVER */}
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

      {/* Show More / Show Less - Mobile Only */}
      <div className="mt-6 flex justify-center md:hidden">
        <button
          className="px-6 py-2 rounded-full bg-orange-500 text-white dark:bg-orange-500 dark:text-white font-semibold hover:bg-orange-600 dark:hover:bg-orange-400 transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Team;
