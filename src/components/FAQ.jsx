import { useState } from 'react'

const faqs = [
  {
    question: 'Who is this summit designed for?',
    answer:
      'The EPAM Global Leaders Summit is designed for senior technology and business leaders — including CTOs, CIOs, VPs of Engineering, Product Directors, and Digital Transformation executives — from mid-size to large enterprise organizations across any industry.',
  },
  {
    question: 'Is there an online attendance option?',
    answer:
      'Yes. All keynote sessions and select panel discussions will be available via live stream. Registered online attendees will receive a private stream link 48 hours before the event. Workshop sessions are in-person only to ensure hands-on quality.',
  },
  {
    question: 'What is included in the registration fee?',
    answer:
      'In-person registration includes full access to all sessions, workshops, and networking events across both days, plus breakfast, lunches, the evening cocktail reception, and a digital copy of all session recordings and slide decks post-event.',
  },
  {
    question: 'Can I register multiple attendees from the same company?',
    answer:
      'Absolutely. Group registrations of 5 or more attendees receive a 20% discount. Please use the registration form for your first attendee and contact our team at events@epam.com for group pricing instructions.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Registrations cancelled more than 30 days before the event receive a full refund. Cancellations between 15–30 days receive a 50% refund. Within 14 days of the event, registrations are non-refundable but can be transferred to a colleague at no charge.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="section section-alt" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know before registering. Can't find an answer?
          Reach us at <strong>events@epam.com</strong>
        </p>

        <div className="faq__list">
          {faqs.map((faq, i) => (
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
