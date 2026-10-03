import React from "react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import { SKILLS } from "../data/portfolioData";

export default function Skills() {
  return (
    <section style={{ background: COLOR.bg2, padding: "120px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <EyebrowLabel>Skills</EyebrowLabel>
        </Reveal>
        <div className="flex flex-wrap" style={{ marginTop: 30, columnGap: 18 }}>
          {SKILLS.map((s, i) => (
            <Reveal key={s} delay={i * 0.03} className="gd-skill-chip-wrap">
              <span className="gd-skill-chip">{s}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
