import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { COLOR } from "../lib/theme";
import { usePrefersReducedMotion } from "../hooks";
import Reveal from "./common/Reveal";

export default function ProjectCard({ project, onOpen, index }) {
  const cardRef = useRef(null);
  const reduced = usePrefersReducedMotion();

  const onMove = (e) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    cardRef.current.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg)`;
  };
  const onLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <Reveal delay={(index % 3) * 0.08}>
      <button
        data-cursor-lg
        ref={cardRef}
        onClick={() => onOpen(project)}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="gd-project-card"
        style={{ transition: "transform 0.4s cubic-bezier(.19,1,.22,1)" }}
      >
        <div className="gd-project-img-wrap">
          <img src={project.image} alt={project.title} loading="lazy" className="gd-project-img" />
          <div className="gd-project-overlay" />
          <span className="gd-project-view">
            View Project <ArrowUpRight size={14} strokeWidth={1.75} />
          </span>
        </div>
        <div className="flex items-start justify-between" style={{ marginTop: 20 }}>
          <div style={{ textAlign: "left" }}>
            <h3 className="gd-heading gd-project-title" style={{ color: COLOR.off, fontSize: 21 }}>
              {project.title}
            </h3>
            <p style={{ color: COLOR.muted, fontSize: 14, marginTop: 6, maxWidth: 320 }}>{project.description}</p>
          </div>
          <span style={{ color: COLOR.gold, fontSize: 13, whiteSpace: "nowrap", marginLeft: 12 }}>{project.year}</span>
        </div>
        <span style={{ color: COLOR.muted, fontSize: 12, letterSpacing: "0.1em", display: "inline-block", marginTop: 10 }}>
          {project.category.toUpperCase()}
        </span>
      </button>
    </Reveal>
  );
}
