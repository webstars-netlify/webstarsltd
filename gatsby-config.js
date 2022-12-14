module.exports = {
  siteMetadata: {
    siteUrl: `https://webstarsltd.netlify.app/`,
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
      resolve: "gatsby-plugin-sitemap",
      query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      serialize: ({ site, allSitePage }) => {
        return allSitePage.edges.map(({ node }) => {
          return {
            url: site.siteMetadata.siteUrl + node.path,
            changefreq: "daily",
            priority: 0.7,
          }
        })
      },
    },
    {
      resolve: "gatsby-source-storyblok",
      options: {
        accessToken: "mKInLp8eyn7HA7A8fow62wtt",
        version: "published",
        localAssets: true,
      },
    },
  ],
}
