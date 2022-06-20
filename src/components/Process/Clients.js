import React from "react"
import { Link } from "gatsby"

import LogoOne from "../../assets/images/client/logo1.png"
import LogoTwo from "../../assets/images/client/logo2.png"
import LogoThree from "../../assets/images/client/logo3.png"
import LogoFour from "../../assets/images/client/logo4.png"
import LogoFive from "../../assets/images/client/logo5.png"
import LogoSix from "../../assets/images/client/logo6.png"

const Clients = () => {
  return (
    <section class="client-logoSection">
      <div class="container">
        <div class="clientLogoSec-hd">
          <h6>
            Logo wall here as a way to show broad client base without the need
            to necessarily show the work
          </h6>
        </div>

        <div class="clientLogoSec-main">
          <ul>
            <li>
              <Link to="/process">
                <img src={LogoOne} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoTwo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoThree} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFour} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFive} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoSix} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoOne} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoTwo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoThree} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFour} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFive} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoSix} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoOne} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoTwo} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoThree} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFour} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoFive} alt="" />
              </Link>
            </li>
            <li>
              <Link to="/process">
                <img src={LogoSix} alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Clients
