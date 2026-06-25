const sessions = [
  {
    time: '10:00',
    tag: 'keynote',
    tagLabel: 'Opening',
    title: 'Welcome & Opening Remarks: Why AI Matters for People Teams',
    speaker: '',
  },
  {
    time: '10:15',
    tag: 'keynote',
    tagLabel: 'Keynote',
    title: 'The Future of AI-Enabled Talent Development',
    speaker: '',
  },
  {
    time: '10:45',
    tag: 'panel',
    tagLabel: 'Panel',
    title: 'Practical AI Use Cases Across the Employee Lifecycle',
    speaker: '',
  },
  {
    time: '11:30',
    tag: 'workshop',
    tagLabel: 'Interactive',
    title: 'Opportunities, Risks, and Responsible AI Adoption',
    speaker: '',
  },
  {
    time: '12:00',
    tag: 'break',
    tagLabel: 'Wrap-Up',
    title: 'Next Steps for Bringing AI into People Practices',
    speaker: '',
  },
]

function Program() {
  return (
    <section className="section section-alt" id="program">
      <div className="container">
        <h2 className="section-title">Event Program</h2>
        <p className="section-subtitle">
          A focused half-day agenda combining keynotes, panel discussion, and an interactive
          session — designed to spark ideas and inspire action.
        </p>

        <div className="program__timeline">
          {sessions.map((session, i) => (
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
