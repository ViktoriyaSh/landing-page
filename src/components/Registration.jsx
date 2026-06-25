import { useState } from 'react'
import { useLang } from '../LanguageContext'
import { useInView } from '../useInView'

const INITIAL = { name: '', email: '', company: '', role: '' }

function Registration() {
  const { t } = useLang()
  const r = t.registration
  const [leftRef,  leftVisible]  = useInView()
  const [rightRef, rightVisible] = useInView()

  const [form, setForm]         = useState(INITIAL)
  const [errors, setErrors]     = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name = r.errorName
    if (!form.email.trim()) {
      e.email = r.errorEmailReq
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = r.errorEmailFmt
    }
    if (!form.company.trim()) e.company = r.errorCompany
    setErrors(e)
    return Object.keys(e).length === 0
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
          <div ref={leftRef} className={`registration__info fade-left${leftVisible ? ' is-visible' : ''}`}>
            <h2 className="section-title">{r.title}</h2>
            <p className="section-subtitle">{r.subtitle}</p>
            <div className="registration__perks">
              {[r.perk1, r.perk2, r.perk3, r.perk4, r.perk5].map((perk, i) => (
                <div className="registration__perk" key={i}>
                  <span className="registration__perk-icon">{['✅','🍽️','📹','🌐','📋'][i]}</span>
                  {perk}
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className={`form-card fade-right${rightVisible ? ' is-visible' : ''}`}>
            {submitted ? (
              <div className="form__success">
                <div className="form__success-icon">✓</div>
                <h3>{r.successTitle}</h3>
                <p dangerouslySetInnerHTML={{ __html:
                  r.successMsg(form.name, form.email)
                    .replace(form.name,  `<strong>${form.name}</strong>`)
                    .replace(form.email, `<strong>${form.email}</strong>`)
                }} />
              </div>
            ) : (
              <>
                <h3>{r.formTitle}</h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form__group">
                    <label className="form__label" htmlFor="name">
                      {r.labelName} <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.name ? ' form__input--error' : ''}`}
                      type="text" id="name" name="name"
                      placeholder={r.placeholderName}
                      value={form.name} onChange={handleChange}
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="email">
                      {r.labelEmail} <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.email ? ' form__input--error' : ''}`}
                      type="email" id="email" name="email"
                      placeholder={r.placeholderEmail}
                      value={form.email} onChange={handleChange}
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="company">
                      {r.labelCompany} <span>*</span>
                    </label>
                    <input
                      className={`form__input${errors.company ? ' form__input--error' : ''}`}
                      type="text" id="company" name="company"
                      placeholder={r.placeholderCompany}
                      value={form.company} onChange={handleChange}
                    />
                    {errors.company && <span className="form__error">{errors.company}</span>}
                  </div>

                  <div className="form__group">
                    <label className="form__label" htmlFor="role">{r.labelRole}</label>
                    <select
                      className="form__input form__select"
                      id="role" name="role"
                      value={form.role} onChange={handleChange}
                    >
                      <option value="">{r.roleDefault}</option>
                      {r.roles.map(role => <option key={role}>{role}</option>)}
                    </select>
                  </div>

                  <button type="submit" className="btn-submit">{r.submitBtn}</button>
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
