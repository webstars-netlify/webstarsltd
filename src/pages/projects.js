import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import MainComponent from "../components/Projects/MainComponent"

import { useStoryblok } from "../utils/storyblok"

const Home = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Projects" }) {
        full_slug
        name
        uuid
        id
        content
      }
    }
  `)

  story = useStoryblok(story)

  return (
    // Main Layout Component
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      {/* Body Component Starts here */}
      <MainComponent blok={story.content} />
      {/* Body Component Ends here */}
      <Footer />
    </Layout>
  )
}

export default Home
