import React, { useEffect } from "react";
import { X } from "lucide-react";
import { COLOR } from "../lib/theme";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="gd-modal-backdrop" role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="gd-modal-scroll">
        <div className="max-w-5xl mx-auto px-6 md:px-10" style={{ paddingTop: 100, paddingBottom: 100 }}>
          <button onClick={onClose} aria-label="Close project" className="gd-modal-close">
            <X size={20} strokeWidth={1.5} />
            <span style={{ fontSize: 13, letterSpacing: "0.1em" }}>CLOSE</span>
          </button>

          <span style={{
           color: COLOR.gold,
           fontSize: 14,
           letterSpacing: "0.15em",
           marginLeft: "40px",
           position: "relative",
           top: "-6px",
          }}>
         {project.category.toUpperCase()} — {project.year}
       </span>


          <h2 className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2.2rem,5vw,4rem)", marginTop: 14 }}>
            {project.title}
          </h2>

          <img
            src={project.image}
            alt={project.title}
            className="w-full"
            style={{ marginTop: 40, borderRadius: 6, width: "100%", height: "auto", objectFit: "contain", maxHeight: 520,
             display: "block" }}
          />

          <div className="grid md:grid-cols-3 gap-10" style={{ marginTop: 56 }}>
            <div className="md:col-span-2">
              <h3 style={{ color: COLOR.gold, fontSize: 13, letterSpacing: "0.12em" }}>OVERVIEW</h3>
              <p style={{ color: COLOR.muted, fontSize: 16, lineHeight: 1.8, marginTop: 12 }}>{project.overview}</p>

              <h3 style={{ color: COLOR.gold, fontSize: 13, letterSpacing: "0.12em", marginTop: 36 }}>CREATIVE PROCESS</h3>
              <p style={{ color: COLOR.muted, fontSize: 16, lineHeight: 1.8, marginTop: 12 }}>{project.process}</p>

              {project.results && (
                <>
                  <h3 style={{ color: COLOR.gold, fontSize: 13, letterSpacing: "0.12em", marginTop: 36 }}>RESULTS</h3>
                  <p style={{ color: COLOR.muted, fontSize: 16, lineHeight: 1.8, marginTop: 12 }}>{project.results}</p>
                </>
              )}
            </div>
            <div>
              <h3 style={{ color: COLOR.gold, fontSize: 13, letterSpacing: "0.12em" }}>DELIVERABLES</h3>
              <ul style={{ marginTop: 12 }}>
                {project.deliverables.map((d) => (
                  <li
                    key={d}
                    style={{ color: COLOR.off, fontSize: 15, padding: "10px 0", borderTop: "1px solid rgba(245,243,238,0.1)" }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {project.gallery?.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6" style={{ marginTop: 50 }}>
              {project.gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" style={{ width: "100%", borderRadius: 6, objectFit: "cover" }} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
