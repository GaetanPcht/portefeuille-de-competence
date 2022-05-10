const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWpExperience {
        edges {
          node {
            id
            title
            content
            competences {
              nodes {
                id
                name
                slug
              }
            }
            themes {
              nodes {
                id
                name
                slug
              }
            }
            uri
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const blogPostTemplate = path.resolve(`src/templates/page-template.js`)
  result.data.allWpExperience.edges.forEach(({ node }) => {
    const path = node.slug
    createPage({
      path,
      component: blogPostTemplate,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        pagePath: path,
        title: node.title,
        id: node.id,
        content: node.content,
        slug: node.slug,
        themes: node.themes,
        competences: node.competences,
      },
    })
  })
}