import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Home Page components import statements
import MainHome from "../components/Home/MainHome"

import { useStoryblok } from "../utils/storyblok"

const Home = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Home" }) {
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
    <Layout>
      <SEO title="Home" />
      <Navbar />
      <MainHome blok={story.content} />
      <Footer />
    </Layout>
  )
}

export default Home
