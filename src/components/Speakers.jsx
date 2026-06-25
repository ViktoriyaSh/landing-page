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
    initials: 'SC',
    color: '#3399ff',
    name: 'Sarah Chen',
    title: 'Chief Digital Officer',
    company: 'Nordea Group',
    bio: 'Led Nordea\'s $2B digital transformation program. Champion of human-centered design in financial services technology.',
  },
  {
    initials: 'EV',
    color: '#004a99',
    name: 'Dr. Elena Vasquez',
    title: 'SVP Product',
    company: 'TechCorp Global',
    bio: 'Former MIT researcher turned product leader. Expert in AI product strategy and responsible machine learning at enterprise scale.',
  },
  {
    initials: 'JO',
    color: '#1a6fb5',
    name: "James O'Brien",
    title: 'Principal Cloud Architect',
    company: 'EPAM Systems',
    bio: 'Designed cloud infrastructure for 200+ global enterprises. Specializes in multi-cloud resilience and FinOps optimization.',
  },
]

function Speakers() {
  return (
    <section className="section" id="speakers">
      <div className="container">
        <h2 className="section-title">Featured Speakers</h2>
        <p className="section-subtitle">
          Industry thought leaders and practitioners sharing their expertise,
          insights, and lessons learned from the front lines of enterprise transformation.
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
