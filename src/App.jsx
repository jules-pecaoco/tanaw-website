import { useState, useEffect } from "react";
import { ArrowDown, ChevronRight, Download, X, CheckCircle, AlertCircle } from "lucide-react"; // Import from lucide-react (available in this environment)

export default function TanawLandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");

  // App version
  const appVersion = "0.8.5";
  const appCode = "Tanaw.v0.8.5-beta.1.apk";
  const appLink = `https://github.com/jules-pecaoco/tanaw/releases/download/preview/${appCode}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDownload = (platform) => {
    if (platform === "android") {
      setNotificationMessage("Downloading Tanaw v" + appVersion + " for Android");
      setNotificationType("success");
      window.open(appLink, "_blank");
    } else {
      setNotificationMessage("iOS version coming soon!");
      setNotificationType("info");
    }
    setShowNotification(true);

    // Auto hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Notification */}
      {showNotification && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-3 z-50 transition-all duration-300 ${
            notificationType === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-blue-50 text-blue-700 border border-blue-200"
          }`}
        >
          {notificationType === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
          <span>{notificationMessage}</span>
          <button onClick={() => setShowNotification(false)} className="ml-2 p-1 rounded-full hover:bg-gray-200 transition-colors">
            <X size={16} />
          </button>
        </div>
      )}

      {/* Header */}
      <header className={`fixed w-full transition-all duration-300 z-40 ${scrollY > 50 ? "bg-white shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo-transparent-bg.png" alt="Tanaw Logo" className="h-20 w-40 rounded-lg mr-3" />
          </div>

          <nav>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#showcase" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#download"
            className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition-all font-medium"
          >
            <Download size={18} />
            Get the App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-white to-orange-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Experience the world through <span className="text-orange-500">tanaw</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  Your ultimate companion for exploring and discovering the world around you. Download now and see the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleDownload("android")}
                    className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-all font-medium"
                  >
                    <Download size={20} />
                    Download for Android
                    <span className="opacity-70 text-sm ml-1">v{appVersion}</span>
                  </button>
                  <button
                    onClick={() => handleDownload("ios")}
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-all font-medium"
                  >
                    <Download size={20} />
                    iOS <span className="opacity-70">(Coming Soon)</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-64 h-64 bg-orange-500 rounded-full opacity-10 blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
                <img src="/logo-circle.png" alt="Tanaw App Screenshot" className="h-20 w-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#features"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md text-orange-500 hover:text-orange-600"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Tanaw?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the powerful features that make Tanaw the perfect app for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Intuitive Interface",
                desc: "Navigate with ease through our carefully designed user experience that puts functionality first.",
                color: "bg-orange-500",
              },
              {
                title: "Real-time Updates",
                desc: "Stay informed with instant notifications and live data, keeping you connected to what matters most.",
                color: "bg-gray-700",
              },
              {
                title: "Privacy Focused",
                desc: "Your data belongs to you. We implement industry-leading security measures to protect your information.",
                color: "bg-red-500",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group">
                <div
                  className={`w-14 h-14 ${feature.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section id="showcase" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Showcase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Take a look at what Tanaw can do for you</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl"></div>
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  <img src="/api/placeholder/800/450" alt="Tanaw App Demo Video Placeholder" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transform Your Experience</h3>
              <p className="text-gray-600 mb-6">
                With Tanaw, you'll discover a new way to interact with the world around you. Our innovative features are designed to enhance your
                daily experience, making life more efficient and enjoyable.
              </p>

              <ul className="space-y-4">
                {[
                  "Quick and responsive interface",
                  "Personalized recommendations",
                  "Offline capabilities for use anywhere",
                  "Regular updates with new features",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <ChevronRight size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Tanaw Today</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Join thousands of satisfied users and download Tanaw now</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto">
            <div className="flex-1 bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:bg-gray-700">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.523 15.34L20.089 10.908L16 3H10.5V3.012H10.471V21H16.001L20.09 13.091L17.523 15.34Z" fill="white" />
                    <path
                      d="M4 12C4 7.589 7.589 4 12 4C12.69 4 13.358 4.094 14 4.269V3.009C13.364 2.871 12.691 2.799 12 2.799C8.113 2.799 4.845 5.067 3.572 8.268C2.986 9.85 2.776 11.579 3.047 13.263C3.318 14.948 4.056 16.52 5.172 17.793C6.289 19.066 7.741 19.988 9.358 20.446C10.974 20.904 12.687 20.878 14.289 20.372V17.592C12.976 18.047 11.559 18.047 10.246 17.592C8.933 17.136 7.796 16.249 7.019 15.069C6.241 13.889 5.866 12.481 5.953 11.067C6.039 9.653 6.583 8.304 7.5 7.22C8.417 6.136 9.66 5.379 11.042 5.061C12.425 4.744 13.87 4.881 15.169 5.453V3.269C14.126 2.949 13.026 2.799 12 2.799C8.113 2.799 4.845 5.067 3.572 8.268C2.299 11.469 3.12 15.114 5.636 17.63C5.636 17.63 5.636 17.631 5.637 17.631C3.511 15.506 2.799 12.576 4 12Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Android</h3>
              </div>
              <p className="text-gray-400 mb-6">Get the latest version for your Android device and enjoy all features.</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Current Version</span>
                <span className="text-sm font-medium bg-gray-700 px-2 py-1 rounded">{appVersion}</span>
              </div>
              <button
                onClick={() => handleDownload("android")}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Download size={18} />
                Download Now
              </button>
            </div>

            <div className="flex-1 bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all hover:bg-gray-700">
              <div className="mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.94 5.19A4.379 4.379 0 0 0 16 2.5a4.47 4.47 0 0 0-3 1.52 4.18 4.18 0 0 0-1.05 2.69 3.92 3.92 0 0 0 3.07-1.52zm1.48 2.3a4.93 4.93 0 0 1 2.35.63 4.65 4.65 0 0 1 2.23 3.6c0 .22-.24 1.33-.79 2.37A4.51 4.51 0 0 1 16.87 16c-.5 0-1.21-.16-1.87-.16-.63 0-1.32.17-1.85.17A4.47 4.47 0 0 1 9.75 14 8.2 8.2 0 0 1 8 9.93a5 5 0 0 1 2.54-4.56 5 5 0 0 1 2.3-.63c.63 0 1.36.18 1.9.18.53 0 1.3-.19 1.92-.19zm-5.5 11.65a16.38 16.38 0 0 0 1.57-3.93c.34-.14 1.88-.82 3.89-.84 0 .61.15 1.24.15 1.87 0 1.25-.27 2.45-.8 3.54a14.07 14.07 0 0 1-2.14 3.37c-.83-1.28-2.32-2.94-2.67-4.01z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">iOS</h3>
              </div>
              <p className="text-gray-400 mb-6">iOS version coming soon. Join our waitlist to be notified when it's available.</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Status</span>
                <span className="text-sm font-medium bg-gray-700 px-2 py-1 rounded">Coming Soon</span>
              </div>
              <button
                onClick={() => handleDownload("ios")}
                className="w-full py-3 bg-gray-600 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-not-allowed opacity-80"
              >
                <AlertCircle size={18} />
                Not Yet Available
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6">
          <div className="flex flex-row justify-center items-center">
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-500 transition-colors">
                <span className="sr-only">Github</span>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Tanaw. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
