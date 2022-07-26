import React from "react"

import Banner from "./Banner"
import ProcessDescription from "./ProcessDescription"
import Clients from "./Clients"
import MarketingGuide from "../Home/MarketingGuide"
import Text from "./Text"

const Components = {
  teaser: Banner,
  "Process Description": ProcessDescription,
  "Clients Logo Wall": Clients,
  "Marketing Guide": MarketingGuide,
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
