import { Link } from "gatsby"
import React from "react"
import { storyblokEditable } from "@storyblok/js"
import { render, MARK_LINK } from "storyblok-rich-text-react-renderer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const SimilarProjectQuote = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="testimonialSection-single-project">
        <div class="custom-container">
          <div class="testiSec-main">
            <div class="row">
              <div class="col-lg-3 col-sm-12 col-md-6">
                <div class="testiSec-img">
                  <img src={blok.card[0].person_img.filename} alt="" />
                </div>
              </div>

              <div class="col-lg-8 col-sm-12 col-md-6">
                <div class="testiSec-cont">
                  <h6>{blok.card[0].title}</h6>
                  {render(blok.card[0].text, {
                    markResolvers: {
                      [MARK_LINK]: (children, props) => {
                        const { href } = props
                        return <a href={`mailto:${href}`}>{children}</a>
                      },
                    },
                  })}
                  <ul class="mn-social-icon">
                    <li>
                      <Link to={blok.card[0].facebook_profile_url}>
                        <FontAwesomeIcon icon={faFacebookSquare} />
                      </Link>
                    </li>

                    <li>
                      <Link to={blok.card[0].linkedin_profile_url}>
                        <FontAwesomeIcon icon={faLinkedin} />
                      </Link>
                    </li>

                    <li>
                      <Link to={blok.card[0].twitter_profile_url}>
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
    </div>
  )
}

export default SimilarProjectQuote
