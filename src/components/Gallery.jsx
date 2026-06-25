import { useState, useEffect, useCallback } from 'react'

const photos = [
  { id: 10,  caption: 'Opening keynote session' },
  { id: 20,  caption: 'Panel discussion on AI in HR' },
  { id: 30,  caption: 'Workshop — hands-on practice' },
  { id: 40,  caption: 'Networking and coffee break' },
  { id: 50,  caption: 'Speakers on stage' },
  { id: 60,  caption: 'Audience Q&A session' },
  { id: 70,  caption: 'Team collaboration exercise' },
  { id: 80,  caption: 'Closing remarks & wrap-up' },
  { id: 90,  caption: 'Award ceremony' },
  { id: 100, caption: 'Evening reception' },
  { id: 110, caption: 'Registration desk' },
  { id: 120, caption: 'Breakout group discussions' },
].map(p => ({
  ...p,
  src:   `https://picsum.photos/seed/${p.id}/600/400`,
  thumb: `https://picsum.photos/seed/${p.id}/400/280`,
}))

function Lightbox({ photo, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')    onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Previous photo"
      >
        ‹
      </button>

      <div className="lightbox__content" onClick={e => e.stopPropagation()}>
        <img
          className="lightbox__img"
          src={photo.src}
          alt={photo.caption}
        />
        <div className="lightbox__footer">
          <span className="lightbox__caption">{photo.caption}</span>
          <span className="lightbox__counter">{index + 1} / {total}</span>
        </div>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Next photo"
      >
        ›
      </button>
    </div>
  )
}

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const open  = (i) => setActiveIndex(i)
  const close = useCallback(() => setActiveIndex(null), [])
  const prev  = useCallback(() => setActiveIndex(i => (i - 1 + photos.length) % photos.length), [])
  const next  = useCallback(() => setActiveIndex(i => (i + 1) % photos.length), [])

  return (
    <section className="section" id="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        <p className="section-subtitle">
          A glimpse into past People Forum events — inspiring conversations,
          collaborative workshops, and meaningful connections.
        </p>

        <div className="gallery__grid">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              className="gallery__item"
              onClick={() => open(i)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <img
                className="gallery__thumb"
                src={photo.thumb}
                alt={photo.caption}
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__overlay-icon">⤢</span>
                <span className="gallery__overlay-caption">{photo.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          photo={photos[activeIndex]}
          index={activeIndex}
          total={photos.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}

export default Gallery
