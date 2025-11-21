import type { FC } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const JoinPopup: FC<Props> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] p-8 rounded-2xl w-[90%] max-w-sm text-center shadow-xl animate-fadeSlideUp">

        <h2 className="text-xl font-bold text-white">Join our community</h2>
        <p className="text-gray-300 mt-1 mb-6 text-sm">Choose a platform to join</p>

        <div className="flex flex-col gap-4">

          <button
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            onClick={() => window.open("https://t.me/Royalties_POW", "_blank")}
          >
            Join on Telegram
          </button>

          

          <button
            className="bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
            onClick={() => window.open("https://twitter.com/i/communities/1986026212846629025", "_blank")}
          >
            Join on X
          </button>

        </div>

        <button
          onClick={onClose}
          className="mt-6 text-gray-400 hover:text-white text-sm transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default JoinPopup;
