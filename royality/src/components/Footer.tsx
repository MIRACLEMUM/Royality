import type { FC } from "react";
import { Twitter, Send } from "lucide-react"; // Send for Telegram

const Footer: FC = () => {
  return (
    <footer className="bg-white dark:bg-[#1a0c10] text-gray-800 dark:text-gray-300 px-6 py-10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-orange-500 dark:text-orange-400">Royalty Ecosystem</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
            Empowering Web3 creators, communities, and brands.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="https://twitter.com/i/communities/1986026212846629025" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">
            <Twitter className="w-6 h-6 text-yellow-400" />
          </a>
          <a href="https://t.me/Royalties_POW" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition">
            <Send className="w-6 h-6 text-yellow-400" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 text-center text-gray-500 dark:text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Royalty Ecosystem. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
