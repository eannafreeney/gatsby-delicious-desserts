import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import RecipesList from "./RecipesList";

const FeaturedRecipes = () => {
  const data = useStaticQuery(graphql`
    {
      featured: allContentfulRecipes(filter: { featured: { eq: true } }) {
        nodes {
          title
          id
          prepTime
          cookTime
          image {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  return (
    <section className="featured-recipes">
      <h5 className="featured-recipes--title">Our favourite desserts</h5>
      <RecipesList recipes={data.featured.nodes} />
    </section>
  );
};

export default FeaturedRecipes;
