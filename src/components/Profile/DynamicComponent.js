import React from "react"

import ProfileBanner from "./Banner"
import ProfilesList from "./ProfilesList"
import Text from "./Text"

const Components = {
  teaser: ProfileBanner,
  "User Profile Grid": ProfilesList,
  "Bottom Headline Text": Text,
}

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]
    return <Component blok={blok} key={blok._uid} />
  }

  return (
    <div>
      <div>DynamicComponent</div>
    </div>
  )
}

export default DynamicComponent
