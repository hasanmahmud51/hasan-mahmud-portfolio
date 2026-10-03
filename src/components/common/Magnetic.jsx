import React, { useRef } from "react";
import { usePrefersReducedMotion } from "../../hooks";

export default function Magnetic({ children, strength = 18, className = "", style = {}, ...props }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${(x / rect.width) * strength}px, ${
      (y / rect.height) * strength
    }px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      style={{ display: "inline-block", transition: "transform 0.35s cubic-bezier(.19,1,.22,1)", ...style }}
      {...props}
    >
      {children}
    </span>
  );
}
