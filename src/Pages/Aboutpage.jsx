import React from "react";
import clubHead from "../assets/Images/lead.png"; // replace with your image
import logo from "../assets/Images/logo.png";
import SlideOnScroll from "../components/ScrollOnScroll";
import SlideUpDownOnScroll from "../components/SlideUpDown";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white pt-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <SlideOnScroll direction="left">
          <img src={logo} alt="Techspire" className="w-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About TECHSPIRE
          </h1>
        </SlideOnScroll>
        <SlideOnScroll direction="right">
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TECHSPIRE is a student-driven technical community dedicated to
            building real-world skills through innovation, collaboration, and
            continuous learning. We bridge the gap between classroom education
            and industry requirements by providing hands-on experience through
            practical projects, mentorship, workshops, and hackathons.
          </p>
        </SlideOnScroll>
      </div>
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <SlideOnScroll direction="left">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Our Vision
            </h2>
            <p className="text-gray-300">
              To become a leading student tech community that empowers learners
              with future-ready technical skills, innovation mindset, and
              leadership abilities.
            </p>
          </SlideOnScroll>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <SlideOnScroll direction="right">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Our Mission
            </h2>
            <p className="text-gray-300">
              Our mission is to provide students with industry-level exposure,
              encourage open-source contributions, develop problem-solving
              skills, and build a strong technical foundation across web, AI,
              cloud, and emerging technologies.
            </p>
          </SlideOnScroll>
        </div>
      </div>

      {/* ===== WHAT WE DO ===== */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          What We Do at TECHSPIRE
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Hands-on Web, AI & Cloud Workshops",
            "Live Project Development",
            "Open-source Contributions",
            "Technical Study Groups",
            "Career Mentorship & Guidance",
            "Hackathons & Coding Events",
            "Industry Expert Sessions",
            "Team Collaboration Projects",
          ].map((item, index) => (
            <SlideUpDownOnScroll direction="down">
              <div
                key={index}
                className="bg-gray-800 p-5 rounded-lg text-center shadow-md hover:scale-105 transition"
              >
                {item}
              </div>
            </SlideUpDownOnScroll>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-12 items-center">
        <SlideOnScroll direction="left">
          <div className="flex justify-center">
            <img
              src={clubHead}
              alt="Club Head"
              className="w-72 h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </SlideOnScroll>
        <SlideOnScroll direction="right">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Message from the Club Head
            </h2>
            <h3 className="text-lg text-blue-400 font-semibold mb-3">
              Bias Bhadra — Founder & Lead Coordinator
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              TECHSPIRE was created with the vision of transforming students
              into industry-ready professionals. We believe learning should be
              practical, collaborative, and impactful. Our goal is to build a
              community where innovation thrives and students turn ideas into
              real products.
            </p>
            <p className="text-gray-400 text-sm">
              "Success is built through teamwork, consistency, and curiosity."
            </p>
          </div>
        </SlideOnScroll>
      </div>

      <div className="max-w-6xl mx-auto mt-24 bg-gray-800 p-10 rounded-xl shadow-xl">
        <SlideUpDownOnScroll direction="down">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Join TECHSPIRE?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-gray-300">
            <ul className="space-y-3">
              <li>Real-world project experience</li>
              <li>Industry-level technical exposure</li>
              <li>Resume & portfolio development</li>
              <li>Internship & placement guidance</li>
            </ul>
            <ul className="space-y-3">
              <li>Professional mentorship</li>
              <li>Hackathons & competitions</li>
              <li>Technical leadership experience</li>
              <li>Strong peer network</li>
            </ul>
          </div>
        </SlideUpDownOnScroll>
      </div>
    </section>
  );
}
