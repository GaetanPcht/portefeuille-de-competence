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
  allWpCompetences {
    edges {
      node {
        id
        name
        uri
        slug
        experiences {
          nodes {
            slug
            title
            id
          }
        }
      }
    }
  }
  allWpThemes {
    edges {
      node {
        id
        name
        uri
        slug
        experiences {
          nodes {
            slug
            title
            id
            competences {
              nodes {
                id
                slug
                name
              }
            }
          }
        }
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
  const SingleExperienceTemplate = path.resolve(`src/templates/single-experience/single-experience.jsx`)
  const SingleCompetenceTemplate = path.resolve(`src/templates/single-competence/single-competence.jsx`)
  const SingleThemeTemplate = path.resolve(`src/templates/single-theme/single-theme.jsx`)
  result.data.allWpExperience.edges.forEach(({ node }) => {
    const path = `experiences/${node.slug}`
    createPage({
      path,
      component: SingleExperienceTemplate,
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

  result.data.allWpCompetences.edges.forEach(({ node }) => {
    const path = `competences/${node.slug}`
    createPage({
      path,
      component: SingleCompetenceTemplate,
      context: {
        pagePath: path,
        title: node.name,
        id: node.id,
        slug: node.slug,
        experiences: node.experiences
      },
    })
  })

  result.data.allWpThemes.edges.forEach(({ node }) => {
    const path = `themes/${node.slug}`
    createPage({
      path,
      component: SingleThemeTemplate,
      context: {
        pagePath: path,
        title: node.name,
        id: node.id,
        slug: node.slug,
        experiences: node.experiences,
        competences: node.experiences.nodes.competences
      },
    })
  })
}