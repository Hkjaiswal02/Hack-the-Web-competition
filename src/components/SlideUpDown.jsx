import { useEffect, useRef, useState } from "react";

export default function SlideUpDownOnScroll({ children, direction = "up" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${
          show
            ? "translate-y-0 opacity-100"
            : direction === "up"
            ? "translate-y-25 opacity-0"
            : "-translate-y-25 opacity-0"
        }
      `}
    >
      {children}
    </div>
  );
}
