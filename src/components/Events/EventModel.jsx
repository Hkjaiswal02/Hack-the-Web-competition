import { FaLocationDot } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-gray-900 text-white rounded-xl p-6 max-w-md w-full relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl hover:text-red-400"
        >
          <RxCross2 />
        </button>

        <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
        <p className="text-sm opacity-70 mb-2">{event.date}</p>
        <p className="text-sm mb-3 flex items-center gap-1.5">
          <FaLocationDot />
          {event.location}
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          {event.fullDesc}
        </p>

        <button
          onClick={onClose}
          className="mt-5 w-full py-2 rounded-md bg-linear-to-r from-blue-600 to-green-400 hover:scale-105 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
