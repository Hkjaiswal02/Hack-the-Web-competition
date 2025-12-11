import { Hero } from "../components/Hero/Hero";
import { About } from "../components/About/About";
import { Events } from "../components/Events/Events";
import { Resources } from "../components/Resources/Resources";
import { Blog } from "../components/Blog/Blog";
import { Contact } from "../components/Contact/Contact";
import SlideOnScroll from "../components/ScrollOnScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <SlideOnScroll direction="left"> */}
      <About />
      {/* </SlideOnScroll> */}
      <SlideOnScroll direction="right">{/* <Events /> */}</SlideOnScroll>
      <SlideOnScroll direction="left">{/* <Resources /> */}</SlideOnScroll>
      <SlideOnScroll direction="right">{/* <Blog /> */}</SlideOnScroll>
      <SlideOnScroll direction="right">{/* <Contact /> */}</SlideOnScroll>
    </>
  );
}
