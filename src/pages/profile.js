import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import ProfileMain from "../components/Profile/ProfileMain"

import { useStoryblok } from "../utils/storyblok"

const Profile = () => {
  let { story } = useStaticQuery(graphql`
    query {
      story: storyblokEntry(name: { eq: "Profile" }) {
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
      <SEO title="Projects" />
      <Navbar />
      <ProfileMain blok={story.content} />
      <Footer />
    </Layout>
  )
}

export default Profile
