import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { APP_FEATURES } from "../constants/data";

const Features = () => {
  const [featuresRef, featuresAreVisible] = useIntersectionObserver();

  return (
    <section
      id="features"
      ref={featuresRef}
      className={`py-20 bg-white transition-all duration-1000 ease-out ${
        featuresAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features of Tanaw</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">Empowering you with timely information and tools for safety and awareness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APP_FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`bg-gray-100 rounded-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-500 ease-out group transform hover:-translate-y-2 ${
                featuresAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: featuresAreVisible ? `${index * 100}ms` : "0ms" }}
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
