import { useState, useEffect, useCallback } from 'react'
import { useLang } from '../LanguageContext'
import { useInView } from '../useInView'

const PHOTOS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120].map(id => ({
  id,
  src:   `https://picsum.photos/seed/${id}/600/400`,
  thumb: `https://picsum.photos/seed/${id}/400/280`,
}))

const SPEAKER_META = [
  { initials: 'AD', color: '#0066cc', photo: 'https://i.pravatar.cc/160?img=11', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  { initials: 'JO', color: '#1a6fb5', photo: 'https://i.pravatar.cc/160?img=53', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  { initials: 'SC', color: '#3399ff', photo: 'https://i.pravatar.cc/160?img=47', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
  { initials: 'AK', color: '#004a99', photo: 'https://i.pravatar.cc/160?img=33', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' },
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

function SpeakerModal({ speaker, meta, ts, onClose }) {
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
          <img className="modal__photo" src={meta.photo} alt={speaker.name}
            onError={e => { e.target.style.display = 'none' }} />
          <div>
            <div className="modal__name">{speaker.name}</div>
            <div className="modal__title">{speaker.title}</div>
            <div className="modal__company">{speaker.company}</div>
            <div className="modal__social">
              <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="modal__social-link modal__social-link--linkedin">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href={meta.twitter} target="_blank" rel="noopener noreferrer" className="modal__social-link modal__social-link--twitter">
                <TwitterIcon /> Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="modal__section-title">{ts.modalAbout}</div>
        <p className="modal__bio">{speaker.fullBio}</p>
        <div className="modal__section-title">{ts.modalTalks}</div>
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
  const { t } = useLang()
  const ts = t.speakers
  const [activeIndex, setActiveIndex] = useState(null)
  const [headRef, headVisible] = useInView()
  const [gridRef, gridVisible] = useInView(0.1)

  return (
    <section className="section" id="speakers">
      <div className="container">
        <div ref={headRef} className={`fade-up${headVisible ? ' is-visible' : ''}`}>
          <h2 className="section-title">{ts.title}</h2>
          <p className="section-subtitle">{ts.subtitle}</p>
        </div>

        <div ref={gridRef} className={`speakers__grid fade-up-children${gridVisible ? ' is-visible' : ''}`}>
          {ts.list.map((speaker, i) => {
            const meta = SPEAKER_META[i]
            return (
              <div
                className="speaker-card"
                key={i}
                onClick={() => setActiveIndex(i)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActiveIndex(i)}
              >
                <div className="speaker-card__photo-wrap">
                  <img
                    className="speaker-card__photo"
                    src={meta.photo}
                    alt={speaker.name}
                    onError={e => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div
                    className="speaker-card__avatar"
                    style={{ background: `linear-gradient(135deg, ${meta.color}, ${meta.color}bb)`, display: 'none' }}
                  >
                    {meta.initials}
                  </div>
                  <div className="speaker-card__bio-overlay">
                    <p>{speaker.bio}</p>
                    <span className="speaker-card__overlay-hint">{ts.overlayHint}</span>
                  </div>
                </div>
                <div className="speaker-card__body">
                  <div className="speaker-card__name">{speaker.name}</div>
                  <div className="speaker-card__title">{speaker.title}</div>
                  <div className="speaker-card__company">{speaker.company}</div>
                  <div className="speaker-card__social">
                    <a href={meta.linkedin} target="_blank" rel="noopener noreferrer"
                      className="speaker-card__social-icon speaker-card__social-icon--linkedin"
                      onClick={e => e.stopPropagation()} aria-label="LinkedIn">
                      <LinkedInIcon />
                    </a>
                    <a href={meta.twitter} target="_blank" rel="noopener noreferrer"
                      className="speaker-card__social-icon speaker-card__social-icon--twitter"
                      onClick={e => e.stopPropagation()} aria-label="Twitter">
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {activeIndex !== null && (
        <SpeakerModal
          speaker={ts.list[activeIndex]}
          meta={SPEAKER_META[activeIndex]}
          ts={ts}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  )
}

export default Speakers
