const path = require("path")
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get tags from GraphQL

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipes {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  // Iterate over each tag (in each recipe) and set up a template page for each one

  result.data.allContentfulRecipes.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      const tagSlug = slugify(tag, { lower: true })
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
