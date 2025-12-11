import React from "react";

export const ReactLogo = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 841.9 595.3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" strokeWidth="40" fill="none">
      <ellipse rx="165" ry="400" transform="translate(420 297.5) rotate(0)" />
      <ellipse rx="165" ry="400" transform="translate(420 297.5) rotate(60)" />
      <ellipse rx="165" ry="400" transform="translate(420 297.5) rotate(120)" />
    </g>
    <circle cx="420" cy="298" r="60" fill="currentColor" />
  </svg>
);
