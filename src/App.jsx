import { LanguageProvider, useLang } from './LanguageContext'
import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Speakers from './components/Speakers'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function LangSwitcher() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-switcher">
      <button
        className={`lang-switcher__btn${lang === 'en' ? ' lang-switcher__btn--active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <span className="lang-switcher__sep">|</span>
      <button
        className={`lang-switcher__btn${lang === 'ru' ? ' lang-switcher__btn--active' : ''}`}
        onClick={() => setLang('ru')}
      >
        RU
      </button>
    </div>
  )
}

function Navbar() {
  const { t } = useLang()
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={scrollTo('home')}>
          <div className="navbar__logo-mark">AI</div>
          <span className="navbar__logo-text">{t.nav.logoText}</span>
        </a>
        <ul className="navbar__nav">
          <li><a href="#about"        onClick={scrollTo('about')}>{t.nav.about}</a></li>
          <li><a href="#program"      onClick={scrollTo('program')}>{t.nav.program}</a></li>
          <li><a href="#speakers"     onClick={scrollTo('speakers')}>{t.nav.speakers}</a></li>
          <li><a href="#gallery"      onClick={scrollTo('gallery')}>{t.nav.gallery}</a></li>
          <li><a href="#faq"          onClick={scrollTo('faq')}>{t.nav.faq}</a></li>
          <li>
            <a href="#registration" className="navbar__cta" onClick={scrollTo('registration')}>
              {t.nav.register}
            </a>
          </li>
        </ul>
        <LangSwitcher />
      </div>
    </nav>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">{t.footer.logo}</div>
          <div className="footer__links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
            <a href="#">{t.footer.contact}</a>
          </div>
          <div>{t.footer.copyright}</div>
        </div>
      </div>
    </footer>
  )
}

function AppInner() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Gallery />
        <FAQ />
        <Registration />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  )
}

export default App
