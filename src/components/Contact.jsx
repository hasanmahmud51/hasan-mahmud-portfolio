import React, { useState } from "react";
import { ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";
import { COLOR } from "../lib/theme";
import Reveal from "./common/Reveal";
import EyebrowLabel from "./common/EyebrowLabel";
import Magnetic from "./common/Magnetic";
import { SOCIALS } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = async (event) => {
  event.preventDefault();

  const formData = new FormData();

  formData.append("access_key", "1d5e1e86-dda4-413e-914b-564f5bdfa4b4");
  formData.append("name", form.name);
  formData.append("email", form.email);
  formData.append("project_type", form.type);
  formData.append("message", form.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (data.success) {
    setSent(true);

    setForm({
      name: "",
      email: "",
      type: "",
      message: "",
    });
  } else {
    alert("Something went wrong. Please try again.");
  }
};

  const socialItems = [
    { label: "Behance", href: SOCIALS.behance, icon: null, text: "Be" },
    { label: "LinkedIn", href: SOCIALS.linkedin, icon: Linkedin },
    { label: "Instagram", href: SOCIALS.instagram, icon: Instagram },
    { label: "Facebook", href: SOCIALS.facebook, icon: Facebook },
  ];

  return (
    <section id="contact" style={{ padding: "140px 0" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
              <EyebrowLabel>Contact</EyebrowLabel>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="gd-heading" style={{ color: COLOR.off, fontSize: "clamp(2rem,4.6vw,3.8rem)", marginTop: 22, lineHeight: 1.08 }}>
                Have a project in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p style={{ color: COLOR.muted, fontSize: 17, marginTop: 20, maxWidth: 420, lineHeight: 1.7 }}>
                Let&rsquo;s turn your idea into something remarkable.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4" style={{ marginTop: 44 }}>
                {socialItems.map((s) => (
                  <Magnetic key={s.label}>
                    <a data-cursor-lg href={s.href} target="_blank" rel="noopener noreferrer" className="gd-social-btn" aria-label={s.label}>
                      {s.icon ? <s.icon size={17} strokeWidth={1.5} /> : <span style={{ fontSize: 13, fontWeight: 600 }}>{s.text}</span>}
                      {s.label}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            {sent ? (
              <div style={{ border: `1px solid ${COLOR.gold}`, borderRadius: 4, padding: 40 }}>
                <p className="gd-heading" style={{ color: COLOR.off, fontSize: 22 }}>
                  Message sent.
                </p>
                <p style={{ color: COLOR.muted, marginTop: 10, fontSize: 15 }}>
                  Thanks for reaching out — I&rsquo;ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="gd-field">
                    <span>Name</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" />
                  </label>
                  <label className="gd-field">
                    <span>Email</span>
                    <input required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" />
                  </label>
                </div>
                <label className="gd-field">
                  <span>Project Type</span>
                  <input
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    type="text"
                    placeholder="Branding, Social Media, Print..."
                  />
                </label>
                <label className="gd-field">
                  <span>Message</span>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                </label>
                <Magnetic strength={10} style={{ alignSelf: "flex-start" }}>
                  <button data-cursor-lg type="submit" className="gd-btn-solid">
                    Start a Conversation <ArrowUpRight size={16} strokeWidth={1.75} />
                  </button>
                </Magnetic>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
