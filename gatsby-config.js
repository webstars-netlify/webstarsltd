module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        version: "draft",
        localAssets: true,
      },
    },
  ],
}
