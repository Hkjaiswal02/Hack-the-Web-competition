import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-white pt-14 pb-6 px-6 mt-24">
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-green-400/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Techspire Logo"
            className="w-20 h-20 object-contain"
          />
          <div>
            <h2 className="text-xl font-bold">Techspire Club</h2>
            <p className="text-sm opacity-70">Innovate • Create • Inspire</p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
          <p className="text-sm opacity-70">
            Follow us on social media for updates, events & workshops.
          </p>

          <div className="flex justify-center gap-6 mt-5 text-2xl">
            <a className="hover:text-pink-500 hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a className="hover:text-blue-500 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a className="hover:text-sky-400 hover:scale-110 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-4">
          <div className="text-right hidden md:block">
            <h2 className="text-lg font-semibold">
              Chaibasa Engineering College
            </h2>
            <p className="text-sm opacity-70">Computer Science Department</p>
          </div>

          <img
            src="/college-logo.png"
            alt="College Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Techspire Club • All Rights Reserved
      </div>
    </footer>
  );
}
