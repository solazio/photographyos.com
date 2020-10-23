import React from "react"
import { Link } from "gatsby"
import logo from "../../content/assets/logo-2019.png"

const Layout = (props) => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li>
              <li className="nav-contact" role="menuitem">
                <Link to={`/contact`}>Contact</Link>
              </li>
              {/* <li className="nav-tags" role="menuitem">
                <Link to={`/tags`}>Tags</Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <img src={logo} alt="photographyos logo"></img>
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a href="https://www.facebook.com/photography0S" title="Facebook">
                Facebook
              </a>
              <a href="https://www.instagram.com/ovi_dius" title="Instagram">
                Instagram
              </a>
              <a href="https://twitter.com/ovi_dius" title="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        Powerd by{" "}
        <a className="designza-link" href="https://www.designza.co.uk/">
          Designza
        </a>
        . Copyright &copy; {new Date().getFullYear()}{" "}
        <Link to={`/`}>{title}</Link>
      </footer>
    </div>
  )
}

export default Layout
