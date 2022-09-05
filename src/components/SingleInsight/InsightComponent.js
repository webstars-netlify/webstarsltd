import React from "react"

import MainInsight from "./MainInsight"

const InsightComponent = ({ blok }) => {
  // return typeof window === "undefined" || !window.document ? (
  //   ) : (
  //     <div></div>
  //     )

  return <MainInsight blok={blok} />
}

export default InsightComponent
