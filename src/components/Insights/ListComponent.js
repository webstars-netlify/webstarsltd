import React from "react"
import { storyblokEditable } from "@storyblok/js"

import { useStoryblok } from "../../utils/storyblok"

// Page level import statements
import DynamicListComponent from "./DynamicListComponent"

const ListComponent = ({ story, index, categoryTitle, setShowMore }) => {
  let originalStory
  originalStory = useStoryblok(story)

  if (typeof window !== "undefined") {
    const element = document.getElementById("undefined-content").firstChild
    console.log("------")
    console.log(element)
    console.log(
      document.getElementById("undefined-content").firstChild.nodeName
    )
    console.log(
      document.getElementById("undefined-content").firstChild.firstChild
    )
  }

  const filteredStory = originalStory.content.body.filter(
    childBlok =>
      childBlok.component === "insight_display" &&
      childBlok.insights[0].catgeory_name.length &&
      childBlok.insights[0].catgeory_name.includes(categoryTitle)
  )

  const content =
    originalStory.content.body &&
    filteredStory.map(childBlok => (
      <DynamicListComponent
        blok={childBlok}
        key={childBlok._uid}
        slug={story.slug}
        index={index}
        categoryTitle={categoryTitle}
      />
    ))

  return <div {...storyblokEditable(originalStory.content)}>{content}</div>
}

export default ListComponent
