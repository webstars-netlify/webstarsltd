import React from "react"
import { graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import MainInsight from "../components/SingleInsight/MainInsight"

import { useStoryblok } from "../utils/storyblok"

const SingleInsight = ({ data }) => {
  let story = data.story

  story = useStoryblok(story)

  return (
    <Layout>
      <SEO title="Single Insights" />
      <Navbar />
      <MainInsight blok={story.content} />
      <Footer />
    </Layout>
  )
}

export default SingleInsight

export const query = graphql`
  query ($slug: String!) {
    story: storyblokEntry(slug: { eq: $slug }) {
      full_slug
      name
      uuid
      id
      content
    }
  }
`
