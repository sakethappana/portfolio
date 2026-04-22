import { useEffect, useState } from "react";
import profile from "../assets/profile.png";

const ROLES = [
  "Deep Learning Researcher",
  "GNN Architect",
  "Computer Vision Engineer",
  "Medical AI Builder",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && charIdx <= target.length) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, 60);
    } 
    else if (!deleting && charIdx > target.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 1800);
    } 
    else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setCharIdx((c) => c - 1);
        setDisplayed(target.slice(0, charIdx - 1));
      }, 35);
    } 
    else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % ROLES.length);
      }, 120); // async to avoid React warning
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="fade-in">
            
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-green-400 opacity-60" />
              <span className="section-label">
                AI Researcher · Mahindra University
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-white">Appana Saketh</span>
              <br />
              <span className="gradient-text">Krishna Rao</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-5 h-8 flex items-center gap-2">
              <span className="font-mono text-base text-cyan-400">
                &gt;&nbsp;
              </span>
              <span className="font-mono text-base text-green-300">
                {displayed}
              </span>
              <span className="blink font-mono text-green-400 text-base">
                _
              </span>
            </div>

            {/* Bio */}
            <p className="mt-5 text-gray-400 max-w-xl leading-relaxed text-sm md:text-base">
              Building state-of-the-art models that fuse Graph Neural Networks,
              Transformers, and self-supervised learning — pushing the frontier of
              medical imaging intelligence.
            </p>

            {/* Stats */}
            <div className="mt-8 flex gap-6">
              {[
                { label: "Papers Published", value: "3+" },
                { label: "CGPA", value: "9.08" },
                { label: "Scholarships", value: "2×" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-2xl font-bold glow-green">
                    {s.value}
                  </div>
                  <div className="font-mono text-xs text-gray-500 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="https://github.com/sakethappana"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-sm"
              >
                ↗ GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/appana-saketh-krishna-rao-1760322a4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bg2ZGDz%2BTQhi5qVaksu%2BcYg%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end fade-in fade-in-delay-2">
            <div className="relative float">

              {/* Orbit rings */}
              <div
                className="absolute"
                style={{
                  inset: "-24px",
                  border: "1px solid rgba(0,255,136,0.1)",
                  borderRadius: "50%",
                  animation: "spin 20s linear infinite",
                }}
              />
              <div
                className="absolute"
                style={{
                  inset: "-48px",
                  border: "1px dashed rgba(0,229,255,0.07)",
                  borderRadius: "50%",
                  animation: "spin 35s linear infinite reverse",
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,255,136,0.2) 0%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.2)",
                }}
              />

              {/* Image */}
              <div
                className="relative scan-line"
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(0,255,136,0.3)",
                  padding: "4px",
                  background:
                    "linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,229,255,0.05))",
                  boxShadow:
                    "0 0 40px rgba(0,255,136,0.2), 0 0 80px rgba(0,255,136,0.1)",
                }}
              >
                <img
                  src={profile}
                  alt="Appana Saketh Krishna Rao"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    display: "block",
                  }}
                />

                {/* Corners */}
                {[
                  { top: 0, left: 0, borderTop: "2px solid", borderLeft: "2px solid", borderTopLeftRadius: "8px" },
                  { top: 0, right: 0, borderTop: "2px solid", borderRight: "2px solid", borderTopRightRadius: "8px" },
                  { bottom: 0, left: 0, borderBottom: "2px solid", borderLeft: "2px solid", borderBottomLeftRadius: "8px" },
                  { bottom: 0, right: 0, borderBottom: "2px solid", borderRight: "2px solid", borderBottomRightRadius: "8px" },
                ].map((style, i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      borderColor: "var(--green)",
                      ...style,
                    }}
                  />
                ))}
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-4 -right-4 font-mono text-xs px-3 py-1.5 rounded-lg"
                style={{
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.3)",
                  color: "var(--green)",
                  backdropFilter: "blur(10px)",
                }}
              >
                IEEE CBMS ✦ ICTIIT
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;