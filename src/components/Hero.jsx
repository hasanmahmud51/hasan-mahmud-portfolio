import React from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { COLOR } from "../lib/theme";
import { usePrefersReducedMotion } from "../hooks";
import Magnetic from "./common/Magnetic";

function HeroVisual() {
  const go = (href) => {
    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const reduced = usePrefersReducedMotion();

  return (
    <>
      <style>{`
        @keyframes cornerGlowMove {
          0%, 100% {
            transform: translate(18%, -12%) scale(0.95);
            opacity: 0.55;
          }

          50% {
            transform: translate(0%, 4%) scale(1.08);
            opacity: 0.82;
          }
        }

        @keyframes lightBeamMove {
          0%, 100% {
            transform: rotate(25deg) translateX(22%);
            opacity: 0.10;
          }

          50% {
            transform: rotate(25deg) translateX(-8%);
            opacity: 0.30;
          }
        }

        @keyframes profileShine {
          0%, 58% {
            transform: translateX(-150%) rotate(18deg);
            opacity: 0;
          }

          68% {
            opacity: 0.10;
          }

          78% {
            opacity: 0.32;
          }

          90%, 100% {
            transform: translateX(150%) rotate(18deg);
            opacity: 0;
          }
        }
          @keyframes rimLightRotate {
         from {
         transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
        }

        @media (max-width: 900px) {
          .gd-profile-orbit {
            width: min(360px, 42vw) !important;
          }
        }

        @media (max-width: 700px) {
          .gd-profile-orbit {
            width: min(330px, 70vw) !important;
            right: 50% !important;
            transform: translate(50%, -50%) !important;
          }

          .gd-corner-light {
            right: -35% !important;
          }
        }
      `}</style>

      <div
        className="gd-hero-visual"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
          animationPlayState: reduced ? "paused" : "running",
        }}
      >
        {/* VISIBLE GOLDEN GLOW FROM TOP-RIGHT CORNER */}
{/* ============ ALL GLOW EFFECTS - UNIFIED ============ */}
<div
  style={{
    position: "absolute",
    inset: 0,
    overflow: "visible",
    pointerEvents: "none",
    zIndex: 1,
    filter: "blur(3px)",
  }}
>
  <div
    style={{
      position: "absolute",
      top: "-15%",
      right: "-27%",
      width: "70%",
      height: "70%",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(253, 199, 74, 0.32) 0%, rgba(241, 184, 50, 0.24) 12%, rgba(220,175,65,0.16) 25%, rgba(212,170,60,0.10) 38%, rgba(212,170,60,0.05) 52%, rgba(212,170,60,0.02) 65%, rgba(212,170,60,0) 78%)",
      filter: "blur(40px)",
      mixBlendMode: "screen",
    }}
  />

  <div
    style={{
      position: "absolute",
      top: "5%",
      right: "-5%",
      width: "62%",
      height: "25%",
      background:
        "linear-gradient(105deg, rgba(212,170,60,0) 0%, rgba(212,170,60,0.03) 20%, rgba(230,190,90,0.08) 45%, rgba(255,220,125,0.14) 70%, rgba(255,225,140,0.20) 100%)",
      filter: "blur(30px)",
      transform: "rotate(25deg)",
      transformOrigin: "right center",
      mixBlendMode: "screen",
      animation: reduced ? "none" : "lightBeamMove 5s ease-in-out infinite",
    }}
  />

  <div
    style={{
      position: "absolute",
      top: "-35%",
      left: "-30%",
      width: "24%",
      height: "170%",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,228,148,0.30) 50%, rgba(255,255,255,0) 100%)",
      filter: "blur(30px)",
      transform: "rotate(18deg)",
      animation: reduced ? "none" : "profileShine 5s ease-in-out infinite",
    }}
  />

  <div
    style={{
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background:
        "radial-gradient(circle at 78% 20%, rgba(255,225,145,0.14) 0%, rgba(255,225,145,0.06) 20%, rgba(255,225,145,0.02) 32%, transparent 45%)",
      filter: "blur(20px)",
    }}
  />
</div>
       {/* PROFILE CIRCLE ON RIGHT SIDE */}

{/* OUTER WRAPPER */}
<div
  style={{
    position: "absolute",

    right: "3%",
    top: "100%",

    width: "min(430px, 38vw)",
    aspectRatio: "1 / 1",

    transform: "translateY(-65%)",

    overflow: "visible",

    zIndex: 10,
  }}
>

  {/* INNER PROFILE CIRCLE */}
  <div
    className="gd-profile-orbit"
    style={{
      position: "relative",

      width: "100%",
      height: "100%",

      borderRadius: "50%",


      /* ONLY PROFILE IMAGE IS CLIPPED */
      overflow: "hidden",
      boxSizing: "border-box",
      background: "#0b0b0b",

      border: "2px solid rgba(212,170,60,0.9)",

      boxShadow:
        "0 0 30px rgba(212,170,60,0.25), 0 0 70px rgba(212,170,60,0.10)",

      zIndex: 1,
    }}
  >

    {/* PROFILE IMAGE */}
    <img
      src="/profile.png"
      alt="Hasan Mahmud"
      style={{
        width: "100%",
        height: "100%",

        objectFit: "cover",
        objectPosition: "center top",

        display: "block",

        filter: "contrast(1.03) saturate(0.98)",

        position: "relative",
        zIndex: 1,
      }}
    />

  </div>

  

{/* RIM LIGHT ON BORDER - rotating shine */}
<div
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    padding: "2px",
    background:
      "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255,240,200,0.9) 78%, rgba(255,250,235,1) 82%, rgba(255,240,200,0.9) 86%, transparent 94%, transparent 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    zIndex: 3,
    animation: reduced ? "none" : "rimLightRotate 4s linear infinite",
  }}
/>

{/* GOLDEN RIM LIGHT - soft light hitting top-right */}
<div
  style={{
    position: "absolute",
    inset: 0,
    borderRadius: "50%",
    padding: "2px",

    background: `
      conic-gradient(
        from -35deg,
        transparent 0deg,
        transparent 25deg,
        rgba(255, 174, 45, 0.08) 32deg,
        rgba(255, 193, 70, 0.35) 42deg,
        rgba(255, 220, 125, 0.95) 52deg,
        rgba(255, 190, 55, 0.55) 62deg,
        rgba(255, 160, 30, 0.12) 75deg,
        transparent 88deg,
        transparent 360deg
      )
    `,

    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",

    maskComposite: "exclude",

    pointerEvents: "none",
    zIndex: 3,

    filter: "blur(0.6px)",
    opacity: 0.95,

    boxShadow:
      "0 0 8px rgba(255, 190, 60, 0.35), 0 0 18px rgba(255, 170, 35, 0.18)",
  }}
/>



  {/* EXPERIENCE BADGE */}
  <div
    style={{
      position: "absolute",

      /* BADGE STAYS INSIDE THE CIRCLE */
      right: "18px",
      bottom: "18px",

      zIndex: 100,

      display: "flex",
      alignItems: "center",
      gap: "8px",

      padding: "7px 10px",

      background: "rgba(15, 15, 15, 0.95)",

      border: "1px solid rgba(212, 167, 70, 0.5)",

      borderRadius: "12px",

      boxShadow: "0 8px 25px rgba(0,0,0,0.4)",

      whiteSpace: "nowrap",

      boxSizing: "border-box",
    }}
  >

    {/* ICON */}
    <div
      style={{
        width: "32px",
        height: "32px",
        minWidth: "32px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "1px solid #d6a93a",
        borderRadius: "50%",
      }}
    >
      <span
        style={{
          color: "#d6a93a",
          fontSize: "18px",
        }}
      >
        ✦
      </span>
    </div>


    {/* TEXT */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
      }}
    >
      <strong
        style={{
          color: "#d6a93a",
          fontSize: "15px",
          fontWeight: 600,
          whiteSpace: "nowrap",
        }}
      >
        3+ Years
      </strong>

      <span
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "11px",
          whiteSpace: "nowrap",
        }}
      >
        Experience
      </span>
    </div>
  </div>
</div>
</div>
</>
);
}
      

