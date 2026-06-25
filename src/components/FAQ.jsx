import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { useInView } from '../useInView'

function FAQ() {
  const { t } = useLang()
  const f = t.faq
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)
  const [headRef, headVisible] = useInView()
  const [listRef, listVisible] = useInView(0.1)

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <div ref={headRef} className={`fade-up${headVisible ? ' is-visible' : ''}`}>
          <h2 className="section-title">{f.title}</h2>
          <p className="section-subtitle">{f.subtitle}</p>
        </div>

        <div ref={listRef} className={`faq__list fade-up-children${listVisible ? ' is-visible' : ''}`}>
          {f.items.map((faq, i) => (
            <div className={`faq__item${openIndex === i ? ' faq__item--open' : ''}`} key={i}>
              <button className="faq__question" onClick={() => toggle(i)}>
                <span className="faq__question-text">{faq.question}</span>
                <span className="faq__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq__answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
