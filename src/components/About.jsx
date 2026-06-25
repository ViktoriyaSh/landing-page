function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <h2 className="section-title">About the Forum</h2>
            <p className="section-subtitle">
              Join our People Forum on AI Adoption to explore how AI can transform the way
              we attract, develop, engage, and support talent across the organization.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-icon">🤖</div>
                <div className="about__highlight-text">
                  <h4>Practical AI Use Cases</h4>
                  <p>Discover emerging AI applications across the full employee lifecycle — from recruitment and onboarding to learning, performance, and retention.</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">🤝</div>
                <div className="about__highlight-text">
                  <h4>Exchange Ideas</h4>
                  <p>A collaborative space to share experiences, learn from real examples, and shape the future of AI-enabled People practices together.</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">⚖️</div>
                <div className="about__highlight-text">
                  <h4>Responsible Adoption</h4>
                  <p>Understand the human-centered principles needed to adopt AI responsibly — including ethics, bias, transparency, and data privacy in People work.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__image-block">
            <h3>Who Should Attend?</h3>
            <p>
              This forum is designed for People and HR professionals, Talent Development teams,
              HRBPs, recruiters, people managers, and anyone interested in how AI can support
              employee experience, learning, performance, and workforce planning.
            </p>
            <p>
              Together, we'll discuss practical opportunities, emerging use cases, and the
              principles needed to bring AI into People work in a thoughtful and human-centered way.
            </p>
            <div className="about__quote">
              "A space to exchange ideas, learn from real examples, and shape the future
              of AI-enabled People practices."
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