export default function Hero() {
  const go = (href) => {
    const el = document.querySelector(href);
    if (el) {el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};

  return (
    <section id="home" className="relative overflow-hidden flex items-center" style={{ minHeight: "820px" }}>
      <HeroVisual />
      {/* TOP-RIGHT GOLDEN GLOW */}
<div
  style={{
    position: "absolute",
    top: "-180px",
    right: "-200px",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,200,70,0.55) 0%, rgba(212,170,60,0.28) 25%, rgba(212,170,60,0.10) 50%, transparent 72%)",
    filter: "blur(35px)",
    zIndex: 0,
    pointerEvents: "none",
  }}
/>
      <div
  className="max-w-7xl mx-auto w-full px-6 md:px-10"
  style={{
    paddingTop: 120,
    paddingBottom: 80,
    position: "relative",
    zIndex: 2,
  }}
>
        <div className="gd-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8"
            style={{
              border: `1px solid rgba(255, 202, 40, 0.6)`,
              borderRadius: 999,
              fontSize: 11,
              letterSpacing: "0.15em",
              color: "#ffca28",
            }}
          >
            <span className="gd-pulse-dot" />
            AVAILABLE FOR CREATIVE PROJECTS
          </span>
        </div>

           <div className="hero-greeting">
          <span className="greeting-line"></span>
          <span>HELLO, I'M</span>
         </div>
         
        <h1
          className="gd-heading gd-fade-in-up"
          style={{
            color: COLOR.off,
            fontSize: "clamp(2.4rem, 7vw, 6rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            animationDelay: "0.22s",
          }}
        >
          HASAN MAHMUD
        </h1>

        <p
          className="gd-fade-in-up"
          style={{
            color: "#ffca28",
            fontSize: "clamp(1.1rem, 2.4vw, 1.6rem)",
            marginTop: 18,
            fontWeight: 400,
            letterSpacing: "0.01em",
            animationDelay: "0.34s",
          }}
        >
          Graphic Designer & Visual Creative
        </p>

        <p
          className="gd-fade-in-up gd-body"
          style={{
            color: COLOR.muted,
            fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
            maxWidth: 560,
            marginTop: 26,
            lineHeight: 1.7,
            animationDelay: "0.46s",
          }}
        >
          Crafting bold visual identities, digital experiences, and compelling designs that turn ideas into
          memorable brands.
        </p>


       <div className="gd-fade-in-up flex flex-wrap items-center gap-4" style={{ marginTop: 42, animationDelay: "0.58s" }}>
          <Magnetic>
            <button data-cursor-lg onClick={() => go("#works")} className="gd-btn-solid">
              View My Work
            </button>
          </Magnetic>
          <Magnetic>
            <button
              data-cursor-lg
              onClick={() => go("#contact")}
              className="gd-pill-btn"
              style={{ border: `1px solid rgba(245,243,238,0.3)`, color: COLOR.off }}
            >
              Let&rsquo;s Work Together <ArrowUpRight size={15} strokeWidth={1.75} />
            </button>
          </Magnetic>
          {/* DOWNLOAD CV BUTTON */}
<Magnetic>
  <a
    href="/resume.pdf"
    download="Hasan-Mahmud-CV.pdf"
    data-cursor-lg
    className="gd-pill-btn"
    style={{
      border: "1px solid rgba(245, 243, 238, 0.3)",
      color: COLOR.off,
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      textDecoration: "none",
    }}
  >
    Download CV
    <ArrowUpRight
      size={15}
      strokeWidth={1.75}
      style={{ transform: "rotate(90deg)" }}
    />
  </a>
</Magnetic>
      </div>

      <div style={{ marginTop: 28 }}>
        <p style={{ color: COLOR.off, marginBottom: 8, fontSize: 14 }}>Follow Me</p>
        <div className="social-links">
  <a
    href="https://facebook.com/hasanmahmud.804"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <i className="fa-brands fa-facebook-f"></i>
  </a>

  <a
    href="https://instagram.com/hasanmahmud.804"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a
    href="https://linkedin.com/in/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <i className="fa-brands fa-linkedin-in"></i>
  </a>

  <a
    href="https://behance.net/hasanmahmud268"
    target="_blank"
    rel="noopener noreferrer"
    className="social-btn"
  >
    <i className="fa-brands fa-behance"></i>
  </a>
</div>
 </div>
</div>

      <button onClick={() => go("#about")} aria-label="Scroll to About section" className="gd-scroll-indicator" style={{ color: COLOR.muted }}>
        <span style={{ fontSize: 10, letterSpacing: "0.3em" }}>SCROLL</span>
        <ChevronDown size={16} strokeWidth={1.5} className="gd-bounce" />
      </button>
    </section>
  );
}
