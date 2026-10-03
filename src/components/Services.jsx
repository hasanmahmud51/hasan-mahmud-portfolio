import React from "react";
import { ArrowUpRight } from "lucide-react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import { SERVICES } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services" style={{ background: COLOR.bg2, padding: "140px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <EyebrowLabel>Services</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2rem,4.2vw,3.6rem)", marginTop: 22 }}>
            What I Do
          </h2>
        </Reveal>

        <div style={{ marginTop: 50 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="gd-service-row">
                <span className="gd-heading" style={{ color: COLOR.gold, fontSize: 15, minWidth: 44 }}>
                  {s.n}
                </span>
                <div className="flex-1">
                  <h3 className="gd-heading gd-service-title" style={{ color: COLOR.off, fontSize: "clamp(1.3rem,2.6vw,2rem)" }}>
                    {s.title}
                  </h3>
                  <p style={{ color: COLOR.muted, fontSize: 15, marginTop: 8, maxWidth: 480 }}>{s.desc}</p>
                </div>
                <ArrowUpRight size={22} strokeWidth={1.25} className="gd-service-arrow" style={{ color: COLOR.gold }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
