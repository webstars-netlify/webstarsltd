import React from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo.png"

const Navbar = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
              <img src={Logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/process" className="nav-link">
                    Process
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/projects"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Projects
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/insights"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Insights
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/team"
                    className="nav-link"
                    activeClassName={"active"}
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
