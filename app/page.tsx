"use client";

import { useState, useEffect, useRef } from "react";

type TeamMemberType = {
  id: string;
  name: string;
  role: string;
  emoji: string;
  color: string;
  photo: string;
  bio: string;
  skills: string[];
  projects: {
    title: string;
    stack: string;
    desc: string;
    tags: string[];
  }[];
};

type TeamMemberProps = {
  member: TeamMemberType;
  active: boolean;
  onClick: () => void;
  setActiveTab: (id: string | null) => void;
  setShowProjects: (show: boolean) => void;
};

function TeamMember({ member, active, onClick, setActiveTab, setShowProjects }: TeamMemberProps) {
  return (
    <div
      onClick={() => { setActiveTab(active ? null : member.id); setShowProjects(false); }}
      style={{
        position: "relative", borderRadius: 28, border: `3px solid ${active ? member.color + "80" : "rgba(255,255,255,0.10)"}`,
        background: active ? `linear-gradient(135deg, ${member.color}18, transparent)` : "rgba(255,255,255,0.025)",
        padding: 44, cursor: "pointer", transition: "all 0.4s ease", overflow: "hidden",
        boxShadow: active ? `0 0 80px ${member.color}22` : "none",
        display: "flex", alignItems: "center", gap: 48
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)"; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
    >
      <div style={{ width: 140, height: 140, borderRadius: 32, overflow: "hidden", border: `3px solid ${active ? member.color : "rgba(255,255,255,0.18)"}`, background: member.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, position: "relative", flexShrink: 0 }}>
        <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 44, fontWeight: 900, color: "white", marginBottom: 12 }}>{member.name}</h3>
        <p style={{ fontSize: 28, fontWeight: 700, color: member.color, marginBottom: 18 }}>{member.role}</p>
        <p style={{ fontSize: 26, color: "rgba(255,255,255,0.38)", lineHeight: 1.6, marginBottom: 18 }}>{member.bio}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 10 }}>
          {member.skills.map(skill => (
            <span key={skill} style={{ fontSize: 22, padding: "10px 24px", borderRadius: 999, border: "2px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.85)", background: "rgba(255,255,255,0.09)", fontWeight: 700 }}>{skill}</span>
          ))}
        </div>
      </div>
      <button onClick={e => { e.stopPropagation(); setActiveTab(member.id); setShowProjects(true); }} style={{ marginLeft: 32, background: member.color, border: "none", borderRadius: 14, color: "white", padding: "16px 32px", fontSize: 22, fontWeight: 800, cursor: "pointer", boxShadow: `0 2px 24px ${member.color}33` }}>Lihat Proyek</button>
    </div>
  );
}

const team = [
  {
    id: "billy",
    name: "Billy Jonathan",
    role: "Cybersecurity & Secure System Engineer",
    emoji: "🛡️",
    color: "#00D4FF",
    photo: "photos/billy.jpeg",
    bio: "Arsitek sistem pertahanan digital yang memastikan setiap bit data aman dari ancaman siber. Membangun infrastruktur tahan banting dengan pendekatan security-first.",
    skills: ["Nest.js", "Next.js", "Cybersecurity", "Cryptography", "DDoS Protection", "API Security"],
    projects: [
      {
        title: "Secure E-Commerce Ecosystem",
        stack: "Nest.js · Next.js · Midtrans · Shopee API",
        desc: "Platform e-commerce enterprise dengan arsitektur security-first. Implementasi tokenisasi Midtrans, webhook kriptografis, dan tracking logistik real-time dengan manajemen otorisasi endpoint yang ketat.",
        tags: ["Enterprise", "Security", "Payment Gateway"],
      },
    ],
  },
  {
    id: "rifki",
    name: "Rifki Firmansyah",
    role: "AI Integration Specialist & Fullstack Developer",
    emoji: "🧠",
    color: "#A855F7",
    photo: "photos/rifki.jpeg",
    bio: "Menyatukan rekayasa perangkat lunak dengan kecerdasan buatan mutakhir. Spesialis arsitektur microservices dan implementasi LLM untuk solusi industri yang berdampak nyata.",
    skills: ["AI/LLM", "Microservices", "Next.js", "TypeScript", "MedGemma", "LLaVA"],
    projects: [
      {
        title: "MedicaVision (MedVis)",
        stack: "MedGemma · LLaVA 3 · Multimodal AI",
        desc: "Aplikasi diagnostik awal penyakit berbasis AI yang memproses data klinis, NLP, dan analisis citra medis (X-Ray/MRI) secara bersamaan. Memberikan second opinion presisi tinggi sesuai standar privasi kesehatan.",
        tags: ["MedTech", "AI Vision", "Multimodal"],
      },
      {
        title: "Smart-Task Manager",
        stack: "Next.js · TypeScript · Microservices",
        desc: "Platform manajemen tugas enterprise dengan arsitektur Microservices. Fault isolation per servis, React Component Library shared, dan TypeScript strict config untuk zero runtime error.",
        tags: ["Enterprise", "Microservices", "Open Source"],
      },
    ],
  },
  {
    id: "aam",
    name: "Aam Setiana",
    role: "Frontend Engineer & Product Analyst",
    emoji: "🎨",
    color: "#F97316",
    photo: "photos/aam.jpeg",
    bio: "Menerjemahkan psikologi pengguna menjadi antarmuka digital yang berjiwa. Menjembatani kebutuhan bisnis dengan estetika pixel-perfect dan UX yang berpusat pada manusia.",
    skills: ["React", "Next.js", "Laravel", "UX Design", "Web3", "Bootstrap 5"],
    projects: [
      {
        title: "KampusHub E-Learning",
        stack: "Laravel · Next.js · Product Analysis",
        desc: "Platform pembelajaran digital kolaboratif. Memetakan user journey dosen-mahasiswa, instant page loads, dan manajemen state kompleks untuk pengalaman belajar bebas hambatan.",
        tags: ["EdTech", "Fullstack", "UX Research"],
      },
      {
        title: "FastCheckout POS",
        stack: "CodeIgniter · Bootstrap 5",
        desc: "Sistem kasir berkecepatan tinggi dengan keyboard-first navigation. UI dirancang meminimalkan kelelahan mata kasir dan mempercepat checkout di jam sibuk.",
        tags: ["Retail", "Accessibility", "Performance"],
      },
      {
        title: "Web3 Wallet Simulator",
        stack: "Web3.js · Ethers.js · Solidity",
        desc: "Aplikasi simulasi blockchain yang menjembatani web tradisional dengan Web3. Visualisasi status transaksi kripto secara real-time.",
        tags: ["Web3", "Blockchain", "DeFi"],
      },
    ],
  },
  {
    id: "desta",
    name: "Desta Erlangga",
    role: "Backend Architect & Database Engineer",
    emoji: "⚙️",
    color: "#22C55E",
    photo: "photos/desta.jpeg",
    bio: "Arsitek di balik layar yang memastikan ribuan request tertangani tanpa downtime. Merancang database relasional efisien untuk logika bisnis paling kompleks.",
    skills: ["PHP", "Laravel", "Node.js", "Express", "SQL Optimization", "Payment Systems"],
    projects: [
      {
        title: "DokzMancing — Platform Booking",
        stack: "Laravel · Node.js · Express · QRIS",
        desc: "Platform booking pemancingan dengan concurrency control real-time, sistem sesi terenkripsi, integrasi QRIS & Virtual Account, dan penerbitan tiket digital otomatis via webhook.",
        tags: ["Marketplace", "Real-time", "Payment"],
      },
    ],
  },
];

const stats = [];

