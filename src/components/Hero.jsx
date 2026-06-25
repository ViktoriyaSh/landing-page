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
              EPAM Global <span>Leaders</span> Summit 2026
            </h1>
            <p className="hero__description">
              The premier corporate event bringing together 500+ business leaders, technology innovators,
              and industry experts to shape the future of enterprise technology.
            </p>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📅</span>
                September 18–19, 2026
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📍</span>
                Wyndham Grand Hotel, Warsaw, Poland
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">🎫</span>
                In-Person &amp; Live Stream Available
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
                <div className="hero__stat-number">500+</div>
                <div className="hero__stat-label">Attendees</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">24</div>
                <div className="hero__stat-label">Sessions</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">18</div>
                <div className="hero__stat-label">Speakers</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">2</div>
                <div className="hero__stat-label">Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
