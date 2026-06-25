import { useLang } from '../LanguageContext'

function Program() {
  const { t } = useLang()
  const p = t.program

  return (
    <section className="section section-alt" id="program">
      <div className="container">
        <h2 className="section-title">{p.title}</h2>
        <p className="section-subtitle">{p.subtitle}</p>

        <div className="program__timeline">
          {p.sessions.map((session, i) => (
            <div className="program__item" key={i}>
              <div className="program__time">{session.time}</div>
              <div className={`program__dot${session.tag === 'keynote' ? ' program__dot--keynote' : ''}`}></div>
              <div className="program__content">
                <span className={`program__tag program__tag--${session.tag}`}>{session.tagLabel}</span>
                <div className="program__session-title">{session.title}</div>
                {session.speaker && <div className="program__speaker">{session.speaker}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
