import { X, CheckCircle, AlertCircle } from "lucide-react";

const Notification = ({ isNotificationMounted, showNotificationContent, notificationType, notificationMessage, onClose }) => {
  if (!isNotificationMounted) return null;

  return (
    <div
      className={`fixed top-6 right-6 p-4 rounded-lg shadow-xl flex items-center gap-3 z-[100] transition-all duration-500 ease-out transform
        ${showNotificationContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}
        ${
          notificationType === "success" ? "bg-green-100 text-green-700 border border-green-300" : "bg-blue-100 text-blue-700 border border-blue-300"
        }`}
    >
      {notificationType === "success" ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
      <span className="font-medium">{notificationMessage}</span>
      <button onClick={onClose} className="ml-auto p-1 rounded-full hover:bg-black/10 transition-colors">
        <X size={18} />
      </button>
    </div>
  );
};

export default Notification;
