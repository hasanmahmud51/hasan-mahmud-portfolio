import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { COLOR } from "../lib/theme";
import { useScrolled } from "../hooks";
import Magnetic from "./common/Magnetic";
import { NAV_LINKS } from "../data/portfolioData";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: scrolled ? "rgba(11,11,13,0.72)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(245,243,238,0.08)" : "1px solid transparent",
        transition: "background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease",
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10" style={{ height: 76 }}>
        <button
          onClick={() => go("#home")}
          className="gd-heading"
          style={{
            color: COLOR.off,
            fontSize: 22,
            letterSpacing: "0.02em",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          HM<span style={{ color: COLOR.gold }}>.</span>
        </button>

        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                data-cursor-lg
                onClick={() => go(l.href)}
                className="gd-nav-link"
                style={{ color: COLOR.off, fontSize: 14, background: "none", border: "none", cursor: "pointer" }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <Magnetic className="hidden md:inline-block">
          <button
            data-cursor-lg
            onClick={() => go("#contact")}
            className="gd-pill-btn"
            style={{ border: `1px solid ${COLOR.gold}`, color: COLOR.gold }}
          >
            Let&rsquo;s Talk <ArrowUpRight size={15} strokeWidth={1.75} />
          </button>
        </Magnetic>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
          style={{ color: COLOR.off, background: "none", border: "none" }}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        className="md:hidden"
        style={{
          maxHeight: open ? 420 : 0,
          overflow: "hidden",
          transition: "max-height 0.5s cubic-bezier(.19,1,.22,1)",
          background: COLOR.bg2,
          borderBottom: open ? "1px solid rgba(245,243,238,0.08)" : "none",
        }}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => go(l.href)}
                style={{
                  color: COLOR.off,
                  background: "none",
                  border: "none",
                  padding: "12px 0",
                  fontSize: 17,
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => go("#contact")}
              className="gd-pill-btn"
              style={{ border: `1px solid ${COLOR.gold}`, color: COLOR.gold }}
            >
              Let&rsquo;s Talk <ArrowUpRight size={15} strokeWidth={1.75} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
