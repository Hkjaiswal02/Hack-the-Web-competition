import { useState } from "react";
import { upcomingEvents, pastEvents } from "../data/eventData";
import EventCard from "../components/Events/EventCard";
import EventModal from "../components/Events/EventModel";
import SlideUpDown from "../components/SlideUpDown";
import SlideOnScroll from "../components/ScrollOnScroll";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20">
      <SlideUpDown direction="up">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      </SlideUpDown>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {upcomingEvents.map((event) => (
          <SlideOnScroll>
            <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
          </SlideOnScroll>
        ))}
      </div>

      <SlideUpDown direction="up">
        <h2 className="text-3xl font-bold mb-8 text-center">Past Events</h2>
      </SlideUpDown>

      <div className="grid md:grid-cols-3 gap-6">
        {pastEvents.map((event) => (
          <SlideOnScroll>
            <EventCard key={event.id} event={event} onOpen={setSelectedEvent} />
          </SlideOnScroll>
        ))}
      </div>
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
