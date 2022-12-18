import React from "react"
import { storyblokEditable } from "@storyblok/js"

import { useStoryblok } from "../../utils/storyblok"

// Page level import statements
import DynamicListComponent from "./DynamicListComponent"

const ListComponent = ({ story, index, categoryTitle, setShowMore }) => {
  let originalStory
  originalStory = useStoryblok(story)

  const filteredStory = originalStory.content.body.filter(
    childBlok =>
      childBlok.component === "insight_display" &&
      childBlok.insights[0].catgeory_name === categoryTitle
  )

  // setShowMore(filteredStory)

  originalStory.content.body.forEach(childBlok => {
    if (childBlok.component === "insight_display") {
      console.log(childBlok.insights[0].catgeory_name, categoryTitle)
    }
  })

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
