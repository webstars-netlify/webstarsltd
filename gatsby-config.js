module.exports = {
  siteMetadata: {
    siteUrl: `https://webstarsltd.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        version: "published",
        localAssets: true,
      },
    },
  ],
}
