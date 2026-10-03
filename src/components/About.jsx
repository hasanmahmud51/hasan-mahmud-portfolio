import React from "react";
import { COLOR } from "../lib/theme";
import { useReveal, useCounter } from "../hooks";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import { STATS } from "../data/portfolioData";

function StatItem({ stat }) {
  const [ref, inView] = useReveal(0.4);
  const value = useCounter(stat.value, inView);
  return (
    <div ref={ref}>
      <div className="gd-heading" style={{ color: COLOR.gold, fontSize: "clamp(2.2rem,4vw,3.2rem)" }}>
        {stat.infinite ? "\u221E" : `${value}${stat.suffix}`}
      </div>
      <div style={{ color: COLOR.muted, fontSize: 13, marginTop: 6, letterSpacing: "0.04em" }}>{stat.label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative" style={{ background: COLOR.bg2, padding: "140px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal>
          <EyebrowLabel>About</EyebrowLabel>
        </Reveal>
        <Reveal delay={0.08}>
          <h2
            className="gd-heading"
            style={{ color: COLOR.off, fontSize: "clamp(2rem,4.2vw,3.6rem)", lineHeight: 1.08, marginTop: 22, maxWidth: 780 }}
          >
            Designing with purpose. Creating with character.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-14" style={{ marginTop: 56 }}>
          <Reveal delay={0.14}>
            <p className="gd-body" style={{ color: COLOR.muted, fontSize: 17, lineHeight: 1.8 }}>
              I&rsquo;m a graphic designer working across branding, social media design, and marketing materials —
              building visual systems that hold up from a business card to a billboard. My work spans logo design,
              vector illustration, and full promotional campaigns, always grounded in one question: does this
              communicate clearly, and does it look like nothing else on the shelf.
            </p>
            <p className="gd-body" style={{ color: COLOR.muted, fontSize: 17, lineHeight: 1.8, marginTop: 20 }}>
              Every project starts with the same discipline — understand the audience, define the visual language,
              then execute it with precision across every touchpoint it needs to live on.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {STATS.map((s) => (
                <StatItem key={s.label} stat={s} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
