const PROJECTS = [
  {
    id: "01",
    title: "Self-Evolving Graph Neural Fields for Cephalometric Landmark Detection",
    badge: "IEEE CBMS · CORE Rank B",
    badgeColor: "var(--green)",
    tags: ["GNN", "GAT", "Transformers", "Medical Imaging", "ISBI 2015"],
    description:
      "State-of-the-art deep learning architecture for automated cephalometric landmark detection. Integrates Graph Attention Networks, Transformer-based detection, and continuous neural representations to localize 19 craniofacial landmarks.",
    highlights: [
      "Processed 4,200+ augmented skull X-ray images",
      "Custom multi-component loss: MSE + L1 + energy regularization",
      "Achieved 0.98mm MRE (Test1) and 1.27mm (Test2)",
      "End-to-end training pipeline with custom data loaders",
    ],
    metric: "0.98mm MRE",
    metricLabel: "Mean Radial Error",
  },
  {
    id: "02",
    title: "Self-Supervised Deep Image Prior for Multiplicative Noise Removal",
    badge: "ICTIIT 2025 · IIIT Kottayam",
    badgeColor: "var(--cyan)",
    tags: ["Self-Supervised", "SAR Imaging", "Ultrasound", "Blind-Spot CNN"],
    description:
      "Novel self-supervised deep learning framework for removing multiplicative noise in SAR and ultrasound imaging without requiring clean-noisy paired datasets — no ground truth needed.",
    highlights: [
      "Dual-branch encoder-decoder architecture (S3DIPNet)",
      "Explicit multiplicative noise decomposition model",
      "Blind-spot convolutions to prevent identity mapping",
      "Neighbor2Neighbor consistency loss",
      "Multi-scale texture preservation with learnable fusion",
    ],
    metric: "+20% SSIM",
    metricLabel: "Improvement",
  },
  {
    id: "03",
    title: "Automated Tooth Root Length Detection (Keypoint R-CNN + YOLOv8)",
    badge: "IEEE CBMS",
    badgeColor: "var(--green)",
    tags: ["Keypoint Detection", "YOLOv8", "Keypoint R-CNN", "Dental AI"],
    description:
      "Hybrid deep learning pipeline combining Keypoint R-CNN and YOLOv8 for detecting CEJ-Apex keypoints in dental X-rays with explainable root-length estimation.",
    highlights: [
      "Hybrid detection + keypoint estimation architecture",
      "Explainable root length measurement",
      "Robust across varying dental X-ray conditions",
    ],
    metric: "Hybrid",
    metricLabel: "Architecture",
  },
  {
    id: "04",
    title: "Potato Disease Detection using CNN",
    badge: "Academic Project",
    badgeColor: "#a855f7",
    tags: ["CNN", "Image Classification", "Plant Pathology"],
    description:
      "CNN-based classifier for detecting plant diseases from leaf images using transfer learning and custom augmentation pipelines.",
    highlights: [],
    metric: "CNN",
    metricLabel: "Architecture",
  },
  {
    id: "05",
    title: "Next Word Prediction using RNN",
    badge: "Academic Project",
    badgeColor: "#a855f7",
    tags: ["RNN", "LSTM", "NLP", "Sequence Modeling"],
    description:
      "Sequential deep learning model for predicting the next word in a sentence, demonstrating mastery of NLP pipelines, tokenization, and temporal sequence modeling.",
    highlights: [],
    metric: "LSTM",
    metricLabel: "Model Type",
  },
];

const ProjectCard = ({ project }) => (
  <div className="glass-card p-6 md:p-8">
    {/* Top row */}
    <div className="flex items-start justify-between gap-4 mb-4">
      <span
        className="font-display text-5xl font-black opacity-10 select-none leading-none"
        style={{ color: project.badgeColor }}
      >
        {project.id}
      </span>
      <span
        className="font-mono text-xs px-3 py-1 rounded-full whitespace-nowrap"
        style={{
          background: `${project.badgeColor}12`,
          border: `1px solid ${project.badgeColor}35`,
          color: project.badgeColor,
        }}
      >
        {project.badge}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-display text-lg md:text-xl font-bold text-white leading-snug mb-3">
      {project.title}
    </h3>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs px-2 py-0.5 rounded text-gray-500"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Description */}
    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

    {/* Highlights */}
    {project.highlights.length > 0 && (
      <ul className="space-y-1.5 mb-5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
            <span style={{ color: project.badgeColor, marginTop: "1px", flexShrink: 0 }}>▸</span>
            {h}
          </li>
        ))}
      </ul>
    )}

    {/* Metric footer */}
    <div
      className="flex items-center gap-3 pt-4"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div>
        <div
          className="font-display text-xl font-bold"
          style={{ color: project.badgeColor }}
        >
          {project.metric}
        </div>
        <div className="font-mono text-xs text-gray-600">{project.metricLabel}</div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">03 · Research & Projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            What I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Research at IEEE-level conferences · Production-grade implementations
          </p>
        </div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {PROJECTS.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* Third project full width */}
        <div className="mb-6">
          <ProjectCard project={PROJECTS[2]} />
        </div>

        {/* Smaller projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.slice(3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;