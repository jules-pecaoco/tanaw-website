import { useState, useEffect, useRef } from "react";
import {
  ArrowDown,
  ChevronRight,
  Download,
  X,
  CheckCircle,
  AlertCircle,
  CloudSun, // Added
  MapPin, // Added
  PhoneOutgoing, // Added
  MessageSquareWarning, // Added
  Bot, // Added for BotIcon
  BarChart3, // Added
  Github, // Added
  ArrowUp, // Added
  Smartphone, // Added (Example, can be replaced by specific app icons)
} from "lucide-react";

  import ads from "./assets/video/tanaw-advertisement.mp4"; 


// Simple Intersection Observer Hook
const useIntersectionObserver = (options = { threshold: 0.1, triggerOnce: true }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (options.triggerOnce) {
          observer.unobserve(currentRef);
        }
      } else {
        if (!options.triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options.threshold, options.triggerOnce]); // Keep dependencies simple

  return [ref, isIntersecting];
};

export default function TanawLandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showNotificationContent, setShowNotificationContent] = useState(false);
  const [isNotificationMounted, setIsNotificationMounted] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [heroContentLoaded, setHeroContentLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // App version
  const appVersion = "1.0.5";
  const appCode = "Tanaw.v1.0.5.apk";
  const appLink = `https://github.com/jules-pecaoco/tanaw/releases/download/v1.0.5/Tanaw.v1.0.5.apk`;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowBackToTop(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger hero animations
    const timer = setTimeout(() => setHeroContentLoaded(true), 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const triggerNotification = (message, type) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setIsNotificationMounted(true);
    setTimeout(() => setShowNotificationContent(true), 50); // Allow mounting before transition

    setTimeout(() => {
      setShowNotificationContent(false);
      setTimeout(() => setIsNotificationMounted(false), 500); // Unmount after fade-out
    }, 3000);
  };

  const handleDownload = (platform) => {
    if (platform === "android") {
      triggerNotification(`Preparing download for Tanaw v${appVersion} (Android)...`, "success");
      // Actual download is handled by the <a> tag's href attribute
    } else if (platform === "ios") {
      triggerNotification("iOS version coming soon!", "info");
    }
  };

  const closeNotification = () => {
    setShowNotificationContent(false);
    setTimeout(() => setIsNotificationMounted(false), 500); // Unmount after fade-out
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const appFeatures = [
    {
      title: "Dynamic Weather Maps",
      desc: "Visualize real-time heat and rain patterns with our interactive weather maps.",
      Icon: CloudSun,
      color: "bg-sky-500",
    },
    {
      title: "Advanced Hazard Mapping",
      desc: "Identify landslide, flood, and storm surge prone areas to stay prepared and safe.",
      Icon: MapPin,
      color: "bg-red-500",
    },
    {
      title: "Emergency Agency Locator",
      desc: "Quickly find, get directions to, and call nearby emergency response agencies.",
      Icon: PhoneOutgoing,
      color: "bg-green-500",
    },
    {
      title: "User-Reported Hazard News",
      desc: "Stay updated with real-time hazard reports submitted by fellow users in your vicinity.",
      Icon: MessageSquareWarning,
      color: "bg-yellow-500",
    },
    {
      title: "AI-Powered Reporting",
      desc: "Submit hazard reports analyzed and categorized by Gemini AI for accuracy and insights.",
      Icon: Bot,
      color: "bg-purple-500",
    },
    {
      title: "Analytics & Forecasts",
      desc: "Access weather forecasts and analytics derived from user-reported hazard data.",
      Icon: BarChart3,
      color: "bg-indigo-500",
    },
  ];

  const showcaseHighlights = [
    "Interactive climate and hazard maps at your fingertips.",
    "Instant alerts for weather changes and nearby reported hazards (11km radius).",
    "Seamlessly report incidents, powered by AI analysis and categorization.",
    "Locate and contact emergency services with integrated calling and directions.",
    "Community-driven insights through user reports and comprehensive analytics.",
  ];

  // Refs for intersection observer
  const [featuresRef, featuresAreVisible] = useIntersectionObserver();
  const [showcaseRef, showcaseAreVisible] = useIntersectionObserver();
  const [downloadRef, downloadAreVisible] = useIntersectionObserver();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      {/* Notification */}
      {isNotificationMounted && (
        <div
          className={`fixed top-6 right-6 p-4 rounded-lg shadow-xl flex items-center gap-3 z-[100] transition-all duration-500 ease-out transform
            ${showNotificationContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
            ${
              notificationType === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-blue-100 text-blue-700 border border-blue-300"
            }`}
        >
          {notificationType === "success" ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
          <span className="font-medium">{notificationMessage}</span>
          <button onClick={closeNotification} className="ml-auto p-1 rounded-full hover:bg-black/10 transition-colors">
            <X size={18} />
          </button>
        </div>
      )}

      {/* Header */}
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
              {[
                { href: "#features", label: "Features" },
                { href: "#showcase", label: "Showcase" },
                { href: "#download", label: "Download" },
              ].map((item) => (
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-white via-orange-50 to-orange-100 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
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
                    href={appLink}
                    download={appCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload("android")}
                    className="flex items-center justify-center gap-2.5 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Download size={20} />
                    Download for Android
                    <span className="opacity-80 text-sm ml-1 bg-black/10 px-1.5 py-0.5 rounded-sm">v{appVersion}</span>
                  </a>
                  <button
                    onClick={() => handleDownload("ios")}
                    className="flex items-center justify-center gap-2.5 bg-gray-700 hover:bg-gray-800 text-white px-7 py-3.5 rounded-lg transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Smartphone size={20} /> {/* Using Smartphone for iOS */}
                    iOS <span className="opacity-80 text-sm ml-1">(Coming Soon)</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <div
                className={`relative transition-all duration-1000 ease-out delay-500 ${
                  heroContentLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-400 rounded-full opacity-20 blur-3xl animate-pulse delay-500"></div>
                <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-red-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                {/* Assuming logo-circle.png is a relevant app icon or small visual */}
                <img
                  src="/logo-circle.png" // Replace with actual app screenshot or mockup if desired
                  alt="Tanaw App Icon"
                  className="relative z-10 h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 rounded-full shadow-2xl animate-pulse" // Added animate-pulse for subtle motion
                />
              </div>
            </div>
          </div>
        </div>
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

      {/* Features Section */}
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
            {appFeatures.map((feature, index) => (
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

      {/* App Showcase */}
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
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              A glimpse into how Tanaw enhances your interaction with climate and hazard data.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl aspect-[16/9]">
                  <video className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                   controls 
                   autoPlay 
                   loop
                    
                  >
                    <source src={ads} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">Transform Your Awareness</h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Tanaw offers a comprehensive suite of tools designed to make climate data accessible and hazard information actionable, fostering a
                safer, more informed community.
              </p>

              <ul className="space-y-4">
                {showcaseHighlights.map((item, index) => (
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

      {/* Download Section */}
      <section
        id="download"
        ref={downloadRef}
        className={`py-20 bg-gray-900 text-white transition-all duration-1000 ease-out ${
          downloadAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Tanaw Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">Join our growing community of users. Download Tanaw and stay ahead.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
            {[
              {
                platform: "android",
                IconSet: Download,
                title: "Android",
                desc: "Get the latest version for your Android device and enjoy all features.",
                available: true,
                actionText: "Download Now",
                color: "orange",
              },
              {
                platform: "ios",
                IconSet: Smartphone,
                title: "iOS",
                desc: "iOS version is under development. Join our waitlist to be notified!",
                available: false,
                actionText: "Notify Me (Soon)",
                color: "gray",
              },
            ].map((item, index) => (
              <div
                key={item.platform}
                className={`flex-1 bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1.5 flex flex-col ${
                  downloadAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: downloadAreVisible ? `${index * 150}ms` : "0ms" }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`w-14 h-14 ${item.available ? "bg-green-500" : "bg-gray-600"} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <item.IconSet size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 text-base flex-grow">{item.desc}</p>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-400">{item.available ? "Current Version" : "Status"}</span>
                  <span className={`font-medium ${item.available ? "bg-green-600/50" : "bg-gray-700"} px-2.5 py-1 rounded-md`}>
                    {item.available ? appVersion : "Coming Soon"}
                  </span>
                </div>
                {item.available ? (
                  <a
                    href={appLink}
                    download={appCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleDownload("android")}
                    className={`w-full py-3.5 bg-${item.color}-500 hover:bg-${item.color}-600 rounded-lg flex items-center justify-center gap-2.5 transition-colors font-semibold shadow-md hover:shadow-lg`}
                  >
                    <Download size={18} /> {item.actionText}
                  </a>
                ) : (
                  <button
                    onClick={() => handleDownload("ios")}
                    className={`w-full py-3.5 bg-${
                      item.color
                    }-600 rounded-lg flex items-center justify-center gap-2.5 transition-colors font-semibold shadow-md ${
                      item.available ? "" : "cursor-not-allowed opacity-80 hover:bg-gray-500"
                    }`}
                    disabled={!item.available}
                  >
                    <AlertCircle size={18} /> {item.actionText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center mb-8">
            <img src="/logo-transparent-bg.png" alt="Tanaw Logo Small" className="h-10 w-auto opacity-70 mb-3" />
            <div className="flex space-x-5">
              <a
                href="https://github.com/jules-pecaoco/tanaw"
                target="_blank"
                rel="noopener noreferrer"
                title="Tanaw on GitHub"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110"
              >
                <span className="sr-only">GitHub</span>
                <Github size={20} />
              </a>
              {/* Add other social links here if needed */}
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Tanaw. All rights reserved.</p>
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out z-50 transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
