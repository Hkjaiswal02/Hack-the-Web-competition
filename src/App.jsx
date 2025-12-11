import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/Aboutpage";
import EventsPage from "./Pages/EventsPage";
import GalleryPage from "./Pages/GalleryPage";
import ResourcePage from "./Pages/ResourcePage";
import TeamPage from "./Pages/Team";
import { useEffect, useState } from "react";
export default function App() {
  const [theme, setThemeMode] = useState(false);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Navbar theme={theme} setThemeMode={setThemeMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/team" element={<TeamPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
