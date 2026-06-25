import { useLang } from '../LanguageContext'

function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__grid">
          <div>
            <h2 className="section-title">{a.title}</h2>
            <p className="section-subtitle">{a.subtitle}</p>

            <div className="about__highlights">
              <div className="about__highlight">
                <div className="about__highlight-icon">🤖</div>
                <div className="about__highlight-text">
                  <h4>{a.h1}</h4>
                  <p>{a.p1}</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">🤝</div>
                <div className="about__highlight-text">
                  <h4>{a.h2}</h4>
                  <p>{a.p2}</p>
                </div>
              </div>
              <div className="about__highlight">
                <div className="about__highlight-icon">⚖️</div>
                <div className="about__highlight-text">
                  <h4>{a.h3}</h4>
                  <p>{a.p3}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__image-block">
            <h3>{a.whoTitle}</h3>
            <p>{a.whoP1}</p>
            <p>{a.whoP2}</p>
            <div className="about__quote">{a.quote}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
