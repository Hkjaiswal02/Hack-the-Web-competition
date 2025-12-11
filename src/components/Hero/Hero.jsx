import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import SlideOnScroll from "../ScrollOnScroll";

export const Hero = () => {
  const [memberPortalOpen, setMemberPortalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-svh w-full overflow-hidden bg-linear-to-br from-gray-900 to-black text-white flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-20 h-20 text-teal-400"
          >
            <path d="M12 0l8 4v8l-8 4-8-4V4z" />
          </svg>
        </div>
        <SlideOnScroll direction="left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
            Welcome to TECHSPIRE
          </h1>
        </SlideOnScroll>

        <SlideOnScroll direction="right">
          <p className="text-gray-300 max-w-2xl text-base md:text-xl ">
            We are a student-run technical club focused on web, AI, cloud, and
            open-source collaboration. Join workshops, projects, hackathons, and
            a community that ships real products.
          </p>
        </SlideOnScroll>

        <div className="mt-6 flex flex-wrap justify-center gap-3 w-full">
          <a
            href="#events"
            className="inline-flex items-center px-5 py-3 rounded-md bg-linear-to-r from-blue-600 to-green-400 text-white font-medium hover:scale-105 transition-all duration-300 ease-in-out"
          >
            See Events
          </a>

          <button
            onClick={() => setMemberPortalOpen(true)}
            className="inline-flex items-center px-5 py-3 rounded-md border border-gray-200 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Join as Member
          </button>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
          <div className="text-center">
            <div className="text-2xl font-bold">10+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm text-gray-500">Members</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-500">Workshops</div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold">0</div>
            <div className="text-sm text-gray-500">Hackathons</div>
          </div>
        </div>
      </section>

      {memberPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMemberPortalOpen(false)}
          />

          <div className="relative bg-black text-white rounded-lg shadow-lg max-w-md w-full p-6 z-10">
            <h3 className="text-lg font-semibold">Member Portal</h3>
            <p className="text-sm text-gray-400 mt-2">
              This is a frontend demo. Integrate real Backend later.
            </p>

            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo Submitted");
                setMemberPortalOpen(false);
              }}
            >
              <input
                required
                type="text"
                placeholder="Name"
                className="p-3 rounded border bg-gray-900 text-white"
              />

              <input
                required
                type="email"
                placeholder="Email"
                className="p-3 rounded border bg-gray-900 text-white"
              />
              <input
                required
                type="number"
                placeholder="Registration No"
                className="p-3 rounded border bg-gray-900 text-white no-spinner"
              />
              <select className=" p-3 rounded border bg-gray-900 text-white transition">
                <option className="text-white">Select Batch</option>
                <option className="text-white">2022-2026</option>
                <option className="text-white">2023-2027</option>
                <option className="text-white">2024-2028</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:scale-105 transition cursor-pointer"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setMemberPortalOpen(false)}
              className="absolute top-3 right-3 p-2 rounded hover:bg-gray-700 hover:text-red-500"
            >
              <RxCross1 />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
