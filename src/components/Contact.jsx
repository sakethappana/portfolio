const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">06 · Contact</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-400/30 to-transparent" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Let's Build{" "}
            <span className="gradient-text">Something Extraordinary</span>
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Whether it's a research collaboration, internship opportunity, or just a conversation
            about pushing the limits of deep learning — my inbox is open.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:sakethappana@gmail.com"
              className="glass-card p-5 flex items-center gap-4 text-left group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.2)" }}
              >
                ✉️
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-xs text-gray-500 mb-0.5">Email</div>
                <div className="text-sm text-green-400 truncate group-hover:text-green-300 transition-colors">
                  sakethappana@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/appana-saketh-krishna-rao-1760322a4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bg2ZGDz%2BTQhi5qVaksu%2BcYg%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-5 flex items-center gap-4 text-left group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)" }}
              >
                💼
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-xs text-gray-500 mb-0.5">LinkedIn</div>
                <div
                  className="text-sm truncate transition-colors"
                  style={{ color: "var(--cyan)" }}
                >
                  appana-saketh-krishna-rao
                </div>
              </div>
            </a>
          </div>

          {/* CTA */}
          <a href="mailto:sakethappana@gmail.com" className="btn-primary inline-block">
            ✦ &nbsp;Get In Touch
          </a>

          {/* Footer note */}
          <p className="mt-16 font-mono text-xs text-gray-700">
            Built with React · Tailwind CSS · Deep passion for AI
          </p>
          <p className="font-mono text-xs text-gray-800 mt-1">
            © 2025 Appana Saketh Krishna Rao
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;