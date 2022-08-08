import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GlobalAudience from "./GlobalAudience"
import EnvelopeSection from "./EnvelopeSection"

const ProjectLists = () => {
  let { story } = useStaticQuery(graphql`
    query {
      allStoryblokEntry(filter: { field_component: { eq: "SingleProject" } }) {
        edges {
          node {
            field_component
            slug
            content
          }
        }
      }
    }
  `)

  return (
    <div>
      <div>ProjectLists</div>
    </div>
  )
}

export default ProjectLists
