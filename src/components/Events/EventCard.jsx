export default function EventCard({ event, onOpen }) {
  return (
    <div className="bg-gray-900 rounded-xl p-5 border border-white/10 hover:scale-105 transition">
      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
      <p className="text-sm opacity-70 mb-2">{event.date}</p>
      <p className="text-sm text-gray-300 mb-4">{event.shortDesc}</p>

      <button
        onClick={() => onOpen(event)}
        className="px-4 py-2 rounded bg-linear-to-r from-blue-600 to-green-400 hover:scale-105 transition"
      >
        More Details
      </button>
    </div>
  );
}
