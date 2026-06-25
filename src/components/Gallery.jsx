import { useState, useEffect, useCallback } from 'react'
import { useLang } from '../LanguageContext'
import { useInView } from '../useInView'

const PHOTO_IDS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]

function Lightbox({ src, caption, index, total, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
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
      <button className="lightbox__nav lightbox__nav--prev" onClick={e => { e.stopPropagation(); onPrev() }} aria-label="Previous">‹</button>
      <div className="lightbox__content" onClick={e => e.stopPropagation()}>
        <img className="lightbox__img" src={src} alt={caption} />
        <div className="lightbox__footer">
          <span className="lightbox__caption">{caption}</span>
          <span className="lightbox__counter">{index + 1} / {total}</span>
        </div>
      </div>
      <button className="lightbox__nav lightbox__nav--next" onClick={e => { e.stopPropagation(); onNext() }} aria-label="Next">›</button>
    </div>
  )
}

function Gallery() {
  const { t } = useLang()
  const g = t.gallery
  const [activeIndex, setActiveIndex] = useState(null)
  const [headRef, headVisible] = useInView()
  const [gridRef, gridVisible] = useInView(0.05)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev  = useCallback(() => setActiveIndex(i => (i - 1 + PHOTO_IDS.length) % PHOTO_IDS.length), [])
  const next  = useCallback(() => setActiveIndex(i => (i + 1) % PHOTO_IDS.length), [])

  return (
    <section className="section" id="gallery">
      <div className="container">
        <div ref={headRef} className={`fade-up${headVisible ? ' is-visible' : ''}`}>
          <h2 className="section-title">{g.title}</h2>
          <p className="section-subtitle">{g.subtitle}</p>
        </div>

        <div ref={gridRef} className={`gallery__grid fade-up-children${gridVisible ? ' is-visible' : ''}`}>
          {PHOTO_IDS.map((id, i) => (
            <button
              key={id}
              className="gallery__item"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open photo: ${g.photos[i]}`}
            >
              <img
                className="gallery__thumb"
                src={`https://picsum.photos/seed/${id}/400/280`}
                alt={g.photos[i]}
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__overlay-icon">⤢</span>
                <span className="gallery__overlay-caption">{g.photos[i]}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          src={`https://picsum.photos/seed/${PHOTO_IDS[activeIndex]}/600/400`}
          caption={g.photos[activeIndex]}
          index={activeIndex}
          total={PHOTO_IDS.length}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}

export default Gallery
