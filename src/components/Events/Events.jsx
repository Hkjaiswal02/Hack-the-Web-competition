import SlideOnScroll from "../ScrollOnScroll";
import SlideUpDown from "../SlideUpDown";
import { FaLocationDot } from "react-icons/fa6";

const Events = () => {
  const upcomingEvents = {
    1: {
      name: "Solve-the-Code",
      title: "Learn, build & explore with our guided workshops and hackathons.",
      location: "Language Lab",
    },
    2: {
      name: "Tech knowledge workshops",
      title: "Learn, build & explore with our guided workshops and hackathons.",
      location: "Language Lab",
    },
    3: {
      name: "Hackathons",
      title: "Learn, build & explore with our guided workshops and hackathons.",
      location: "Language Lab",
    },
  };
  return (
    <section className="py-20 bg-gray-900 text-white px-6">
      <SlideUpDown direction="up">
        <h2 className="text-4xl font-bold text-center mb-10">
          Upcoming Events
        </h2>
      </SlideUpDown>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {Object.entries(upcomingEvents).map(([key, value]) => (
          <SlideOnScroll>
            <div
              key={key}
              className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform"
            >
              <h3 className="text-xl font-semibold text-teal-300 mb-2">
                {value.name}
              </h3>
              <p className="text-sm mb-3 flex items-center gap-1.5">
                <FaLocationDot />
                {value.location}
              </p>
              <p className="text-gray-400">{value.title}</p>
            </div>
          </SlideOnScroll>
        ))}
      </div>
    </section>
  );
};

export default Events;
