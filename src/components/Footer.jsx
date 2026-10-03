import React from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { COLOR } from "../lib/theme";
import { SOCIALS } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(245,243,238,0.08)", padding: "48px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div style={{ textAlign: "center" }}>
          <span className="gd-heading" style={{ color: COLOR.off, fontSize: 20 }}>
            HM<span style={{ color: COLOR.gold }}>.</span>
          </span>
          <p style={{ color: COLOR.muted, fontSize: 13, marginTop: 4 }}>Graphic Designer &amp; Visual Creative</p>
        </div>

        <div className="flex items-center gap-5">
          <a href={SOCIALS.behance} target="_blank" rel="noopener noreferrer" aria-label="Behance" style={{ color: COLOR.muted, fontSize: 13, fontWeight: 600 }}>
            Be
          </a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: COLOR.muted }}>
            <Linkedin size={17} strokeWidth={1.5} />
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: COLOR.muted }}>
            <Instagram size={17} strokeWidth={1.5} />
          </a>
          <a href={SOCIALS.email} aria-label="Email" style={{ color: COLOR.muted }}>
            <Mail size={17} strokeWidth={1.5} />
          </a>
        </div>

        <p style={{ color: COLOR.muted, fontSize: 12 }}>&copy; 2026 Hasan Mahmud. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
