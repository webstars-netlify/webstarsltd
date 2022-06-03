import React from "react"

import Globe from "../../assets/images/globe.png"

const GlobalAudience = () => {
  return (
    <div className="global-aud ptb-80">
      <div className="custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-content">
              <h6>Proskauer Rose LLC</h6>
              <h4>
                Delivering localised & personalised content to a global audience
              </h4>
              <div className="stats">
                <h4>
                  20,000 <span>Con sectetur elit</span>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="global-aud-image">
              <img src={Globe} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalAudience
