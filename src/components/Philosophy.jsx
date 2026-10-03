import React from "react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";

export default function Philosophy() {
  return (
    <section style={{ padding: "160px 0" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2rem,6vw,4.2rem)", lineHeight: 1.15 }}>
            Good design gets attention.
            <br />
            <span style={{ color: COLOR.gold }}>Great design gets remembered.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
