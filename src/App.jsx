import { useState, useEffect } from "react";
import { APP_VERSION } from "./constants/data";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Articles from "./components/Articles";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [heroContentLoaded, setHeroContentLoaded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Notification state
  const [isNotificationMounted, setIsNotificationMounted] = useState(false);
  const [showNotificationContent, setShowNotificationContent] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowBackToTop(currentScrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
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
    setTimeout(() => setShowNotificationContent(true), 50);

    setTimeout(() => {
      setShowNotificationContent(false);
      setTimeout(() => setIsNotificationMounted(false), 500);
    }, 3000);
  };

  const handleDownload = (platform) => {
    if (platform === "android") {
      triggerNotification(`Preparing download for Tanaw v${APP_VERSION} (Android)...`, "success");
    } else if (platform === "ios") {
      triggerNotification("iOS version coming soon!", "info");
    }
  };

  const closeNotification = () => {
    setShowNotificationContent(false);
    setTimeout(() => setIsNotificationMounted(false), 500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 overflow-x-hidden">
      <Notification
        isNotificationMounted={isNotificationMounted}
        showNotificationContent={showNotificationContent}
        notificationType={notificationType}
        notificationMessage={notificationMessage}
        onClose={closeNotification}
      />

      <Header scrollY={scrollY} />

      <main>
        <Hero heroContentLoaded={heroContentLoaded} onDownload={handleDownload} />
        <Features />
        <Showcase />
        <Articles />
        <Download onDownload={handleDownload} />
      </main>

      <Footer />

      <BackToTop show={showBackToTop} onClick={scrollToTop} />
    </div>
  );
}
