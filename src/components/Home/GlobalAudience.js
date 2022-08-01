import React from "react"
import { storyblokEditable } from "@storyblok/js"

const GlobalAudience = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="global-aud ptb-80">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="section-content">
                <h6>{blok?.Subtitle}</h6>
                <h4>{blok?.Title}</h4>
                <div className="stats">
                  <h4>
                    {blok?.Numbers_Content[0].Numbers}{" "}
                    <span>{blok?.Numbers_Content[0].Numbers_Text}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="global-aud-image">
                <img src={blok?.Section_Image.filename} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalAudience
