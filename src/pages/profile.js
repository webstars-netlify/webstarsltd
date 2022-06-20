import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Project Page components import statements
import ProfileBanner from "../components/Profile/Banner"
import ProfilesList from "../components/Profile/ProfilesList"
import Text from "../components/Profile/Text"

const Profile = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Navbar />
      <ProfileBanner
        title="We’d love to hear from you"
        subTitle="Meet the stars of the show"
      />
      <ProfilesList />
      <Text />
      <Footer />
    </Layout>
  )
}

export default Profile
