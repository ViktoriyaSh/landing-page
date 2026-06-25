import { useState } from 'react'

const faqs = [
  {
    question: 'Who should attend the People Forum on AI Adoption?',
    answer:
      'This forum is designed for People/HR professionals, Talent Development teams, HRBPs, recruiters, people managers, and anyone interested in how AI can support employee experience, learning, performance, and workforce planning.',
  },
  {
    question: 'Do I need technical knowledge of AI to participate?',
    answer:
      'No. The forum will focus on practical applications, opportunities, and considerations for People teams rather than deep technical details. It\'s suitable for both beginners and those already experimenting with AI tools.',
  },
  {
    question: 'What topics will be discussed during the forum?',
    answer:
      'We\'ll cover AI use cases in talent development, recruitment, learning, employee engagement, people analytics, and HR operations, as well as responsible AI adoption, data privacy, and ethical considerations.',
  },
  {
    question: 'Will we discuss risks and limitations of AI in People work?',
    answer:
      'Yes. A key part of the forum will focus on responsible AI usage, including bias, transparency, data security, and the importance of keeping human judgment in people-related decisions.',
  },
  {
    question: 'What will participants take away from the event?',
    answer:
      'Participants will leave with a clearer understanding of how AI can be applied in People practices, examples of potential use cases, and ideas for how to start adopting AI in a thoughtful and human-centered way.',
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
          Have a question about the forum? Find answers below, or reach us at <strong>events@epam.com</strong>
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
