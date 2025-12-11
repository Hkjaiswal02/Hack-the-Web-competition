import { useState } from "react";
import lead1 from "../assets/Images/lead.png";
import { FaLinkedin } from "react-icons/fa";
export default function TeamPage() {
  const [activeYear, setActiveYear] = useState("2025");
  const teamData = {
    2025: {
      lead: {
        name: "Bias Bhadra",
        role: "Chairman",
        image: lead1,
      },
    },
    2026: {},
  };
  const currentTeam = teamData[activeYear];
  return (
    <section className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          TECHSPIRE TEAM
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          quidem eos labore, pariatur tempore cupiditate?
        </p>
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {Object.keys(teamData).map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-2 rounded-full font-semibold transition
                ${
                  activeYear === year
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              {year} Team
            </button>
          ))}
        </div>
        <div className="flex justify-center mb-14">
          <div className="bg-gray-800 rounded-xl p-5 text-center w-60 shadow-lg hover:scale-105 transition">
            <img
              src={currentTeam.lead.image}
              alt={currentTeam.lead.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
            />
            <h3 className="text-xl font-bold">{currentTeam.lead.name}</h3>
            <p className="text-blue-400 text-sm mt-1">
              {currentTeam.lead.role}
            </p>
            <div className="flex justify-center mt-1 hover:text-sky-400 hover:scale-120 transition">
              <a
                href="https://www.linkedin.com/in/bias-bhadra-8b4a6a67/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
