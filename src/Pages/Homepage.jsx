import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";

import { Contact } from "../components/Contact/Contact";
import SlideOnScroll from "../components/ScrollOnScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SlideOnScroll direction="left">
        <About />
      </SlideOnScroll>
      <SlideOnScroll direction="right">
        <Contact />
      </SlideOnScroll>
    </>
  );
}
