module.exports = {
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify`,
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
