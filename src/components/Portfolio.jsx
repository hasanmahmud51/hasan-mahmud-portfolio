import React, { useState } from "react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import ProjectCard from "./ProjectCard";
import { PROJECTS, FILTERS } from "../data/portfolioData";

export default function Portfolio({ onOpen }) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="works" style={{ padding: "140px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <EyebrowLabel>Portfolio</EyebrowLabel>
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6" style={{ marginTop: 22 }}>
          <Reveal delay={0.06}>
            <div>
              <h2 className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2rem,4.2vw,3.6rem)" }}>
                Selected Works
              </h2>
              <p style={{ color: COLOR.muted, fontSize: 16, marginTop: 12, maxWidth: 480 }}>
                A collection of visual identities, campaigns, and creative work.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="flex flex-wrap gap-3" style={{ marginTop: 44 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                data-cursor-lg
                onClick={() => setFilter(f)}
                className="gd-filter-btn"
                style={{
                  border: `1px solid ${filter === f ? COLOR.gold : "rgba(245,243,238,0.18)"}`,
                  color: filter === f ? COLOR.gold : COLOR.muted,
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16" style={{ marginTop: 50 }}>
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
