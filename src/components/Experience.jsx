import React from "react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import { EXPERIENCE } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "140px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <EyebrowLabel>Experience</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2rem,4.2vw,3.6rem)", marginTop: 22 }}>
            Where I&rsquo;ve Worked
          </h2>
        </Reveal>

        <div style={{ marginTop: 56, maxWidth: 720 }}>
          {EXPERIENCE.map((e, i) => (
            <Reveal key={e.org} delay={i * 0.08}>
              <div className="gd-exp-row">
                <div className="gd-exp-dot-col">
                  <span className="gd-exp-dot" />
                  {i !== EXPERIENCE.length - 1 && <span className="gd-exp-line" />}
                </div>
                <div style={{ paddingBottom: 44 }}>
                  <h3 className="gd-heading" style={{ color: COLOR.off, fontSize: 22 }}>
                    {e.role}
                  </h3>
                  <p style={{ color: COLOR.gold, fontSize: 14, marginTop: 6 }}>{e.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
