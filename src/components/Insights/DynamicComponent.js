import React, { useState } from "react"

import Categories from "./Categories"
import InsightList from "./InsightList"

const Components = {
  categories: Categories,
  // show_insights_list: InsightList,
}

const DynamicComponent = ({ blok, showMore, setShowMore, updateViewMore }) => {
  const [categoryTitle, setCategoryTitle] = useState()

  const changeCategory = title => {
    if (title === categoryTitle) {
      setCategoryTitle("")
      localStorage.removeItem("title")
      updateViewMore()
    } else {
      setCategoryTitle(title)
    }
  }

  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component]

    return (
      <Component
        blok={blok}
        updateViewMore={updateViewMore}
        key={blok._uid}
        categoryTitle={categoryTitle}
        setCategoryTitle={changeCategory}
        showMore={showMore}
        setShowMore={setShowMore}
      />
    )
  }

  return <></>
}

export default DynamicComponent
