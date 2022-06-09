const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
      allWpThemes {
        edges {
          node {
            id
            slug
            title
            acf_themes {
              competencesAssociees {
                fieldGroupName
                competenceAssociee {
                  ... on WpCompetence {
                    id
                    slug
                    title
                  }
                }
              }
              paragraphe
              experiencesAssociees {
                experienceAssociee {
                  ... on WpExperience {
                    id
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      }
      allWpCompetence {
        edges {
          node {
            acf_competences {
            dimensionReferentielEuropeen {
                dimension1
                dimension2
                dimension3
              }
              paragraphe
              themeAssocies {
                themeAssocie {
                  ... on WpThemes {
                    id
                    slug
                    title
                  }
                }
              }
              experiencesAssociees {
                experienceAssocie {
                  ... on WpExperience {
                    id
                    slug
                    title
                  }
                }
              }
            }
            slug
            title
            id
          }
        }
      }
      allWpExperience {
        edges {
          node {
            acf_experience {
              competencesAssociees {
                competenceAssociee {
                  ... on WpCompetence {
                    id
                    slug
                    title
                  }
                }
              }
              paragraphe
              themeAssocies {
                themeAssocie {
                  ... on WpThemes {
                    id
                    slug
                    title
                  }
                }
              }
            }
            id
            slug
            title
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
    console.log(result.data)
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
                acf_experience: node.acf_experience,
            },
        })
    })

    result.data.allWpCompetence.edges.forEach(({ node }) => {
        const path = `competences/${node.slug}`
        createPage({
            path,
            component: SingleCompetenceTemplate,
            context: {
                pagePath: path,
                title: node.title,
                id: node.id,
                slug: node.slug,
                acf_competences: node.acf_competences,
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
                title: node.title,
                id: node.id,
                slug: node.slug,
                acf_themes: node.acf_themes,
            },
        })
    })
}