import { useLang } from '../LanguageContext'
import { useInView } from '../useInView'

function Program() {
  const { t } = useLang()
  const p = t.program
  const [headRef, headVisible] = useInView()
  const [listRef, listVisible] = useInView(0.1)

  return (
    <section className="section section-alt" id="program">
      <div className="container">
        <div ref={headRef} className={`fade-up${headVisible ? ' is-visible' : ''}`}>
          <h2 className="section-title">{p.title}</h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </div>

        <div ref={listRef} className={`program__timeline fade-up-children${listVisible ? ' is-visible' : ''}`}>
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
