import { useState, useEffect } from 'react'

const speakers = [
  {
    initials: 'AD',
    color: '#0066cc',
    photo: 'https://i.pravatar.cc/160?img=11',
    name: 'Arkadiy Dobkin',
    title: 'CEO & Co-Founder',
    company: 'EPAM Systems',
    bio: 'Founder of one of the world\'s top digital transformation companies. 30+ years driving innovation in enterprise software engineering.',
    fullBio: 'Arkadiy Dobkin is the CEO and Co-Founder of EPAM Systems, one of the world\'s leading digital transformation services and product engineering companies. Under his leadership, EPAM has grown from a small software development firm into a global technology powerhouse with over 50,000 professionals across 50+ countries. Arkadiy is a recognized thought leader in enterprise technology, AI strategy, and large-scale digital transformation, frequently speaking at major industry events worldwide.',
    talks: [
      'Keynote: Why AI Matters for People Teams',
      'Fireside Chat: Leading Digital Transformation at Scale',
    ],
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    initials: 'JO',
    color: '#1a6fb5',
    photo: 'https://i.pravatar.cc/160?img=53',
    name: "James O'Brien",
    title: 'Principal Cloud Architect',
    company: 'EPAM Systems',
    bio: 'Designed cloud infrastructure for 200+ global enterprises. Specializes in multi-cloud resilience and FinOps optimization.',
    fullBio: "James O'Brien is a Principal Cloud Architect at EPAM Systems with over 15 years of experience designing enterprise-grade cloud solutions. He has led cloud migration and modernization programs for Fortune 500 clients across financial services, retail, and healthcare. James is a certified AWS, Azure, and GCP architect and a regular contributor to cloud architecture best practices at EPAM's Center of Excellence.",
    talks: [
      'Interactive Session: Opportunities, Risks, and Responsible AI Adoption',
      'Workshop: Cloud-Native AI Infrastructure for People Teams',
    ],
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    initials: 'SC',
    color: '#3399ff',
    photo: 'https://i.pravatar.cc/160?img=47',
    name: 'Sarah Chen',
    title: 'Chief Digital Officer',
    company: 'Nordea Group',
    bio: 'Led Nordea\'s $2B digital transformation program. Champion of human-centered design in financial services technology.',
    fullBio: 'Sarah Chen serves as Chief Digital Officer at Nordea Group, where she oversees the bank\'s end-to-end digital strategy across four Nordic countries. She led Nordea\'s landmark $2 billion digital transformation initiative, embedding AI and data-driven tools across HR, customer experience, and operations. Sarah is a passionate advocate for responsible AI adoption and human-centered design in regulated industries, and sits on the board of two fintech advisory councils.',
    talks: [
      'Keynote: The Future of AI-Enabled Talent Development',
      'Panel: Practical AI Use Cases Across the Employee Lifecycle',
    ],
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    initials: 'AK',
    color: '#004a99',
    photo: 'https://i.pravatar.cc/160?img=33',
    name: 'Alex Kazlouski',
    title: 'VP, Head of Enterprise Data Office',
    company: 'EPAM Systems',
    bio: 'Leads enterprise data strategy and governance across EPAM\'s global operations. Expert in data-driven decision making and AI adoption at scale.',
    fullBio: 'Alex Kazlouski is the VP and Head of the Enterprise Data Office at EPAM Systems, responsible for the company\'s global data governance, analytics platforms, and AI enablement initiatives. With a background spanning data engineering, product strategy, and organizational design, Alex has been at the forefront of embedding AI-driven decision-making tools into EPAM\'s People and Operations functions. He is a frequent speaker on responsible data strategy and the role of AI in modern HR.',
    talks: [
      'Panel: Practical AI Use Cases Across the Employee Lifecycle',
      'Wrap-Up: Next Steps for Bringing AI into People Practices',
    ],
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
]

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function SpeakerModal({ speaker, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        <div className="modal__header">
          <img
            className="modal__photo"
            src={speaker.photo}
            alt={speaker.name}
            onError={e => { e.target.style.display = 'none' }}
          />
          <div>
            <div className="modal__name">{speaker.name}</div>
            <div className="modal__title">{speaker.title}</div>
            <div className="modal__company">{speaker.company}</div>
            <div className="modal__social">
              <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="modal__social-link modal__social-link--linkedin">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={speaker.twitter} target="_blank" rel="noopener noreferrer" className="modal__social-link modal__social-link--twitter">
                <TwitterIcon /> Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="modal__section-title">About</div>
        <p className="modal__bio">{speaker.fullBio}</p>

        <div className="modal__section-title">Sessions at the Forum</div>
        <ul className="modal__talks">
          {speaker.talks.map((talk, i) => (
            <li key={i} className="modal__talk">
              <span className="modal__talk-dot"></span>
              {talk}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Speakers() {
  const [activeSpeaker, setActiveSpeaker] = useState(null)

  return (
    <section className="section" id="speakers">
      <div className="container">
        <h2 className="section-title">Featured Speakers</h2>
        <p className="section-subtitle">
          Experienced leaders and practitioners sharing real insights on AI adoption,
          talent development, and the future of People work. Click a card to learn more.
        </p>

        <div className="speakers__grid">
          {speakers.map((speaker, i) => (
            <div
              className="speaker-card"
              key={i}
              onClick={() => setActiveSpeaker(speaker)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setActiveSpeaker(speaker)}
            >
              <div className="speaker-card__photo-wrap">
                <img
                  className="speaker-card__photo"
                  src={speaker.photo}
                  alt={speaker.name}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div
                  className="speaker-card__avatar"
                  style={{ background: `linear-gradient(135deg, ${speaker.color}, ${speaker.color}bb)`, display: 'none' }}
                >
                  {speaker.initials}
                </div>

                <div className="speaker-card__bio-overlay">
                  <p>{speaker.bio}</p>
                  <span className="speaker-card__overlay-hint">Click for full profile →</span>
                </div>
              </div>

              <div className="speaker-card__body">
                <div className="speaker-card__name">{speaker.name}</div>
                <div className="speaker-card__title">{speaker.title}</div>
                <div className="speaker-card__company">{speaker.company}</div>

                <div className="speaker-card__social">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-card__social-icon speaker-card__social-icon--linkedin"
                    onClick={e => e.stopPropagation()}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-card__social-icon speaker-card__social-icon--twitter"
                    onClick={e => e.stopPropagation()}
                    aria-label="Twitter"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeSpeaker && (
        <SpeakerModal speaker={activeSpeaker} onClose={() => setActiveSpeaker(null)} />
      )}
    </section>
  )
}

export default Speakers
