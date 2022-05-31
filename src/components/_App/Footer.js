import React from "react"
import { Link } from "gatsby"

import Logo from "../../assets/images/logo-white.png"

// This is a global footer component for the webstarsltd template
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_logo">
          <img src={Logo} alt="webstarsltd" className="footer_logo_img" />
        </div>
        <div className="row">
          <div className="col-lg-5">
            <blockquote>
              "Its well designed, easy to use and very flexible without being
              bloated. Great value for money."
            </blockquote>
          </div>
          <div className="col-lg-2">
            <div className="footer_info">
              <h4>Find Us</h4>
              <ul>
                <li>Studio 402</li>
                <li>Coppergate House</li>
                <li>10 Whites Row</li>
                <li>London E1 7NF</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer_info">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <a href="mailto:hello@webstarsltd.com">
                    hello@webstarsltd.com
                  </a>
                </li>
                <li>
                  <a href="mailto:jobs@webstarsltd.com">jobs@webstarsltd.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer_info">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <Link to="/">LinkedIn</Link>
                </li>
                <li>
                  <Link to="/">Twitter</Link>
                </li>
                <li>
                  <Link to="/">Facebook</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
