const SKILL_GROUPS = [
  {
    icon: "⚡",
    title: "Programming",
    color: "var(--green)",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: "🧠",
    title: "Deep Learning",
    color: "var(--cyan)",
    skills: ["ANN", "CNN", "RNN", "GNN", "Transformers", "Encoder-Decoder"],
  },
  {
    icon: "🔧",
    title: "Frameworks",
    color: "#a855f7",
    skills: ["PyTorch", "TensorFlow", "Keras", "PyTorch Geometric"],
  },
  {
    icon: "📦",
    title: "Libraries",
    color: "var(--green)",
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "scikit-learn"],
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    color: "var(--cyan)",
    skills: ["YOLO", "Faster-RCNN", "AlexNet", "VGG", "Inception", "RCNN"],
  },
  {
    icon: "🏗️",
    title: "Core CS",
    color: "#a855f7",
    skills: ["DSA", "DBMS", "Operating Systems", "Algorithms"],
  },
];

const SkillCard = ({ icon, title, color, skills }) => (
  <div className="glass-card p-6 h-full">
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
      </div>
      <h3 className="font-display text-sm font-bold tracking-wide" style={{ color }}>
        {title}
      </h3>
    </div>

    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="font-mono text-xs px-2.5 py-1 rounded-md text-gray-300 transition-all duration-200 hover:scale-105"
          style={{
            background: `${color}08`,
            border: `1px solid ${color}20`,
          }}
          onMouseEnter={(e) => {
            e.target.style.background = `${color}18`;
            e.target.style.borderColor = `${color}50`;
            e.target.style.color = color;
            e.target.style.boxShadow = `0 0 10px ${color}20`;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = `${color}08`;
            e.target.style.borderColor = `${color}20`;
            e.target.style.color = "#d1d5db";
            e.target.style.boxShadow = "none";
          }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">02 · Skills</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-gray-500 font-mono text-xs mt-2">
            hover to highlight · sorted by depth of expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group) => (
            <SkillCard key={group.title} {...group} />
          ))}
        </div>

        {/* Bottom proficiency bar */}
        <div className="mt-10 glass-card p-6">
          <p className="font-mono text-xs text-gray-500 mb-5">Core Proficiency Levels</p>
          <div className="space-y-4">
            {[
              { label: "Python · PyTorch · Deep Learning", pct: 92 },
              { label: "Graph Neural Networks · PyG", pct: 88 },
              { label: "Computer Vision · Object Detection", pct: 85 },
              { label: "Self-Supervised Learning", pct: 80 },
            ].map(({ label, pct }) => (
              <div key={label}>
                <div className="flex justify-between mb-1.5">
                  <span className="font-mono text-xs text-gray-400">{label}</span>
                  <span className="font-mono text-xs text-green-400">{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${pct}%`,
                      background: "linear-gradient(90deg, var(--green), var(--cyan))",
                      boxShadow: "0 0 8px var(--green)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;