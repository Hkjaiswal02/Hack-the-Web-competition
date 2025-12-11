import img1 from "../assets/Images/gallery1.jpg";
import img2 from "../assets/Images/gallery2.jpg";
import img3 from "../assets/Images/gallery3.jpg";
import SlideOnScroll from "../components/ScrollOnScroll";
const GalleryPage = () => {
  const images = [img1, img2, img3];
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <SlideOnScroll>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            TECHSPIRE Gallery
          </h1>
        </SlideOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <SlideOnScroll direction="right">
              <div
                key={index}
                className="overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt={`Gallery ${index}`}
                  className="w-full h-40 object-cover"
                />
              </div>
            </SlideOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
