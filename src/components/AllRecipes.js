import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Page from "./Page";
import RecipesList from "./RecipesList";
import TagsList from "./TagsList";

const AllRecipes = () => {
  const {
    allContentfulRecipes: { nodes: recipes }
  } = useStaticQuery(query);

  return (
    <Page customClass="all-recipes">
      <RecipesList recipes={recipes} />
      <TagsList recipes={recipes} />
    </Page>
  );
};

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
`;

export default AllRecipes;
