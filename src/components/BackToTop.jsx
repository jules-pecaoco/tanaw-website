import { ArrowUp } from "lucide-react";

const BackToTop = ({ show, onClick }) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 transform hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default BackToTop;
