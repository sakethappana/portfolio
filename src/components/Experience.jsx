const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">04 · Leadership</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Leading the <span className="gradient-text">Charge</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--green), transparent)" }}
          />

          <div className="pl-16 relative">
            {/* Dot */}
            <div
              className="absolute left-4 top-6 w-5 h-5 rounded-full pulse-glow"
              style={{
                background: "var(--green)",
                border: "3px solid var(--dark)",
                boxShadow: "0 0 15px var(--green)",
              }}
            />

            <div className="glass-card p-7">
              {/* Role badge */}
              <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="font-mono text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(0,255,136,0.1)",
                        border: "1px solid rgba(0,255,136,0.3)",
                        color: "var(--green)",
                      }}
                    >
                      Current
                    </span>
                    <span className="font-mono text-xs text-gray-600">2023 – Present</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    AI Head
                  </h3>
                  <p className="text-green-400 font-mono text-sm mt-0.5">
                    AUV Club · Mahindra University
                  </p>
                </div>

                <div
                  className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)" }}
                >
                  🤖
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Leading the AI division of the Autonomous Underwater Vehicle club, designing
                intelligent perception and decision-making systems for autonomous navigation
                in challenging underwater environments.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🧭",
                    title: "Autonomous Systems",
                    desc: "Designing AI modules for underwater navigation and obstacle detection",
                  },
                  {
                    icon: "👥",
                    title: "Mentorship",
                    desc: "Guiding junior members on deep learning fundamentals and project execution",
                  },
                  {
                    icon: "🔬",
                    title: "Research Integration",
                    desc: "Bridging academic research with real-world robotic implementations",
                  },
                  {
                    icon: "📐",
                    title: "Architecture Design",
                    desc: "Architecting perception pipelines using CNNs and sensor fusion",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 p-3 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-xs font-semibold text-white mb-0.5">{item.title}</div>
                      <div className="text-xs text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;