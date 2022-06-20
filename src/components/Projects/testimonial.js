import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import User from "../../assets/images/user.png"

const Testimonial = () => {
  return (
    <>
      <section class="testimonialSection">
        <div class="custom-container">
          <div class="testiSec-main">
            <div class="row">
              <div class="col-lg-3">
                <div class="testiSec-img">
                  <img src={User} alt="" />
                </div>
              </div>

              <div class="col-lg-8">
                <div class="testiSec-cont">
                  <h6>We’d love to hear about your project</h6>
                  <p>
                    Hi, I’m Jez and lorem ipsum dolor amet, consec tetur
                    adipiscing elit. Mae cenas sed arcu dolor&nbsp;
                    <a href="mailto:jobs@webstarsltd.com">
                      please click here to email me
                    </a>
                  </p>

                  <ul class="mn-social-icon">
                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>

                    <li>
                      <Link to="/">
                        <FontAwesomeIcon icon={faTwitter} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="testimonial-separator">
        <div className="separator" />
      </div>
    </>
  )
}

export default Testimonial
