import { Download } from "lucide-react";
import { NAV_LINKS } from "../constants/data";

const Header = ({ scrollY }) => {
  return (
    <header
      className={`fixed w-full transition-all duration-300 ease-in-out z-40 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo-transparent-bg.png" alt="Tanaw Logo" className="h-10 sm:h-12 w-auto mr-3" />
        </div>

        <nav>
          <ul className="hidden md:flex space-x-8">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#download"
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg transition-all font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          <Download size={18} />
          Get the App
        </a>
      </div>
    </header>
  );
};

export default Header;
