import { Download as DownloadIcon, Smartphone, AlertCircle } from "lucide-react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { APP_VERSION, APP_LINK } from "../constants/data";

const PLATFORMS = [
  {
    platform: "android",
    IconSet: DownloadIcon,
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
];

const Download = ({ onDownload }) => {
  const [downloadRef, downloadAreVisible] = useIntersectionObserver();

  return (
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
          {PLATFORMS.map((item, index) => (
            <div
              key={item.platform}
              className={`flex-1 bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-1.5 flex flex-col ${
                downloadAreVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: downloadAreVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="mb-6 flex items-center gap-4">
                <div className={`w-14 h-14 ${item.available ? "bg-green-500" : "bg-gray-600"} rounded-xl flex items-center justify-center shadow-md`}>
                  <item.IconSet size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>

              <p className="text-gray-400 mb-6 text-base flex-grow">{item.desc}</p>

              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-gray-400">{item.available ? "Current Version" : "Status"}</span>
                <span className={`font-medium ${item.available ? "bg-green-600/50" : "bg-gray-700"} px-2.5 py-1 rounded-md`}>
                  {item.available ? APP_VERSION : "Coming Soon"}
                </span>
              </div>

              {item.available ? (
                <a
                  href={APP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onDownload("android")}
                  className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center gap-2.5 transition-colors font-semibold shadow-md hover:shadow-lg"
                >
                  <DownloadIcon size={18} /> {item.actionText}
                </a>
              ) : (
                <button
                  onClick={() => onDownload("ios")}
                  disabled
                  className="w-full py-3.5 bg-gray-600 rounded-lg flex items-center justify-center gap-2.5 transition-colors font-semibold shadow-md cursor-not-allowed opacity-80"
                >
                  <AlertCircle size={18} /> {item.actionText}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Download;
