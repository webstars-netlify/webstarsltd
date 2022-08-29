import React from "react"
import { storyblokEditable } from "@storyblok/js"

const GlobalAudience = ({ component }) => {
  return (
    <div {...storyblokEditable(component)}>
      <div className="global-aud ptb-80">
        <div className="custom-container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <div className="section-content">
                <h6>{component?.Subtitle}</h6>
                <h4>{component?.Title}</h4>
                <div className="stats">
                  <h4>
                    {component?.Numbers_Content[0].Numbers}{" "}
                    <span>{component?.Numbers_Content[0].Numbers_Text}</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="global-aud-image">
                <img src={component?.Section_Image.filename} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalAudience
