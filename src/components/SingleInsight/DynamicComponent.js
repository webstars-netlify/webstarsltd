import React from "react"

// Page level import statements
import Banner from "./Banner"
import BannerImage from "./BannerImage"
import InsightDescription from "./InsightDescription"
import MarketingGuide from "./Guide"
import Suggestion from "./Suggestion"
import Text from "./Text"

const Components = {
  teaser: Banner,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return <></>
}

export default DynamicComponent
