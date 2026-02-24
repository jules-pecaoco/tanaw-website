import { Github } from "lucide-react";
import { GITHUB_LINK } from "../constants/data";

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-8">
          <img src="/logo-transparent-bg.png" alt="Tanaw Logo Small" className="h-10 w-auto opacity-70 mb-3" />
          <div className="flex space-x-5">
            <a
              href={GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              title="Tanaw on GitHub"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} Tanaw. All rights reserved.</p>

          <div>
            Developed by <span className="font-semibold text-white">Jules Alfonz Pecaoco</span> | Partner with{" "}
            <span className="font-semibold text-white">Mark Angelo Navarro</span>
          </div>

          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map((link) => (
              <a key={link} href="#" className="hover:text-orange-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
