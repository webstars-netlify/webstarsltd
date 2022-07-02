import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

const SingleInsight = () => {
  return (
    <Layout>
      <SEO title="Single Insights" />
      <Navbar />
      <Footer />
    </Layout>
  )
}

export default SingleInsight
