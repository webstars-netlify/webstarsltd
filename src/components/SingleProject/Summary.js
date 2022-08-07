import React from "react"
import { storyblokEditable } from "@storyblok/js"

const Summary = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="single-projectSec2">
        <div class="custom-container">
          <div class="row">
            <div class="col-md-6 pr-5">
              <div class="singl-project-sec2-cont">
                <h6>{blok.summary_title}</h6>
                <p>{blok.summary_description}</p>
              </div>
            </div>
            <div class="col-md-6 pl-5">
              <div class="singl-project-sec2-cont">
                <h6>{blok.brief_title}</h6>
                <p>{blok.brief_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Summary
