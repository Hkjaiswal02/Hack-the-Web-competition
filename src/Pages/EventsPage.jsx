import SlideOnScroll from "../components/ScrollOnScroll";
const EventsPage = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SlideOnScroll>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            EventPage
          </h1>
        </SlideOnScroll>
        <p className="text-center">Working over it</p>
      </div>
    </section>
  );
};

export default EventsPage;
