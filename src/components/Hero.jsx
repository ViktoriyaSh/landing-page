function Hero() {
  const scrollToRegister = (e) => {
    e.preventDefault()
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              Registration Open
            </div>
            <h1 className="hero__title">
              People Forum on <span>AI Adoption</span>
            </h1>
            <p className="hero__description">
              Explore how AI can transform the way we attract, develop, engage, and support talent.
              Join us for a day of practical insights, real use cases, and human-centered discussion.
            </p>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📅</span>
                September 15, 2026
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📍</span>
                EPAM Office, Almaty
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">🎫</span>
                In-Person Event
              </div>
            </div>
            <div className="hero__actions">
              <a href="#registration" className="btn-primary" onClick={scrollToRegister}>
                Register Now →
              </a>
              <a href="#program" className="btn-secondary"
                onClick={e => { e.preventDefault(); document.getElementById('program').scrollIntoView({ behavior: 'smooth' }) }}>
                View Program
              </a>
            </div>
          </div>

          <div className="hero__card">
            <div className="hero__stat-grid">
              <div className="hero__stat">
                <div className="hero__stat-number">1</div>
                <div className="hero__stat-label">Day</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">5</div>
                <div className="hero__stat-label">Sessions</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">4</div>
                <div className="hero__stat-label">Speakers</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">AI</div>
                <div className="hero__stat-label">Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
