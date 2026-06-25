const sessions = [
  {
    time: '08:30',
    tag: 'break',
    tagLabel: 'Registration',
    title: 'Attendee Check-In & Welcome Coffee',
    speaker: 'Networking & refreshments in the main atrium',
  },
  {
    time: '09:30',
    tag: 'keynote',
    tagLabel: 'Keynote',
    title: 'Engineering at Scale: Building the Future of Enterprise Technology',
    speaker: 'Arkadiy Dobkin — CEO & Co-Founder, EPAM Systems',
  },
  {
    time: '11:00',
    tag: 'panel',
    tagLabel: 'Panel',
    title: 'AI-First Organizations: Separating Hype from Real Business Value',
    speaker: 'Moderator: Dr. Elena Vasquez, SVP Product, TechCorp Global',
  },
  {
    time: '12:30',
    tag: 'break',
    tagLabel: 'Break',
    title: 'Executive Lunch & Roundtable Discussions',
    speaker: 'Hosted networking by topic tracks',
  },
  {
    time: '14:00',
    tag: 'workshop',
    tagLabel: 'Workshop',
    title: 'Hands-On: Designing Resilient Cloud Architecture for 2027 and Beyond',
    speaker: 'James O\'Brien — Principal Cloud Architect, EPAM',
  },
  {
    time: '15:30',
    tag: 'keynote',
    tagLabel: 'Keynote',
    title: 'Digital Transformation That Sticks: A Framework for Lasting Change',
    speaker: 'Sarah Chen — Chief Digital Officer, Nordea Group',
  },
  {
    time: '17:00',
    tag: 'networking',
    tagLabel: 'Networking',
    title: 'Evening Reception & Networking Cocktail',
    speaker: 'Summit Terrace — casual networking, drinks & live music',
  },
]

function Program() {
  return (
    <section className="section section-alt" id="program">
      <div className="container">
        <h2 className="section-title">Event Program</h2>
        <p className="section-subtitle">
          A carefully curated agenda packed with keynotes, interactive workshops, and
          high-value networking opportunities — Day 1 highlights below.
        </p>

        <div className="program__timeline">
          {sessions.map((session, i) => (
            <div className="program__item" key={i}>
              <div className="program__time">{session.time}</div>
              <div className={`program__dot${session.tag === 'keynote' ? ' program__dot--keynote' : ''}`}></div>
              <div className="program__content">
                <span className={`program__tag program__tag--${session.tag}`}>{session.tagLabel}</span>
                <div className="program__session-title">{session.title}</div>
                <div className="program__speaker">{session.speaker}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Program
