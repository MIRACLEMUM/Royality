import { useState, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  { question: "What is Web3 and how is it different from Web2?", answer: "Web3 is decentralized and blockchain-based, giving users control over their data, unlike Web2 which is centralized and controlled by platforms." },
  { question: "How do I create a cryptocurrency wallet?", answer: "You can create a wallet using services like MetaMask or Coinbase Wallet. This wallet stores your crypto and interacts with Web3 apps." },
  { question: "What are NFTs and how do they work?", answer: "NFTs are unique digital assets stored on a blockchain. They represent ownership of digital items like art, music, or virtual goods." },
  { question: "How can I earn money in Web3?", answer: "You can earn by participating in decentralized finance (DeFi), creating or trading NFTs, staking crypto, or joining Web3 communities with reward systems." },
  { question: "What is staking and how does it work?", answer: "Staking involves locking up your crypto in a blockchain network to help secure it, and in return, you earn rewards over time." },
  { question: "How do I avoid scams in Web3?", answer: "Always verify contracts, use trusted platforms, never share your private keys, and do thorough research before investing or trading." },
  { question: "What are smart contracts?", answer: "Smart contracts are self-executing code on the blockchain that automatically enforce agreements without intermediaries." },
  { question: "How can beginners start with DeFi?", answer: "Start by learning about lending, borrowing, and liquidity pools on reputable platforms. Begin with small amounts to understand the risks." },
  { question: "Do I need technical skills to use Web3?", answer: "Not necessarily. Many Web3 platforms are beginner-friendly, but basic understanding of wallets, transactions, and security is recommended." },
  { question: "How do I keep my crypto safe?", answer: "Use hardware wallets, enable two-factor authentication, back up your seed phrase securely, and never share it with anyone." },
];

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white dark:bg-[#1a0c10] transition-colors">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-300">Frequently Asked Questions</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Answers to common beginner questions about Web3 and how to get started.
        </p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 dark:hover:text-yellow-400 transition"
            >
              {item.question}
              <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : ""}`}>▼</span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-gray-700 dark:text-gray-300 font-bold overflow-hidden"
                >
                  {item.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
