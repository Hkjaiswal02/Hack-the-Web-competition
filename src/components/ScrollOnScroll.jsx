import { useEffect, useRef, useState } from "react";

export default function SlideOnScroll({ children, direction = "left" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
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
          visible
            ? "translate-x-0 opacity-100"
            : direction === "left"
            ? "-translate-x-24 opacity-0"
            : "translate-x-24 opacity-0"
        }
      `}
    >
      {children}
    </div>
  );
}
