import React, { useEffect, useRef, useState } from "react";
import { COLOR } from "../../lib/theme";

export default function AmbientCursor({ active }) {
  const dotRef = useRef(null);
  const [big, setBig] = useState(false);

  useEffect(() => {
    if (!active) return;
    const dot = dotRef.current;
    if (!dot) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", move);
    let raf;
    const loop = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    const onOver = (e) => {
      if (e.target.closest("[data-cursor-lg]")) setBig(true);
    };
    const onOut = (e) => {
      if (e.target.closest("[data-cursor-lg]")) setBig(false);
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: big ? 56 : 10,
        height: big ? 56 : 10,
        borderRadius: "50%",
        border: `1px solid ${COLOR.gold}`,
        background: big ? "rgba(200,169,107,0.08)" : COLOR.gold,
        pointerEvents: "none",
        zIndex: 200,
        transition:
          "width 0.3s cubic-bezier(.19,1,.22,1), height 0.3s cubic-bezier(.19,1,.22,1), background 0.3s ease",
        mixBlendMode: "difference",
      }}
    />
  );
}
