import { CheckCircle } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { SHOWCASE_HIGHLIGHTS } from "../constants/data";
import ads from "../assets/video/tanaw-advertisement.mp4";

const Showcase = () => {
  const [showcaseRef, showcaseAreVisible] = useIntersectionObserver();

  return (
    <section
      id="showcase"
      ref={showcaseRef}
      className={`py-20 bg-gradient-to-br from-gray-50 to-orange-50 transition-all duration-1000 ease-out ${
        showcaseAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Tanaw in Action</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">A glimpse into how Tanaw enhances your interaction with climate and hazard data.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                <video className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" controls autoPlay loop>
                  <source src={ads} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Transform Your Awareness</h3>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Tanaw offers a comprehensive suite of tools designed to make climate data accessible and hazard information actionable, fostering a
              safer, more informed community.
            </p>
            <ul className="space-y-4">
              {SHOWCASE_HIGHLIGHTS.map((item, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ease-out ${
                    showcaseAreVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                  }`}
                  style={{ transitionDelay: showcaseAreVisible ? `${200 + index * 100}ms` : "0ms" }}
                >
                  <div className="w-7 h-7 mt-0.5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
