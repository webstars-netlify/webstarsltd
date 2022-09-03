import React from "react"

// Page level import statements
import Banner from "./Banner"
import BannerImage from "./BannerImage"
import InsightDescription from "./InsightDescription"
import MarketingGuide from "./Guide"
import Text from "./Text"

const Components = {
  teaser_text: Banner,
  insight_banner_img: BannerImage,
  description_section: InsightDescription,
  guide: MarketingGuide,
  bottom_text_copy: Text,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
