const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Institute Merit Scholarship",
    meta: "2024–2025",
    value: "₹1,00,000",
    desc: "Awarded for outstanding academic excellence",
    color: "var(--green)",
  },
  {
    icon: "🏆",
    title: "Institute Merit Scholarship",
    meta: "2023–2024",
    value: "₹1,00,000",
    desc: "Awarded for outstanding academic excellence",
    color: "var(--green)",
  },
  {
    icon: "📄",
    title: "IEEE CBMS Publication",
    meta: "CORE Rank B Conference",
    value: "Accepted",
    desc: "Self-Evolving Graph Neural Fields · Tooth Root Detection",
    color: "var(--cyan)",
  },
  {
    icon: "📄",
    title: "ICTIIT 2025 Publication",
    meta: "IIIT Kottayam",
    value: "Accepted",
    desc: "Self-Supervised Deep Image Prior for Noise Removal",
    color: "var(--cyan)",
  },
  {
    icon: "🎓",
    title: "Computer Vision Certification",
    meta: "CampusX",
    value: "Certified",
    desc: "Advanced Computer Vision with Deep Learning",
    color: "#a855f7",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">05 · Achievements</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Recognition &{" "}
            <span className="gradient-text">Milestones</span>
          </h2>
        </div>

        {/* Top stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Papers Accepted", val: "3+" },
            { label: "Scholarships", val: "₹2L+" },
            { label: "Conferences", val: "2" },
            { label: "Certifications", val: "1" },
          ].map(({ label, val }) => (
            <div key={label} className="metric-card">
              <div className="font-display text-2xl md:text-3xl font-black glow-green">{val}</div>
              <div className="font-mono text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Achievement list */}
        <div className="space-y-4">
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              className="glass-card p-5 flex items-center gap-5"
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: `${a.color}10`,
                  border: `1px solid ${a.color}25`,
                }}
              >
                {a.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-white text-sm">{a.title}</h3>
                  <span className="font-mono text-xs text-gray-600">· {a.meta}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{a.desc}</p>
              </div>

              {/* Value badge */}
              <div
                className="font-display text-sm font-bold px-3 py-1 rounded-lg flex-shrink-0"
                style={{
                  background: `${a.color}10`,
                  border: `1px solid ${a.color}30`,
                  color: a.color,
                }}
              >
                {a.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;