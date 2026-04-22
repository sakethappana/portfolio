const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">01 · About</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Main text — 3 cols */}
          <div className="md:col-span-3 space-y-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Pushing the frontier of{" "}
              <span className="gradient-text">intelligent systems</span>
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I'm an Artificial Intelligence undergraduate at Mahindra University,
              maintaining a <span className="text-green-400 font-semibold">9.08/10 CGPA</span> while
              conducting research at the intersection of deep learning and clinical medicine.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              My work lives at the crossroads of continuous neural representations,
              transformer-based architectures, and graph-based learning. I design models that
              are <em>data-efficient</em>, <em>self-supervised</em>, and capable of extracting
              meaningful structure from limited, noisy, or unlabeled datasets.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm">
              Published at <span className="text-cyan-400">IEEE CBMS</span> (CORE Rank B) and{" "}
              <span className="text-cyan-400">ICTIIT 2025</span>, with ongoing research in
              medical landmark detection, noise modeling, and multi-scale feature extraction.
            </p>
          </div>

          {/* Right panel — 2 cols */}
          <div className="md:col-span-2 space-y-4">

            {/* CGPA Card */}
            <div className="glass-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
                >
                  🎓
                </div>
                <span className="font-mono text-xs text-gray-400">CGPA · 2021–2025</span>
              </div>
              <div className="font-display text-4xl font-bold glow-green">9.08<span className="text-gray-600 text-lg">/10</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-gray-800 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "90.8%",
                    background: "linear-gradient(90deg, var(--green), var(--cyan))",
                    boxShadow: "0 0 10px var(--green)",
                  }}
                />
              </div>
            </div>

            {/* Research focus tags */}
            <div className="glass-card p-5">
              <p className="font-mono text-xs text-gray-500 mb-3">Research Focus</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Graph Neural Networks",
                  "Computer Vision",
                  "Medical Imaging",
                  "Self-Supervised Learning",
                  "Transformers",
                  "Noise Modeling",
                ].map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>

            {/* Institute */}
            <div
              className="p-4 rounded-xl flex items-center gap-3"
              style={{ background: "rgba(0,229,255,0.05)", border: "1px solid rgba(0,229,255,0.15)" }}
            >
              <span className="text-xl">🏛️</span>
              <div>
                <div className="text-sm font-semibold text-white">Mahindra University</div>
                <div className="font-mono text-xs text-gray-500">B.Tech · Artificial Intelligence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;