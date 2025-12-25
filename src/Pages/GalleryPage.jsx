import { useState } from "react";
import img1 from "../assets/Images/gallery1.jpg";
import img2 from "../assets/Images/gallery2.jpg";
import img3 from "../assets/Images/gallery3.jpg";
import SlideOnScroll from "../components/ScrollOnScroll";
const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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
                onClick={() => setSelectedImage(img)}
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
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPage;
