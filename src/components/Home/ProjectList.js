import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ListComponent from "./ListComponent"

const ProjectLists = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: allStoryblokEntry(
        filter: { field_component: { eq: "SingleProject" } }
      ) {
        edges {
          node {
            field_component
            slug
            uuid
            id
            name
            content
          }
        }
      }
    }
  `)

  const filteredStory = story.edges.filter((story, index) => index <= 1)

  return (
    <>
      {filteredStory.map((originalStory, index) => (
        <ListComponent story={originalStory.node} key={index} />
      ))}
    </>
  )
}

export default ProjectLists
