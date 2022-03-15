import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipes: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Wonderful Desserts, Easily Made</h2>
            <p>
              We specialise in amazing desserts that are easy to make. Please
              look around our site for a recipe that you want to make.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Our favourite desserts</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipes(filter: { featured: { eq: true } }) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
