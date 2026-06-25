import { useState } from 'react'

const INITIAL = { name: '', email: '', company: '', role: '' }
const INITIAL_ERRORS = { name: '', email: '', company: '' }

function Registration() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = { name: '', email: '', company: '' }
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim()) {
      e.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.'
    }
    if (!form.company.trim()) e.company = 'Company name is required.'
    setErrors(e)
    return !e.name && !e.email && !e.company
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  return (
    <section className="section registration" id="registration">
      <div className="container">
        <div className="registration__grid">
          <div className="registration__info">
            <h2 className="section-title">Reserve Your Seat</h2>
            <p className="section-subtitle">
              Secure your place at the most important corporate technology event of 2026.
              Seats are limited — register today.
            </p>

            <div className="registration__perks">
              <div className="registration__perk">
                <span className="registration__perk-icon">✅</span>
                Full access to all keynotes and sessions
              </div>
              <div className="registration__perk">
                <span className="registration__perk-icon">🍽️</span>
                Catered lunches and evening reception included
              </div>
              <div className="registration__perk">
                <span className="registration__perk-icon">📹</span>
                Post-event access to all session recordings
              </div>
              <div className="registration__perk">
                <span className="registration__perk-icon">🌐</span>
                Live stream option available for remote attendees
              </div>
              <div className="registration__perk">
                <span className="registration__perk-icon">📋</span>
                Digital certificate of attendance
              </div>
            </div>
          </div>

          <div className="form-card">
            {submitted ? (
              <div className="form__success">
                <div className="form__success-icon">✓</div>
                <h3>You're registered!</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>! A confirmation has been sent to{' '}
                  <strong>{form.email}</strong>. We look forward to seeing you in Warsaw.
                </p>
              </div>
            ) : (
              <>
                <h3>Register for the Summit</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.name ? ' form__input--error' : ''}`}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Anna Kowalski"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="email">
                      Work Email <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.email ? ' form__input--error' : ''}`}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="company">
                      Company <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.company ? ' form__input--error' : ''}`}
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your organization"
                      value={form.company}
                      onChange={handleChange}
                    />
                    {errors.company && <span className="form__error">{errors.company}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="role">Job Title</label>
                    <select
                      className="form__input form__select"
                      id="role"
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                    >
                      <option value="">Select your role (optional)</option>
                      <option>CEO / Co-Founder</option>
                      <option>CTO / CIO / CDO</option>
                      <option>VP of Engineering</option>
                      <option>Product Director / CPO</option>
                      <option>Engineering Manager</option>
                      <option>Digital Transformation Lead</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-submit">
                    Confirm Registration →
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration
