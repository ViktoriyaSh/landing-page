function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <h2 className="section-title">About the Summit</h2>
            <p className="section-subtitle">
              A world-class corporate gathering designed to accelerate digital transformation
              and forge strategic partnerships across the global technology ecosystem.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-icon">🚀</div>
                <div className="about__highlight-text">
                  <h4>Strategic Innovation</h4>
                  <p>Explore cutting-edge approaches to enterprise technology, AI adoption, and scalable digital transformation frameworks.</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">🤝</div>
                <div className="about__highlight-text">
                  <h4>Executive Networking</h4>
                  <p>Connect with C-suite leaders, decision-makers, and senior executives from Fortune 500 companies across 40+ countries.</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">💡</div>
                <div className="about__highlight-text">
                  <h4>Actionable Insights</h4>
                  <p>Walk away with proven strategies, frameworks, and tools you can implement in your organization immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__image-block">
            <h3>Who Should Attend?</h3>
            <p>
              This summit is designed for senior business and technology leaders who are driving
              transformation in their organizations. Whether you are navigating AI integration,
              scaling engineering teams, or building resilient enterprise architecture — this event
              is built for you.
            </p>
            <p>
              Ideal attendees include CTOs, CIOs, VPs of Engineering, Product Leaders,
              and Digital Transformation Directors from mid-size to enterprise organizations.
            </p>
            <div className="about__quote">
              "The most impactful two days in enterprise technology. Every session delivered
              real value I could apply immediately." — Past Attendee, CTO
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
