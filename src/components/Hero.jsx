import { useState, useEffect } from 'react'
import { useLang } from '../LanguageContext'

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
  const { t } = useLang()
  const h = t.hero
  const timeLeft = useCountdown()

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot"></span>
              {h.badge}
            </div>
            <h1 className="hero__title">
              {h.titleLine1} <span>{h.titleAccent}</span>
            </h1>
            <p className="hero__description">{h.description}</p>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📅</span>
                {h.date}
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">📍</span>
                {h.location}
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-icon">🎫</span>
                {h.format}
              </div>
            </div>

            {timeLeft === null ? (
              <div className="countdown countdown--started">
                <span>{h.eventStarted}</span>
              </div>
            ) : (
              <div className="countdown">
                <div className="countdown__label">{h.countdownLabel}</div>
                <div className="countdown__units">
                  {[
                    { value: timeLeft.days,    label: h.countdownDays },
                    { value: timeLeft.hours,   label: h.countdownHours },
                    { value: timeLeft.minutes, label: h.countdownMins },
                    { value: timeLeft.seconds, label: h.countdownSecs },
                  ].map(({ value, label }) => (
                    <div className="countdown__unit" key={label}>
                      <div className="countdown__number">{String(value).padStart(2, '0')}</div>
                      <div className="countdown__unit-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="hero__actions">
              <a href="#registration" className="btn-primary" onClick={scrollTo('registration')}>
                {h.registerBtn}
              </a>
              <a href="#program" className="btn-secondary" onClick={scrollTo('program')}>
                {h.programBtn}
              </a>
            </div>
          </div>

          <div className="hero__card">
            <div className="hero__stat-grid">
              <div className="hero__stat">
                <div className="hero__stat-number">1</div>
                <div className="hero__stat-label">{h.statDay}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">5</div>
                <div className="hero__stat-label">{h.statSessions}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">4</div>
                <div className="hero__stat-label">{h.statSpeakers}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-number">AI</div>
                <div className="hero__stat-label">{h.statFocus}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
