import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

import User from "../../assets/images/user-big.png"

const ProfilesList = () => {
  const profileList = [
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
    {
      image: User,
      name: "Jez John",
      role: "Managing Director",
      facebook: "/",
      linkedin: "/",
      twitter: "/",
    },
  ]

  return (
    <>
      <div className="profileSection1">
        <div className="custom-container-md">
          <div className="row">
            {profileList.map((profileItem, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                key={`${profileItem.name} - ${index}`}
              >
                <div class="profileSec1-card">
                  <Link to="#">
                    <div class="profileSec1-img">
                      <img src={profileItem.image} alt="" />
                    </div>

                    <h6>{profileItem.name}</h6>
                    <p>{profileItem.role}</p>

                    <ul class="mn-social-icon">
                      <li>
                        <Link to={profileItem.facebook} className="profile-fb">
                          <FontAwesomeIcon icon={faFacebookSquare} />
                        </Link>
                      </li>

                      <li>
                        <Link to={profileItem.linkedin} className="profile-li">
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                      </li>

                      <li>
                        <Link to={profileItem.twitter} className="profile-tw">
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>
            ))}
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
