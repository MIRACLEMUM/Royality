import type { FC, ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl w-[90%] max-w-sm text-center shadow-xl">
        <h2 className="text-xl font-bold text-black dark:text-white">{title}</h2>
        <div className="mt-4 text-gray-700 dark:text-gray-300">{children}</div>
        <button
          onClick={onClose}
          className="mt-6 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white text-sm transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
