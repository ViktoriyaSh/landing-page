import Hero from './components/Hero'
import About from './components/About'
import Program from './components/Program'
import Speakers from './components/Speakers'
import FAQ from './components/FAQ'
import Registration from './components/Registration'

function Navbar() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" onClick={scrollTo('home')}>
          <div className="navbar__logo-mark">GL</div>
          <span className="navbar__logo-text">Leaders Summit 2026</span>
        </a>
        <ul className="navbar__nav">
          <li><a href="#about" onClick={scrollTo('about')}>About</a></li>
          <li><a href="#program" onClick={scrollTo('program')}>Program</a></li>
          <li><a href="#speakers" onClick={scrollTo('speakers')}>Speakers</a></li>
          <li><a href="#faq" onClick={scrollTo('faq')}>FAQ</a></li>
          <li>
            <a href="#registration" className="navbar__cta" onClick={scrollTo('registration')}>
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">EPAM Global Leaders Summit 2026</div>
          <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact</a>
          </div>
          <div>© 2026 EPAM Systems, Inc. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Program />
        <Speakers />
        <FAQ />
        <Registration />
      </main>
      <Footer />
    </>
  )
}

export default App
