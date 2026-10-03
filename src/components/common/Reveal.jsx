import React from "react";
import { useReveal } from "../../hooks";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, inView] = useReveal(0.15);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(.19,1,.22,1) ${delay}s, transform 0.8s cubic-bezier(.19,1,.22,1) ${delay}s`,
      }}
    >
      {children}
    </Tag>
  );
}
