import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import Events from "../components/Events/Events";

import SlideOnScroll from "../components/ScrollOnScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SlideOnScroll direction="left">
        <About />
      </SlideOnScroll>
      <Events />
      <SlideOnScroll direction="right">
        <Contact />
      </SlideOnScroll>
    </>
  );
}
