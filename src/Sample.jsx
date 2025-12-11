import { About } from "./components/About/About";
import { Events } from "./components/Events/Events";
import { Resources } from "./components/Resources/Resources";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";

export default function App() {
  return (
    <div className="dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Resources />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
