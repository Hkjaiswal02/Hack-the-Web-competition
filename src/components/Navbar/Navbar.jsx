import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export const Navbar = ({ theme, setThemeMode }) => {
  const [open, setOpen] = useState(false);
  const [memberPortalOpen, setMemberPortalOpen] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Resources", path: "/resources" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
  ];

  return (
    <>
      <header className="w-full overflow-x-hidden bg-transparent backdrop-blur-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-tr from-blue-600 to-green-400 flex items-center justify-center text-white font-bold">
                TS
              </div>
              <span className="font-bold text-lg tracking-wide">TECHSPIRE</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded hover:bg-gray-800/40 transition ${
                      isActive ? "bg-gray-800/60" : ""
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/*Desktop Toggle Icon */}
              <button
                onClick={() => setThemeMode(!theme)}
                className="hidden md:flex p-2 text-xl rounded-md hover:scale-110 transition"
              >
                {theme ? <MdLightMode /> : <MdDarkMode />}
              </button>

              {/* Member Button - Desktop */}
              <button
                onClick={() => setMemberPortalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-linear-to-r from-blue-600 to-green-400 text-white font-medium hover:scale-105 transition"
              >
                Member
              </button>

              {/*Mobile Toggle Icon */}
              <button
                onClick={() => setThemeMode(!theme)}
                className="md:hidden p-2 text-xl rounded-md hover:scale-110 transition"
              >
                {theme ? <MdLightMode /> : <MdDarkMode />}
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md focus:ring-2 focus:ring-blue-400"
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-800/70 border-t backdrop-blur-sm">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 hover:bg-gray-700 ${
                    isActive ? "bg-gray-700" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setMemberPortalOpen(true);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            >
              Member Portal
            </button>
          </div>
        )}
      </header>

      {/* Member Modal */}
      {memberPortalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMemberPortalOpen(false)}
          />

          <div className="relative bg-black rounded-lg shadow-lg max-w-md w-full p-6 z-10">
            <h3 className="text-lg font-semibold">Member Portal</h3>

            <form
              className="mt-4 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo login");
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
                className="p-3 rounded border bg-gray-900 text-white"
              />

              <select className="p-3 rounded border bg-gray-900 text-white">
                <option>Select Batch</option>
                <option>2022-2026</option>
                <option>2023-2027</option>
                <option>2024-2028</option>
              </select>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
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
