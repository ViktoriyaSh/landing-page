import { useState, useEffect } from 'react'

const EVENT_DATE = new Date('2026-09-15T10:00:00')

function useCountdown() {
  const getTimeLeft = () => {
    const diff = EVENT_DATE - new Date()
    if (diff <= 0) return null
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return timeLeft
}

function Hero() {
  const timeLeft = useCountdown()

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

            {timeLeft === null ? (
              <div className="countdown countdown--started">
                <span>Event Started!</span>
              </div>
            ) : (
              <div className="countdown">
                <div className="countdown__label">Event starts in</div>
                <div className="countdown__units">
                  {[
                    { value: timeLeft.days,    label: 'Days' },
                    { value: timeLeft.hours,   label: 'Hours' },
                    { value: timeLeft.minutes, label: 'Minutes' },
                    { value: timeLeft.seconds, label: 'Seconds' },
                  ].map(({ value, label }) => (
                    <div className="countdown__unit" key={label}>
                      <div className="countdown__number">
                        {String(value).padStart(2, '0')}
                      </div>
                      <div className="countdown__unit-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
