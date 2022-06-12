module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "mKInLp8eyn7HA7A8fow62wtt",
        version: "draft",
        localAssets: true,
      },
    },
  ],
}
