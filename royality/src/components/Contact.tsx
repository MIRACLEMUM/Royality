import type { FC } from "react";

const Contact: FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-[#1a0c10] transition-colors">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-orange-500 dark:text-orange-300">Get in Touch</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Have questions or want to collaborate? Send us a message!
        </p>
      </div>

      <form className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-yellow-400 transition"
          />
        </div>

        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1b1b1b] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-yellow-400 transition"
        ></textarea>

        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-orange-500 dark:bg-orange-500 text-white dark:text-black rounded-full font-semibold shadow-lg hover:bg-orange-600 dark:hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
