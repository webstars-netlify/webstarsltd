import React from "react"

// App level import statements
import Layout from "../components/_App/Layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Page level import statements
import Categories from "../components/Insights/Categories"
import InsightLists from "../components/Insights/InsightLists"

const Insights = () => {
  return (
    <Layout>
      <SEO title="Insights" />
      <Navbar />
      <Categories />
      <InsightLists />
      <Footer />
    </Layout>
  )
}

export default Insights
