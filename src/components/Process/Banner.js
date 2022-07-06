import React from "react"

const Banner = ({ title, subTitle }) => {
  return (
    <div className="home-banner-process">
      <h1>
        <span className="d-block">{title}</span>
        <span className="theme-color">{subTitle}</span>
      </h1>
    </div>
  )
}

export default Banner
