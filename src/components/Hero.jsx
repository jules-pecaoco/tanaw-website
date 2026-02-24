import { ArrowDown, Download, Smartphone } from "lucide-react";
import { APP_VERSION, APP_LINK } from "../constants/data";

const Hero = ({ heroContentLoaded, onDownload }) => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text */}
          <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
            <div className="max-w-xl">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-700 ease-out ${
                  heroContentLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Navigate Your World with <span className="text-orange-500">Tanaw</span>
              </h1>
              <p
                className={`text-lg md:text-xl text-gray-700 mb-8 transition-all duration-700 ease-out delay-150 ${
                  heroContentLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                Your guide to climate awareness and hazard preparedness. Real-time maps, alerts, and community reports.
              </p>
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 ease-out delay-300 ${
                  heroContentLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
              >
                <a
                  href={APP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onDownload("android")}
                  className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Download size={20} />
                  Download for Android
                  <span className="opacity-80 text-sm ml-1 bg-black/10 px-1.5 py-0.5 rounded-sm">v{APP_VERSION}</span>
                </a>
                <button
                  onClick={() => onDownload("ios")}
                  className="flex items-center justify-center gap-2.5 bg-gray-700 hover:bg-gray-800 text-white px-7 py-3.5 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Smartphone size={20} />
                  iOS <span className="opacity-80 text-sm ml-1">(Coming Soon)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div
              className={`relative transition-all duration-1000 ease-out delay-500 ${
                heroContentLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
              <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-red-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <img
                src="/logo-circle.png"
                alt="Tanaw App Icon"
                className="relative z-10 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full shadow-2xl animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 delay-[1200ms] ${
          heroContentLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#features"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-orange-500 hover:text-orange-600 hover:bg-orange-50 animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
