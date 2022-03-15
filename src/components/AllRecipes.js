import React from "react"
import TagsList from "./TagsList"
import RecipesList from "./RecipesList"
import { graphql, useStaticQuery } from "gatsby"

const AllRecipes = () => {
  const {
    allContentfulRecipes: { nodes: recipes },
  } = useStaticQuery(query)

  return (
    <section className="recipes-container">
      <RecipesList recipes={recipes} />
      <TagsList recipes={recipes} />
    </section>
  )
}

const query = graphql`
  {
    allContentfulRecipes {
      nodes {
        title
        id
        prepTime
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  }
`

export default AllRecipes
