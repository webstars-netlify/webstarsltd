import React from "react"
import { storyblokEditable } from "@storyblok/js"

const BannerImage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="single-projectSec1">
        <div class="custom-container">
          <div class="singl-project-sec1-img">
            <img src={blok.banner_img.filename} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerImage
