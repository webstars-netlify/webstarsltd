import React from "react"
import { storyblokEditable } from "@storyblok/js"

const BannerImage = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <section class="singleInsightSection1">
        <div class="custom-container">
          <div
            class="singleInsightSec1-main"
            style={{ backgroundColor: blok.background_color_hex_code }}
          >
            <img src={blok.banner_img.filename} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default BannerImage