export default function Home() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [showProjects, setShowProjects] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  const activeMember = team.find((m) => m.id === activeTab);

  return (
    <main style={{ minHeight: "100vh", background: "#050508", color: "white", overflowX: "hidden", fontFamily: "'Space Grotesk', sans-serif", fontSize: "24px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050508; }
        ::-webkit-scrollbar-thumb { background: #ffffff20; border-radius: 2px; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes pulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
        @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .marquee { animation: marquee 30s linear infinite; }
        .pulse { animation: pulse 2s ease-in-out infinite; }
        .fade-in { animation: fadeIn 0.4s ease-out forwards; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* Mouse Glow */}
      <div style={{
        position: "fixed", pointerEvents: "none", zIndex: 50,
        width: 384, height: 384, borderRadius: "50%",
        background: "radial-gradient(circle, #A855F7 0%, transparent 70%)",
        opacity: 0.08, filter: "blur(40px)",
        left: mousePos.x - 192, top: mousePos.y - 192,
        transition: "left 0.3s ease, top 0.3s ease"
      }} />

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 32px", borderBottom: "1px solid rgba(255,255,255,0.05)",
        backdropFilter: "blur(20px)", background: "rgba(5,5,8,0.8)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #A855F7, #00D4FF)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 16
          }}>D</div>
          <span style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
            Digdaya X · Team Portfolio
          </span>
        </div>
        <div style={{ display: "flex", gap: 48, justifyContent: "center", alignItems: "center", flex: 1 }}>
          {["#team", "#projects", "#contact"].map((href, i) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 32,
                color: "rgba(255,255,255,0.7)",
                fontWeight: 800,
                letterSpacing: "0.04em",
                transition: "color 0.2s",
                textAlign: "center",
                padding: "8px 24px",
                borderRadius: 12,
                display: "inline-block"
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "white")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            >
              {["Tim", "Proyek", "Kontak"][i]}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>Hackathon 2026</div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 24px 60px", position: "relative", overflow: "hidden" }}>
        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
        {/* Orbs */}
        <div style={{ position: "absolute", top: "20%", left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #A855F7, transparent)", opacity: 0.2, filter: "blur(60px)", transform: `translateY(${scrollY * 0.15}px)` }} />
        <div style={{ position: "absolute", bottom: "30%", right: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, #00D4FF, transparent)", opacity: 0.12, filter: "blur(80px)", transform: `translateY(${-scrollY * 0.08}px)` }} />
        <div style={{ position: "absolute", top: "50%", right: "30%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, #F97316, transparent)", opacity: 0.18, filter: "blur(50px)" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 900 }}>
          <div className="pulse" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 32, backdropFilter: "blur(10px)" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
            Digdaya X National Hackathon 2026
          </div>

          <h1 style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            <span style={{ display: "block", color: "white" }}>Kami Bangun</span>
            <span style={{ display: "block", background: "linear-gradient(135deg, #A855F7 0%, #00D4FF 50%, #F97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Masa Depan.
            </span>
          </h1>

          <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(255,255,255,0.4)", maxWidth: 600, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Tim pengembang lintas disiplin yang menyatukan <strong style={{ color: "rgba(255,255,255,0.7)" }}>Cybersecurity</strong>, <strong style={{ color: "rgba(255,255,255,0.7)" }}>AI Integration</strong>, <strong style={{ color: "rgba(255,255,255,0.7)" }}>Frontend Engineering</strong>, dan <strong style={{ color: "rgba(255,255,255,0.7)" }}>Backend Architecture</strong> dalam satu ekosistem digital.
          </p>

          {/* Stats as list - dihapus sesuai permintaan */}

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#team" style={{ padding: "14px 28px", borderRadius: 999, fontSize: 14, fontWeight: 700, background: "linear-gradient(135deg, #7C3AED, #0891B2)", color: "white", transition: "opacity 0.2s, transform 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}>
              Kenali Tim →
            </a>
            <a href="#projects" style={{ padding: "14px 28px", borderRadius: 999, fontSize: 14, fontWeight: 600, border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.65)", transition: "all 0.2s", display: "inline-block" }}
              onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)"; }}>
              Lihat Proyek
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.2)" }}>
          <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div className="pulse" style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
        </div>
      </section>

      {/* Team as list */}
      <section id="team" style={{ padding: "96px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>// Team Members</div>
          <h2 style={{ fontSize: "clamp(3.5rem, 7vw, 5.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            Empat Pikiran,<br /><span style={{ color: "rgba(255,255,255,0.35)" }}>Satu Visi.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 24 }}>
          {team.map((member) => (
            <TeamMember
              key={member.id}
              member={member}
              active={activeTab === member.id}
              onClick={() => { setActiveTab(activeTab === member.id ? null : member.id); setShowProjects(false); }}
              setActiveTab={setActiveTab}
              setShowProjects={setShowProjects}
            />
          ))}
        </div>

        {/* Popup Projects */}
        {activeMember && showProjects && (
          <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(5,5,8,0.85)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="fade-in" style={{ borderRadius: 28, border: `1px solid ${activeMember.color}28`, background: `linear-gradient(135deg, ${activeMember.color}06, #050508 90%)`, padding: 36, boxShadow: `0 0 80px ${activeMember.color}22`, minWidth: 340, maxWidth: 700, width: "90vw", maxHeight: "80vh", overflowY: "auto", position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 28 }}>{activeMember.emoji}</span>
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 900, color: "white" }}>{activeMember.name}</h3>
                  <p style={{ fontSize: 13, color: activeMember.color }}>{activeMember.role}</p>
                </div>
                <button onClick={() => setShowProjects(false)} style={{ marginLeft: "auto", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, color: "rgba(255,255,255,0.4)", padding: "6px 14px", fontSize: 12, cursor: "pointer" }}>Tutup ✕</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                {activeMember.projects.map((proj) => (
                  <div key={proj.title} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", padding: 24, transition: "border-color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                      {proj.tags.map(tag => <span key={tag} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 999, background: activeMember.color + "1A", color: activeMember.color, fontWeight: 600 }}>{tag}</span>)}
                    </div>
                    <h4 style={{ fontSize: 18, fontWeight: 900, color: "white", marginBottom: 8 }}>{proj.title}</h4>
                    <p style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.28)", marginBottom: 12 }}>{proj.stack}</p>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{proj.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Projects section dihilangkan, tampil sebagai popup pada klik anggota tim */}

      {/* Marquee */}
      <div style={{ padding: "48px 0", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div className="marquee" style={{ display: "flex", gap: 0, whiteSpace: "nowrap" }}>
          {[...["Next.js", "Nest.js", "Laravel", "Node.js", "TypeScript", "MedGemma", "LLaVA", "Web3.js", "Solidity", "Bootstrap 5", "Express", "PHP", "SQL", "Midtrans", "QRIS", "Microservices", "REST API", "Docker", "Vercel", "GitHub"], ...["Next.js", "Nest.js", "Laravel", "Node.js", "TypeScript", "MedGemma", "LLaVA", "Web3.js", "Solidity", "Bootstrap 5", "Express", "PHP", "SQL", "Midtrans", "QRIS", "Microservices", "REST API", "Docker", "Vercel", "GitHub"]].map((tech, i) => (
            <span key={i} style={{ fontSize: 13, color: "rgba(255,255,255,0.18)", fontFamily: "monospace", padding: "0 24px", borderLeft: "1px solid rgba(255,255,255,0.08)", flexShrink: 0 }}>{tech}</span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section id="contact" style={{ padding: "128px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.025, pointerEvents: "none" }}>
          <span style={{ fontSize: "30rem", fontWeight: 900, lineHeight: 1, color: "white", userSelect: "none" }}>X</span>
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.15em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>// Contact</div>
          <h2 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, color: "white", marginBottom: 20 }}>Siap Berkolaborasi?</h2>
          <p style={{ color: "rgba(255,255,255,0.38)", marginBottom: 48, fontSize: 17, lineHeight: 1.7 }}>
            Kami percaya teknologi terbaik lahir dari kolaborasi. Mari diskusikan bagaimana kami bisa memberikan dampak nyata bersama.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 48 }}>
            {team.map(m => (
              <div key={m.id} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", padding: "20px 12px", textAlign: "center", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = m.color + "60")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                <div style={{ width: 48, height: 48, borderRadius: 14, margin: "0 auto 12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: m.color + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>
                  <img src={m.photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "white" }}>{m.name.split(" ")[0]}</div>
                <div style={{ color: m.color, fontSize: 12, marginTop: 4 }}>●</div>
              </div>
            ))}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 24px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.55)", fontSize: 13, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.13)"; e.currentTarget.style.color = "rgba(255,255,255,0.55)"; }}>
            <span>📧</span> Hubungi Tim Kami
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>© 2026 Tim Digdaya X · Universitas Kuningan</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} className="pulse" />
          Built with Next.js · Deployed on Vercel
        </div>
      </footer>
    </main>
  );
}
