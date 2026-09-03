import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

// animation: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in"
const AnimatedSection = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  as: Tag = "div",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <Tag
      ref={ref}
      className={`animate-section ${animation} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;