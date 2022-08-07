const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve("./src/templates/SingleProject.js")

  const res = await graphql(`
    query {
      allStoryblokEntry(filter: { field_component: { eq: "SingleProject" } }) {
        edges {
          node {
            field_component
            slug
          }
        }
      }
    }
  `)

  res?.data?.allStoryblokEntry.edges.forEach(edge => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge?.node?.slug}`,
      context: {
        slug: edge?.node?.slug,
      },
    })
  })
}
