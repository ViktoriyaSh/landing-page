const speakers = [
  {
    initials: 'AD',
    color: '#0066cc',
    name: 'Arkadiy Dobkin',
    title: 'CEO & Co-Founder',
    company: 'EPAM Systems',
    bio: 'Founder of one of the world\'s top digital transformation companies. 30+ years driving innovation in enterprise software engineering.',
  },
  {
    initials: 'JO',
    color: '#1a6fb5',
    name: "James O'Brien",
    title: 'Principal Cloud Architect',
    company: 'EPAM Systems',
    bio: 'Designed cloud infrastructure for 200+ global enterprises. Specializes in multi-cloud resilience and FinOps optimization.',
  },
  {
    initials: 'SC',
    color: '#3399ff',
    name: 'Sarah Chen',
    title: 'Chief Digital Officer',
    company: 'Nordea Group',
    bio: 'Led Nordea\'s $2B digital transformation program. Champion of human-centered design in financial services technology.',
  },
  {
    initials: 'AK',
    color: '#004a99',
    name: 'Alex Kazlouski',
    title: 'VP, Head of Enterprise Data Office',
    company: 'EPAM Systems',
    bio: 'Leads enterprise data strategy and governance across EPAM\'s global operations. Expert in data-driven decision making and AI adoption at scale.',
  },
]

function Speakers() {
  return (
    <section className="section" id="speakers">
      <div className="container">
        <h2 className="section-title">Featured Speakers</h2>
        <p className="section-subtitle">
          Experienced leaders and practitioners sharing real insights on AI adoption,
          talent development, and the future of People work.
        </p>

        <div className="speakers__grid">
          {speakers.map((speaker, i) => (
            <div className="speaker-card" key={i}>
              <div
                className="speaker-card__avatar"
                style={{ background: `linear-gradient(135deg, ${speaker.color}, ${speaker.color}cc)` }}
              >
                {speaker.initials}
              </div>
              <div className="speaker-card__name">{speaker.name}</div>
              <div className="speaker-card__title">{speaker.title}</div>
              <div className="speaker-card__company">{speaker.company}</div>
              <p className="speaker-card__bio">{speaker.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers
