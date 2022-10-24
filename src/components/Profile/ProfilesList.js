import React from "react"
import { Link } from "gatsby"
import { storyblokEditable } from "@storyblok/js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const ProfilesList = ({ blok }) => {
  return (
    <>
      <div {...storyblokEditable(blok)}>
        <div className="profileSection1">
          <div className="custom-container-md">
            <div className="row">
              {blok.user_profile_grid.map((profileItem, index) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  key={`${profileItem._uid}`}
                >
                  <div class="profileSec1-card">
                    <Link to="#">
                      <div class="profileSec1-img">
                        <img src={profileItem.user_image.filename} alt="" />
                      </div>

                      <h6>{profileItem.user_name}</h6>
                      <p>{profileItem.user_role}</p>

                      <ul class="mn-social-icon">
                        {
                          profileItem.user_social_profile[0] && <li>
                          <Link
                            to={
                              profileItem.user_social_profile[0].profile_url.url
                            }
                            className="profile-fb"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} />
                          </Link>
                        </li>
                        }  

                        {
                          profileItem.user_social_profile[1] && <li>
                          <Link
                            to={
                              profileItem.user_social_profile[1].profile_url.url
                            }
                            className="profile-li"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </Link>
                        </li>
                        }

                        {
                          profileItem.user_social_profile[2] && <li>
                          <Link
                            to={
                              profileItem.user_social_profile[2].profile_url.url
                            }
                            className="profile-tw"
                          >
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        }
                      </ul>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-separator">
        <div className="separator" />
      </div>
    </>
  )
}

export default ProfilesList
